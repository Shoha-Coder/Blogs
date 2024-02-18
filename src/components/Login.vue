<template>
    <form class="w-25 m-auto mt-5" :onsubmit="onSubmit">
        <img class="mb-4" src="@/assets/Logo.png" alt="" width="57" height="57">
        <h1 class="h3 mb-3 fw-normal">Login</h1>
            <Input :type="'email'" :label="'Email adress'" :placeholder="'Email Adress'" />
            <Input :type="'password'" :label="'Password'" :placeholder="'Password'" />
        <Button type="submit">Sign in</Button>
    </form>
</template>
<script>
import Button from "@/components/ui/Button.vue"
import Input from "./ui/Input.vue";
export default {
    name: 'Login',
    components: {
        Button,
        Input
    },
    data() {
        return {
            onSubmit(e) {
                e.preventDefault();
            },
        }
    }
}
</script>
<style lang="scss" scoped></style>