import process from "process";
import mqtt from "mqtt";
import { check } from "../../../api/alerts/index.js";
import configs from "../../../../../configs.json" assert { type: "json" };
const cliente = mqtt.connect({
  host: "localhost",
  port: 1883,
  keepalive: 18000,
});
let totalMsg = 0;
let firstMsg = null;
let cpu;
let mem;
let alreadyReceivedMsg = false;

cliente.on("connect", () => {
  cliente.subscribe("presence");
});

cliente.on("message", function (topic, message) {
  if (!alreadyReceivedMsg) {
    firstMsg = new Date();
    cpu = process.cpuUsage();
    mem = process.memoryUsage();
    alreadyReceivedMsg = true;
  }

  totalMsg++;

  check(message, configs.type, cpu, mem, totalMsg, firstMsg);
});
