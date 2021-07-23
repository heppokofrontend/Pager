# @heppokofrontend/pager

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/@heppokofrontend/pager.svg)](https://www.npmjs.com/package/@heppokofrontend/pager) [![test](https://github.com/heppokofrontend/pager/actions/workflows/ci.yml/badge.svg)](https://github.com/heppokofrontend/pager/actions/workflows/ci.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/027423b0daa8f7c001be/maintainability)](https://codeclimate.com/github/heppokofrontend/pager/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/027423b0daa8f7c001be/test_coverage)](https://codeclimate.com/github/heppokofrontend/pager/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/npm/@heppokofrontend/pager/badge.svg)](https://snyk.io/test/npm/@heppokofrontend/pager)
 [![@heppokofrontend/pager](https://snyk.io/advisor/npm-package/@heppokofrontend/pager/badge.svg)](https://snyk.io/advisor/npm-package/@heppokofrontend/pager)


Wrapping iterable objects with the pager function.

## Usage

### Installation:

```shell
npm install --save @heppokofrontend/pager
```

### Instance

#### Properties

|property name|type|readonly|description|
|---|---|---|---|
|`values`|`T[]`|`true`|Iterable objects to be managed by the pager.|
|`views`|`number`||Number of items to be displayed per page.|
|`set index()`|`number`||Page number to move to.|
|`get index()`|`number`||The current page number.|
|`get lastIndex()`|`number`|`true`|Last page number.|
|`get page()`|`T[]`|`true`|Items on the current page.<br>It is recommended to cache the got values.|

#### Methods

|method name|type|description|
|---|---|---|
|`current()`|`(index: number) => T[]`|Switch the current page to any page.|
|`next()`|`() => T[]`|Switch the current page to the next.|
|`prev()`|`() => T[]`|Switch the current page to the previous.|


### Syntax

```js
new Pager(values[, views])
```

#### `values`

Any iterable object.

#### `views`

If specified, number of items to be displayed per page.

The default value is `5`.

### Example:

```javascript
import { Pager } from '@heppokofrontend/pager';
// const { Pager } = require('@heppokofrontend/pager');

const pager = new Pager([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

pager.current(1); // => [6, 7, 8, 9, 10]
pager.current(-1); // => [1, 2, 3, 4, 5]
pager.current(pager.lastIndex); // => [6, 7, 8, 9, 10]
pager.current(100); // => [6, 7, 8, 9, 10]
pager.lastIndex // => 2

pager.views = 2; // Change the number of views per page.

pager.lastIndex // => 5
pager.current(1); // => [3, 4]
pager.current(200); // => [9, 10]
pager.page // => [9, 10]

pager.index = 3; // Change the current page number

pager.page // => [7, 8]
pager.current(7); // => [7, 8]
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

## 元ネタ

https://qiita.com/heppokofrontend/items/52d95a11c5e5ee4f1ca6
