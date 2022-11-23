import mqtt from 'mqtt'
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
const qtdMsg = 1000000
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

cliente.on('connect', async () => {
    for (let i = 1; i <= qtdMsg; i++) {
        if (i == 1) console.log("1° Msg: ", new Date())
        if (i == qtdMsg) console.log("Última Msg: ", new Date())
        if (i != qtdMsg) cliente.publish('presence', JSON.stringify(dtdl))
        if (i == qtdMsg) {
            cliente.publish('presence', 'end')
            cliente.end()
        }
    }
})