<template>
  <div class="commodity-manage">
    <el-form
      :inline="true"
      :model="searchForm"
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
        :data="commodityData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="commodityId" label="商品编号"></el-table-column>
        <el-table-column prop="commodityName" label="商品名称">
        </el-table-column>
        <el-table-column label="商品状态" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.commodityStatus" type="success"
              >上架</el-tag
            >
            <el-tag v-else type="warning">待上架</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="commodityType" label="商品类型">
        </el-table-column>
        <el-table-column prop="commodityPrice" label="商品价格">
        </el-table-column>
        <el-table-column label="商品图片"> </el-table-column>
        <el-table-column prop="commodityDescribe" label="商品描述">
          <template slot-scope="scope">
            <span>
              {{
                scope.row.commodityDescribe.length > 10
                  ? scope.row.commodityDescribe.slice(0, 10) + '...'
                  : scope.row.commodityDescribe
              }}
            </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        :page-sizes="[5, 10, 15, 20]"
        :page-size="searchForm.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        :current-page.sync="searchForm.page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { commodityQueryList } from '@/api/commodity';
import Message from '@/util/message';
export default {
  name: 'CommodityManage',
  data() {
    return {
      searchForm: {
        commodityName: '',
        commodityType: '',
        commodityStatus: '',
        page: 1,
        size: 10
      },
      total: 0,
      commodityData: []
    };
  },
  methods: {
    submitForm() {
      this.queryList();
    },
    resetForm() {
      this.searchForm = {
        commodityName: '',
        commodityType: '',
        commodityStatus: '',
        page: 1,
        size: 10
      };
      this.queryList();
    },
    handleSizeChange(val) {
      this.searchForm.size = val;
      this.queryList();
    },
    handleCurrentChange(val) {
      this.searchForm.page = val;
      this.queryList();
    },
    async queryList() {
      const params = this.searchForm;
      const res = await commodityQueryList(params);
      if (res.code === '200') {
        this.total = res.result.total;
        this.commodityData = res.result.data;
      } else {
        Message('error', res.message);
      }
    }
  },
  created() {
    this.queryList();
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