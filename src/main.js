import Vue from 'vue'
import App from './App.vue'
import store from './store'
import I18n, { i18nMixin } from "./I18n"

Vue.use(I18n);
Vue.mixin(i18nMixin);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
