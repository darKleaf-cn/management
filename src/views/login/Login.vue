<template>
  <div class="login">
    <div class="login-container">
      <h1>
        <span>千叶</span>
        <img src="../../assets/image/leaf-blue.png" alt="" />
        <span>商城</span>
      </h1>
      <el-form ref="form" :model="form" :rules="rules" :show-message="false">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            autocomplete="off"
            prefix-icon="el-icon-user"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="password">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="password-operation">
          <template>
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <el-link :underline="false">忘记密码？</el-link>
          </template>
        </el-form-item>
        <el-form-item class="login-operation">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
        <el-form-item class="register-operation">
          <el-link type="primary" :underline="false" href="/#/register"
            >立即注册<i class="el-icon-d-arrow-right"></i
          ></el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt';
import { publicKey } from '@/util/publicKey';
import MD5 from 'crypto-js/md5';
import Message from '@/util/message';
import { login } from '@/api/user';
// import Base64 from '@/util/base64';
import { setStore } from '@/util/storage';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'change'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'change'
          }
        ]
      },
      checked: false
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const username = this.form.username;
          const password = this.form.password;

          // md5加密和公钥加密
          const encryptor = new JSEncrypt();
          encryptor.setPublicKey(publicKey);
          const params = {
            username,
            password: encryptor.encrypt(MD5(password).toString())
          };
          const res = await login(params);
          if (res.code === 200) {
            Message('success', '登录成功');
            // if (this.checked) {
            //   setStore('username', Base64.encode(username));
            //   setStore('password', Base64.encode(password));
            // }
            setStore('token', res.token);
            this.$router.push({
              path: '/home'
            });
          } else {
            Message('error', res.message);
          }
        } else {
          console.log(1);
        }
      });
    }
  },
  created() {
    // const username = getStore('username');
    // const password = getStore('password');
    // if (username && password) {
    //   this.checked = true;
    //   this.form.username = Base64.decode(username);
    //   this.form.password = Base64.decode(password);
    // }
  }
};
</script>

<style lang="scss">
.login {
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
    h1 {
      display: flex;
      justify-content: center;
      img {
        margin: 0 5px;
      }
    }
    .el-form {
      .el-input {
        width: 300px;
      }
      .el-button {
        width: 300px;
      }
      .password {
        margin: 0;
      }
      .password-operation {
        margin: 0;
        .el-form-item__content {
          margin: auto;
          width: 300px;
          display: flex;
          justify-content: space-between;
          &::after,
          &::before {
            content: none;
          }
        }
      }
      .login-operation {
        margin: 0;
      }
      .register-operation {
        margin: 0;
        .el-form-item__content {
          margin: auto;
          width: 300px;
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>