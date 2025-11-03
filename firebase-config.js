// Firebase Configuration
// Replace these values with your Firebase project credentials
// Get them from: https://console.firebase.google.com → Project Settings → General → Your apps

// const FIREBASE_CONFIG = {
//     apiKey: "YOUR_API_KEY_HERE",
//     authDomain: "YOUR_AUTH_DOMAIN_HERE",
//     databaseURL: "YOUR_DATABASE_URL_HERE",
//     projectId: "YOUR_PROJECT_ID_HERE",
//     storageBucket: "YOUR_STORAGE_BUCKET_HERE",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
//     appId: "YOUR_APP_ID_HERE"
// };
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyA6O0geJ_6Xnj7e0rgPgXI0vpeBuJXXMg0",
  authDomain: "first-project-df178.firebaseapp.com",
  databaseURL: "https://first-project-df178-default-rtdb.firebaseio.com",
  projectId: "first-project-df178",
  storageBucket: "first-project-df178.firebasestorage.app",
  messagingSenderId: "227578117259",
  appId: "1:227578117259:web:99f1bfb85f8d44ec95288e",
 // measurementId: "G-GKD4JKJ938"
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
