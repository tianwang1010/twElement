<template>
    <div>
        <button @click="handleClick">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name:'twButton',
    methods: {
        handleClick (evt) {
            this.$emit('click', evt)
            evt.preventDefault()
        }
    }
}
</script>

<style>

</style>