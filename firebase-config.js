// Firebase Configuration
// Replace these values with your Firebase project credentials
// Get them from: https://console.firebase.google.com → Project Settings → General → Your apps

const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    databaseURL: "YOUR_DATABASE_URL_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE"
};

// Helper function to check if Firebase is configured
function isFirebaseConfigured() {
    return FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY_HERE" && 
           FIREBASE_CONFIG.databaseURL !== "YOUR_DATABASE_URL_HERE";
}
// Initialize Firebase
if (isFirebaseConfigured()) {
    firebase.initializeApp(FIREBASE_CONFIG);
    console.log("Firebase initialized successfully");
} else {
    console.error("Firebase configuration is missing or incomplete");
}
