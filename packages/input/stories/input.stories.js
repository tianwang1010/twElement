import TwInput from '../'

export default {
    title: 'TwInput',
    component: TwInput
}

export const Text = () => ({
    components: {
        TwInput
    },
    template: '<tw-input v-model="value"></tw-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})

export const Password = () => ({
    components: {
        TwInput
    },
    template: '<tw-input type="password" v-model="value"></tw-input>',
    data () {
        return {
            value: 'admin'
        }
    }
})