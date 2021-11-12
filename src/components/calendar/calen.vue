<template>
  <div class="container">
    <div class="calendar">
      <div class="calen-box">
        <div class="calen-top">
          <div class="title-date" v-if="!editDate" @click="changeDate">
            {{ date }}
          </div>
          <el-date-picker
            v-else
            v-model="dateVal"
            type="month"
            placeholder="选择月"
            format="yyyy - MM"
            value-format="yyyy-MM"
            @blur="setDate"
          >
          </el-date-picker>
        </div>
        <div class="content">
          <div class="weekDay">
            <div class="weekItem" v-for="item in weekDays" :key="item.id">
              {{ item.label }}
            </div>
          </div>
          <div class="days">
            <!-- :class="isActive?'active':'daysItem'" -->
            <div
              class="daysItem"
              v-for="(item, index) in monthDays"
              :key="index"
            >
              <div class="text" :class="{ ash: item.color == 'ash' }">
                <p>{{ item.label }}</p>
                <p class="classes">{{ item.classes }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDateTime, monthDay } from "../../utils/util";
export default {
  data() {
    return {
      isActive: false, //当天日期高亮
      dateVal: "",
      date: "",
      editDate: false,
      weekDays: [
        {
          id: 1,
          label: "星期一",
        },
        {
          id: 2,
          label: "星期二",
        },
        {
          id: 3,
          label: "星期三",
        },
        {
          id: 4,
          label: "星期四",
        },
        {
          id: 5,
          label: "星期五",
        },
        {
          id: 6,
          label: "星期六",
        },
        {
          id: 7,
          label: "星期日",
        },
      ],
      monthDays: [],
    };
  },
  components: {},
  created() {
    this.getDate();
    this.currentDate();
  },
  methods: {
    getDate() {
      let arr = getDateTime(this.dateVal).split(" ")[0].split("-");
      this.dateVal = arr[0] + "-" + arr[1];
      this.date = arr[0] + "年" + arr[1] + "月";
      this.getCalendarDate();
    },

    // 给calendarData添加当月数据
    getCalendarDate() {
      this.monthDays = [];
      // 获取当前月份一号星期几
      let year = this.dateVal.split("-")[0],
        month = this.dateVal.split("-")[1],
        firstDay = Number(
          new Date(this.dateVal + "-01").getDay() == 0
            ? 7
            : new Date(this.dateVal + "-01").getDay()
        ), //当前月星期几
        nowDays = monthDay(year, month),
        lastMonth = month - 1 > 0 ? month - 1 : 12,
        lastYear = month - 1 > 0 ? year : year - 1,
        lastDays = monthDay(lastYear, lastMonth); //上个月的最后天数
      //   循环添加上一个月数据
      if (firstDay > 1) {
        for (let i = 1; i < firstDay; i++) {
          this.monthDays.push({
            label: lastDays - firstDay + i + 1,
            color: "ash",
            classes: "01班次",
          });
        }
      }
      //遍历后端日历数据
      //当前月
      for (let i = 0; i < nowDays; i++) {
        this.monthDays.push({ label: i + 1, classes: "01班次" });
      }
    },

    currentDate() {
      let arr = getDateTime().split(" ")[0];
      let todayDate = arr.substr(0, 7);
      console.log(arr, todayDate, this.dateVal);
      if (todayDate == this.dateVal) {
        this.monthDays.forEach((item) => {
          if (item.label == arr.split("-")[2]) {
            this.isActive = true;
          }
        });
      }
    },

    changeDate() {
      this.editDate = true;
    },
    setDate() {
      this.getDate();
      this.editDate = false;
    },
  },
  computed: {},
};
</script>

<style scoped lang="less">
.calendar {
  width: 100%;
  padding: 16px 70px;
  box-sizing: border-box;
  .calen-box {
    background-color: #7d9bfd;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    .calen-top {
      width: 100%;
      display: flex;
      justify-content: center;
      .title-date {
        font-size: 24px;
        cursor: pointer;
      }
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .weekDay {
        width: 100%;
        display: flex;
        margin-top: 15px;
        align-items: center;
        .weekItem {
          width: 14.3%;
          text-align: center;
          line-height: 25px;
          color: #fff;
        }
      }
      .days {
        width: 100%;
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        .daysItem {
          width: 14.28%;
          height: 12vh;
          text-align: center;
          padding: 8px;
          box-sizing: border-box;
          .text {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            border-radius: 8px;
            padding: 12px 0;
            box-sizing: border-box;
            .classes {
              font-size: 12px;
            }
          }
          .ash {
            background-color: gray;
          }
        }

        .active {
          width: 14.28%;
          height: 12vh;
          text-align: center;
          padding: 8px;
          box-sizing: border-box;
          border: 1px solid #FC1944;
          color: #FC1944;
          background: rgba(252,25,68,0.5);
        }
      }
    }
  }
}
</style>
