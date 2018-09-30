ariaset
===
[![Build Status](https://travis-ci.org/kzhrk/ariaset.svg?branch=master)](https://travis-ci.org/kzhrk/ariaset)
[![Coverage Status](https://coveralls.io/repos/github/kzhrk/ariaset/badge.svg?branch=master)](https://coveralls.io/github/kzhrk/ariaset?branch=master)

ariaset make easier assign for aria-" properties.

## Usage

```js
import ariaset from 'ariaset';

const element = document.querySelector('.selector');

ariaset(element {
  label: 'description'
});
```

or 

```html
<script src="node_modules/ariaset/dist/ariaset.js">
<script>
const element = document.querySelector('.selector');

ariaset(element {
  label: 'description'
});
</script>
```

## Install

```
$ npm install ariaset
```

## Licence

MIT

## Author

[kzhrk](https://github.com/kzhrk)
