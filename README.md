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


## Extending

### Functionality

To make the app more interactive, see code samples in the [Getting Started](https://v3.vuejs.org/guide/introduction.html#getting-started) docs.

### Components

To load components on the frontend as `.vue` files, see my [No build step](https://michaelcurrin.github.io/code-cookbook/recipes/javascript/packages/vue/no-build-step.html) guide. That also makes it easier to use scoped CSS.

Though, if you have a couple of components or your entire site is Vue pages (compared with adding Vue to HTML), then consider structuring your application as a Vue Node app that uses Vue CLI for developing tooling and optimized production builds (like for compiling and minifying).


## Related projects

More of my templates:

- [![MichaelCurrin - preact-frontend-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=preact-frontend-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/preact-frontend-quickstart) - Preact with no CLI.
- [![MichaelCurrin - vue-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-quickstart) - Vue with a CLI.
- [![MichaelCurrin - react-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=react-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/react-quickstart) - React with a CLI.


## Development
> Notes for developers

### Structure

This project deviates from the typical Vue CLI quickstart app. Part of the intention here is to show to add Vue to an existing site - so some content has been added directly to [index.html](/index.html) outside of the app. The CSS has been adjusted to be on `body` not `#app`.

A better setup for this project would be showing how to use some components like todo app or counter. And not necessarily in `app`. These could be on more targeted IDs. Need to research this approach as it is different from setting up a single app as entry-point.

### Formatting

There is no `package.json` or use of Prettier.

But you can run Prettier ad hoc like this to format the JS file, assuming you have Node installed.

```sh
$ npx prettier -w '*.{js,css}'
```

### Vue

Browse builds available from Unpkg CDN:

- https://unpkg.com/browse/vue@3.0.7/dist/

The `vue.esm-browser.js` build was selected - for ESModule load in the browser including a template compiler.

Using `vue.runtime.esm-browser.js` gave an error:

    [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.esm-browser.js" instead.
    at <App> vue.runtime.esm-browser.js:1186:17

Also, I tried using JSPM for CDN but gave errors importing Vue - switching to unpkg with ESModule type was fine.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
