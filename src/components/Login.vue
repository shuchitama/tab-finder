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
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >

      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group
          :state="passwordState"
          label="Password"
          label-for="password-input"
          invalid-feedback="Password is required"
        >
          <b-form-input
            id="password-input"
            type="password"
            v-model="password"
            :state="passwordState"
            required
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
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
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