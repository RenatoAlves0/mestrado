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
      "../../../design-language/plante_box_study_case/dtdl/structure.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/desligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/desligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/ler.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/ligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/ligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/medirConsumo.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/request_telemetry/temperaturaOperacao.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/desligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/desligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/ler.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/ligarAtuador.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/ligarSensores.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/medirConsumo.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/response_telemetry/temperaturaOperacao.json",
      { assert: { type: "json" } }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/bateria.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/bluetooth.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/cpu.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/flash.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/rom.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/sram.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/properties/wifi.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/bateria.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/comunicacao.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/cpu.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/dht11.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/irrigador.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/ldr.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/memoria.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/yl69.json",
      {
        assert: { type: "json" },
      }
    ).then((module) => module.default);
    await import(
      "../../../design-language/plante_box_study_case/dtdl/interfaces/yl83.json",
      {
        assert: { type: "json" },
      }
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
