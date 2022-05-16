'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      main: require('./widgets/main'),
      home: require('./widgets/home'),
      header: require('./widgets/header'),
      redirect: require('./widgets/redirect'),
      register: require('./widgets/register'),

    },
    listeners: {
      onEnvStart: require('./listeners/onEnvStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      register: require('./listeners/register'),
      send_message: require('./listeners/send_message')
    },
    rootWidget: 'main'
  }
}
