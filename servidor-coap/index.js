import process from 'process'
import coap from 'coap'
import { check } from '../services/index.js'
import configs from '../configs.json' assert { type: "json" }

const server = coap.createServer()
let totalMsg = 0
let firstMsg = null
let cpu
let mem
let alreadyReceivedMsg = false

const ByteToMB = (x) => (x / (1024 ** 2)).toFixed(2) + ' MB'
const MicroSecondsToSec = (x) => (x / 1000000).toFixed(2) + ' S'

server.on('request', (req, res) => {
    if (!alreadyReceivedMsg) {
        firstMsg = new Date()
        cpu = process.cpuUsage()
        mem = process.memoryUsage()
        alreadyReceivedMsg = true
    }

    totalMsg++

    check(req.payload, configs.type,
        MicroSecondsToSec(process.cpuUsage(cpu).user),
        ByteToMB(process.memoryUsage(mem).rss), totalMsg, firstMsg)
})

server.listen()