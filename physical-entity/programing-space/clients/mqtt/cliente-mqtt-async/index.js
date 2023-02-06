import mqtt from 'async-mqtt'
const cliente = mqtt.connect({ host: '192.168.0.8', port: 1883, keepalive: 18000 })
import configs from '../configs.json' assert { type: "json" }
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const ld = { agro, dtdl }

cliente.on('connect', async () => {
    let total = 0
    const firstMsg = Date.now()
    console.log("1° Msg: ", new Date())
    if (configs.total_msg > 0)
        while (total < configs.total_msg) {
            await cliente.publish('presence', JSON.stringify({ telemetry: ld[configs.type], firstMsg: firstMsg }))
            total++
        }
    else
        while (Date.now() - firstMsg < configs.time) {
            await delay(configs.time_between_msg)
            await cliente.publish('presence', JSON.stringify({ telemetry: ld[configs.type], firstMsg: firstMsg }))
            total++
        }
    console.log("Última Msg: ", new Date())
    console.log(total)
    await cliente.end()
})