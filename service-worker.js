importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

const CACHE_NAME = 'v1.0';

workbox.precaching.precacheAndRoute([
    {url: '/', revision: '1'},
    {url: '/index.html', revision: '1'},
    {url: '/manifest.json', revision: '1'},
    {url: '/src/html/nav.html', revision: '1'},
    {url: '/src/images/icons/72x72.png', revision: '1'},
    {url: '/src/images/icons/192x192.png', revision: '1'},
    {url: '/src/images/icons/512x512.png', revision: '1'},
    {url: '/src/styles/materialize.min.css', revision: '1'},
    {url: '/src/styles/style.css', revision: '1'},
    {url: '/src/scripts/materialize.min.js', revision: '1'},
    {url: '/src/scripts/manipulation.js', revision: '1'},
    {url: '/src/scripts/req-notif.js', revision: '1'},
    {url: '/src/scripts/regis-sw.js', revision: '1'},
    {url: '/src/scripts/nav.js', revision: '1'}
]);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images'
    })
)

workbox.routing.registerRoute(
    new RegExp('/src/html'),
      workbox.strategies.staleWhileRevalidate({
          cacheName: 'pages'
      })
  );

self.addEventListener('push', event=>{
    let body;
    
    if(event.data)
        body = event.data.text();
    else
        body = 'Push message no payload';
    
    const options = {
        body    : body,
        icon    : '/src/images/icons/192x192.png',
        vibrate : [200, 100, 200],
        data    : {
            dateOfArrival : Date.now(),
            primaryKey    : 1
        }
    };

    event.waitUntil(
        self.registration.showNotification('Rexball Notification', options)
    );
});