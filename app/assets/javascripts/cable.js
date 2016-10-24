// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});
  let schema = 'ws';

  if( location.host.indexOf('.dev') === -1 ) {
    schema += 's';
  }

  App.cable = ActionCable.createConsumer(schema + '://' + location.host + '/cable');

}).call(this);
