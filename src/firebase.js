import { initializeApp } from "firebase/app"
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check"

const firebaseConfig = {
  apiKey: "AIzaSyAcSfgYTaXPE5KlPFq61flYt3pAk9sT7Kw",
  authDomain: "curiosidades-paco.firebaseapp.com",
  projectId: "curiosidades-paco",
  storageBucket: "curiosidades-paco.appspot.com",
  messagingSenderId: "59238171406",
  appId: "1:59238171406:web:ef8886a9bc604ea0e80d5f",
  measurementId: "G-6MMYZ1HTKV"
};


const app = initializeApp(firebaseConfig)

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider("6Le4Z74pAAAAAHi0GzKbKKv7lrJzUr-4aCEqYs4C"),
  isTokenAutoRefreshEnabled: true
});

export default appCheck.app
