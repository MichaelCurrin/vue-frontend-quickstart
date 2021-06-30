# About


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


## Features

What you get with this project:

- Made with Vue 3.
- Easy serving and hosting.
    - Serves as HTML and JS static assets.
    - Start a local web server in the root.
    - Hosted with GitHub Pages for free.
- Uses [ES Modules][] so you can use `import` syntax.
- Simple and light project.
    - No build step needed.
    - No need for Node or Vue CLI.
    - No need for `package.json` or other JS configs.
- Use this as a standalone project, or use it as a reference to add Vue to your site.

[ES Modules]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html


## Structure

### Minimum

You could even mix your JS and CSS into one HTML file, if you wanted to only have one file. But you'll probably want to separate those for easier management.

A Vue frontend project only needs 3 files to run, as set up in this template:

- [index.html](/index.html)
    - HTML homepage.
    - Loads the JS and CSS.
- [assets/js/main.js](/assets/js/main.js)
    - The app logic in a JS script.
    - This loads dependencies, constructs the app and then mounts it on an element in the body. The demo components are based on the [Introduction](https://v3.vuejs.org/guide/introduction.html) tutorial on the Vue 3 docs. But without IDs - as those are for the app level rather than reusable component level.
- [assets/css/styles.css](/assets/css/styles.css)
    - Some minimal CSS styling, to match the Vue CLI quickstart app.

### Logo

The [assets](/assets/) directory was set up with a logo, to match the structure and appearance of the Vue CLI quickstart app. But you can delete that on your copy of this template.

### JS modules

See also the [assets/js/ConsumeApi.js](/assets/js/ConsumeApi.js) module.

This file exists to show how the `main.js` file loaded on the frontend will then fetch another
module and import it. So the `import` statements works on the frontend similarly to running in a
Node app.

This means you can spread your Vue components or views out across a few files, instead of all in a
single long JS file. This spreading of modules is done at the cost of loading each file separately
rather than a single bundled (and possibly minified) file. But should hopefully be negligible for
small and simple projects.
