import process from 'process'
import mqtt from 'mqtt'
import { check } from '../services/index.js'
import configs from '../configs.json' assert { type: "json" }
const cliente = mqtt.connect({ host: 'localhost', port: 1883, keepalive: 18000 })
let totalMsg = 0
let firstMsg = null
let cpu
let mem
let alreadyReceivedMsg = false

const ByteToMB = (x) => (x / (1024 ** 2)).toFixed(2)
const MicroSecondsToMiliSec = (x) => (x / 1000).toFixed(2)

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

    check(message, configs.type,
        MicroSecondsToMiliSec(process.cpuUsage(cpu).user),
        ByteToMB(process.memoryUsage(mem).rss), totalMsg, firstMsg)
})