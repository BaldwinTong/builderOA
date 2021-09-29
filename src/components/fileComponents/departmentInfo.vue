<template>
  <div>
    <!-- 职务 -->
    <div class="item">
      <div class="duties" v-if="treeData.length > 0">
        <el-tree :data="treeData" node-key="id" accordion default-expand-all>
        </el-tree>
      </div>
      <!-- v-if="showDutiesForm" -->
      <div class="content-right">
        <el-row class="elrow-btn">
          <el-button type="primary" round @click="add">添加</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column
            prop="departmenNumber"
            label="部门编号"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="departmentName" label="部门" align="center">
          </el-table-column>
          <el-table-column prop="director" label="部门负责人" align="center">
          </el-table-column>
          <el-table-column prop="Headcount" label="编制人数" align="center">
          </el-table-column>
          <el-table-column prop="Actualcount" label="实际人数" align="center">
          </el-table-column>
          <el-table-column
            prop="superiorDepartment"
            label="上级部门"
            align="center"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 弹窗 -->
    <dialogs :showDialogs="showDialogs" @closeDialog="getComponentsType"></dialogs>
  </div>
</template>

<script>
import dialogs from '../dialogComponents/adddepartment.vue'
export default {
  props: {},
  components:{
    dialogs
  },
  data() {
    return {
      showDutiesForm: false,
      showDialogs:false,
      treeData: [
        {
          id: "1",
          label: "销售部",
          children: [
            {
              id: "1-1",
              label: "成员组",
              superiorNumber: "001",
              remark: "xxxxx",
              children: [
                {
                  id: "1-1-1",
                  label: "成员A",
                },
              ],
            },
            {
              id: "1-2",
              label: "成员组",
              superiorNumber: "002",
              remark: "xxxxx",
            },
          ],
        },
        {
          id: "2",
          label: "人事部",
          children: [
            {
              id: "2-1",
              label: "成员组",
              superiorNumber: "015",
              remark: "xxxxx",
            },
            {
              id: "2-2",
              label: "成员组",
              superiorNumber: "017",
              remark: "xxxxx",
            },
          ],
        },
        {
          id: "3",
          label: "开发部",
          children: [
            {
              id: "3-1",
              label: "成员组",
              superiorNumber: "020",
              remark: "xxxxx",
            },
            {
              id: "3-2",
              label: "成员组",
              superiorNumber: "021",
              remark: "xxxxx",
            },
          ],
        },
      ],

      tableData: [
        {
          departmenNumber: "001",
          departmentName: "销售部",
          Headcount: "10",
          Actualcount: "5",
          director: "Baldwin",
          superiorDepartment: "无",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    add(){
      this.showDialogs = true
    },
    getComponentsType(e){
      console.log(e);
      this.showDialogs = e
    }
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