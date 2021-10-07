<template>
  <div class="pages">
    <div class="left-tree">
      <el-tree
        :data="treeData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        highlight-current
      ></el-tree>
    </div>
    <div class="right-user">
      <el-row :gutter="16">
        <el-col :span="3" v-for="item in array" :key="item.index">
          <div @click="pickUser" class="item">
            <el-image :src="item.url" fit="fit"></el-image>
            <span class="demonstration">{{ item.name }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      fullscreen
    >
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogVisible: false,
      activeName: 'first',
      treeData: [
        {
          label: "总经办",
          children: [
            {
              label: "仓管科",
            },
            {
              label: "销售部",
              children: [
                {
                  label: "销售一组",
                },
                {
                  label: "销售二组",
                },
              ],
            },
            {
              label: "财务部",
              children: [
                {
                  label: "审计组",
                },
                {
                  label: "出纳组",
                },
              ],
            },
            {
              label: "研发中心",
              children: [
                {
                  label: "研发一组",
                },
                {
                  label: "研发二组",
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

      imageList: [
        {
          name: "张飞",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=2bf25c2f49299cfbfbb72f2a6eb068f6",
        },
        {
          name: "李元芳",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F04%2F20161004161302_VreQT.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=274dd7972d5401cab8c5f2e33026b267",
        },
        {
          name: "王昭君",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fc2%2F09%2F33%2Fc209332342d81ee6b0cc00d3ee526d06.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=6cd30b24e8119987bfcfbbee64c9d808",
        },
        {
          name: "李白",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190609%2F468f2f51e76b400c89413ea5fceeaf54.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636183955&t=414217a9dc183da853eaa9a9d6d08550",
        },
        {
          name: "程咬金",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-cdb4ce0c39da667bd862958f2308f9e4_hd.jpg&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=c5b85e3d9f99eec140f48dd511d2303b",
        },
        {
          name: "武则天",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2F50%2Fv2-4bb8cceacff6613df968ba3d54b45d8d_hd.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=4fe83d8b08ec92ca4e6f9f9ef4dc68b4",
        },
        {
          name: "成吉思汗",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F3c%2F12%2F4c%2F3c124c5277386c897dad2977bb964ea1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=708a37130b31beb693d8ee2773778449",
        },
        {
          name: "狄仁杰",
          url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017112817293693626.jpg&refer=http%3A%2F%2Fpic.qqtn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636184212&t=1c4d37741ca90429c3cf2b0f75e9247e",
        },
      ],
      array: [],
    };
  },
  created() {},
  methods: {
    handleNodeClick() {
      let array = this.imageList;
      this.array = array.slice(this.random());
    },
    pickUser() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    random() {
      return Math.floor(Math.random() * 8);
    },
  },
  computed: {},
};
</script>
<style lang='less' scoped>
.pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-tree {
    width: 180px;
    height: 80vh;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: auto;
  }
  .right-user {
    flex: 1;
    height: 80vh;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-left: 10px;
    overflow: auto;
    padding: 8px;
    box-sizing: border-box;
    .el-row {
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-col {
      border-radius: 4px;
      margin-bottom: 15px;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        .demonstration {
          margin-top: 8px;
          font-size: 14px;
          color: #606266;
        }
      }
    }
  }
}
</style>