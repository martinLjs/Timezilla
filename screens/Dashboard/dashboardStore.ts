import { observable } from "mobx";

const DashBoardStore = observable({
  time: 0,
  addTime(hours: number) {
    this.time = this.time + hours;
  },
});

export default DashBoardStore;
