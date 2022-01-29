import bigFn from "./bigFn.js";

self.onmessage = (e) => {
  const counter = e.data;

  const result = bigFn(counter);

  self.postMessage(result);
};
