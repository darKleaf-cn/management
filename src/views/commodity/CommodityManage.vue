<template>
  <div class="commodity-manage">
    <el-form
      :inline="true"
      :model="searchForm"
      :rules="searchRoles"
      ref="searchForm"
      label-width="90px"
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
      <el-form-item label="商品状态">
        <el-select
          v-model="searchForm.commodityStatus"
          placeholder="请选择商品状态"
        >
          <el-option label="上架" value="1"></el-option>
          <el-option label="待上架" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="form-button">
        <el-button type="primary" @click="submitForm">搜索</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="operation">
      <el-button type="primary" icon="el-icon-upload2">上架</el-button>
      <el-button type="primary" icon="el-icon-download">下架</el-button>
      <el-button type="danger" icon="el-icon-edit">删除</el-button>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="日期">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
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
import { commodityQueryList } from '@/api/commodity';
export default {
  name: 'CommodityManage',
  data() {
    return {
      searchForm: {
        commodityName: '',
        commodityType: '',
        commodityStatus: ''
      },
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
  },
  created() {
    commodityQueryList().then((res) => {
      console.log(res);
    });
  }
};
</script>

<style lang="scss">
.commodity-manage {
  .el-form {
    background-color: #ffffff;
    padding: 20px;
    padding-bottom: 10px;
    padding-left: 0;
    margin-bottom: 20px;
    overflow: hidden;
    .el-form-item {
      float: left;
      margin-bottom: 10px;
    }
    .form-button {
      float: right;
      display: flex;
    }
  }
  .operation {
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    .el-button-group {
      margin-right: 20px;
    }
  }
  .table {
    background-color: #ffffff;
    padding-left: 20px;
  }
  .pagination {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>