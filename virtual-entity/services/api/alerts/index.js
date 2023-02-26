import fs from "fs";
import process from "process";
import agrold from "../../../design-language/plante_box_study_case/agrold/response_telemetry/ler.json" assert { type: "json" };
import dtdl from "../../../design-language/plante_box_study_case/dtdl/response_telemetry/ler.json" assert { type: "json" };

const ideal = {
  t: 20,
  u: 75,
  us: 70,
  c: 10,
  l: 70,
};

const alertas = [];

export const check = (props, type, cpu, mem, totalMsg, firstMsg) => {
  const value = JSON.parse(props.toString());
  const ByteToMB = (x) => (x / 1024 ** 2).toFixed(2);
  const MicroSecondsToMiliSec = (x) => (x / 1000).toFixed(2);

  if (
    JSON.stringify(Object.keys(agrold)) ===
    JSON.stringify(Object.keys(value.telemetry[0]))
  ) {
    value.telemetry.forEach((el) => {
      el.l.t != ideal.t && alertas.push("Temperatura está fora da faixa ideal");
      el.l.u != ideal.u && alertas.push("Umidade está fora da faixa ideal");
      el.l.us != ideal.us &&
        alertas.push("Umidade do solo está fora da faixa ideal");
      el.l.c != ideal.c &&
        alertas.push("Nível de Chuva está fora da faixa ideal");
      el.l.l != ideal.l &&
        alertas.push("Nível de Luz está fora da faixa ideal");
    });
  } else if (
    JSON.stringify(Object.keys(dtdl)) ===
    JSON.stringify(Object.keys(value.telemetry[0]))
  ) {
    value.telemetry.forEach((el) => {
      el.ler.temperatura != ideal.t &&
        alertas.push("Temperatura está fora da faixa ideal");
      el.ler.umidade != ideal.u &&
        alertas.push("Umidade está fora da faixa ideal");
      el.ler.umidade_do_solo != ideal.us &&
        alertas.push("Umidade do solo está fora da faixa ideal");
      el.ler.chuva != ideal.c &&
        alertas.push("Nível de Chuva está fora da faixa ideal");
      el.ler.luz != ideal.l &&
        alertas.push("Nível de Luz está fora da faixa ideal");
    });
  }

  const _cpu = MicroSecondsToMiliSec(process.cpuUsage(cpu).user);
  const _mem = ByteToMB(process.memoryUsage(mem).rss);

  console.log(
    String(_cpu).replace(".", ","),
    String(_mem).replace(".", ","),
    new Date() - value.firstMsg,
    totalMsg
  );
  const csv = `cpu,mem,delay,msg\n${_cpu},${_mem},${
    new Date() - value.firstMsg
  },${totalMsg}\n`;
  try {
    fs.writeFileSync(`./file.csv`, csv);
  } catch (err) {
    console.error(err);
  }
};
