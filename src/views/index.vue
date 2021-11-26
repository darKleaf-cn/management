<template>
  <el-container>
    <el-aside width="200px">
      <div class="logo">
        <i class="el-icon-s-shop"></i>
        后台管理系统
      </div>
      <el-menu
        :default-active="$route.path"
        router
        unique-opened
        class="el-menu-vertical-demo"
        background-color="#545c64"
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
          <el-link icon="el-icon-user" type="info" :underline="false">你好，管理员</el-link>
          <el-divider direction="vertical"></el-divider>
          <el-link type="primary">退出登录</el-link>
        </div>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {};
  },
  computed: {
    navRouter() {
      return this.$router.options.routes.filter((router) => {
        return !router.hidden;
      });
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #545c64;
    .logo {
      height: 60px;
      color: #ffffff;
      line-height: 60px;
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
