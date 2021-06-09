<template>
  <router-view />
</template>
<script>
import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/singup");
        } else if (route.path == "/singup" || route.path == "/loggin") {
          router.replace("/");
        }
      });
    });
  },
};
</script>
