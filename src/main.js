// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Launchpad from './Launchpad'
import LaunchpadControls from './LaunchpadControls' 
import Controller from './Controller'

Vue.config.productionTip = false
Vue.config.keyCodes = {
  b1: 81
}
/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#launchpad',
  components: { Launchpad },
  template: '<Launchpad/>'
})

new Vue({
  el: '#launchpad-control',
  components: { LaunchpadControls },
  template: '<LaunchpadControls/>' // Name of the imported vue file
})

new Vue({
  el: '#controller',
  components: { Controller },
  template: '<Controller/>'
})
