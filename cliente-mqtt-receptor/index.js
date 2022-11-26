import process from 'process'
import mqtt from 'mqtt'
import { check } from '../services/index.js'
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
let totalMsg = 0
let firstMsg = null
let cpu
let mem
let alreadyReceivedMsg = false

const ByteToMB = (x) => (x / (1024 ** 2)).toFixed(2) + ' MB'
const MicroSecondsToSec = (x) => (x / 1000000).toFixed(2) + ' S'

cliente.on('connect', () => {
    cliente.subscribe('presence')
})

cliente.on('message', function (topic, message) {
    if (!alreadyReceivedMsg) {
        firstMsg = new Date()
        cpu = process.cpuUsage()
        mem = process.memoryUsage()
        alreadyReceivedMsg = true
    }

    totalMsg++

    // console.log(message.toString())
    // console.log("CPU: ", MicroSecondsToSec(process.cpuUsage(cpu).user))
    // console.log("MEM RSS: ", ByteToMB(process.memoryUsage(mem).rss))
    // console.log("Msgs Recebidas: ", totalMsg)
    // // console.log("1° Msg: ", firstMsg)
    // // console.log("Última Msg: ", new Date())
    // console.log("Delay: ", new Date() - firstMsg + ' ms')

    check(message, 'agro',
        MicroSecondsToSec(process.cpuUsage(cpu).user),
        ByteToMB(process.memoryUsage(mem).rss), totalMsg, firstMsg)
    if (message.toString() == 'end') {
        cliente.end()
    }
})