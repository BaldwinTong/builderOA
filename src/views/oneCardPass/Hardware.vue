<template>
  <div>
    <div class="pages">
      <div class="tabs">
        <div class="tabs-item" @click="topage('hardwareFile')">
          <i class="iconfont icon-case-file-full"></i>
          <p>硬件档案</p>
        </div>
        <div class="tabs-item" @click="topage('hardwareSet')">
          <i class="iconfont icon-shezhi"></i> 硬件设置
        </div>
        <div class="tabs-item" @click="topage('downKq')">
          <i class="iconfont icon-xiazai"></i> 考勤卡下载
        </div>
        <div class="tabs-item" @click="topage('dataCollect')">
          <i class="iconfont icon-shujucaiji"></i> 考勤数据采集
        </div>
      </div>
      <div class="tabel">
        <el-table :data="tableData" border stripe>
            <el-table-column label="机器名称" prop="EqName" align="center"></el-table-column>
            <el-table-column label="机器id" prop="EqID" align="center"></el-table-column>
            <el-table-column label="机器类型" prop="Eqtype" align="center"></el-table-column>
            <el-table-column label="使用区域" prop="useArea" align="center"></el-table-column>
            <el-table-column label="状态" prop="status" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        tableData:[{
          EqName: '考勤机',
          Eqtype:'刷卡机',
          EqID:'001',
          useArea:'食堂',
          status:'在线'
        }],
    };
  },
  created() {},
  methods: {
    topage(str){
      this.$router.push(str)
    }
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.pages {
  padding: 12px;
  box-sizing: border-box;
  .tabs {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .tabs-item {
      width: 20%;
      height: 100px;
      border: 1px solid #ccc;
      border-radius: 8px;
      cursor: pointer;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      background-color: #fff;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .iconfont {
        font-size: 48px;
        color: #0953a1;
      }
    }
  }

  .tabel{
      margin-top: 35px;
  }
}
</style>