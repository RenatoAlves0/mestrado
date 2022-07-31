const process = require('process')
const coap = require('coap')
const server = coap.createServer()
let totalMsg = 0
let firstMsg = null
let lasttMsg = null
let cpu
let mem
let alreadyReceivedMsg = false

const ByteToMB = (x) => (x / (1024 ** 2)).toFixed(2) + ' MB'
const MicroSecondsToSec = (x) => (x / 1000000).toFixed(2) + ' S'

server.on('request', (req, res) => {
    // JSON.parse(String(req.payload))
    // console.log(req.payload.toString())
    // res.end('Hello ' + req.url.split('/')[1] + '\n')

    if (!alreadyReceivedMsg) {
        firstMsg = new Date()
        cpu = process.cpuUsage() //Colocar par onde recebe a 1° msg
        mem = process.memoryUsage()
        alreadyReceivedMsg = true
    }

    lasttMsg = new Date()
    totalMsg++

    if (req.payload.toString() == 'end') {
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
        cliente.end()
    }
})

// the default CoAP port is 5683
server.listen(() => {
    // const req = coap.request('coap://localhost/Matteo')

    // req.on('response', (res) => {
    //     res.pipe(process.stdout)
    //     res.on('end', () => {
    //         process.exit(0)
    //     })
    // })

    //   req.end()
})