This example demonstrates what I believe is an issue with using `var` externals in a UMD build.

I have added two externals: one for `lodash` and a custom `var` external as follows:

```js
module.exports = {
  /* ... */
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    },
    foobar: 'var foo.bar'
  }
};
```

The output bundle contains things like `require("foo.bar")`, `define(["lodash", "foo.bar"], factory)`, and the `foo.bar` external has a corresponding `__WEBPACK_EXTERNAL_MODULE_2__`.
However, upon inspecting the bundle, you can see that `__WEBPACK_EXTERNAL_MODULE_2__` is in fact unused, and there is a different module that is used and simply exports

```js
/* 2 */
/***/ (function(module, exports) {

module.exports = foo.bar;

/***/ })
```

This makes we wonder if it's possible to not output `WEBPACK_EXTERNAL_MODULE_2__` as that would solve the problem with the invalid (as well as unused) `require("foo.bar")`.
