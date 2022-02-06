import { HoursTag } from "./dashboard.types";
import { observable } from "mobx";

const DashBoardStore = observable({
  time: 0,
  taskzillaTime: [
    {
      id: 0,
      hours: 5,
      isRecorded: true,
      tag: HoursTag.dev,
      text: "Fix task 23893",
    },
  ],
  addTime(hours: number): void {
    this.time = this.time + hours;
  },
});

export default DashBoardStore;
