import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";

const template = `
<p>Hello, {{ name }}!</p>
`

const app = createApp({
  data() {
    return {
      name: "developer",
    };
  },
  template,
});

app.mount("#app");
