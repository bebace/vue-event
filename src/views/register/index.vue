<template>
  <div class="regContent">
    <div class="regBox">
      <div class="titleBox">
        <!-- <span>后台管理系统</span> -->
        <img src="@/assets/images/login_title.png" alt="后台管理系统"/>
      </div>
      <el-form ref="regForm" :model="regForm" :rules="rulesObj">
        <el-form-item prop="username">
          <el-input placeholder="请输入账户" v-model="regForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" show-password placeholder="请输入密码" v-model="regForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          <el-input type="password" show-password placeholder="请输入密码" v-model="regForm.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-reg" type="primary" @click="registerFn">注册</el-button>
          <el-link type="info" @click="gotoLogin">去登录</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { registerAPI } from '@/api'
export default {
  name: 'my-register',
  data () {
    // 自定义校验规则
    const samePwdFn = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error('两次输入的密码不一致！'))
      } else {
        callback()
      }
    }

    return {
      regForm: {
        username: '',
        password: '',
        repassword: ''
      },
      rulesObj: {
        username: [
          { required: true, message: '请输入账户', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{1,10}$/, message: '账户必须是1-10的大小写字母数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' },
          { validator: samePwdFn, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    registerFn () {
      this.$refs.regForm.validate(async valid => {
        if (!valid) return false
        console.log(this.regForm)
        const { data: res } = await registerAPI(this.regForm)
        console.log(res)
        if (res.code !== 0) return this.$message.error(res.message)
        this.$message.success(res.message)
        this.$router.push('/login')
      })
    },
    gotoLogin () {
      this.$router.push('/login')
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
  height: 60px;
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
