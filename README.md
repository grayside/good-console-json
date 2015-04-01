# good-console-json

Console broadcasting for Good process monitor

This is a simple fork of good-console which provides JSON output.

## Usage

`good-console-json` is a [good-reporter](https://github.com/hapijs/good-reporter) implementation to write [hapi](http://hapijs.com/) server events to the console.

## Good Console
### new GoodConsoleJson(events, [options])
creates a new GoodFile object with the following arguments

- `events` - an object of key value pairs.
	- `key` - one of the supported [good events](https://github.com/hapijs/good) indicating the hapi event to subscribe to
	- `value` - a single string or an array of strings to filter incoming events. "\*" indicates no filtering. `null` and `undefined` are assumed to be "\*"
- `[options]` -
	- `format` - [MomentJS](http://momentjs.com/docs/#/displaying/format/) format string. Defaults to 'YYMMDD/HHmmss.SSS'.
	- `utc` - boolean controlling Moment using [utc mode](http://momentjs.com/docs/#/parsing/utc/) or not. Defaults to `true`.
