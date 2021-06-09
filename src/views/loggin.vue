<template>
  <div class="container signin">
    <form @submit.prevent="signin" class="form">
      <h1>sign in</h1>
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

      <input type="submit" value="sign in" id="submit" />
      <Router-Link to="/singup">Create New Account</Router-Link>
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
    const signin = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => console.log(data))
        .catch((err) => (err1.value = err.message));
    };
    return {
      email,
      password,
      signin,
      err1,
    };
  },
};
</script>

<style></style>
