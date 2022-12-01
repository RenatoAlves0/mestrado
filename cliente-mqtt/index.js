import mqtt from 'mqtt'
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
import configs from '../configs.json' assert { type: "json" }
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

const ld = { agro, dtdl }

cliente.on('connect', () => {
    const initTime = Date.now()
    console.log("1° Msg: ", new Date())
    while (Date.now() - initTime < configs.time) {
        cliente.publish('presence', JSON.stringify(ld[configs.type]))
    }
    console.log("Última Msg: ", new Date())
    cliente.publish('presence', 'end')
    cliente.end()
})