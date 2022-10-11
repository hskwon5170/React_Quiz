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
export const timeRecordState = atom({
  key: "timeRecordState",
  default: {
    hours: "",
    minutes: "",
    seconds: "",
  },
});
export const correctAnswersState = atom({
  key: "correctAnswersState",
  default: [""],
});
export const inCorrectAnswersState = atom({
  key: "inCorrectAnswersState",
  default: [""],
});
export const isLoadedState = atom({
  key: "isLoadedState",
  default: false,
});
export const reviewNoteState = atom({
  key: "reviewNoteState",
  default: [],
});
export const reviewNoteWritingState = atom({
  key: "reviewNoteWritingState",
  default: [],
});
export const reviewNoteValueState = atom({
  key: "reviewNoteValueState",
  default: [],
});
