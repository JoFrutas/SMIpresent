const CACHE_NAME = "smi-ulslo-v3-mobile";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/icon.svg",
  "/docs/carteira-servicos-smi-2024.pdf",
  "/docs/manual-governacao-clinica-smi-2024.pdf",
  "/docs/guia-acolhimento-interno-smi-2024.pdf",
  "/docs/pagina-institucional-smi-2026.pdf",
  "/docs/manual-transporte-secundario-doente-critico-2026.pdf",
  "/docs/circuito-doente-critico-2023.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          const clone = response.clone();
          if (response.ok && new URL(request.url).origin === self.location.origin) {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          if (request.mode === "navigate") {
            return caches.match("/index.html");
          }
          return new Response("Conteúdo indisponível offline.", {
            status: 503,
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          });
        });
    })
  );
});
