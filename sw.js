// ✅ Online-only Service Worker — no offline caching
self.addEventListener("install", (e) => {
  console.log("Service Worker Installed (Online Only)");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(
        "<html><body style='font-family:sans-serif;text-align:center;margin-top:40px;'>" +
        "<h2>You are offline</h2>" +
        "<p>Please connect to the internet to use Teachers Tool.</p>" +
        "</body></html>",
        { headers: { "Content-Type": "text/html" } }
      );
    })
  );
});