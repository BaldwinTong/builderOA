<template>
  <div>
    <el-container class="container">
      <el-header>
        <div class="crumbs">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Hardware' }">硬件管理</el-breadcrumb-item>
            <el-breadcrumb-item>硬件档案</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-tree
            :data="treeData"
            :props="defaultProps"
            @node-click="handleNodeClick"
          ></el-tree>
        </el-aside>
        <el-main>
          <p class="title">硬件档案</p>
          <div class="fileContent">
            <div class="file-item">
              <p class="little-title">硬件基本资料</p>
              <div class="write-item">
                <div class="items-left">
                  <p class="label redcolor">出厂机号(必填)</p>
                  <input type="text" class="inpt" v-model="mechineNum" />
                  <!-- <el-input v-model="mechineNum" size="mini" placeholder="请输入内容"></el-input> -->
                </div>
                <div class="items-right">
                  <span>机器有效</span>
                  <el-checkbox v-model="checked"></el-checkbox>
                  <span class="desc">如果不选，将无法对机器进行读写操作</span>
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label">放置地点</p>
                  <input type="text" class="inpt" v-model="putPlace" />
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label redcolor">标记符(必填)</p>
                  <input type="text" class="inpt" v-model="symbol" />
                </div>
                <div class="items-right">
                  <span class="desc"
                    >以 kq 考勤机器，jc 就餐机器 dc 定餐机器 mj
                    门禁机器字母开头</span
                  >
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label redcolor">机器类型(必填)</p>
                  <input type="text" class="inpt" v-model="mechineType" />
                </div>
                <div class="items-right">
                  <span class="desc">针对不同的机器填写</span>
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label redcolor">机器类别</p>
                  <el-radio-group class="inpt" v-model="radio">
                    <el-radio :label="1">考勤机</el-radio>
                    <el-radio :label="2">门禁机</el-radio>
                    <el-radio :label="3">消费机</el-radio>
                    <el-radio :label="4">指纹机</el-radio>
                  </el-radio-group>
                </div>
                <div class="items-right">
                  <span class="desc">针对不同的机器使用不同的通讯口</span>
                </div>
              </div>
            </div>
          </div>
          <div class="fileContent">
            <div class="file-item">
              <p class="little-title">通讯参数</p>
              <div class="write-item">
                <div class="items-left">
                  <p class="label">通讯方式</p>
                  <el-select
                    v-model="value"
                    clearable
                    size="mini"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="items-right">
                  <span class="desc"
                    >其中ZK指纹机和HS门禁的某种机型必须指定</span
                  >
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label">ip地址</p>
                  <input type="text" class="inpt" v-model="mechineIp" />
                </div>
                <div class="items-right">
                  <span class="desc"
                    >针对zR旨纹机和HS门禁的某种TCPIP机型使用</span
                  >
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label">端口</p>
                  <input type="text" class="inpt" v-model="port" />
                </div>
                <div class="items-right">
                  <span class="desc"
                    >如果是ZK指纹机填端口，如果是H加S门禁TCPIF方式的填连接密码</span
                  >
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label">波特率</p>
                  <input type="text" class="inpt" v-model="Bps" />
                </div>
                <div class="items-right">
                  <span class="desc">ZK指纹机专用</span>
                </div>
              </div>
            </div>
          </div>
          <div class="fileContent">
            <div class="file-item">
              <p class="little-title">其它选项</p>
              <div class="write-item">
                <div class="items-left">
                  <p class="label other">是否需要清除数据</p>
                  <el-checkbox v-model="clearData"></el-checkbox>
                </div>
                <div class="items-right">
                  <span class="desc"
                    >针对个别机型无法自动洁除数据的机器使用</span
                  >
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label other">允许实时监控</p>
                  <el-checkbox v-model="RealTime"></el-checkbox>
                </div>
                <div class="items-right">
                  <span class="desc">有些机型不一定支持实时监控</span>
                </div>
              </div>
              <div class="write-item">
                <div class="items-left">
                  <p class="label other">支持中文姓名</p>
                  <el-checkbox v-model="SupportChineseName"></el-checkbox>
                </div>
                <div class="items-right">
                  <span class="desc">有些机型不一定支持中文姓名</span>
                </div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
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
      checked: true,
      clearData: false,
      RealTime: false,
      SupportChineseName: false,
      mechineNum: "02",
      putPlace: "食堂",
      symbol: "025",
      mechineType: "01",
      mechineIp: "192.163.181.1",
      port: "8000",
      Bps: "19600",
      radio: 3,
      value: "COM235、445",
      options: [
        {
          value: "COM232、485",
          label: "COM232、485",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.crumbs {
  height: 60px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

.container {
  height: 100% !important;
  padding: 0 8px;
  box-sizing: border-box;
}

.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 12px;
  box-sizing: border-box;
  .title {
    width: 100%;
    text-align: center;
    font-size: 28px;
  }
  .fileContent {
    width: 100%;
    min-height: 90px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 14px;
    box-sizing: border-box;
    margin-top: 20px;
    position: relative;
    .little-title {
      width: 100px;
      height: 24px;
      line-height: 24px;
      position: absolute;
      top: -12px;
      left: 10px;
      background-color: #e9eef3;
      text-align: center;
      font-size: 14px;
    }
    .write-item {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-bottom: 10px;
      .items-left {
        display: flex;
        align-items: center;
        .label {
          width: 102px;
          text-align: right;
          padding: 4px;
          box-sizing: border-box;
        }
        .other {
          width: 133px;
        }
        .redcolor {
          color: red;
        }
        .inpt {
          margin-left: 10px;
          height: 28px;
          padding: 0 4px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
        }
        /deep/.el-input--mini .el-input__inner {
          width: 149px !important;
          margin-left: 10px;
          border-color: #8f8f9d;
          border-radius: 2px;
        }
      }
      .items-right {
        margin-left: 48px;
        height: 28px;
        span {
          margin-right: 6px;
        }
        .desc {
          color: #070782;
          margin-left: 12px;
          line-height: 28px;
        }
      }
    }
  }
}

body > .el-container {
  margin-bottom: 40px;
}
</style>