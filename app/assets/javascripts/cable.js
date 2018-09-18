// Action Cable provides the framework to deal with WebSockets in Rails.
<<<<<<< HEAD
// You can generate new channels where WebSocket features live using the rails generate channel command.
=======
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
>>>>>>> a1ee1aafa86185f09afceb81132a4c93ef526a85
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
