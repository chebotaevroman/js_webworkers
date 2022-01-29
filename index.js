import bigFn from "./bigFn.js";

const counterValue = 3_000_000_000;

if (!window.Worker) {
  const myWorker = new Worker("./worker.js", { type: "module" });

  myWorker.postMessage(counterValue);

  myWorker.onmessage = (e) => {
    console.log(e.data);
  };
} else {
  const res = bigFn(counterValue);
  console.log(res);
}
