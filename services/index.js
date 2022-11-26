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
        console.log(value.l.t != ideal.t && 'Temperatura está fora da faixa ideal')
        console.log(value.l.u != ideal.u && 'Umidade está fora da faixa ideal')
        console.log(value.l.us != ideal.us && 'Umidade do solo está fora da faixa ideal')
        console.log(value.l.c != ideal.c && 'Nível de Chuva está fora da faixa ideal')
        console.log(value.l.l != ideal.l && 'Nível de Luz está fora da faixa ideal')
    } else {
        console.log(value.l.temperatura != ideal.t && 'Temperatura está fora da faixa ideal')
        console.log(value.l.umidade != ideal.u && 'Umidade está fora da faixa ideal')
        console.log(value.l.umidade_do_solo != ideal.us && 'Umidade do solo está fora da faixa ideal')
        console.log(value.l.chuva != ideal.c && 'Nível de Chuva está fora da faixa ideal')
        console.log(value.l.luz != ideal.l && 'Nível de Luz está fora da faixa ideal')
    }

    console.log("CPU: ", cpu)
    console.log("MEM RSS: ", mem)
    console.log("Msgs Recebidas: ", totalMsg)
    console.log("Delay: ", new Date() - firstMsg + ' ms')
}