<template>
  <div>
    <!-- 职务 -->
    <div class="item">
      <div class="duties" v-if="data.length > 0">
        <el-tree :data="data" node-key="id" accordion default-expand-all>
        </el-tree>
      </div>
      <!-- v-if="showDutiesForm" -->
      <div class="content-right" >
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="departmenNumber" label="部门编号" align="center">
          </el-table-column>
          <el-table-column prop="departmentName" label="部门" align="center">
          </el-table-column>
          <el-table-column prop="director" label="部门负责人" align="center">
          </el-table-column>
          <el-table-column prop="Headcount" label="编制人数" align="center">
          </el-table-column>
          <el-table-column prop="Actualcount" label="实际人数" align="center">
          </el-table-column>
          <el-table-column prop="superiorDepartment" label="上级部门" align="center">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      showDutiesForm: false,
      data: [
        {
          label: "波公司",
          children: [
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
        },
      ],

      tableData: [
        {
          departmenNumber: "001",
          departmentName: "销售部",
          Headcount:'10',
          Actualcount:'5',
          director:'Baldwin',
          superiorDepartment:'无',
        },
      ],
    };
  },
  mounted() {},
  methods: {},
  created() {},
  components: {},
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

.icont {
  margin-left: 50px;
}

.iconfont {
  font-size: 16px;
}

.noData {
  width: 100%;
  text-align: center;
}

.dutiesForm {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.inpt {
  width: 300px;
}
</style>