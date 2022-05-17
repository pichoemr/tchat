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
      salon: require('./widgets/salon'),
      message: require('./widgets/message'),
      menu: require('./widgets/menu'),
      setting: require('./widgets/setting')
    },
    listeners: {
      onEnvStart: require('./listeners/onEnvStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      register: require('./listeners/register'),
      send_message: require('./listeners/send_message'),
      navigation: require('./listeners/navigation')
    },
    rootWidget: 'main'
  }
}
