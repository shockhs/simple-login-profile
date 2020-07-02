<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Login form</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Username"
          v-model="login.username"
          :rules="rules"
          prepend-icon="mdi-account"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          prepend-icon="mdi-lock"
          v-model="login.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click.prevent="userLogin">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: "",
        password: ""
      },
      rules: [
        value => !!value || "Required.",
        value => (value && value.length >= 3) || "Min 3 characters"
      ]
    };
  },
  methods: {
    async userLogin() {
      try {
        await this.$store.dispatch("auth/login", this.login.username);
        const status = this.$store.getters["auth/status"];
        if (status) this.$router.push("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

