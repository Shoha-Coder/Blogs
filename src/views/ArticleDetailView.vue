<template>
  <div>
    <Loader v-if="isLoading" class="offset-md-6 mt-5 pt-5" />
    <ArticleDeatil v-else />
  </div>
</template>
<script>
import ArticleDeatil from "@/components/ArticleDeatil.vue";
import Loader from "@/components/Loader.vue";
import { mapState } from "vuex";

export default {
  name: "ArticleDetailView",
  mounted() {
    this.$store.dispatch("articleDetail", this.$route.params.slug);
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
    }),
  },
  components: { Loader, ArticleDeatil },
};
</script>
<style lang="scss"></style>
