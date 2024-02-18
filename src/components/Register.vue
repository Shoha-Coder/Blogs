<template>
    <form class="w-25 m-auto mt-5">
        <img class="mb-4" src="@/assets/Logo.png" alt="" width="57" height="57">
        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :type="'text'" :label="'Full Name'" />
        <Input :type="'email'" :label="'Email adress'" />
        <Input :type="'password'" :label="'Password'" />
        <Button type="submit" :disabled="isLoading" @click="submitHandler">Sign in</Button>
    </form>
</template>
<script>
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';

export default {
    name: 'Register',
    components: { Button, Input },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            this.$store.dispatch('register')
        }
    },
    computed: {
        isLoading() {
            return this.$store.state.auth.isLoading
        }
    }
}
</script>
<style lang="scss" scoped></style>