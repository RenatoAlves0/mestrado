import coap from 'coap'
import configs from '../../../../../configs.json' assert { type: "json" }
import agro from '../../../../../virtual-entity/design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../../../../../virtual-entity/design-language/dtdl/response-payload.json' assert { type: "json" }

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const ld = { agro, dtdl }

const enviar_msg = (dados) => {
    let cliente = coap.request(
        {
            host: '192.168.0.8',
            port: 5683,
            pathname: "/presence",
            method: 'post',
        })
    cliente.write(dados)
    cliente.end()
}

let total = 0
const firstMsg = Date.now()
console.log("1° Msg: ", new Date())
if (configs.total_msg > 0)
    while (total < configs.total_msg) {
        enviar_msg(JSON.stringify({ telemetry: ld[configs.type], firstMsg: firstMsg }))
        total++
    }
else
    while (Date.now() - firstMsg < configs.time) {
        await delay(configs.time_between_msg)
        enviar_msg(JSON.stringify({ telemetry: ld[configs.type], firstMsg: firstMsg }))
        total++
    }
console.log("Última Msg: ", new Date())
console.log(total)