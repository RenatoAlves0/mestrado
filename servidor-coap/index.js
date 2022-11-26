import process from 'process'
import coap from 'coap'
import { check } from '../services/index.js'
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

    // // console.log(totalMsg);

    // // if (req.payload.toString() == 'end') {
    // //     // if (totalMsg == qtdMsg) {
    // //     // cpu = process.cpuUsage(cpu)
    // //     // mem = process.memoryUsage(mem)
    // console.log("CPU: ", MicroSecondsToSec(process.cpuUsage(cpu).user))
    // console.log("MEM RSS: ", ByteToMB(process.memoryUsage(mem).rss))
    // console.log("Msgs Recebidas: ", totalMsg)
    // console.log("Delay: ", new Date() - firstMsg + ' ms')
    // //     // cliente.end()
    // // }
    check(req.payload, 'agro',
        MicroSecondsToSec(process.cpuUsage(cpu).user),
        ByteToMB(process.memoryUsage(mem).rss), totalMsg, firstMsg)
})

server.listen()