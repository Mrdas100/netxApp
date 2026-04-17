// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/12.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.12.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyDzugUdSZn10R9sdCSmFJozMt7l3Gn6HeE",
    authDomain: "netxapp-67f1c.firebaseapp.com",
    projectId: "netxapp-67f1c",
    storageBucket: "netxapp-67f1c.firebasestorage.app",
    messagingSenderId: "715459579684",
    appId: "1:715459579684:web:b0697cb6cd73ab287badb1",
    measurementId: "G-SJSYFGTP7E"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);
    const notificationTitle = payload.notification?.title || "مرداس";
    const notificationOptions = {
        body: payload.notification?.body || "إشعار جديد",
        icon: "https://via.placeholder.com/192x192/0A66C2/FFFFFF?text=م"
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
