# Development
> Notes for developers


## Structure

This project deviates from the typical Vue CLI quickstart app. Part of the intention here is to show to add Vue to an existing HTML page without rewriting the site as a Node app.

Some content has been added directly to [index.html](/index.html) outside of the app, since it is fixed and improves the loading experience of app. And therefore the CSS has been adjusted to be on `body` and not `#app`.


## Vue source

Browse builds available from Unpkg CDN:

- https://unpkg.com/browse/vue@3.0.7/dist/

The `vue.esm-browser.js` build was selected - for ESModule load in the browser including a template compiler.

Using `vue.runtime.esm-browser.js` gave an error:

    [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Use "vue.esm-browser.js" instead.
    at <App> vue.runtime.esm-browser.js:1186:17

Also, I tried using JSPM for CDN but gave errors importing Vue - switching to unpkg with ESModule type was fine.
