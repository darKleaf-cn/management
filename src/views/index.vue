<template>
  <el-container>
    <el-header>
      <div>
        <i class="el-icon-s-shop"></i>
        后台管理系统
      </div>
      <div>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          router
          unique-opened
          class="el-menu-vertical-demo"
          background-color="#303133"
          text-color="#fff"
          active-text-color="#ffd04b"
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
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #303133;
    border-bottom: 1px solid #545c64;
  }
  .el-container {
    height: 100%;
    background-color: #303133;
    .el-aside {
      // border-right: 1px solid #545c64;
      overflow: hidden;
      > .el-menu {
        border: none;
        > li {
          border-bottom: 1px solid #545c64;
        }
        .is-active.el-menu-item {
          border-right: 2px solid #ffd04b;
        }
      }
    }
    .el-main {
      background-color: #545c64;
    }
  }
}
</style>
