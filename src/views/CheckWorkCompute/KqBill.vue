<template>
  <div class="echart-page">
    <div class="tabList">
      <div class="tab-item">单据设置</div>
      <div class="tab-item">请假单录入</div>
      <div class="tab-item">加班单录入</div>
      <div class="tab-item">转班单录入</div>
    </div>
    <div class="content">
      <div class="chart-item">
        <div class="chart">
          <div id="myChart" style="width: 100%; height: 350px"></div>
        </div>
      </div>
      <div class="chart-item">
        <div class="chart">
          <div id="overTime" style="width: 100%; height: 350px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.leave();
    this.overTime();
  },
  methods: {
    leave() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "请假",
          left: "center",
          textStyle: {
            fontSize: 22,
            lineHeight: 40,
            height: 40,
          },
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "请假次数",
            type: "pie",
            radius: "75%",
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            data: [
              { value: 40, name: "人事部" },
              { value: 38, name: "开发部" },
              { value: 32, name: "技术部" },
              { value: 30, name: "业务部" },
            ],
          },
        ],
      });
    },
    overTime() {
      // 基于准备好的dom，初始化echarts实例
      let overTime = this.$echarts.init(document.getElementById("overTime"));
      // 绘制图表
      overTime.setOption({
        title: {
          text: "加班",
          left: "center",
          textStyle: {
            fontSize: 22,
            height: 40,
            lineHeight: 40,
          },
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "加班次数",
            type: "pie",
            radius: "70%",
            left: "10%",
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            data: [
              { value: 40, name: "人事部" },
              { value: 38, name: "开发部" },
              { value: 32, name: "技术部" },
              { value: 30, name: "业务部" },
            ],
          },
        ],
      });
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.echart-page{
  background-color: #f8f8f8;
}
.tabList {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tab-item::before {
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #cfecff;
    position: absolute;
    bottom: -10px;
    right: -10px;
    z-index: 0;
  }
  .tab-item::after {
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #cfecff;
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 0;
  }
  .tab-item {
    width: 20%;
    height: 80px;
    position: relative;
    text-align: center;
    line-height: 80px;
    border-radius: 8px;
    background-color: #ffff;
    cursor: pointer;
    overflow: hidden;
    color: #22223E;
    transition: all 0.5s;
  }

  .tab-item:hover{
    scale: 1.1;
  }
}
.content {
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  .chart-item {
    width: 43%;
    height: 350px;
    border-radius: 10px;
    box-shadow: 5px 3px 5px 5px rgba(0, 0, 0, 0.1);
    margin-top: 24px;
    .chart {
      width: 95%;
      height: 500px; //注意，我这里举例子高度用的300px,如果想要高度也自适应这里可以用百分比
      margin: 0 auto;
    }
  }
}
</style>