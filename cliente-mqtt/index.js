import mqtt from 'mqtt'
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
import configs from '../configs.json' assert { type: "json" }
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

if (configs.type == 'time')
    cliente.on('connect', () => {
        const initTime = Date.now()
        console.log("1° Msg: ", new Date())
        while (Date.now() - initTime < configs.time) {
            // await new Promise(function (res) {
            //     // setTimeout(
            //     res(
            cliente.publish('presence', JSON.stringify(dtdl))
            //         )
            //     // , 100)
            // })
        }
        console.log("Última Msg: ", new Date())
        cliente.publish('presence', 'end')
        cliente.end()
    })
else
    cliente.on('connect', () => {
        for (let i = 1; i <= configs.qtdMsg; i++) {
            if (i == 1) console.log("1° Msg: ", new Date())
            if (i != configs.qtdMsg) cliente.publish('presence', JSON.stringify(dtdl))
            if (i == configs.qtdMsg) {
                console.log("Última Msg: ", new Date())
                cliente.publish('presence', 'end')
                cliente.end()
            }
        }
    })