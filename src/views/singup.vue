<template>
  <div class=" container singup">
    <form @submit.prevent="singup" class="form">
      <h1>sing up</h1>
      <span v-if="err1">{{ err1 }}</span>
      <input
        type="text"
        v-model="email"
        placeholder="email"
        id="email"
        required
      />
      <div class="pass">
        <input
          :type="pass"
          v-model="password"
          placeholder="Password"
          required
        />
        <img src="../assets/image/closed.png" @click="show()" v-if="image" />
        <img src="../assets/image/open.png" @click="show()" v-else />
      </div>
      <input type="submit" value="sing up" id="submit" />
      <Router-Link to="/loggin"> Have A Account</Router-Link>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { ref } from "vue";
export default {
  data() {
    return {
      image: true,
      pass: "password",
    };
  },
  methods: {
    show() {
      if (this.image == true) {
        this.image = false;
        this.pass = "text";
      } else {
        this.image = true;
        this.pass = "password";
      }
    },
  },
  setup() {
    const email = ref("");
    const password = ref("");
    var err1 = ref("");
    const singup = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert(user);
        })
        .catch((err) => (err1.value = err.message));
    };
    return {
      singup,
      email,
      password,
      err1,
    };
  },
};
</script>

<style></style>
