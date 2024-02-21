<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
    <Loader class="offset-md-6 mt-5 pt-5" v-if="isLoading" />
    <ArticleCard v-else v-for="article in data" :key="article.id" :article="article" />
  </div>
</template>
<script>
import ArticleCard from '@/components/ArticleCard.vue';
import { mapState } from 'vuex';
import Loader from "@/components/Loader.vue"
export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      data: state => state.article.data,
      isLoading: state => state.article.isLoading,
      error: state => state.article.error
    })
  },
  mounted() {
    this.$store.dispatch('articles');
  },
  components: { ArticleCard, Loader }
}
</script>
<style lang="scss" scoped></style>