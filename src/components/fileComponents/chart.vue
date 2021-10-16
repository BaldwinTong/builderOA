<template>
  <div>
    <div class="tabs">
      <el-radio-group class="group-item" v-model="tab" @change="change">
        <el-radio :label="1">性别统计</el-radio>
        <el-radio :label="2">年龄统计</el-radio>
        <el-radio :label="3">籍贯统计</el-radio>
        <!-- <el-radio :label="4">学历统计</el-radio>
        <el-radio :label="5">工龄统计</el-radio>
        <el-radio :label="6">人员性质统计</el-radio>
        <el-radio :label="7">职等统计</el-radio>
        <el-radio :label="8">婚姻状况统计</el-radio>
        <el-radio :label="9">离职统计</el-radio> -->
      </el-radio-group>
    </div>
    <div class="chart">
      <div id="myChart" style="width: 100%; height: 400px"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tab: 1,
      gender: ["全部", "开发部", "技术部", "人事部"],
      age: ['18~25岁', '20~30岁', '30~35岁', '35~40岁', '40~45岁', '50岁以上'],
      NativePlace:['北京市','广东省','广西省','河北省','湖北省','湖南省'],

    };
  },
  created() {},
  mounted() {
    this.drawLine();
    setTimeout(() => {
      window.onresize = () => {
        this.$echarts.init(document.getElementById("myChart")).resize();
      };
    }, 200);
  },
  methods: {
    drawLine(options) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      if (options) {
        myChart.setOption(options,true);
      } else if(!options && this.tab==1) {
        myChart.setOption({
          title: { text: "性别统计", left: "center" },
          tooltip: {},
          xAxis: {
            data: this.gender,
          },
          yAxis: {},
          series: [
            {
              name: "男",
              type: "bar",
              data: [5, 20, 36, 10, 10, 18],
            },
            {
              name: "女",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        },true);
      }
    },
    change(e) {
      var options;
      if (e == 1) {
        options = {
          title: { text: "性别统计", left: "center" },
          tooltip: {},
          xAxis: {
            data: this.gender,
          },
          yAxis: {},
          series: [
            {
              name: "男",
              type: "bar",
              data: [5, 20, 36, 10, 10, 18],
            },
            {
              name: "女",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20],
            },
          ],
        };
      }else if (e == 2) {
        options = {
          title: { text: "年龄统计", left: "center" },
          tooltip: {},
          xAxis: {
            data: this.age,
          },
          yAxis: {},
          series: [
            {
              name: "人数",
              type: "bar",
              data: [5, 6, 7, 8, 9, 10],
            }
          ],
        };
      }else if (e==3) {
        options = {
          title: { text: "籍贯统计", left: "center" },
          tooltip: {},
          xAxis: {
            data: this.NativePlace,
          },
          yAxis: {},
          series: [
            {
              name: "人数",
              type: "bar",
              data: [5, 6, 7, 8, 9, 10],
            }
          ],
        };
        
      }
      this.drawLine(options);
    },
  },
  watch: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.tabs {
  min-height: 40px;
  // background-color: #ECE9D8;
  line-height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 16px;
  box-sizing: border-box;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.chart {
  width: 95%;
  height: 500px; //注意，我这里举例子高度用的300px,如果想要高度也自适应这里可以用百分比
  margin: 0 auto;
}
</style>