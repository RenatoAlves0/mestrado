const ideal = {
    t: 20,
    u: 75,
    us: 70,
    c: 10,
    l: 70
}

export const check = (props, type, cpu, mem, totalMsg, firstMsg) => {
    const value = JSON.parse(props.toString())

    if (type == 'agro') {
        console.log(value.telemetry[0].l.t != ideal.t && 'Temperatura está fora da faixa ideal')
        console.log(value.telemetry[0].l.u != ideal.u && 'Umidade está fora da faixa ideal')
        console.log(value.telemetry[0].l.us != ideal.us && 'Umidade do solo está fora da faixa ideal')
        console.log(value.telemetry[0].l.c != ideal.c && 'Nível de Chuva está fora da faixa ideal')
        console.log(value.telemetry[0].l.l != ideal.l && 'Nível de Luz está fora da faixa ideal')
    } else {
        console.log(value.telemetry[0].ler.temperatura != ideal.t && 'Temperatura está fora da faixa ideal')
        console.log(value.telemetry[0].ler.umidade != ideal.u && 'Umidade está fora da faixa ideal')
        console.log(value.telemetry[0].ler.umidade_do_solo != ideal.us && 'Umidade do solo está fora da faixa ideal')
        console.log(value.telemetry[0].ler.chuva != ideal.c && 'Nível de Chuva está fora da faixa ideal')
        console.log(value.telemetry[0].ler.luz != ideal.l && 'Nível de Luz está fora da faixa ideal')
    }

    console.log("CPU: ", cpu)
    console.log("MEM RSS: ", mem)
    console.log("Delay: ", new Date() - value.firstMsg)
    console.log("Msgs Recebidas: ", totalMsg)
}