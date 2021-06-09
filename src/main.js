import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import "../src/assets/css/core.css";
const firebaseConfig = {
  apiKey: "AIzaSyASy9-eRCrHP9cu5u3Ju7RBggdTZ6x_L20",
  authDomain: "vue-app-firebase-63158.firebaseapp.com",
  projectId: "vue-app-firebase-63158",
  storageBucket: "vue-app-firebase-63158.appspot.com",
  messagingSenderId: "828110205043",
  appId: "1:828110205043:web:e2046927f8070cf39dba06",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
