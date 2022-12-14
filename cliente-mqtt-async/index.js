import mqtt from 'async-mqtt'
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
import configs from '../configs.json' assert { type: "json" }
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

const ld = { agro, dtdl }

cliente.on('connect', async () => {
    let total = 0
    const firstMsg = Date.now()
    console.log("1° Msg: ", new Date())
    while (Date.now() - firstMsg < configs.time) {
        await cliente.publish('presence', JSON.stringify({ telemetry: ld[configs.type], firstMsg: firstMsg }))
        total++
    }
    console.log("Última Msg: ", new Date())
    console.log(total)
    await cliente.end()
})