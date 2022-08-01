const coap = require('coap')
const qtdMsg = 1000000

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
    if (i != qtdMsg)
        enviar_msg('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
    if (i == qtdMsg)
        enviar_msg('end')
}