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
button{
    margin: 0 auto;
    padding: 10px 20px;
    width: auto;
    border-radius: 10px;
    cursor: pointer;
}
</style>