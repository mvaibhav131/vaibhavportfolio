/* global self */
// This service worker unregisters itself and refreshes all clients
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => {
  self.registration.unregister()
    .then(() => self.clients.matchAll())
    .then((clients) => clients.forEach((client) => client.navigate(client.url)));
});
