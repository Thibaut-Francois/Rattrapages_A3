<template>
    <button @click="action">{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonComp',
    props: {
        action: {
            type: Function,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

</style>