<template>
    <form class="w-25 m-auto mt-5">
        <img class="mb-4" src="@/assets/Logo.png" alt="" width="57" height="57">
        <h1 class="h3 mb-3 fw-normal">Login</h1>
        <ValidationError v-if="validationErrors" :validationErrors="validationErrors" />
        <Input :type="'email'" :label="'Email adress'" :placeholder="'Email Adress'" v-model="email" />
        <Input :type="'password'" :label="'Password'" :placeholder="'Password'" v-model="password" />
        <Button type="submit" :disabled="isLoading" @click="submitHandler">Sign in</Button>
    </form>
</template>

<script>
import Button from "@/components/ui/Button.vue"
import Input from "./ui/Input.vue";
import ValidationError from "./ValidationError.vue";
import { mapState } from "vuex";
export default {
    name: 'Login',
    components: {
        Button,
        Input,
        ValidationError
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.auth.isLoading,
            validationErrors: state => state.auth.errors
        })
    },
    methods: {
        submitHandler(e) {
            e.preventDefault();
            const user = {
                email: this.email,
                password: this.password
            }
            this.$store.dispatch('login', user)
                .then(user => {
                    console.log('User:', user)
                    this.$router.push({
                        name: 'home'
                    })
                })
                .catch(error => console.log('Error', error))
        }
    },
}
</script>

<style lang="scss" scoped></style>
