import Vue from 'vue'
import App from './App.vue'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)
Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount('#app')
