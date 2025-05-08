import { defineStore } from "pinia";

export const reportStore = defineStore("report", {
  state: () => ({
    active: false,
    title: "",
    source: "",
    narration: "",
    topicList: [],
  }),
});
