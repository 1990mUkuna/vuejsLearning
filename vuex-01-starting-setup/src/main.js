import { createApp } from 'vue';

import App from './App.vue';

import store from './store/index.js';

const app = createApp(App);

app.use(store);

app.mount('#app');

/* 
Vuex help us found a better way to communicate with store

Tne component need to find a way to access store, for that we will use  

# Mutations

A mutation have the logic to update the state
And we trigger those logic from the comonent 

~Side Note: So to update mutation data store, the component  talk first to the mutations
then the mutation talk to the store 

~Side Note: Mutation must be sycronis, never have an async methodes inside mutation
if you have a methods that need two wait for two seconde better use timeout aproach
ie: setTimeout(, 2000)

We can not talk to the state store directly from a component that why we need "Getter"

A Getters will help us fetch what ever result the mutation pass to him

But we do need Actions to talk to mutation as action can handle async method as it is a good aproach to use action for comunication betwen component and store
First component talk to action the action talk to mutation, mutation update the store state the getter get the result 
*/
