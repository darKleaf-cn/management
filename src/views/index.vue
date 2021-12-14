<template>
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <img src="../assets/image/leaf-blue.png" alt="" />
        <span>千叶商城</span>
      </div>
      <el-menu
        :default-active="$route.path"
        router
        unique-opened
        class="el-menu-vertical-demo"
        background-color="#30353a"
        text-color="#fff"
        active-text-color="#409eff"
      >
        <template v-for="item in navRouter">
          <el-menu-item
            v-if="item.isSingle"
            :index="item.children[0].path"
            :key="item.children[0].name"
          >
            <i :class="item.icon"></i>{{ item.children[0].name }}
          </el-menu-item>
          <el-submenu v-else :key="item.name" :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>{{ item.name }}
            </template>
            <el-menu-item
              v-for="child in item.children"
              :index="item.path + '/' + child.path"
              :key="child.name"
            >
              {{ child.name }}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>
          <el-link icon="el-icon-user" type="info" :underline="false"
            >你好，{{ this.username }}</el-link
          >
          <el-divider direction="vertical"></el-divider>
          <el-link type="primary" @click="handleClick">退出登录</el-link>
        </div>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from 'vuex';
import { logout } from '@/api/user';
import { removeStore } from '@/util/storage';
import Message from '@/util/message';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['userId', 'username']),
    navRouter() {
      return this.$router.options.routes.filter((router) => {
        return !router.hidden;
      });
    }
  },
  methods: {
    async handleClick() {
      const params = {
        userId: this.userId
      };
      const res = await logout(params);
      if (res.code === 200) {
        removeStore('user');
        this.$router.push({
          path: '/login'
        });
      } else {
        Message('error', res.message);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #30353a;
    .logo {
      height: 60px;
      color: #409eff;
      display: flex;
      align-items: center;
      justify-content: center;
      // font-size: 120%;
      img {
        margin: 0 5px 0 0;
        width: 30px;
      }
    }
    > .el-menu {
      border: none;
      // > li {
      //   border-bottom: 1px solid #545c64;
      // }
      .is-active.el-menu-item {
        border-left: 5px solid #409eff;
      }
    }
  }
  .el-container {
    background-color: #ffffff;
    .el-header {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      background-color: #ffffff;
      color: #ffffff;
    }
    .el-main {
      background-color: #ebeef5;
    }
  }
}
</style>
