const process = require('process')
const mqtt = require('mqtt')
const client = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
let totalMsg = 0
let firstMsg = null
let lasttMsg = null
let cpu
let mem
let alreadyReceivedMsg = false

const ByteToMB = (x) => (x / (1024 ** 2)).toFixed(2) + ' MB'
const MicroSecondsToSec = (x) => (x / 1000000).toFixed(2) + ' S'

client.on('connect', () => {
    client.subscribe('presence')
})

client.on('message', function (topic, message) {
    if (!alreadyReceivedMsg) {
        firstMsg = new Date()
        cpu = process.cpuUsage() //Colocar par onde recebe a 1° msg
        mem = process.memoryUsage()
        alreadyReceivedMsg = true
    }

    lasttMsg = new Date()
    totalMsg++

    if (message.toString() == 'end') {
        cpu = process.cpuUsage(cpu)
        mem = process.memoryUsage(mem)
        console.log("CPU: ", MicroSecondsToSec(cpu.user))
        console.log("MEM RSS: ", ByteToMB(mem.rss))
        console.log("MEM ArrayBuf: ", ByteToMB(mem.arrayBuffers))
        console.log("MEM External: ", ByteToMB(mem.external))
        console.log("MEM HeapTotal: ", ByteToMB(mem.heapTotal))
        console.log("MEM HeapUsed: ", ByteToMB(mem.heapUsed))
        console.log("Msgs Recebidas: ", totalMsg)
        console.log("1° Msg: ", firstMsg)
        console.log("Última Msg: ", lasttMsg)
        client.end()
    }
})