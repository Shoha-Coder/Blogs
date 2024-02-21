<template>
  <h1 class="text-center display-2 mb-3">Create Article</h1>
  <div class="w-50 mx-auto">
    <form @submit="onSubmit">
      <Input type="text" label="Title" v-model="title" />
      <Input type="text" label="Description" v-model="description" />
      <TextArea type="text" label="Body" v-model="body" />
      <Button type="submit" :disabled="isLoading">Create article</Button>
    </form>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Button from "./ui/Button.vue";
import Input from "./ui/Input.vue";
import TextArea from "./ui/TextArea.vue";

export default {
  name: "CreateArticle",
  components: { Input, TextArea, Button },
  data() {
    return {
      title: "",
      description: "",
      body: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      };
      this.$store.dispatch("createArticle", article);
      this.title = "";
      this.description = "";
      this.body = "";
      article.title !== '' && article.description !== '' && article.body !== '' ? this.$router.push({ name: "home" }) : alert('Barcha hususiyatlarni to`ldiring')
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.articleControl.isLoading,
    }),
  },
};
</script>
<style lang=""></style>
