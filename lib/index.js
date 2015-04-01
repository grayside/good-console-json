// Load modules

var Util = require('util');
var GoodReporter = require('good-reporter');
var Hoek = require('hoek');
var Moment = require('moment');
var SafeStringify = require('json-stringify-safe');

// Declare internals

var internals = {
    defaults: {
        format: 'YYMMDD/HHmmss.SSS',
        utc: true
    }
};

module.exports = internals.GoodConsoleJson = function (events, options) {

    Hoek.assert(this.constructor === internals.GoodConsoleJson, 'GoodConsoleJson must be created with new');
    options = options || {};
    var settings = Hoek.applyToDefaults(internals.defaults, options);

    GoodReporter.call(this, events, settings);
};

Hoek.inherits(internals.GoodConsoleJson, GoodReporter);


internals.GoodConsoleJson.prototype._report = function (event, eventData) {

  var data = {
    event: eventData.event,
    id: eventData.id,
    instance: eventData.instance,
    method: eventData.method,
    path: eventData.path,
    query: eventData.query,
    responseTime: eventData.responseTime,
    statusCode: eventData.statusCode,
    pid: eventData.pid,
    source: eventData.source
  };

  var m = Moment.utc(eventData.timestamp);
  if (!this._settings.utc) { m.local(); }
  data.timestamp = m.format(this._settings.format);

  data = SafeStringify(data);

  console.log(data);

};
