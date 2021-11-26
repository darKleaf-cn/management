<template>
	<div class="register">
    <div class="login-container">
      <h1>xxx管理系统</h1>
      <el-form>
        <el-form-item prop="username">
          <el-input
            v-model="form.password"
            autocomplete="off"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
	data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {}
  }
}
</script>

<style lang="scss">
.register {
  height: 100%;
  width: 100%;
  background-image: url(~@/assets/image/1.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #409eff;
  .login-container {
    width: 400px;
    // height: 350px;
    background: #ffffff;
    border-radius: 10%;
    border: 2px solid #409eff;
    color: #409eff;
    .el-form {
      .el-input {
        width: 300px;
      }
      .el-button {
        width: 300px;
      }
    }
  }
}
</style>