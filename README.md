# numtel:template-from-string [![Build Status](https://travis-ci.org/numtel/meteor-template-from-string.svg?branch=master)](https://travis-ci.org/numtel/meteor-template-from-string)

Combined with [multiline ES6 template strings](https://babeljs.io/docs/learn-es6/#template-strings), make Blaze templates in Meteor with the Spacebars HTML code specified inside your Javascript file.

## Installation

```
meteor add numtel:template-from-string
```

## Usage

Example using ES6 template string:
```javascript
Template.hello = Template.fromString(`
  <button>Click Me</button>
  <p>You've pressed the button {{counter}} times.</p>
`);
```

## Resources

* [On-Demand Template Example](https://github.com/numtel/meteor-component-example) - Use this package to load templates on-demand with `iron:router`.
* [grigio:babel](https://github.com/grigio/meteor-babel/) - Use ES6 in your main application source files
* [Babel](https://babeljs.io/) - Core package powering ES6 -> ES5 transpiling

## License

MIT
