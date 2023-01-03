import coap from 'coap'
import configs from '../configs.json' assert { type: "json" }
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

const ld = { agro, dtdl }

const enviar_msg = (dados) => {
    let cliente = coap.request(
        {
            host: 'localhost',
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
while (Date.now() - firstMsg < configs.time) {
    enviar_msg(JSON.stringify({ telemetry: ld[configs.type], firstMsg: firstMsg }))
    total++
}
console.log("Última Msg: ", new Date())
console.log(total)
enviar_msg('end')