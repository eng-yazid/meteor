App.methods({
  echo: function (/* arguments */) {
    return _.toArray(arguments);
  },
  exception: function (where) {
    var shouldThrow =
      (Meteor.is_server && where === "server") ||
      (Meteor.is_client && where === "client") ||
      where === "both";

    if (shouldThrow)
      throw new Error("Test method throwing an exception");
  }
});
