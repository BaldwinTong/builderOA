<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>硬件管理</el-breadcrumb-item>
        <el-breadcrumb-item>硬件设置</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="con-left">
        <el-tree
          :data="treeData"
          :props="defaultProps"
          show-checkbox
          @check-change="handleCheckChange"
        >
        </el-tree>
      </div>
      <div class="con-right">
        <div class="date">{{ dateTime }}</div>
        <div class="list">
          <div class="item">
            <p class="title">考勤通讯</p>
            <div class="item-content">
              <el-form
                ref="form"
                :model="form"
                label-width="80px"
                :inline="true"
              >
                <el-form-item label="端口">
                  <el-select v-model="form.port" placeholder="输入">
                    <el-option label="COM5" value="COM5"></el-option>
                    <el-option label="COM6" value="COM6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="波特率">
                  <el-select v-model="form.Bps" placeholder="输入">
                    <el-option label="19200" value="19200"></el-option>
                    <el-option label="9600" value="9600"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="btns">
                  <el-button type="primary" @click="onText">测试</el-button>
                  <el-button type="primary" @click="onSet">设置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="item">
            <p class="title">门禁通讯</p>
            <div class="item-content">
              <el-form
                ref="form"
                :model="form"
                label-width="80px"
                :inline="true"
              >
                <el-form-item label="端口">
                  <el-select v-model="form.port" placeholder="输入">
                    <el-option label="COM5" value="COM5"></el-option>
                    <el-option label="COM6" value="COM6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="波特率">
                  <el-select v-model="form.Bps" placeholder="输入">
                    <el-option label="19200" value="19200"></el-option>
                    <el-option label="9600" value="9600"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="btns">
                  <el-button type="primary" @click="onText">测试</el-button>
                  <el-button type="primary" @click="onSet">设置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="item">
            <p class="title">消费通讯</p>
            <div class="item-content">
              <el-form
                ref="form"
                :model="form"
                label-width="80px"
                :inline="true"
              >
                <el-form-item label="端口">
                  <el-select v-model="form.port" placeholder="输入">
                    <el-option label="COM5" value="COM5"></el-option>
                    <el-option label="COM6" value="COM6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="波特率">
                  <el-select v-model="form.Bps" placeholder="输入">
                    <el-option label="19200" value="19200"></el-option>
                    <el-option label="9600" value="9600"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="btns">
                  <el-button type="primary" @click="onText">测试</el-button>
                  <el-button type="primary" @click="onSet">设置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="item">
            <p class="title">指纹机通讯</p>
            <div class="item-content">
              <el-form
                ref="form"
                :model="form"
                label-width="80px"
                :inline="true"
              >
                <el-form-item label="端口">
                  <el-select v-model="form.port" placeholder="输入">
                    <el-option label="COM5" value="COM5"></el-option>
                    <el-option label="COM6" value="COM6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="波特率">
                  <el-select v-model="form.Bps" placeholder="输入">
                    <el-option label="19200" value="19200"></el-option>
                    <el-option label="9600" value="9600"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="btns">
                  <el-button type="primary" @click="onText">测试</el-button>
                  <el-button type="primary" @click="onSet">设置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="item">
            <p class="title">IC发卡器</p>
            <div class="item-content">
              <el-form
                ref="form"
                :model="form"
                label-width="80px"
                :inline="true"
              >
                <el-form-item label="端口">
                  <el-select v-model="form.port" placeholder="输入">
                    <el-option label="COM5" value="COM5"></el-option>
                    <el-option label="COM6" value="COM6"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="波特率">
                  <el-select v-model="form.Bps" placeholder="输入">
                    <el-option label="19200" value="19200"></el-option>
                    <el-option label="9600" value="9600"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item class="btns">
                  <el-button type="primary" @click="onText">测试</el-button>
                  <el-button type="primary" @click="onSet">设置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <div class="item last-item">
            <p class="title">设置</p>
            <div class="con-item">
              <div class="btns">
                <el-button type="primary">测试机器</el-button>
                <span>测试机器是否正常连接</span>
              </div>
              <div class="btns">
                <el-button type="primary">设置时间</el-button>
                <span>将当前时间设置成机器的时间</span>
              </div>
              <div class="btns">
                <el-button type="primary">清除数据</el-button>
                <span class="danger">清除机器上的数据(慎用)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDateTime } from "../../utils/util.js";
export default {
  components: {},
  data() {
    return {
      dateTime: "",
      messageListTimer: null,
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
                {
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        }
      ],
      defaultProps: {
        label: "label",
        children: "children",
      },
      count: 1,
      form: {
        port: "COM5",
        Bps: "19200",
      },
    };
  },
  created() {
    this.messageListTimer = setInterval(() => {
      this.dateTime = getDateTime();
    }, 1000);
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },

    onText() {
      console.log(1326);
    },
    onSet() {
      console.log(1326);
    },
  },
  computed: {},
  beforeDestroy() {
    clearInterval(this.messageListTimer);
  },
};
</script>
<style lang='less' scoped>
.crumbs {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 16px;
}
.container {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  .con-left {
    width: 220px;
    height: 75vh;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 6px;
    box-sizing: border-box;
  }
  .con-right {
    flex: 1;
    min-height: 75vh;
    overflow: auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 6px;
    box-sizing: border-box;
    .date {
      width: 100%;
      height: 54px;
      font-size: 48px;
      background-color: #1c2431;
      color: #00ff00;
      text-align: center;
      border-radius: 8px;
    }
    .list {
      width: 100%;
      margin-top: 20px;
      .item {
        width: 100%;
        height: 60px;
        border: 1px solid #ccc;
        border-radius: 8px;
        position: relative;
        padding: 6px;
        box-sizing: border-box;
        margin-bottom: 15px;
        .title {
          width: 84px;
          height: 24px;
          text-align: center;
          position: absolute;
          top: -12px;
          left: 20px;
          color: #205cd5;
          font-size: 14px;
          background-color: #fff;
        }
        .el-form--inline .el-form-item {
          margin-top: 6px !important;
        }

        .item-content {
          display: flex;
          align-items: center;
          .btns {
            margin-left: 40px;
          }
        }
      }
    }
    .last-item {
      height: 120px !important;
      display: flex;
      justify-content: center;
      align-items: center;
      //按钮
      .con-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .btns {
            width: 300px;
          margin-left: 40px;
        }
        .btns:last-child {
          margin-top: 10px;
        }
        span {
          margin-left: 10px;
          font-size: 14px;
        }
        .danger{
            color: #FA2E2A;
        }
      }
    }
  }
}
</style>