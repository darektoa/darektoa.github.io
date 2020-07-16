const webPush = require('web-push');
 
const vapidKeys = {
    "publicKey"  : "BNLhJiri3FKB6EI10AvVTYg5aOQjlh5aE7uKIVAr_V5v7zXxOIvE4IarMs_IXPtCFGWVdiWoAN7ljP4jWWkV0f0",
    "privateKey" : "6q0iQb8V8_6YoinwivmRFlz7yiLfneHJ1-Shj5wY0dA"
};
 
 
webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {
    "endpoint"  : "https://fcm.googleapis.com/fcm/send/d-B56b2ilzY:APA91bHH1e-MumNFkN0HKxGkynz1JowbFlu7GK-dcSpoDo4Nj8yhFef-PBpdmXA8zyTvOmVXjI2PQ1dbzpDrtkDDgq1S06KbWBj3sFVw6QWgi_NWc7bp5_r71zLSYK0XbpRgrrakSuAA",
    "keys"      : {
        "p256dh": "BJMosbkM8WpdS4GK3vJHbhD2C9LlQXvTaVW3S87+3535akrHcK30VZLTweHZ/s0ojSa35Gw0+CoWUO/uv2IVS/4=",
        "auth"  : "fUCHmLmdXgHYTlX9ad/Qdw=="
    }
};

const payload = "Periksa sekarang! Ada notifikasi baru dari Rexballs!";
 
const options = {
    gcmAPIKey: '151030493738',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);