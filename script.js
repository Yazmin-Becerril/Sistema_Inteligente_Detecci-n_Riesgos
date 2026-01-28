const URL = "https://teachablemachine.withgoogle.com/models/9rqJDwUqi/";

let model, webcam;
let port, writer;
let ultimoComando = "";

async function init() {
  const modelURL = URL + "model.json";
  const metadataURL = URL + "metadata.json";

  model = await tmImage.load(modelURL, metadataURL);

  webcam = new tmImage.Webcam(300, 300, true);
  await webcam.setup();
  await webcam.play();

  document.getElementById("webcam").appendChild(webcam.canvas);
  window.requestAnimationFrame(loop);
}

async function loop() {
  webcam.update();
  await predict();
  window.requestAnimationFrame(loop);
}

async function predict() {
  const prediction = await model.predict(webcam.canvas);

  let claseDetectada = "";
  let confianza = 0;

  prediction.forEach(p => {
    if (p.probability > confianza) {
      confianza = p.probability;
      claseDetectada = p.className;
    }
  });

  document.getElementById("resultado").innerText =
    `Clase: ${claseDetectada} | Confianza: ${(confianza * 100).toFixed(2)}%`;

  decidirYEnviar(claseDetectada, confianza);
}

function decidirYEnviar(clase, confianza) {
  if (!writer) return;

  let comando = "";

  // 🔵 NADA
  if (clase === "Nada" && confianza >= 0.60) {
    comando = "NONE";
  }
  // 🔥 FUEGO
  else if (clase === "Fuego" && confianza >= 0.80) {
    comando = "FIRE";
  }
  // ⚠️ OBJETOS CON RIESGO
  else if (confianza >= 0.60) {
    if (confianza < 0.80) {
      comando = "WARNING";
    } else {
      comando = "DANGER";
    }
  } 
  // 🟢 BAJO PELIGRO
  else {
    comando = "SAFE";
  }

  if (comando !== ultimoComando) {
    enviarComando(comando);
    ultimoComando = comando;
  }
}

async function conectarArduino() {
  if (port) return;

  port = await navigator.serial.requestPort();
  await port.open({ baudRate: 9600 });
  writer = port.writable.getWriter();
  init();
}

async function enviarComando(cmd) {
  const data = new TextEncoder().encode(cmd + "\n");
  await writer.write(data);
}
