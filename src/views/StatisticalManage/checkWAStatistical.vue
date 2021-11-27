<template>
  <div class="Sta_box">
    <div class="search">
      
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80" align="center">
        </el-table-column>
        <el-table-column prop="dataId" label="编号" align="center">
        </el-table-column>
        <el-table-column prop="name" label="姓名" align="center">
        </el-table-column>
        <el-table-column
          prop="departmentNumber"
          label="部门编号"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="date" label="日期" align="center">
        </el-table-column>
        <el-table-column
          prop="classType"
          label="班次"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="status" label="状态"  align="center">
          <template slot-scope="scope">
            <el-tag size="medium" v-if="scope.row.status == '正常'">{{
              scope.row.status
            }}</el-tag>
            <el-tag size="medium" type="danger" v-else>{{
              scope.row.status
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >查看</el-button
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
          name: "张三",
          dataId:"001",
          departmentNumber: "0001",
          departmentName: "开发部",
          date: "2022-10-15",
          classType: "01",
          status: "异常",
        },
        {
          name: "李四",
          dataId:"002",
          departmentNumber: "0001",
          departmentName: "开发部",
          date: "2022-10-15",
          classType: "01",
          status: "正常",
        },
      ],
    };
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.search{
  width: 100%;
  margin-bottom: 20px;
}
.Sta_box {
  padding: 16px;
  box-sizing: border-box;
}
</style>