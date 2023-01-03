// const fs = require('fs')

const ideal = {
    t: 20,
    u: 75,
    us: 70,
    c: 10,
    l: 70
}

const alertas = []

export const check = (props, type, cpu, mem, totalMsg, firstMsg) => {
    const value = JSON.parse(props.toString())

    if (type == 'agro') {
        value.telemetry.forEach(el => {
            el.l.t != ideal.t && alertas.push('Temperatura está fora da faixa ideal')
            el.l.u != ideal.u && alertas.push('Umidade está fora da faixa ideal')
            el.l.us != ideal.us && alertas.push('Umidade do solo está fora da faixa ideal')
            el.l.c != ideal.c && alertas.push('Nível de Chuva está fora da faixa ideal')
            el.l.l != ideal.l && alertas.push('Nível de Luz está fora da faixa ideal')
        })
        // value.telemetry[0].l.t != ideal.t && alertas.push('Temperatura está fora da faixa ideal')
        // value.telemetry[0].l.u != ideal.u && alertas.push('Umidade está fora da faixa ideal')
        // value.telemetry[0].l.us != ideal.us && alertas.push('Umidade do solo está fora da faixa ideal')
        // value.telemetry[0].l.c != ideal.c && alertas.push('Nível de Chuva está fora da faixa ideal')
        // value.telemetry[0].l.l != ideal.l && alertas.push('Nível de Luz está fora da faixa ideal')
    } else {
        value.telemetry.forEach(el => {
            el.ler.temperatura != ideal.t && alertas.push('Temperatura está fora da faixa ideal')
            el.ler.umidade != ideal.u && alertas.push('Umidade está fora da faixa ideal')
            el.ler.umidade_do_solo != ideal.us && alertas.push('Umidade do solo está fora da faixa ideal')
            el.ler.chuva != ideal.c && alertas.push('Nível de Chuva está fora da faixa ideal')
            el.ler.luz != ideal.l && alertas.push('Nível de Luz está fora da faixa ideal')
        })
        // value.telemetry[0].ler.temperatura != ideal.t && alertas.push('Temperatura está fora da faixa ideal')
        // value.telemetry[0].ler.umidade != ideal.u && alertas.push('Umidade está fora da faixa ideal')
        // value.telemetry[0].ler.umidade_do_solo != ideal.us && alertas.push('Umidade do solo está fora da faixa ideal')
        // value.telemetry[0].ler.chuva != ideal.c && alertas.push('Nível de Chuva está fora da faixa ideal')
        // value.telemetry[0].ler.luz != ideal.l && alertas.push('Nível de Luz está fora da faixa ideal')
    }

    // console.log("CPU: ", cpu)
    // console.log("MEM RSS: ", mem)
    // console.log("Delay: ", new Date() - value.firstMsg)
    // console.log("Msgs Recebidas: ", totalMsg)

    console.log(cpu, mem, new Date() - value.firstMsg, totalMsg)
    // const csv = `${cpu},${mem},${new Date() - value.firstMsg},${totalMsg}\n`
    // try {
    //   fs.appendFileSync(`./${type}.csv`, csv)
    // } catch (err) {
    //   console.error(err)
    // }
}