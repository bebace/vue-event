<template>
      <div class="regContent">
    <div class="regBox">
      <div class="titleBox">
        <!-- <span>后台管理系统</span> -->
        <img src="@/assets/images/login_title.png" alt="">
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="rulesObj">
        <el-form-item prop="username">
          <el-input placeholder="请输入账户" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password placeholder="请输入密码" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-reg" type="primary" @click="loginFn">登录</el-button>
          <el-link type="info" @click="gotoRegister">去注册</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { loginAPI } from '@/api'
import { mapMutations } from 'vuex'
export default {
  name: 'my-login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rulesObj: {
        username: [
          { required: true, message: '请输入账户', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{1,10}$/, message: '账户必须是1-10的大小写字母数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['updateToken']),
    async loginFn () {
      this.$refs.loginForm.validate(async valid => {
        if (!valid) return false
        const { data: res } = await loginAPI(this.loginForm)
        console.log(res)
        if (res.code !== 0) return this.$message.error(res.message)
        this.$message.success(res.message)
        this.updateToken(res.token)
        this.$router.push('/')
      })
    },
    gotoRegister () {
      this.$router.push('/reg')
    }
  }
}
</script>
<style lang="less" scoped>
.regContent {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url('@/assets/images/login_bg.jpg');
}
.regBox {
  width: 400px;
  height: 335px;
  border-radius: 3px;
  background-color: #fff;
}
.titleBox {
  height: 100px;
  font-size: 25px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.el-form{
    width: 90%;
    margin: 0 auto;
}
.btn-reg{
    width: 100%;
}
</style>
