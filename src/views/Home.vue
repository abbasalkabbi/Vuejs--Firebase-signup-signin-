<template>
  <div class="home">
    <h1>Welcome, {{ name }}</h1>
  </div>
  <button class="logout" @click="Logout">Logout</button>
</template>

<script>
import firebase from "firebase";

import { ref, onBeforeMount } from "vue";

export default {
  name: "Home",

  setup() {
    console.log("run");
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Sing out"))
        .catch((err) => alert(err.message));
    };
    return {
      name,
      Logout,
    };
  },
};
</script>
