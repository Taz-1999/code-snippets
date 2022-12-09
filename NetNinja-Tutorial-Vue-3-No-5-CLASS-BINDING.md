# ANTECKNINGAR FRÅN THE NET NINJA - Vue JS 3 Tutorial for Beginners #5 - The Vue CLI & Bigger Projects (part 2)

## LESSON 25 forts - CLASS BINDINGS (13:36)
https://youtu.be/KM1U6DqZf8M?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&t=816

## Lesson 25: FILER
https://github.com/iamshaunjp/Vue-3-Firebase/tree/lesson-25


I App.vue så skickar vi även med namn/värde-par: theme="sale"

  <Modal v-bind:header="header" :text="text" theme="sale"/>

I Modal.vue så innehåller <template> nu: 

  <div class="modal" :class="{ sale: theme === 'sale' }">

**Förklaring**

v-bind: har en special/shorthand för class binding, dvs "v-bind:class" skrivs ":class". 

Det likställs med ett uttryck och det uttrycket är <plain-old-javascript!>

  <div :class="{ red: isRed }"></div>

Detta **red: isRed** är ett vanligt namn/värde-par. Red är namn, isRed är en variabel som ger ett värde till red. 

Exempelvis kan det ha fått sitt värde annorstädes, så:

  let isRed = true;
  let x = { red: isRed };

Då kommer

  console.log(x.red)

logga

  > true

Classname kommer alltså vara red, om isRed = true. 

Vad han gör är att göra en bool av theme === 'sale', för i <Modal>-taggen så skickar han theme="sale". 

Så variabeln **theme** kommer hit och är lika med strängen **'sale'**. 

Så, detta **:class="{ sale: theme === 'sale' }"** betyder, är sale: true/false dvs är (theme === 'sale')?

Eller kortare: Om **theme = 'sale'**, addera **class="sale"** till denna div, så:

<div class="modal sale"> 
