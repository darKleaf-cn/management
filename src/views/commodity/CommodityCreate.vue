<template>
  <div class="commodity-create">
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="商品名称" prop="commodityName">
        <el-input v-model="form.commodityName"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="commodityDescribe">
        <el-input v-model="form.commodityDescribe"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="commodityCatalog">
        <el-cascader
          v-model="form.commodityCatalog"
          :options="catalogList"
          :props="{
            value: 'catalogId',
            label: 'catalogName',
            checkStrictly: 'true'
          }"
          :show-all-levels="false"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="商品价格" prop="commodityPrice">
        <el-input v-model="form.commodityPrice" type="number"></el-input>
      </el-form-item>
      <el-form-item label="商品图片" align="center"> </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">立即创建</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        commodityName: '',
        commodityDescribe: '',
        commodityCatalog: '',
        commodityPrice: ''
      },
      rules: {},
      catalogList: []
    };
  },
  methods: {
    submit() {},
    reset() {}
  }
};
</script>

<style lang="scss" scoped>
.commodity-create {
  display: flex;
  justify-content: center;
  .el-form {
    background-color: #ffffff;
    width: 800px;
    padding: 20px;
    text-align: left;
  }
}
</style>