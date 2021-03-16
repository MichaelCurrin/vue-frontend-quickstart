# Vue Frontend Quickstart
> Starter template for a Vue site - without Node

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/vue-frontend-quickstart?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/vue-frontend-quickstart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![dependency - vue](https://img.shields.io/badge/dependency-vue-blue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue)
[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/vue-frontend-quickstart/">
        <img src="/sample.png" alt="Sample screenshot" title="Sample screenshot" width="400" />
    </a>
</div>


## Online demo

<div align="center">

[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-blue?style=for-the-badge)](https://michaelcurrin.github.io/vue-frontend-quickstart/)

</div>


## Use this project

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/vue-frontend-quickstart/generate)

</div>

To extend the app and make it more interactive, see code samples in the [Getting Started](https://v3.vuejs.org/guide/introduction.html#getting-started) docs.


## Features
> About this template project

- Made with Vue 3.
- Served as HTML and JS static assets.
- Uses ESModules so you can use `import` syntax.
- No build step needed.
- No need for Node or Vue CLI.
- No need for `package.json` or other JS configs.
- Hosted with GitHub Pages for free.


## What is Vue?

Vue is "The Progressive Frontend Framework".

It add can be interactivity to your website. Either as components on an existing site, or for designing your entire site as a Single-Page Application.

More readable and robust than jQuery. Vue is declarative so you don't have to worry about low-level operations like finding an element and changing its value.

Vue is similar to React, but many including myself believe that Vue is easier to learn and use.

See my [Resources](https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/vue/) page to learn more about Vue.



## Developer notes

Browse builds available:

- https://unpkg.com/browse/vue@3.0.7/dist/

The `vue.esm-browser.js` build was selected - for ESModule load in the browser including a template compiler.

Using `vue.runtime.esm-browser.js` gave an error:

    [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.esm-browser.js" instead.
    at <App> vue.runtime.esm-browser.js:1186:17

Also, I tried using JSPM for CDN but gave errors importing Vue - switching to unpkg with ESModule type was fine.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
