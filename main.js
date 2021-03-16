import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";

const app = createApp({
  data() {
    return {
      name: "developer",
    };
  },
  template: `
    <a href="https://github.com/MichaelCurrin/vue-frontend-quickstart"><img src="https://img.shields.io/static/v1?label=MichaelCurrin&amp;message=vue-frontend-quickstart&amp;color=blue&amp;logo=github" alt="MichaelCurrin - vue-frontend-quickstart"></a>

    <p>Hello, {{ name }}!</p>
  `,
});

app.mount("#app");
