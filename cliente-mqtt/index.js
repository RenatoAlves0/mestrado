const mqtt = require('mqtt')
const cliente = mqtt.connect({ host: '172.22.122.235', port: 1883, keepalive: 18000 })

cliente.on('connect', function () {
    for (let i = 1; i <= 1000; i++) {
        if (i == 1) console.log("1° Msg: ", new Date())
        if (i == 1000) console.log("Última Msg: ", new Date())
        if (i != 1000) cliente.publish('presence', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')
        if (i == 1000) {
            cliente.publish('presence', 'end')
            cliente.end()
        }
    }
})