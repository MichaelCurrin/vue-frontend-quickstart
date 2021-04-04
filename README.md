# Vue Frontend Quickstart
> Starter template for a Vue site - without Node or a build step

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/vue-frontend-quickstart?include_prereleases=&sort=semver)](https://github.com/MichaelCurrin/vue-frontend-quickstart/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![dependency - vue](https://img.shields.io/badge/dependency-vue-blue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue)
[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)


## Preview
> What the web app looks like locally or on GH Pages

<div align="center">
    <a href="https://michaelcurrin.github.io/vue-frontend-quickstart/">
        <img src="/sample.png" alt="Sample screenshot" title="Sample screenshot" width="400" />
    </a>
</div>


## Online demo
> See this template's live demo

<div align="center">

[![View site - GH Pages](https://img.shields.io/badge/View_site-GH_Pages-blue?style=for-the-badge)](https://michaelcurrin.github.io/vue-frontend-quickstart/)

</div>


## Use this project
> Create your own project based on this template

<div align="center">

[![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/MichaelCurrin/vue-frontend-quickstart/generate)

</div>

How to setup:

1. Add this project to your repos with the template button above (no need to fork).
2. Go to your repo's _Settings_ and enable _GitHub Pages_.
3. After a few seconds, open your site deployed at `MyUsername.github.io/vue-frontend-quickstart`.

If you want to run the web app locally, just start a static server in the repo root. See recommended server options in this [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95).


## What is Vue?

<div align="center">
    <a href="https://vuejs.org">  
        <img src="https://raw.githubusercontent.com/github/explore/master/topics/vue/vue.png"
             alt="vue icon"
             title="Vue.js"
             width="100" height="100" />
    </a>
</div>

Vue is "The Progressive Frontend Framework".

It add can be interactivity to your website. Either as components on an existing site, or for designing your entire site as a Single-Page Application.

More readable and robust than jQuery. Vue is declarative so you don't have to worry about low-level operations like finding an element and changing its value.

Vue is similar to React, but many including myself believe that Vue is easier to learn and use.

See my [Resources](https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/vue/) page to learn more about Vue.


## About
> More info on this project

### Overview

A simple project that uses Vue on the frontend, without using Node or a build step. 

Just an HTML page and a JS file which gets loaded on the frontend. Using ESModules here means libraries are loaded in JS using `import` syntax instead of with `src` tags in HTML.

If you want a multi-page site, add Vue Router or use multiple HTML pages or Jekyll templating.

If you want the dev tooling (for linting, minification and using `.vue` files) or have a large site, then a traditional Node and NPM approach to Vue might suit you better.

- [![MichaelCurrin - vue-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-quickstart)


### Structure

This project only needs 3 files to run:

- [index.html](/index.html) - homepage.
- [main.js](/main.js) - the app logic. This loads dependencies, constructs the app and then mounts it on an element in the body.
- [styles.css](/styles.css) - some minimal CSS styling, to match the Vue CLI quickstart.

The [assets](/assets/) directory was setup with a logo to match the Vue CLI quickstart, but you can delete that on your copy.

### Features

What you get with this project:

- Made with Vue 3.
- Easy serving and hosting.
    - Serves as HTML and JS static assets.
    - Start a local web server in the root.
    - Hosted with GitHub Pages for free.
- Uses ESModules so you can use `import` syntax.
- Simple and light project.
    - No build step needed.
    - No need for Node or Vue CLI.
    - No need for `package.json` or other JS configs.
- Use this as a standalone project, or use it as a reference to add Vue to your site.


## Extending
> Ideas for what to do once with a project made from this template

### Add functionality

To make the app more interactive, see code samples in the [Getting Started](https://v3.vuejs.org/guide/introduction.html#getting-started) docs.

### Components

To load components on the frontend as `.vue` files, see my [No build step](https://michaelcurrin.github.io/code-cookbook/recipes/javascript/packages/vue/no-build-step.html) guide. That also makes it easier to use scoped CSS.

Though, if you have a couple of components or your entire site is Vue pages (compared with adding Vue to HTML), then consider structuring your application as a Vue Node app that uses Vue CLI for developing tooling and optimized production builds (like for compiling and minifying).

### Optimize

If you have a site with a small amount of JS code and files, then using this frontend approach might suit you fine. You won't get much benefit out of bundling and minfiying your scripts if the volume is small. Though maybe you'll get a benefit out of bundling external Vue code in your own bundle.

If you have a larger project, consider using the Vue CLI approch as covered in [Related projects](#related-projects).

If you want to avoid structuring your project as a Node project but you want some production-optimization, consider using [Deno](https://deno.land/). See tips for [Migrating from Node to Deno](https://michaelcurrin.github.io/dev-resources/resources/javascript/deno/).


## Related projects

- [![MichaelCurrin - preact-frontend-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=preact-frontend-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/preact-frontend-quickstart) - Preact without Node quickstart.
- [![MichaelCurrin - vue-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-quickstart) - Vue with Node quickstart.
- [![MichaelCurrin - react-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=react-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/react-quickstart) - React with Node quickstart.


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

### Vue source

Browse builds available from Unpkg CDN:

- https://unpkg.com/browse/vue@3.0.7/dist/

The `vue.esm-browser.js` build was selected - for ESModule load in the browser including a template compiler.

Using `vue.runtime.esm-browser.js` gave an error:

    [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.esm-browser.js" instead.
    at <App> vue.runtime.esm-browser.js:1186:17

Also, I tried using JSPM for CDN but gave errors importing Vue - switching to unpkg with ESModule type was fine.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
