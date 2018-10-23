ariaset
===
[![Build Status](https://travis-ci.org/kzhrk/ariaset.svg?branch=master)](https://travis-ci.org/kzhrk/ariaset)
[![Coverage Status](https://coveralls.io/repos/github/kzhrk/ariaset/badge.svg?branch=master)](https://coveralls.io/github/kzhrk/ariaset?branch=master)

ariaset make easier assign for aria-" properties.

## Install

```
$ yarn add ariaset -D
```

or

```
$ npm install ariaset -D
```

## Usage

The recommend use case is using `import` statements.  

```js
import ariaset from 'ariaset';

const element = document.querySelector('.selector');

// set a property
ariaset(element, {
  label: 'description'
});

// get a property
ariaset(element, 'label');
// => description

// you can set multiple properties.
ariaset(element, {
  haspopup: 'listbox',
  expanded: false
});

// of course, you can get multiple properties.
ariaset(element, ['haspopup', 'expanded']);
// => { haspopup: 'listbox', expanded: false }
```

Alternatively, you can use `script` tag with html file.

```html
<script src="node_modules/ariaset/dist/ariaset.js">
<script>
const element = document.querySelector('.selector');

ariaset(element {
  label: 'description'
});
</script>
```

## Licence

MIT

## Author

[kzhrk](https://github.com/kzhrk)
