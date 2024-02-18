<template>
    <form class="w-25 m-auto mt-5">
        <img class="mb-4" src="@/assets/Logo.png" alt="" width="57" height="57">
        <h1 class="h3 mb-3 fw-normal">Register</h1>
        <Input :type="'text'" :label="'Username'" v-model="username" />
        <Input :type="'email'" :label="'Email adress'" v-model="email" />
        <Input :type="'password'" :label="'Password'" v-model="password" />
        <Button type="submit" :disabled="isLoading" @click="submitHandler">Sign in</Button>
    </form>
</template>
<script>
import Button from './ui/Button.vue';
import Input from './ui/Input.vue';

export default {
    name: 'Register',
    components: { Button, Input },
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            const user = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('register', user).then(user => console.log('User:', user)).catch(error => console.error('Error', error))
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