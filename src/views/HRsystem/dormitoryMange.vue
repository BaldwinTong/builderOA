<template>
  <div>
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

      <div class="data-right">
        <el-tabs
          v-model="activeName"
          type="border-card"
          @tab-click="handleClick"
        >
          <el-tab-pane label="基本资料" name="1">
            <div class="detail">
              <div class="detail-card" v-if="id < 10 && id >= 1">
                <h1>宿舍资料</h1>
                <el-form ref="form" :model="buildingForm" label-width="120px">
                  <el-form-item label="宿舍大楼号：">
                    <el-input v-model="buildingForm.BuildingNum"></el-input>
                  </el-form-item>
                  <el-form-item label="宿舍大楼名：">
                    <el-input v-model="buildingForm.BuildingName"></el-input>
                  </el-form-item>
                  <el-form-item label="备注：">
                    <el-input
                      v-model="buildingForm.dec"
                      type="textarea"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div class="detail-card" v-if="id > 10 && id < 100">
                <h1>房间资料</h1>
                <el-form
                  ref="form"
                  :inline="true"
                  :model="roomForm"
                  label-width="120px"
                >
                  <el-form-item label="房间编号：">
                    <el-input v-model="roomForm.roomNum"></el-input>
                  </el-form-item>
                  <el-form-item label="房间名称">
                    <el-input v-model="roomForm.roomName"></el-input>
                  </el-form-item>
                  <el-form-item label="床位数">
                    <el-input v-model="roomForm.bedNum"></el-input>
                  </el-form-item>
                  <el-form-item label="应住人数">
                    <el-input v-model="roomForm.setNum"></el-input>
                  </el-form-item>
                  <el-form-item label="住宿性别">
                    <el-input v-model="roomForm.setGrender"></el-input>
                  </el-form-item>
                  <el-form-item label="住宿类型">
                    <el-input v-model="roomForm.setType"></el-input>
                  </el-form-item>
                  <el-form-item label="备注">
                    <el-input
                      v-model="roomForm.desc"
                      type="textarea"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div class="detail-card" v-if="id > 100 && id < 1000">
                <h1>床位资料</h1>
                <el-form
                  ref="form"
                  :inline="true"
                  :model="bedForm"
                  label-width="120px"
                >
                  <div>
                    <h5>床位资料</h5>
                    <el-form-item label="床位号">
                      <el-input v-model="bedForm.bedNum"></el-input>
                    </el-form-item>
                    <el-form-item label="是否空置">
                      <el-radio-group v-model="radio">
                        <el-radio :label="1">是</el-radio>
                        <el-radio :label="2">否</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="宿舍按金">
                      <el-input v-model="bedForm.deposit"></el-input>
                    </el-form-item>
                    <el-form-item label="房租">
                      <el-input v-model="bedForm.rent"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                      <el-input
                        class="stretchNone"
                        v-model="bedForm.desc"
                        type="textarea"
                        maxlength="60"
                        style="width: 447px"
                      ></el-input>
                    </el-form-item>
                  </div>
                  <div>
                    <h5>入住人员资料</h5>
                    <el-form-item label="住宿证号">
                      <el-input v-model="bedForm.getInId"></el-input>
                    </el-form-item>
                    <el-form-item label="入住日期">
                      <el-input v-model="bedForm.getInDate"></el-input>
                    </el-form-item>
                    <el-form-item label="编号">
                      <el-input v-model="bedForm.companyId"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                      <el-input v-model="bedForm.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="部门编号">
                      <el-input v-model="bedForm.departmentId"></el-input>
                    </el-form-item>
                    <el-form-item label="部门名称">
                      <el-input v-model="bedForm.departmentName"></el-input>
                    </el-form-item>
                    <el-form-item label="学历">
                      <el-input v-model="bedForm.qualifications"></el-input>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="空床情况" name="2">
            <div class="EmptybedData">
              <div class="emptySearch">
                <el-input type="text" v-model="emptyValue" clearable>
                  <i
                    slot="prefix"
                    class="el-input__icon el-icon-search"
                    style="color: #ccc"
                  ></i>
                </el-input>
                <el-button type="primary" class="emptyBtn">搜索</el-button>
              </div>
              <el-table :data="emptyBed" border>
                <el-table-column
                  type="index"
                  label="序号"
                  width="50px"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="dormiNum" label="宿舍号" align="center">
                </el-table-column>
                <el-table-column prop="roomNum" label="房间号" align="center">
                </el-table-column>
                <el-table-column prop="bedNum" label="床位号" align="center">
                </el-table-column>
                <el-table-column prop="desc" label="备注" align="center">
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="人事资料" name="3">
            <div class="emptySearch">
              <el-input type="text" v-model="peopleInfoValue" clearable>
                <i
                  slot="prefix"
                  class="el-input__icon el-icon-search"
                  style="color: #ccc"
                ></i>
              </el-input>
              <el-button type="primary" class="emptyBtn">搜索</el-button>
            </div>
            <div class="table">
              <el-table :data="tableData" border>
                <el-table-column
                  type="index"
                  label="序号"
                  width="60px"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="dormitoryNum"
                  label="宿舍号"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="roomNum" label="房间号" align="center">
                </el-table-column>
                <el-table-column prop="bedNum" label="床位号" align="center">
                </el-table-column>
                <el-table-column prop="userNumber" label="编号" align="center">
                </el-table-column>
                <el-table-column prop="userName" label="姓名" align="center">
                </el-table-column>
                <el-table-column
                  prop="departmentNum"
                  label="部门号码"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="departmentName"
                  label="部门名称"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="getInDate"
                  label="入住日期"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="desc" label="备注" align="center">
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="区域查询" name="4">
            <div class="emptySearch">
              <el-input type="text" v-model="domainValue" clearable>
                <i
                  slot="prefix"
                  class="el-input__icon el-icon-search"
                  style="color: #ccc"
                ></i>
              </el-input>
              <el-button type="primary" class="emptyBtn">搜索</el-button>
            </div>
            <div class="table">
              <el-table :data="domainTableData" border>
                <el-table-column
                  type="index"
                  label="序号"
                  width="60px"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="domainNum"
                  label="区域号"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="roomNum" label="房间号" align="center">
                </el-table-column>
                <el-table-column prop="roomName" label="房间名称" align="center">
                </el-table-column>
                <el-table-column prop="bedNum" label="床位数" align="center">
                </el-table-column>
                <el-table-column prop="shouldBe" label="应住数" align="center">
                </el-table-column>
                <el-table-column
                  prop="gender"
                  label="性别"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="typeof"
                  label="类别"
                  align="center"
                >
                </el-table-column>
                <el-table-column prop="desc" label="备注" align="center">
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="更多操作" name="5">
            <el-button type="primary" around>增加宿舍</el-button>
            <el-button type="primary" around>增加房间</el-button>
            <el-button type="primary" around>增加床位</el-button>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
      emptyValue: "",
      emptyBed: [
        {
          dormiNum: "001",
          roomNum: "001",
          bedNum: "001",
          desc: "",
        },
      ],
      peopleInfoValue: "",
      domainValue:'',
      domainTableData:[{
        domainNum:'02',
        roomNum:'A208',
        roomName:'A208',
        bedNum:'4',
        shouldBe:'4',
        gender:'女',
        typeof:'',
        desc:'',
      }],
      tableData: [
        {
          dormitoryNum: "001",
          roomNum: "A203",
          bedNum: "A203-上1",
          userNumber: "05525",
          userName: "王大锤",
          departmentNum: "5626",
          departmentName: "开发部",
          getInDate: "2021-10-10",
          desc: "无",
        },
      ],
      id: 1,
      radio: 2,
      treeData: [
        {
          id: 10000,
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
        getInId: "0002555",
        getInDate: "",
        companyId: "",
        userName: "",
        departmentId: "",
        departmentName: "",
        qualifications: "",
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleNodeClick(data) {
      console.log(data);
      this.id = data.id;
      if (data.id < 10 && data.id >= 1) {
        data.BuildingName = data.label;
        if (this.activeName == 4) {
          this.domainValue = data.label
        }
        this.buildingForm = data;
      } else if (data.id > 10 && data.id < 100) {
        this.roomForm = data;
      } else if (data.id > 100 && data.id < 1000) {
        this.roomForm = data;
      }

      if (this.activeName == 2) {
        this.emptyValue = data.label;
      } else if (this.activeName == 3) {
        this.peopleInfoValue = data.label;
      }
    },
  },
  created() {},
  components: {},
  computed: {},
};
</script>
<style lang="less" scoped>
.data-right {
  flex: 1;
  margin-top: 10px;
}

.box {
  display: flex;
  justify-content: space-between;
}

::v-deep.stretchNone {
  .el-textarea__inner {
    resize: none;
  }
}

.tree-area {
  width: 180px;
  min-height: 82vh;
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

// 空床查询
.emptySearch {
  width: 30%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  .emptyBtn {
    margin-left: 10px;
  }
}

.detail {
  flex: 1;
  overflow: auto;
  .detail-card {
    h1 {
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    h5 {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
}
</style>
