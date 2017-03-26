<template lang="html">
  <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Sign in</h3>
                    </div>
                    <div class="panel-body">
                            <fieldset>
                                <div class="form-group sr-only" id="msg-wrapper">
                                   <label class="res-message" style="color:#bf0202"></label>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="用户名" id="username" name="username" v-model="username" >
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="密码" id="password" name="password" v-model="password" value="">
                                </div>
                                <div class="form-group col-md-7 col-xs-7" style="padding-left: 0px;padding-right: 0px;">
                                    <input type="text" class="form-control" placeholder="验证码" id="authcode" name="authcode" v-model="authcode" value="">
                                </div>
                                <div class="form-group col-md-4 col-xs-4">
                                    <img id="auth-code" :src="authCodeSrc" @click="changeAuthCode" style="height:30px" />
                                </div>
                                <!-- Change this to a button or input when using this as a form -->
                                <input type="button" id="login-btn" class="btn btn-lg btn-success btn-block" value="登录" @click="doLogin" />
                            </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
  name: 'Login',
  data () {
    return {
      method: 'do_login',
      authCodeSrc: '',
      username: '',
      password: '',
      authcode: ''
    }
  },
  computed: {
    msg () {
      return this.$route.query.msg
    }
  },
  methods: {
    changeAuthCode () {
      var authCodeTimer = setInterval(() => {
        if (!this.$token) {
          return false
        }
        clearInterval(authCodeTimer)
        this.authCodeSrc = this.$url + 'authcode?token=' + this.$token + '&' + new Date().getTime()
      }, 500)
    },
    doLogin () {
      var params = new URLSearchParams()
      params.append('username', this.username)
      params.append('password', this.password)
      params.append('authcode', this.authcode)
      this.$http.post(this.$url + this.method, params).then(m => {
        if (m.data === 'success') {
          router.push({path: '/index'})
        }
      })
    }
  },
  mounted () {
    // 初始化验证码
    this.changeAuthCode()
    // 检查传递的message
    if (this.msg) {
      switch (this.msg) {
        case 'net_work_err':
          console.log('net work connect refused!')
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped>
.login-panel {
    margin-top: 25%;
}
</style>
