# @heppokofrontend/pager

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/@heppokofrontend/pager.svg)](https://www.npmjs.com/package/@heppokofrontend/pager) [![Maintainability](https://api.codeclimate.com/v1/badges/027423b0daa8f7c001be/maintainability)](https://codeclimate.com/github/heppokofrontend/pager/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/027423b0daa8f7c001be/test_coverage)](https://codeclimate.com/github/heppokofrontend/pager/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/npm/@heppokofrontend/pager/badge.svg)](https://snyk.io/test/npm/@heppokofrontend/pager)
 [![@heppokofrontend/pager](https://snyk.io/advisor/npm-package/@heppokofrontend/pager/badge.svg)](https://snyk.io/advisor/npm-package/@heppokofrontend/pager)


Wrapping iterable objects with the pager function.

## Usage

Installation:

```shell
npm install --save @heppokofrontend/pager
```

Example: 

```javascript
import { Pager } from '@heppokofrontend/pager';

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
