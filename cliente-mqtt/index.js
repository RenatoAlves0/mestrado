const mqtt = require('mqtt')
const client = mqtt.connect({ host: '172.22.122.235', port: 1883, keepalive: 18000 })

client.on('connect', function () {
    for (let i = 1; i <= 1000; i++) {
        if (i == 1) console.log("1° Msg: ", new Date())
        if (i == 1000) console.log("Última Msg: ", new Date())
        if (i != 1000) client.publish('presence', 'Hello mqtt')
        if (i == 1000) {
            client.publish('presence', 'end')
            client.end()
        }
    }
})