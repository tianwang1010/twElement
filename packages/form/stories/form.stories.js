import TwForm from '../'
import TwFormItem from '../../formItem'
import TwInput from '../../input'
import TwButton from '../../button'

export default {
  title: 'TwForm',
  component: TwForm
}

export const Login = () => ({
  components: { TwForm, TwFormItem, TwInput, TwButton },
  template: `<tw-form class="form" ref="form" :model="user" :rules="rules">
      <tw-form-item label="用户名" prop="username">
        <!-- <tw-input v-model="user.username"></tw-input> -->
        <tw-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></tw-input>
      </tw-form-item>
      <tw-form-item label="密码" prop="password">
        <tw-input type="password" v-model="user.password" placeholder="请输入密码"></tw-input>
      </tw-form-item>
      <tw-form-item>
        <tw-button type="primary" @click="login">登 录</tw-button>
      </tw-form-item>
    </tw-form>`,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      // console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})