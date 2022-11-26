import coap from 'coap'
import configs from '../configs.json' assert { type: "json" }
import agro from '../design-language/agro-ld/response-payload.json' assert { type: "json" }
import dtdl from '../design-language/dtdl/response-payload.json' assert { type: "json" }

const enviar_msg = (dados) => {
    let cliente = coap.request(
        {
            host: 'localhost',
            port: 5683,
            pathname: "/presence",
            method: 'post',
            // confirmable: false
        })
    cliente.write(dados)
    cliente.end()
}

if (configs.type == 'time') {
    console.log('time')
    const initTime = Date.now()
    console.log("1° Msg: ", new Date())
    while (Date.now() - initTime < configs.time) {
        // await new Promise(function (res) {
        //     // setTimeout(
        //     res(
        enviar_msg(JSON.stringify(agro))
        //         )
        //     // , 100)
        // })
    }
    console.log("Última Msg: ", new Date())
    enviar_msg('end')
}
else {
    console.log('qtdMsg')
    for (let i = 1; i <= configs.qtdMsg; i++) {
        if (i == 1) console.log("1° Msg: ", new Date())
        if (i != configs.qtdMsg) enviar_msg(JSON.stringify(agro))
        if (i == configs.qtdMsg) {
            console.log("Última Msg: ", new Date())
            enviar_msg('end')
        }
    }
}