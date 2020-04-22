<template>
  <a>
    <div v-if="!this.$store.state.login">
      <b class="login" v-b-modal.modal-prevent-closing>Sign in</b>
      to create a list with your favourite songs
    </div>
    <div v-else>
      You are logged in as Jane Doe
      <button id="logout-button" @click="logout">Sign out</button>
    </div>
    <div id="login-popup">
      <b-modal id="modal-prevent-closing" ref="modal" title="Sign in" size="sm">
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group label="Name">
            <b-form-input id="name-input"></b-form-input>
          </b-form-group>
          <b-form-group label="Password" label-for="password-input">
            <b-form-input id="password-input" type="password"></b-form-input>
          </b-form-group>
        </form>
        <template v-slot:modal-footer>
          <b-button
            variant="success"
            class="float-right"
            size="sm"
            @click="login">
            Sign in
          </b-button>
        </template>
      </b-modal>
    </div>
  </a>
</template>

<script>
export default {
  data() {
    return {
      loggedOut: true
    };
  },
  methods: {
    login() {
      this.$store.commit("doLogin");
      this.$refs["modal"].hide();
    },
    logout() {
      this.$store.commit("doLogout");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap");

a {
  font-family: Oswald;
}

.login:hover {
  color: green;
  border: solid;
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  border-color: green;
}

#logout-button {
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background-color: #233d32;
  color: #ffe1b1;
  font-family: Oswald;
  font-size: 16px;
}
</style>
