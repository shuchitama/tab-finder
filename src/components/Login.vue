<template>
<a>
  <div>
    <b class="login" v-b-modal.modal-prevent-closing>Login</b>
      to create a list with your favourite songs
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
          @click="show=false"
        >
          Login
        </b-button>
      </template>

    </b-modal>
  </a>
</template>