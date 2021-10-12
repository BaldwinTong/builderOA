<template>
  <div>
    <div class="tabs"></div>
    <div class="box">
      <div class="tree-area">
        <el-tree
          highlight-current
          :data="treeData"
          :props="defaultProps"
          node-key="id"
          @node-click="handleNodeClick"
          :default-expanded-keys="[1]"
        >
        </el-tree>
      </div>
      <div class="detail">
        <div class="detail-card" v-if="id == 1">
          <h1>宿舍资料</h1>
          <el-form ref="form" :model="buildingForm" label-width="120px">
            <el-form-item label="宿舍大楼号：" style="width: 420px">
              <el-input v-model="buildingForm.BuildingNum"></el-input>
            </el-form-item>
            <el-form-item label="宿舍大楼名：" style="width: 420px">
              <el-input v-model="buildingForm.BuildingName"></el-input>
            </el-form-item>
            <el-form-item label="备注：" style="width: 420px">
              <el-input v-model="buildingForm.dec" type="textarea"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="detail-card" v-if="id == 2">
          <h1>房间资料</h1>
          <el-form ref="form" :model="roomForm" label-width="120px">
            <el-form-item label="房间编号：" style="width: 420px">
              <el-input v-model="roomForm.roomNum"></el-input>
            </el-form-item>
            <el-form-item label="房间名称" style="width: 420px">
              <el-input v-model="roomForm.roomName"></el-input>
            </el-form-item>
            <el-form-item label="床位数" style="width: 420px">
              <el-input v-model="roomForm.bedNum"></el-input>
            </el-form-item>
            <el-form-item label="应住人数" style="width: 420px">
              <el-input v-model="roomForm.setNum"></el-input>
            </el-form-item>
            <el-form-item label="住宿性别" style="width: 420px">
              <el-input v-model="roomForm.setGrender"></el-input>
            </el-form-item>
            <el-form-item label="住宿类型" style="width: 420px">
              <el-input v-model="roomForm.setType"></el-input>
            </el-form-item>
            <el-form-item label="备注" style="width: 420px">
              <el-input v-model="roomForm.desc" type="textarea"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="detail-card" v-if="id == 3">
          <h1>床位资料</h1>
          <el-form
            ref="form"
            :inline="true"
            :model="bedForm"
            label-width="120px"
          >
            <div>
              <h5>床位资料</h5>
              <el-form-item label="床位号" style="width: 420px">
                <el-input v-model="bedForm.bedNum"></el-input>
              </el-form-item>
              <el-form-item label="是否空置" style="width: 420px">
                <el-radio-group v-model="radio">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="2">否</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="宿舍按金" style="width: 420px">
                <el-input v-model="bedForm.deposit"></el-input>
              </el-form-item>
              <el-form-item label="房租" style="width: 420px">
                <el-input v-model="bedForm.rent"></el-input>
              </el-form-item>
              <el-form-item label="备注" style="width: 420px">
                <el-input v-model="bedForm.desc" type="textarea"></el-input>
              </el-form-item>
            </div>
            <div>
              <h5>入住人员资料</h5>
              <el-form-item label="住宿证号" style="width: 420px">
                <el-input v-model="bedForm.getInId"></el-input>
              </el-form-item>
              <el-form-item label="入住日期" style="width: 420px">
                <el-input v-model="bedForm.getInDate"></el-input>
              </el-form-item>
              <el-form-item label="编号" style="width: 420px">
                <el-input v-model="bedForm.companyId"></el-input>
              </el-form-item>
              <el-form-item label="姓名" style="width: 420px">
                <el-input v-model="bedForm.userName"></el-input>
              </el-form-item>
              <el-form-item label="部门编号" style="width: 420px">
                <el-input v-model="bedForm.departmentId"></el-input>
              </el-form-item>
              <el-form-item label="部门名称" style="width: 420px">
                <el-input v-model="bedForm.departmentName"></el-input>
              </el-form-item>
              <el-form-item label="学历" style="width: 420px">
                <el-input v-model="bedForm.qualifications"></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 3,
      radio: 2,
      treeData: [
        {
          label: "宿舍资料",
          children: [
            {
              id: 1,
              label: "A栋",
              BuildingNum: "001",
              children: [
                {
                  id: 11,
                  label: "A201",
                  roomNum: "A201",
                  roomName: "A201",
                  bedNum: 4,
                  setNum: 4,
                  setGrender: "男",
                  setType: "",
                  desc: "这是一个男生宿舍",
                  children: [
                    {
                      id: 111,
                      label: "A201-上1",
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              label: "B栋",
              BuildingNum: "002",
              children: [
                {
                  id: 22,
                  label: "B101",
                  roomNum: "B101",
                  roomName: "B101",
                  bedNum: 4,
                  setNum: 4,
                  setGrender: "女",
                  setType: "",
                  desc: "这是一个女生宿舍",
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
      buildingForm: {
        BuildingNum: "",
        BuildingName: "",
        dec: "",
      },
      roomForm: {
        roomNum: "",
        roomName: "",
        bedNum: 0,
        setNum: 0,
        setGrender: "",
        setType: "",
        desc: "",
      },
      bedForm: {
        bedNum: "上1",
        vacant: true,
        deposit: 100,
        rent: 500,
        desc: "",
        getInId:'0002555',
        getInDate:'',
        companyId:'',
        userName:"",
        departmentId:"",
        departmentName:'',
        qualifications:'',
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      if (data.id) {
        if (data.id < 10) {
          this.id = 1;
          data.BuildingName = data.label;
          this.buildingForm = data;
        } else if (data.id > 10 && data.id < 100) {
          this.id = 2;
          console.log(this.id);
          this.roomForm = data;
        } else {
          console.log(212313123);
          this.id = 2;
          console.log(this.id);
          this.roomForm = data;
        }
      } else {
        this.id = 0;
      }
    },
  },
  created() {},
  components: {},
  computed: {},
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
}
.tree-area {
  width: 180px;
  height: 90vh;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid slategrey;
  margin: 10px 10px 0;
  border-radius: 8px;
}
.el-tree /deep/ .el-tree-node__expand-icon.expanded {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
//有子节点 且未展开
.el-tree /deep/ .el-icon-caret-right:before {
  background: url("../../assets/jia.png") no-repeat 0 3px;
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  background-size: 16px;
}
//有子节点 且已展开
.el-tree /deep/ .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
  background: url("../../assets/jian.png") no-repeat 0 3px;
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  background-size: 16px;
}
//没有子节点
.el-tree /deep/.el-tree-node__expand-icon.is-leaf::before {
  background: url("../../assets/fangjianshu.png") no-repeat 0 3px;
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  font-size: 16px;
  background-size: 16px;
}

.detail {
  flex: 1;
  height: 90vh;
  margin: 10px 10px 0;
  border: 1px solid #ccc;
  overflow: auto;
  .detail-card {
    // text-align: center;
    h1 {
      height: 40px;
      line-height: 40px;
      margin: 20px 0;
    }
  }
}
</style>
