<template>
<a>
  <div v-if="loggedOut">
    <b class="login" v-b-modal.modal-prevent-closing>Login</b>
      to create a list with your favourite songs
  </div>
  <div v-else>
      You are logged in
      <button @click="logout">Logout</button>
  </div>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Login"
      size="sm"
    >

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
        >
          <b-form-input
            id="name-input"
          ></b-form-input>
        </b-form-group>
          <b-form-group
          label="Password"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            type="password"
          ></b-form-input>
        </b-form-group>
      </form>

      <template v-slot:modal-footer>
        <b-button
          variant="success"
          class="float-right"
          size="sm"
          @click="login"
        >
          Login
        </b-button>
      </template>

    </b-modal>
  </a>
</template>

<script>
  export default {
    data() {
      return {
        loggedOut: true
      }
    },
    methods: {
      login() {
        this.loggedOut = false;
        this.$refs['modal'].hide();
      },
      logout() {
        this.loggedOut = true;
      }
      
    }
  }
</script>

<style scoped>
.login:hover {
 color: green;
 border: solid;
 border-radius: 4px;
 padding-left: 4px;
 padding-right: 4px;
 border-color:green;
}
</style>