<template>
  <div>
      <label>{{ label }}</label>
      <div>
            <slot></slot>
            <p v-if="errMsg">{{ errMsg }}</p>
      </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
    name: 'twFormItem',
    inject: ['form'],
    data () {
        return {
            errMsg: ''
        }
    },
    props: {
        label:{
            type: String
        },
        prop: {
            type: String
        }
    },
    methods: {
        validate () {
            if(!this.prop) return
            const value = this.form.model[this.prop]
            const rule = this.form.rules[this.prop]

            const descriptor = { [this.prop]: rule }
            const validator = new AsyncValidator(descriptor)
            // 返回一个promise对象
            return validator.validate({ [this.prop] : value }, errors => {
                if(errors){
                    this.errMsg = errors[0].message
                }else{
                    this.errMsg = ''
                }
            })
        }
    },
    mounted() {
        this.$on('validate', () => {
            this.validate()
        })
    }
}
</script>

<style>

</style>