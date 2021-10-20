<template>
  <div>
    <div class="searchTop">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchText"
      >
      </el-input>
      <el-button class="searchBtn" type="primary" @click="search"
        >搜索</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople('日休')"
        >日休人员</el-button
      >
      <el-button class="searchBtn" type="primary" @click="searchPeople('周休')"
        >周休人员</el-button
      >
    </div>
    <div class="data">
      <div>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column type="index" label="序号" width="60" align="center">
          </el-table-column>
          <el-table-column prop="name" label="姓名" align="center">
          </el-table-column>
          <el-table-column prop="gender" label="性别" align="center">
          </el-table-column>
          <el-table-column prop="duties" label="职务" align="center">
          </el-table-column>
          <el-table-column prop="department" label="部门" align="center">
          </el-table-column>
          <el-table-column prop="type" label="休息日方案" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 编辑弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div class="content">
        
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchText: "",
      tableData: [],
      originList: [
        {
          date: "2016-05-02",
          name: "王小虎",
          gender: "男",
          duties: "普通员工",
          department: "开发部",
          type: "日休",
        },
        {
          date: "2016-05-02",
          name: "王da虎",
          gender: "男",
          duties: "普通员工",
          department: "开发部",
          type: "周休",
        },
      ],

      //弹窗
      dialogVisible:false
    };
  },
  created() {
    this.getData();
  },
  methods: {
    search() {
      this.getData();
    },
    getData() {
      this.tableData = this.originList;
    },
    searchPeople(type) {
      var list = [];
      this.originList.forEach((item) => {
        if (item.type == type) {
          list.push(item);
        }
      });
      this.tableData = list;
    },
    handleEdit(i, row) {
      this.dialogVisible = true
      console.log(row);
      this.tableData.forEach((item, j) => {
        if (i == j) {
          console.log(item);
        }
      });
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.searchTop {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  .el-input {
    width: 220px;
  }
  /deep/.el-icon-search {
    color: #ccc;
  }
  .searchBtn {
    margin-left: 20px;
  }
}
</style>