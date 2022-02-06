export enum HoursTag {
  dev,
  rev,
  fix,
  test,
  desc,
  none,
}
export interface taskzillaTask {
  hours: number;
  id: number;
  isRecorded: boolean;
  tag: HoursTag;
  text: string;
}
export interface DashBoardState {
  time: number;
  taskzillaTime: taskzillaTask[];
}
