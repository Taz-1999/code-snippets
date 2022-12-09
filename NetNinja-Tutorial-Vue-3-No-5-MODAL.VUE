<template>
  <!-- Vi adderar ett click på hela bakgrunden för att stänga modalen. Lesson 25. -->
  <div class="backdrop" @click="closeModal">
    <!-- Klurig grej, nu skickar vi med sale för att få en class som kan användas för att styla det hela.

      (Efter denna kommentar kommer alltså: :class="{ sale: theme === 'sale' }" inuti en div)
    
      v-bind: har en special, som är class binding, dvs "v-bind:class" skrivs ":class". 

      Det likställs med ett uttryck och det uttrycket är <plain-old-javascript>

      <div :class="{ red: isRed }"></div>

      Detta red: isRed är ett namn/värde-par. 
      
      Red är namn, isRed är en variabel som ger ett värde till red. 

      Man kan ha satt isRed annorstädes, tex så här: 

      let isRed = true;

      Sedan kan man testa vad som loggas:

      let x = { red: isRed };
      
      console.log(x.red) exempel kommer logga

      > true

      Classname kommer alltså vara red, om isRed = true. 

      Vad han gör är att göra en bool av theme === 'sale', för i <Modal så skickar han theme="sale". Så variabeln theme kommer hit och är = strängen 'sale'. 
      
      Så, detta :class="{ sale: theme === 'sale' }" betyder

      om theme är 'sale', skriv ut class="sale" i denna div:

      <div class="modal sale"> 
    
    -->
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<!-- 
  Detta med props: är ungefär som att skapa variabler vars namn sedan kan användas.
  Vue kräver att man namnger dem och först då kan de användas i <template> ovan.
  Värdet i variabeln kan tilldelas på andra ställen (App.vue tex) och skickas hit med v-bind i <Modal>-elementet eller som data-properties. 
  Ref: https://vuejs.org/guide/components/props.html#props-declaration

  Nu är även theme='sale' adderad, så till props adderas "theme".

  -->

<script>
export default {
  props: ["header", "text", "theme"],
  // Här skapas en event-emitter som skickar till FÖRÄLDERN, med namn "close". Kolla <Modal i App.vue)
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 400px;
  padding: 20px;
  margin: 200px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}

.modal.sale {
  background: crimson;
}
</style>
