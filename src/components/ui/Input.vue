<template>
    <div class="form-floating mb-3">
        <input :type="type" id="floatingInput" class="form-control" :placeholder="label">
        <label for="floatingInput">{{ label }}</label>
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        label: String,
        type: String,
    }
}
</script>
<style lang="scss" scoped></style>