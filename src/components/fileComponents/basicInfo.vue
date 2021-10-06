<template>
  <div>
    <!-- 职务 -->
    <div class="item">
      <div
        class="duties"
        @mouseenter="changeSize"
        v-for="item in treeData"
        :key="item.id"
      >
        <el-tree
          :data="item.data"
          node-key="id"
          accordion
          default-expand-all
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span v-if="node.level === 1" class="icont">
              <el-button type="text" size="mini" @click="() => append(data)">
                <i class="iconfont icon-tianjia"></i>
              </el-button>
              <el-button
                type="text"
                size="mini"
                @click="() => remove(node, data)"
              >
                <i class="iconfont icon-shanchu"></i>
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
      <div class="duties addDuties">
        <el-button type="primary" plain @click="addDuties">添加职称</el-button>
      </div>
    </div>
    <el-dialog title="添加职称" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="addDutiesForm" label-width="80px">
        <el-form-item label="职称：">
          <el-input
            v-model="addDutiesForm.name"
            placeholder="请输入职称名"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="conform">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
let id = 2;
export default {
  props: {},
  data() {
    return {
      dialogFormVisible: false,
      addDutiesForm: {
        name: "",
      },
      treeData: [
        {
          data: [
            {
              id: "1",
              label: "职务",
              children: [
                {
                  id: "1-1",
                  label: "董事长",
                  superiorNumber: "001",
                  remark: "xxxxx",
                },
                {
                  id: "1-2",
                  label: "总经理",
                  superiorNumber: "002",
                  remark: "xxxxx",
                },
              ],
            },
          ],
        },
        {
          data: [
            {
              id: "2",
              label: "级别",
              children: [
                {
                  id: "2-1",
                  label: "一级科员",
                  superiorNumber: "015",
                  remark: "xxxxx",
                },
                {
                  id: "2-2",
                  label: "二级科员",
                  superiorNumber: "017",
                  remark: "xxxxx",
                },
              ],
            },
          ],
        },
        {
          data: [
            {
              id: "3",
              label: "职称",
              children: [
                {
                  id: "3-1",
                  label: "教授",
                  superiorNumber: "020",
                  remark: "xxxxx",
                },
                {
                  id: "3-2",
                  label: "讲师",
                  superiorNumber: "021",
                  remark: "xxxxx",
                },
              ],
            },
          ],
        },
      ],
      dutiesForm: {
        num: "",
        superiorNum: "",
        duties: "",
        desc: "",
      },
    };
  },
  mounted() {},
  methods: {
    append(data) {
      this.$prompt("请输入" + data.label, "提示", {
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
      let list = JSON.parse(JSON.stringify(this.treeData));
      list.forEach((item, index) => {
        if (item.data[0].id == data.id) {
          this.treeData.splice(index, 1);
        }
      });
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
    handleNodeClick(data) {
      let obj = JSON.parse(JSON.stringify(data));
      this.dutiesForm.num = obj.id;
      this.dutiesForm.superiorNum = obj.superiorNumber;
      this.dutiesForm.duties = obj.label;
      this.dutiesForm.desc = obj.remark;
    },

    addDuties() {
      this.dialogFormVisible = true;
    },

    conform() {
      let obj = {
        data: [
          {
            label: "",
            id: "",
          },
        ],
      };

      if (this.addDutiesForm.name) {
        let rete = false;
        this.treeData.forEach((item) => {
          if (item.data[0].label == this.addDutiesForm.name) {
            rete = true;
          }
        });
        if (rete) {
          this.$mess.warning("此职称已使用");
          return;
        } else {
          obj.data[0].label = this.addDutiesForm.name;
          obj.data[0].id = this.treeData.length + 1;
          this.treeData.push(obj);
          this.addDutiesForm = {
            name: "",
          };
          this.dialogFormVisible = false;
        }
      } else {
        this.$mess.warning("内容不能为空");
      }
    },

    changeSize() {},
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
  align-items: flex-start;
  flex-wrap: wrap;
}
.duties {
  width: 17%;
  min-height: 170px;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.noData {
  width: 100%;
  text-align: center;
}

.dutiesForm {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.icon-tianjia,
.icon-shanchu {
  color: #606266;
}

.addDuties {
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-tree-node {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
}

.inpt {
  width: 300px;
}
</style>