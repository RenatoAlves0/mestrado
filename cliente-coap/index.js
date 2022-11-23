import coap from 'coap'
const qtdMsg = 1000000
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

enviar_msg = (dados) => {
    let cliente = coap.request(
        {
            host: 'localhost',
            port: 5683,
            pathname: "/presence",
            method: 'post',
            confirmable: 'false'
        })
    cliente.write(dados)
    cliente.end()
}

console.log(qtdMsg)

for (let i = 1; i <= qtdMsg; i++) {
    if (i == 1) console.log("1° Msg: ", new Date())
    if (i == qtdMsg) console.log("Última Msg: ", new Date())
    if (i != qtdMsg) enviar_msg(JSON.stringify(dtdl))
    if (i == qtdMsg) enviar_msg('end')
}