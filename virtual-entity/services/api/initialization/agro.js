import fs from "fs";
const config = await import("../../../../configs.json", {
  assert: { type: "json" },
}).then((module) => module.default);
import process from "process";
export default async function () {
  const firstMsg = new Date();
  const cpu = process.cpuUsage();
  const mem = process.memoryUsage();
  const res = process.resourceUsage();
  for (let i = 0; i < config.nodes; i++) {
    await import(
      "../../../design-language/plante_box_study_case/agrold/structure.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/desligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/desligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/ler.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/ligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/ligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/medirConsumo.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/request_telemetry/temperaturaOperacao.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/desligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/desligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/ler.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/ligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/ligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/medirConsumo.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/agrold/response_telemetry/temperaturaOperacao.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    console.log("delay | cpu | rss | heap | context");
    console.log(
      new Date() - firstMsg,
      process.cpuUsage(cpu).user,
      process.memoryUsage(mem).rss,
      process.memoryUsage(mem).heapTotal,
      process.resourceUsage(res).voluntaryContextSwitches
    );
    const csv = `delay,cpu,rss,heap,context\n${new Date() - firstMsg},${
      process.cpuUsage(cpu).user
    },${process.memoryUsage(mem).rss},${process.memoryUsage(mem).heapTotal},${
      process.resourceUsage(res).voluntaryContextSwitches
    }\n`;
    fs.writeFileSync(`./file.csv`, csv);
  }
}
