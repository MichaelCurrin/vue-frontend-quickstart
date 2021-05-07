# Vue Frontend Quickstart docs

A simple project that uses Vue on the frontend, without using Node or a build or compile step. 


## How it works

The Vue app is handled with one HTML page and a JS file which gets loaded on the frontend.

Using [ES Modules][] in this project means pakages are loaded in JS in the browser, using `import` syntax. You don't have to check that `src` tags in HTML are adding stuff to the global namespace for your JS scripts to manage, rather you import a package in a script right where it gets used. No HTML needed to validate.

There is no `package.json` for package management and `node_modules` to download and host. And even no dev dependencies to manage - see [package.json](https://github.com/MichaelCurrin/vue-quickstart/blob/master/package.json) in my Node-based Vue Quickstart and you'll see how package management is lighter.


## Dev tooling

If you want the dev tooling (for linting, minification and using `.vue` files) or have a large site, then a traditional Node and NPM approach to Vue might suit you better.

- [![MichaelCurrin - vue-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-quickstart)


## Multi-page

If you want a multi-page site, add Vue Router or use multiple HTML pages or Jekyll templating.


[ES Modules]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html
