<template>
  <div v-if="article">
    <div class="row">
      <div class="col-12">
        <p class="fs-2">{{ article.title }}</p>
      </div>
      <div class="col-8 mt-3">
        <p class="opacity-75">Description:</p>
        <p class="font-monospace">{{ article.description }}</p>
      </div>
      <div class="col-2 mt-3">
        <p class="opacity-75">Created at:</p>
        <p class="font-monospace">
          {{ new Date(article.createdAt).toLocaleDateString("us") }}
        </p>
      </div>
      <div class="col-2 mt-3">
        <p class="opacity-75">Updated at:</p>
        <p class="font-monospace">
          {{ new Date(article.updatedAt).toLocaleDateString("us") }}
        </p>
      </div>
      <div class="col-4 mt-3">
        <div class="d-flex align-items-center gap-3">
          <div
            class="d-flex justify-content-center align-items-center bg-primary fw-bold pt-3"
            style="width: 50px; height: 50px; border-radius: 100%"
          >
            <p class="text-light text-uppercase">{{ article.author.username[0] }}</p>
          </div>
          <div class="fw-bold">
            {{ article.author.username }}
          </div>
        </div>
        <p class="font-monospace mt-3">
        {{ article.author.bio }}
      </p>
      </div>
      <div class="col-8 mt-3">
        <p class="opacity-75">Body:</p>
        <p class="font-monospace">{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "ArticleDetail",
  computed: {
    ...mapState({
      article: (state) => state.article.articleDetail,
    }),
  },
};
</script>
<style lang="scss" scoped></style>
