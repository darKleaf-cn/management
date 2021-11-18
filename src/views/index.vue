<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        :default-active="$route.path"
        router
        unique-opened
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template v-for="item in navRouter">
          <el-menu-item
            v-if="item.isSingle"
            :index="item.path"
            :key="item.children[0].name"
          >
            <i :class="item.iconCls"></i>{{ item.children[0].name }}
          </el-menu-item>
          <el-submenu v-else :key="item.name" :index="item.path">
            <template slot="title">
              <i :class="item.iconCls"></i>{{ item.name }}
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
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
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

<style>
</style>
