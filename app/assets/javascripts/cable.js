// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  var url = 'ws' + '://' + location.host + '/cable';

  if( location.host.indexOf('.dev') === -1 ) {
    url = 'wss://rrrchat.herokuapp.com'
  }

  App.cable = ActionCable.createConsumer( url );

}).call(this);
