<template>
  <h1>{{ title }}</h1>
  <p>Welcome... </p>

  <!-- Här läses Modal.vue in och några variabler sätts med shorthand ":" som är samma sak som "v-bind:". 
  https://vuejs.org/api/built-in-directives.html#v-bind

  Detta, då det görs i en komponent "Modal" kallas för prop-binding.

  Vi skickar även med namn/värde-par: theme="sale"

  I Lesson 24 så såg modal ut så här: 

  <Modal v-bind:header="header" :text="text" theme="sale"/>

  I Lesson 25 är modal inuti en div med villkor. Om showModal = true, ritas diven ut.
  https://youtu.be/KM1U6DqZf8M?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&t=1114

-->

<div v-if="showModal">
  <!-- Tag emot close-event från emittern i Modal.vue och ropa på funktionen tooggleModal. -->
  <Modal v-bind:header="header" :text="text" theme="sale" @close="toggleModal"/>
</div>

<!-- En knapp för att visa/gömma också.  -->
<button @click="toggleModal">Open modal</button>

</template>

<script>
import Modal from './components/Modal'

/* Här tilldelas värden till de props vars namn skapats i Modal.vue.  

Iden är att sätta värden här i App.vue och använda dem i <template> inuti Modal.vue

*/

export default {
  name: 'App',
  components: { Modal },

  // Här sätts namn-/värdepar på de properties som skickas till Modal.vue 
  // via <Modal-taggen> och databindingen.
  // data är även default-start på en komponent när den läses in första gången.

  data() {
    return {
      title: 'My First Vue App!',
      header: 'Sign up for the Giveaway!',
      text: 'Grab your ninja swag for half price!',
      // I lesson 25 så adderar vi en showModal
      showModal: false,
    }
  }, 

  methods: {
    toggleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>





<!-- 
Så här såg App.vue ut från börja. (Ovan är NetNija-kursen).

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App GODFUCKINGDAMMIT!"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

-->
