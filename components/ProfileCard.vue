<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="400" v-cloak>
    <v-card-title>
      <v-icon large left>mdi-information</v-icon>
      <span class="title font-weight-bold">Profile information</span>
    </v-card-title>
    <v-card-title class="title font-weight-regular">Email: {{user.email}}</v-card-title>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{user.username}}</v-list-item-title>
        </v-list-item-content>
        <v-row align="center" justify="end">
          <v-btn color="primary" @click.prevent="userLogout">Logout</v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      user: {
        email: null,
        username: null
      }
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/status"];
    }
  },
  methods: {
    userLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    }
  },
  beforeMount() {
    if (!this.isAuthenticated) this.$router.push("/");
    else {
      const user = this.$store.getters["auth/user"];
      this.user = user;
    }
  }
};
</script>