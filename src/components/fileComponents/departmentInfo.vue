<template>
  <div>
    <!-- 职务 -->
    <div class="item">
      <div class="duties" v-if="treeData.length > 0">
        <el-tree
          :data="treeData"
          node-key="id"
          ref="tree"
          default-expand-all
          :props="defaultProps"
          @node-click="handleNodeClick"
          highlight-current
        >
        </el-tree>
      </div>
      <!-- v-if="showDutiesForm" -->
      <div class="content-right">
        <el-row class="elrow-btn">
          <el-button type="primary" round @click="add">添加</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="DeptIdNum" label="部门编号" align="center">
          </el-table-column>
          <el-table-column prop="label" label="部门" align="center">
          </el-table-column>
          <el-table-column prop="DeptPic" label="部门负责人" align="center">
          </el-table-column>
          <el-table-column prop="plantNum" label="编制人数" align="center">
          </el-table-column>
          <el-table-column prop="actualNum" label="实际人数" align="center">
          </el-table-column>
          <!-- <el-table-column prop="superiorDept" label="上级部门" align="center">
          </el-table-column> -->
        </el-table>
      </div>
    </div>
    <!-- 弹窗 -->
    <dialogs
      :showDialogs="showDialogs"
      :treeData="treeData"
      :treeDataChildren="tableData"
      @closeDialog="getComponentsType"
    ></dialogs>
  </div>
</template>

<script>
import dialogs from "../dialogComponents/adddepartment.vue";
export default {
  props: {},
  components: {
    dialogs,
  },
  data() {
    return {
      showDutiesForm: false,
      showDialogs: false,
      treeDatachildren: [],
      treeData: [
        {
          id: "001",
          label: "公司",
          children: [
            {
              id: "1",
              label: "销售部",
              plantNum: "10",
              actualNum: "5",
              DeptPic: "Baldwin",
              superiorDept: "公司",
              DeptIdNum: "001",
              children: [
                {
                  id: "11",
                  label: "成员组1",
                  superiorNumber: "001",
                  remark: "xxxxx",
                  plantNum: "10",
                  actualNum: "5",
                  DeptPic: "Baldwin",
                  superiorDept: "销售部",
                  DeptIdNum: "001",
                },
                {
                  id: "12",
                  label: "成员组2",
                  superiorNumber: "002",
                  remark: "xxxxx",
                  plantNum: "10",
                  actualNum: "5",
                  DeptPic: "Baldwin",
                  superiorDept: "销售部",
                  DeptIdNum: "001",
                },
              ],
            },
            {
              id: "2",
              label: "人事部",
              plantNum: "10",
              actualNum: "5",
              DeptPic: "Baldwin",
              superiorDept: "公司",
              DeptIdNum: "001",
              children: [
                {
                  id: "21",
                  label: "成员组3",
                  superiorNumber: "015",
                  remark: "xxxxx",
                  plantNum: "10",
                  actualNum: "5",
                  DeptPic: "Baldwin",
                  superiorDept: "人事部",
                  DeptIdNum: "001",
                },
                {
                  id: "22",
                  label: "成员组4",
                  superiorNumber: "017",
                  remark: "xxxxx",
                  plantNum: "10",
                  actualNum: "5",
                  DeptPic: "Baldwin",
                  superiorDept: "人事部",
                  DeptIdNum: "001",
                },
              ],
            },
            {
              id: "3",
              label: "开发部",
              plantNum: "10",
              actualNum: "5",
              DeptPic: "Baldwin",
              superiorDept: "公司",
              DeptIdNum: "001",
              children: [
                {
                  id: "31",
                  label: "成员组5",
                  superiorNumber: "020",
                  remark: "xxxxx",
                  plantNum: "10",
                  actualNum: "5",
                  DeptPic: "Baldwin",
                  superiorDept: "开发部",
                  DeptIdNum: "001",
                },
                {
                  id: "32",
                  label: "成员组6",
                  superiorNumber: "021",
                  remark: "xxxxx",
                  plantNum: "10",
                  actualNum: "5",
                  DeptPic: "Baldwin",
                  superiorDept: "开发部",
                  DeptIdNum: "001",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      tableData: [],
      newTreeData: {},
    };
  },
  created() {
    this.changeData();
  },
  mounted() {},
  methods: {
    add() {
      this.showDialogs = true;
    },

    handleNodeClick(data) {
      console.log(data);
    },

    changeData() {
      this.tableData = this.treeData[0].children;
    },

    getComponentsType(e, data) {
      console.log(data);
      
      this.showDialogs = e;
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .content-right {
    margin-left: 16px;
    flex: 1;
  }
}
.duties {
  width: 180px;
  height: 82vh;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.dutiesForm {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.elrow-btn {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>