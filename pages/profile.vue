<template>
  <section class="container" v-cloak>
    <v-app id="inspire">
      <v-main>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <ProfileCard />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </section>
</template>

<script>
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  components: {
    ProfileCard: ProfileCard
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["auth/status"];
    }
  },
  updated() {
    if (!isAuthenticated) this.$router.push("/");
  }
};
</script>

<style>
</style>

