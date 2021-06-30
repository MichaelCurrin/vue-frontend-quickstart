# Vue Frontend Quickstart docs

A simple project that uses Vue on the frontend, without using Node or a build or compile step.


## How it works

The Vue app is handled with one HTML page and a JS file which gets loaded on the frontend, loading additional JS modules if needed. This is friendly for frontend developers to work with, even if they know JavaScript but not Node.


## Packages

Using [ES Modules][] in this project means packages are loaded in JS in the browser, using `import` syntax. You don't have to check that `src` tags in HTML are adding stuff to the global namespace for your JS scripts to manage, rather you import a package in a script right where it gets used. No HTML needed to validate.

There is no `package.json` for package management and `node_modules` to download and host.

There are no dev dependencies to manage too, which makes means fewer security vulnerabilities to patch and a smaller dependency tree to manage.

See [vue-quickstart package.json][] in my Node-based Vue Quickstart and you'll see how package management is lighter.

A comparison:

| Area                  | Vue Node app                    | Vue frontend app |
| --------------------- | ------------------------------- | ---------------- |
| ESLint and Prettier   | Run as project dev dependencies | Run separately   |
| Webpack               | Yes                             | No               |
| Direct dependencies   | 2 production and 10 dev         | 1                |
| Indirect dependencies | Over 800                        | 0                |

A note on the indirect dependencies - note that the [Vue 3 package.json][] file has _zero_ prod dependencies and the compiled [vue.esm-browser.js][] script used in [main.js](/asset/js/main.js) has _zero_ imports.


## Dev tooling

To prettify your JS, you can run `npx prettier -w .` (to reference a global install or to download the latest). Or use your IDE to prettify your script. You can do the same for linting with `npx eslint .` or you IDE.

Maybe you want the dev tooling you're used to (linting, minification, using `.vue` files, running tests, TypeScript). Or have a large site. Then a traditional Node and NPM approach to Vue might suit your needs better. In that case, use this repo:

- [![MichaelCurrin - vue-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-quickstart)


## Multi-page

If you want a multi-page site, add Vue Router or use multiple HTML pages or Jekyll templating.


[vue-quickstart package.json]: https://github.com/MichaelCurrin/vue-quickstart/blob/master/package.json
[Vue 3 package.json]: https://github.com/vuejs/vue-next/blob/master/package.json
[vue.esm-browser.js]: https://unpkg.com/vue/dist/vue.esm-browser.js
[ES Modules]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html
