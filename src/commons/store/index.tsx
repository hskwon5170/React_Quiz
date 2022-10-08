import { atom } from "recoil";

export const pickedAnswerState = atom({
  key: "pickedAnswerState",
  default: "",
});
export const indexCounterState = atom({
  key: "indexCounterState",
  default: 0,
});
export const answersState = atom({
  key: "answersState",
  default: [],
});
