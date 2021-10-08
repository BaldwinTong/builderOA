<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" label="序号" width="50px" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" align="center"> </el-table-column>
        <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
        <el-table-column prop="reason" label="原因" align="center"> </el-table-column>
        <el-table-column prop="amount" label="奖/罚" align="center"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          reason:"迟到",
          amount:"-50"
        },
      ],
    };
  },
  created() {},
  methods: {},
  computed: {},
};
</script>
<style lang='less' scoped>
</style>