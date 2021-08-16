<template>
  <div>
      <input autocomplete="off" v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
    name: 'TwInput',
    // 禁用父组件传过来的属性
    inheritAtters: false,
    props: {
        value: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        handleInput(evt){
            this.$emit('input', evt.target.value)
            const findParent = parent => {
                while (parent) {
                    if(parent.$options.name === 'twFormItem'){
                        break
                    }else{
                        parent = parent.$parent
                    }
                }
                return parent
            }
            const parent = findParent(this.$parent)
             if (parent) {
                parent.$emit('validate')
            }
        }
    }
}
</script>

<style>

</style>