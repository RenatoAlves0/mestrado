// const process = require('process')
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const port = 1883
// let totalMsg = 0
// let firstMsg = null
// let lasttMsg = null
// let cpu
// let mem

//heapTotal e heapUsed referem-se ao uso de memória do V8.
// external refere-se ao uso de memória de objetos C++ vinculados a objetos JavaScript gerenciados pela V8.
// rss, Resident Set Size, é a quantidade de espaço ocupada no dispositivo de memória principal (que é um subconjunto da memória total alocada) para o processo, incluindo todos os objetos e código C++ e JavaScript.
// arrayBuffers refere-se à memória alocada para ArrayBuffers e SharedArrayBuffers, incluindo todos os Buffers Node.js. Isso também está incluído no valor externo. Quando o Node.js é usado como uma biblioteca incorporada, esse valor pode ser 0 porque as alocações para ArrayBuffers podem não ser rastreadas nesse caso

// const result = (cpu, mem, resource, totalMsg, firstMsg, lasttMsg) => {
//     console.log(''cpu.user)
// }

// const ByteToMB = (x) => (x / (1024 ** 2)).toFixed(2) + ' MB'
// const MicroSecondsToSec = (x) => (x / 1000000).toFixed(2) + ' S'

server.listen(port, function () {
    // console.log(`MQTT Broker running on port: ${port}`);
});

// aedes.on('client', function (client) {
    // cpu = process.cpuUsage() //Colocar par onde recebe a 1° msg
    // mem = process.memoryUsage()
// })

// aedes.on('clientDisconnect', function (client) {
    // cpu = process.cpuUsage(cpu)
    // mem = process.memoryUsage(mem)
    // console.log("CPU: ", MicroSecondsToSec(cpu.user))
    // console.log("MEM RSS: ", ByteToMB(mem.rss))
    // console.log("MEM ArrayBuf: ", ByteToMB(mem.arrayBuffers))
    // console.log("MEM External: ", ByteToMB(mem.external))
    // console.log("MEM HeapTotal: ", ByteToMB(mem.heapTotal))
    // console.log("MEM HeapUsed: ", ByteToMB(mem.heapUsed))
    // console.log("Msgs Recebidas: ", totalMsg)
    // console.log("1° Msg: ", firstMsg)
    // console.log("Última Msg: ", lasttMsg)
// })

// aedes.on('subscribe', function (subscriptions, client) {
//     console.log(`[TOPIC_SUBSCRIBED]: ${subscriptions.map(s => s.topic).join(',')}`)
// })

// aedes.on('unsubscribe', function (subscriptions, client) {
//     console.log(`[TOPIC_UNSUBSCRIBED]: ${subscriptions.join(',')}`)
// })

// aedes.on('publish', async function (packet, client) {
    // if (client) {
        // if (firstMsg == null) firstMsg = new Date()
        // lasttMsg = new Date()
        // totalMsg++
        // console.log(`[MESSAGE_PUBLISHED]: ${packet.payload.toString()}`)
    // }
// })