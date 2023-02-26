import process from "process";
import coap from "coap";
import { check } from "../../../api/alerts/index.js";
import configs from "../../../../../configs.json" assert { type: "json" };

const server = coap.createServer();
let totalMsg = 0;
let firstMsg = null;
let cpu;
let mem;
let alreadyReceivedMsg = false;

server.on("request", (req, res) => {
  if (!alreadyReceivedMsg) {
    firstMsg = new Date();
    cpu = process.cpuUsage();
    mem = process.memoryUsage();
    alreadyReceivedMsg = true;
  }

  totalMsg++;

  check(req.payload, configs.type, cpu, mem, totalMsg, firstMsg);
});

server.listen();
