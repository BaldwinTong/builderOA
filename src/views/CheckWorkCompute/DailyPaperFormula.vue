<template>
  <div class="daily_page">
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="name" label="项目名" align="center">
        </el-table-column>
        <el-table-column prop="formula" label="公式" align="center"> </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑公式</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2022-05-02",
          name: "项目1",
          formula: "迟到时间大于10，旷工时间<=60",
        }
      ],
    };
  },
  created() {},
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.daily_page {
  padding: 16px;
  box-sizing: border-box;
}
</style>