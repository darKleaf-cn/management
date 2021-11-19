<template>
  <div class="commodity-manage">
    <el-form
      :inline="true"
      :model="searchForm"
      :rules="searchRoles"
      ref="searchForm"
      label-width="100px"
    >
      <el-form-item label="商品名称">
        <el-input
          v-model="searchForm.commodityName"
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品类型">
        <el-select
          v-model="searchForm.commodityType"
          placeholder="请选择商品类型"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          v-model="searchForm.commodityName"
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          v-model="searchForm.commodityName"
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          v-model="searchForm.commodityName"
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          v-model="searchForm.commodityName"
          placeholder="请输入商品名称"
        ></el-input>
      </el-form-item>
      <el-form-item class="form-button">
        <el-button type="primary" @click="submitForm">搜索</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection"> </el-table-column>
      <el-table-column label="日期">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommodityManage',
  data() {
    return {
      searchForm: {},
      searchRoles: {},
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    };
  },
  methods: {
    submitForm() {},
    resetForm() {}
  }
};
</script>

<style lang="scss">
.commodity-manage {
  .el-form {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    .el-form-item {
      div.el-form-item__content {
        width: 300px;
      }
    }
    .form-button {
      // display: block;
      // width: 400px;
      display: flex;
      flex-direction: row-reverse;
      div.el-form-item__content {
        width: 400px;
      }
    }
  }
  .pagination {
    background-color: #ffffff;
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>