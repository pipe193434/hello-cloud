// src/app.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * 👇 Reemplaza por los nombres reales de tu equipo.
 * Ejemplos:
 *  ["Manuel González","Wilson Sarmiento","Lorena Uyaban","Oscar Laiton"]
 */
const NOMBRES = [
  "Manuel González",
  "Wilson Sarmiento",
  "Lorena Uyaban",
  "Oscar Laiton"
];

// 1) Página principal EXACTA: "hello cloud"
app.get("/", (_req, res) => {
  res.type("text").send("hello cloud");
});

// 2) Página /integrantes con los nombres
app.get("/integrantes", (_req, res) => {
  const lista = NOMBRES.map(n => `<li>${n}</li>`).join("");
  res.type("html").send(`
    <!doctype html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Integrantes</title>
        <style>
          body{font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif; padding:24px}
          h1{margin-bottom:8px}
          ul{margin-top:12px}
          li{margin:4px 0}
          a{color:#06f;text-decoration:none}
        </style>
      </head>
      <body>
        <h1>Integrantes</h1>
        <ul>${lista}</ul>
        <p><a href="/">Volver a home</a></p>
      </body>
    </html>
  `);
});

// (opcional) Para chequeo rápido
app.get("/health", (_req, res) => res.json({ status: "ok", uptime: process.uptime() }));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
