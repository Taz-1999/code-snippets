# ANTECKNINGAR FRÅN THE NET NINJA - Vue JS 3 Tutorial for Beginners #5 - The Vue CLI & Bigger Projects (part 2)


## LESSON 25 - PROPS (6:15)
https://youtu.be/KM1U6DqZf8M?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&t=375

## Lesson 25: FILER
    https://github.com/iamshaunjp/Vue-3-Firebase/tree/lesson-25


Går att skicka props från föräldrer till barn->komponent. Dvs från App.vue -> Modal.vue. Props är namn/värde-par.

Man bör/skall skapa props på ETT ställe. 

I App.vue används <Modal XXXXX > på ett ställe där komponenten skall in. Inuti den taggen sätts header="Sign up for the giveaway. "

Man sätter en prop så:

<Modal header="My header text" >

I Modal.vue så skapar man ett script > export defaults > props så och namnger SAMMA prop omgiven med '' (fnuttar).

Man behöver deklarera på detta vis de props som finns.

<script>
    export default {
        props: ['header']
    }
    </script>

NU vet denna modul att från App.vue kommer det en prop som heter Header med ett strängvärde i. Det kan jag nu använda med {{ header }} inuti 
<template>-taggen i Modal.vue.


Man kan skapa ett gäng props inuti <Modal propname="propvalue", propname2="propvalue2">

OBS! Detta är bara för strängar. 

Nu kommer vi till data-bindings! 

Vill man inuti <Modal> skicka en boolean, siffra, array eller objekt (dvs inte en sträng), så måste man göra "data-binding".
https://vuejs.org/api/built-in-directives.html#v-bind

Vad det gör är att man knyter en prop till ett uttryck (som kan vara bool, siffra, array, objekt).

Skrivs så: 

<Modal v-bind:header="['shaun', 4, true]">

Detta knyter ihop "header" med detta värde. Det innanför "" utvärderas och är en array i detta fall.

Eller med Shorthand: 

<Modal :header="['shaun', 4, true]">

Man kan OCKSÅ innanför "" ange namnet på en variabel man sätter i ett data-objekt så, här sätts några variabler:

    export default {
    name: "App",
    components: { Modal },

    data () {
        return {
    title: 'My first Vue App! :)',
    header: 'Sign up for the giveway',
    text: 'Grab your ninja swag for half price',
        }
    } 
    }

Att skicka title, header och text från App.vue till Modal.vue görs så:

<Modal :title="title" :header="header" :text="text">

Dvs :title är en prop och title är namnet på variablen, där värdet kommer från script > export default > data () {}. 
Ref om data: https://vuejs.org/api/options-state.html#data
