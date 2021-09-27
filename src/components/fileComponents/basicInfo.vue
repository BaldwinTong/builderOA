<template>
  <div>
    <!-- 职务 -->
    <div class="item" >
      <div class="duties" v-if="data.length>0">
        <el-tree
          :data="data"
          node-key="id"
          accordion
          default-expand-all
          :expand-on-click-node="false" 
          
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span v-if="node.level === 1" class="icont">
              <el-button type="text" size="mini" @click="() => append(data)">
                <i class="iconfont icon-jia">添加</i>
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)"
              >
                <i class="iconfont icon-shanchutianchong">删除</i>
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
      <div v-else class="noData">暂无数据</div>
    </div>

    <!-- 部门资料 -->
    <div></div>

    <!-- 人事资料 -->
    <div></div>

    <!-- 个人信息 -->
    <div></div>

    <!-- 个人提醒 -->
    <div></div>

    <!-- 添加子节点弹窗 -->
  </div>
</template>

<script>
let id = 2;
export default {
  props: {},
  data() {
    return {
      data: [
        {
          id: "1",
          label: "职务",
          children: [
            {
              id: "1-1",
              label: "董事长",
            },
            {
              id: "1-2",
              label: "总经理",
            },
          ],
        },
        {
          id: "2",
          label: "级别",
          children: [
            {
              id: "2-1",
              label: "一级科员",
            },
            {
              id: "2-2",
              label: "二级科员",
            },
          ],
        },
        {
          id: "3",
          label: "职称",
          children: [
            {
              id: "3-1",
              label: "教授",
            },
            {
              id: "3-2",
              label: "讲师",
            },
          ],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    append(data) {
      this.$prompt("请输入", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValidator(value) {
          if (value == undefined) {
            return "分组名不能为空";
          } else if (value.length == 0) {
            return "分组名不能为空";
          } else if (!value.match("^[a-zA-Z0-9_\u4e00-\u9fa5]+$")) {
            return "不支持特殊字符";
          }
        },
      })
        .then(({ value }) => {
          const newChild = { id: id++, label: value, children: [] };
          if (!data.children) {
            this.$set(data, "children", []);
          }
          data.children.push(newChild);
          this.$message.success("添加成功");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
  },
  created() {},
  components: {},
  computed: {},
};
</script>
<style lang='less' scoped>
.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .content-right {
    margin-left: 16px;
  }
}
.duties {
  width: 300px;
  height: 82vh;
  border-radius: 8px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.icont {
  margin-left: 50px;
}

.iconfont {
  font-size: 16px;
}

.noData{
  width: 100%;
  text-align: center;
}
</style>