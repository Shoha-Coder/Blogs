<template lang="">
      <div class="col">
        <div class="card">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
          </svg>
          <div class="card-body">
          <p class="card-title fw-bold">{{article.title.slice(0,40) + "..."}}</p>
            <p class="card-text">{{article.body.slice(0, 250)}} </p>
            <div class="d-flex justify-content-between align-items-center card-footer">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="navigateHandler">Read Article</button>
                <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
              </div>
              <small class="text-body-secondary">{{createdAt}}</small>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      createdAt: new Date(this.article.createdAt).toLocaleDateString('us')
    }
  },
  methods: {
    navigateHandler() {
      return this.$router.push(`/article/${this.article.slug}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  border: none;
  border-radius: none;
}
</style>