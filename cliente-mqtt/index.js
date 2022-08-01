const mqtt = require('mqtt')
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
const qtdMsg = 1000000

cliente.on('connect', function () {
    for (let i = 1; i <= qtdMsg; i++) {
        if (i == 1) console.log("1° Msg: ", new Date())
        if (i == qtdMsg) console.log("Última Msg: ", new Date())
        if (i != qtdMsg) cliente.publish('presence', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
        if (i == qtdMsg) {
            cliente.publish('presence', 'end')
            cliente.end()
        }
    }
})