import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";

const app = createApp({
  data() {
    return {
      name: "Vue developer",
    };
  },
  template: "<p>Hello, {{ name }}!</p>",
});

app.mount("#main");
