<template>
  <div class="nav">
    <el-menu
      class="el-menu-vertical-demo"
      router
      :default-active="this.$route.path"
    >
      <el-submenu
        class="submenu"
        v-for="item in routes"
        :key="item.id"
        :index="item.name"
      >
        <template slot="title">
          <i class="iconfont" :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.subMenu" :key="subItem.id">
          <el-menu-item :index="subItem.name">
            {{ subItem.subTitle }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          id: 1,
          name: "/HRsystem",
          title: "人事系统",
          icon: "icon-HRrenshirenshiguanli",
          subMenu: [
            {
              id: 11,
              name: "/FileManage",
              subTitle: "档案管理",
            },
            {
              id: 12,
              name: "/personnelOperation",
              subTitle: "人事操作",
            },
            {
              id: 13,
              name: "/RewardAPunishManage",
              subTitle: "奖惩管理",
            },
            {
              id: 14,
              name: "/dormitoryMange",
              subTitle: "宿舍管理",
            },
          ],
        },
      ],
    };
  },
  created() {
  },
  methods: {},
};
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 100%;
  background-color: #1c2431;
}
.el-menu {
  background-color: #1c2431 !important;
}
.el-menu-item {
  color: #fff !important;
}
.el-submenu__title {
  color: #fff !important;
}
.el-submenu .el-menu-item {
  min-width: 180px !important;
}

.icon-HRrenshirenshiguanli {
  font-size: 20px !important;
  margin-right: 8px;
}

.el-submenu__title:hover {
  background: #151922 !important;
  color: #0298fb;
}

.el-menu-item:hover {
  color: #151922 !important;
}

.el-menu-item.is-active,
.el-submenu__title.is-active {
  background: #151922 !important;
  color: #0298fb !important;
  min-width: 180px !important;
}
</style>