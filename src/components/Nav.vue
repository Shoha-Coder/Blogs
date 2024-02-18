<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <RouterLink :to="{ name: 'home' }"
      class="d-flex align-items-center link-body-emphasis text-decoration-none Logo__container">
      <img src="@/assets/Logo.png" class="Logo" alt="">
      <span class="fs-4">Shoha_Coder</span>
    </RouterLink>
    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <template v-if="isLoggedin">
        <RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none" :to="{ name: 'home' }">{{ user.username }}
        </RouterLink>
      </template>
      <template v-if="isAnonymus">
        <RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none" :to="{ name: 'login' }">Login</RouterLink>
        <RouterLink class="me-3 py-2 link-body-emphasis text-decoration-none" :to="{ name: 'register' }">Register
        </RouterLink>
      </template>
    </nav>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import { gettersTypes } from "@/modules/types"
import { mapGetters } from 'vuex';
export default {
  name: "Nav",
  components: { RouterLink },
  computed: {
    ...mapGetters({
      user: gettersTypes.user,
      isLoggedin: gettersTypes.isLoggedIn,
      isAnonymus: gettersTypes.isAnonymus
    }),
  },
};

</script>
<style lang="scss" scoped>
.Logo {
  width: 50px;
  height: 50px;
  margin-right: 20px;

  &__container {
    cursor: pointer;
  }
}
</style>