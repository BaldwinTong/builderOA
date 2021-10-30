<template>
  <div>
    <el-dialog
      fullscreen
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <el-page-header @back="goBack" class="back"> </el-page-header>

      <div class="content">
        <div class="left">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
            highlight-current
          ></el-tree>
        </div>

        <div class="rigth">
          <h2>单据基本资料表</h2>
          <div class="form">
            <el-form :inline="true" label-position="left" :model="form" class="demo-form-inline">
              <el-form-item label="单据编码">
                <el-input
                  v-model="form.billNumber"
                  placeholder="单据编码"
                ></el-input>
              </el-form-item>
              <el-form-item label="排序">
                <el-input v-model="form.order" placeholder="排序"></el-input>
              </el-form-item>
              <el-form-item label="单据名称">
                <el-input
                  v-model="form.billName"
                  placeholder="单据名称"
                ></el-input>
              </el-form-item>
              <el-form-item label="有薪假">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="分类">
                <el-input v-model="form.classify" placeholder="分类"></el-input>
              </el-form-item>
              
              <el-form-item label="小时数" >
                <el-input class="hour-inpt" v-model="form.hour"></el-input>
                <i class="decs">默认每天的小时数(同时在单据录入时默认最长时间)</i>
              </el-form-item>
              <el-form-item label="说明">
                <el-input v-model="form.remark"></el-input>
              </el-form-item>
              
            </el-form>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    isshow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogVisible: false,
      treeData: [
        {
          label: "请假",
          children: [
            {
              label: "事假",
            },
            {
              label: "病假",
            },
            {
              label: "调休",
            },
          ],
        },
        {
          label: "加班",
          children: [
            {
              label: "平时加班",
            },
            {
              label: "休息加班",
            },
            {
              label: "节日加班",
            },
          ],
        },
        {
          label: "特殊加班",
          children: [
            {
              label: "特殊加班",
            },
          ],
        },
        {
          label: "销假",
          children: [
            {
              label: "销假",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },

      form: {
        billNumber: "",
        order: "",
        billName: "",
        classify: "",
        type: [],
        remark:"",
      },
    };
  },
  created() {
    this.dialogVisible = this.isshow;
  },
  methods: {
    handleClose() {
      this.$emit("changetype", false);
    },
    goBack() {
      this.$emit("changetype", false);
    },
    handleNodeClick(data) {
      console.log(data);
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
/deep/ .el-dialog__body {
  padding: 0 20px;
}

.back {
  margin-bottom: 18px;
}

.content {
  width: 95%;
  height: 87vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left {
    width: 200px;
    height: 87vh;
    padding: 6px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
    .el-tree /deep/ .el-tree-node__expand-icon.expanded {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    //有子节点 且未展开
    .el-tree /deep/ .el-icon-caret-right:before {
      background: url("../../../assets/jia.png") no-repeat 0 3px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      font-size: 16px;
      background-size: 16px;
    }
    //有子节点 且已展开
    .el-tree
      /deep/
      .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
      background: url("../../../assets/jian.png") no-repeat 0 3px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      font-size: 16px;
      background-size: 16px;
    }
    //没有子节点
    .el-tree /deep/.el-tree-node__expand-icon.is-leaf::before {
      background: url("../../../assets/you.png") no-repeat 0 3px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      font-size: 16px;
      background-size: 16px;
    }
  }
  .rigth {
    flex: 1;
    padding: 0 16px;
    h2 { 
      width: 100%;
      text-align: center;
      line-height: 40px;
      margin: 16px 0;
      
    }
    .decs{
      margin-left: 10px;
    }
    .hour-inpt{
      width: 100px;
    }
    .el-form-item{
      margin-left: 16px;
    }
  }
}
</style>