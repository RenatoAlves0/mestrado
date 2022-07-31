const coap = require('coap')

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

for (let i = 1; i <= 1000; i++) {
    if (i == 1) console.log("1° Msg: ", new Date())
    if (i == 1000) console.log("Última Msg: ", new Date())
    if (i != 1000)
        enviar_msg('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
    if (i == 1000)
        enviar_msg('end')
}