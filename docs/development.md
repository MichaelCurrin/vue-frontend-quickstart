# Development
> Notes for developers


## Structure

This project deviates from the typical Vue CLI quickstart app. Part of the intention here is to show to add Vue to an existing site - so some content has been added directly to [index.html](/index.html) outside of the app. The CSS has been adjusted to be on `body` not `#app`.

A better setup for this project would be showing how to use some components like todo app or counter. And not necessarily in `app`. These could be on more targeted IDs. Need to research this approach as it is different from setting up a single app as entry-point.


## Formatting

There is no `package.json` or use of Prettier.

But you can run Prettier ad hoc like this to format the JS file, assuming you have Node installed.

```sh
$ npx prettier -w '*.{js,css}'
```


## Vue source

Browse builds available from Unpkg CDN:

- https://unpkg.com/browse/vue@3.0.7/dist/

The `vue.esm-browser.js` build was selected - for ESModule load in the browser including a template compiler.

Using `vue.runtime.esm-browser.js` gave an error:

    [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.esm-browser.js" instead.
    at <App> vue.runtime.esm-browser.js:1186:17

Also, I tried using JSPM for CDN but gave errors importing Vue - switching to unpkg with ESModule type was fine.
