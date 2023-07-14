<script>
import Counter from './components/Counter.vue'
import ListRendering from './components/ListRendering.vue'
import Form from './components/Form.vue'
import Exercice from './components/Exercice.vue'
import Clock from './components/Clock.vue'

import SizeScreen from './components/SizeScreen.vue'


export default {
  name: 'App',
  // variable "reactive"
  data() {
    return {
      firstName: "Eikichi",
      lastName: 'Onizuka',
      src: 'https://www.clique.tv/wp-content/uploads/2016/09/276018gto01.jpg',
      width: 150,
      height: 150,
      condition: true,
      isLogged: false,
      bgColor: "bg-emerald-200"
    }
  },
  // methodes 
  methods: {
    changeName() {
      this.firstName = "Baki"
    },
    changeColor() {
      this.bgColor = 'bg-slate-400'
    },
    handleEvent(value) {
      console.log(value);
    }
  },
  // Proprieté calculé 
  /*
  Les computed sont mis à jour automatique en fonction des propriété (data)
  qu'elles utilisent. Donc si une valeur est modifié, le computed est recalculé auto
  */
  computed: {
    getFullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    },
    getWidthDouble() {
      return this.width * 2
    }

  },
  components: {
    Counter,
    ListRendering,
    Form,
    Exercice,
    Clock,
    SizeScreen
}

}

</script>

<template>
  <header class="flex justify-center space-x-6 bg-slate-800 text-white items-center p-6">
    <img src="./assets/logo.svg" alt="Vue.js" width="125" height="125">
    <h1 class="text-4xl font-bold text-center">Formation Vue.js By <span class="text-emerald-700 uppercase">Dawan</span> </h1>
  </header>
  <main class="min-h-screen bg-slate-800 text-white text-lg space-y-2">
    <section v-if="isLogged" class="container mx-auto px-4 py-10">
      <h2 class="font-bold  text-3xl text-emerald-500 uppercase">Options API</h2>
      <div class="h1 bg-emerald-500 my-3"></div>

      <h3 class="font-bold text-2xl my-5 text-emerald-700">Syntaxe</h3>
      <p>L'interpolation : se fait entre accollade  
        <code>{{  '{' + 'expression en js' + '}' }}</code>
      </p>
      <p>Une expression est une unité qui produit une valeur :</p>
      <ul>
        <li>Une valeur littérale</li>
        <li>Une variable</li>
        <li>une fonction</li>
        <li>une opération mathématique</li>
        <li>une condition</li>
        <li>une comparaison</li>
        <li>un appel de methode</li>
        <li>Une combinaison de tout ces éléments</li>
      </ul>

      <p>Par exemple {{ 10 * 20 }}</p>
      <p> 10 + 20 </p>
      <p>Bonjour {{ `${firstName} ${lastName}` }}</p>
      <p>Bonjour {{ getFullName }}</p>
      <button v-on:click="changeName()" class="bg-emerald-500 text-slate-800 p-4">
        Changer de nom 
      </button>

      <h3 class="font-bold text-2xl my-5 text-emerald-700">Les directives</h3>
      <p>Une directive est un attribut spécial que l'ion peut utiliser dans le code HTML pour 
        appliquer des comportements à un élément DOM lorsque qu'il est rendu par Vue.js
      </p>

      <h4>V-BIND: attribut HTML</h4>
      <img 
      v-bind:src="src"
      :alt="'Onizuka'" 
      :width="getWidthDouble"
      :height="height">

      <h4>V-ON : event listener </h4>
      <button @click="width += 10" class="bg-emerald-500 text-slate-800 p-4">
        Changer Taille image
      </button>

      <p>On peut faire du rendu conditionel avec 
        <code class="bg-black p-2 mb-2">v-if, v-else-if, v-else, v-show</code>
      </p>

      <ul>
        <li>v-if: rendu conditionel : Crée et detruit le composant en fonction 
          de la condition. Couteux si beaucoup de changement
        </li>
        <li>
          v-show : affichage conditionel. Le composant est crée mais affiché seulement si 
          la condition est vrai 
        </li>
      </ul>

        <p v-if="condition">Texte affiché seulement si true</p>
        <p v-else>Sinon c'est ce texte qui s'affiche</p>

        <p v-show="condition">Je suis un v-show</p>

        <button @click="condition = !condition" class="bg-emerald-500 text-slate-800 p-4">
           Changer Condition
        </button>

      <h3 class="font-bold text-2xl my-5 text-emerald-700">Les composants</h3>
      <p>En Vue.js, un composant est une unité fonctionnelle réutilisable qui 
        encapsule la logique et l'apparence d'une partie de L'UI (interface utilisateur)</p>

      <Counter 
      :counterProps="10" 
      title="Mon super Compteur"
      :bgColor="bgColor" 
      :changeColor="changeColor"
      @bouton-clique="handleEvent"
       /> 

       <h3 class="font-bold text-2xl my-5 text-emerald-700">List rendering</h3>
       <ListRendering />

       <h3 class="font-bold text-2xl my-5 text-emerald-700">Les formulaires</h3>
       <Form />

       <h3 class="font-bold text-2xl my-5 text-emerald-700">Exercice</h3>
       <Exercice />

       <h3 class="font-bold text-2xl my-5 text-emerald-700">Cycle de vie</h3>
       <p>Vue.js offre un certain nombre de "hooks" (point d'accroche) pour le cycle de vie 
        d'un composant, qui permet d'executer du code à des moment précis, lorsqu'un composant 
        est crée , modifié ou detruit 
       </p>
       <ul class="space-y-3">
        <li class="text-emerald-100 text-lg font-bold">
          beforeCreated() : Ce hook est appelé avant la création de l'instance de votre composant. A ce moment, les
          propriétés et les méthodes de votre composant ne sont pas encore définies.</li>
        <li class="text-emerald-200 text-lg font-bold">
          created() : Ce hook est appelé après la création de l'instance de votre composant, mais avant qu'elle ne soit
          montée sur la page. </li>
        <li class="text-emerald-300 text-lg font-bold">
          beforeMount() : Ce hook est appelé après la création de l'instance de votre composant, mais avant qu'elle ne
          soit montée sur la page.</li>
        <li class="text-emerald-400 text-lg font-bold">
          mounted() : Ce hook est appelé après que votre composant a été monté sur la page. À ce stade, vous pouvez
          accéder au DOM et interagir avec les éléments de la page.</li>
        <li class="text-emerald-500 text-lg font-bold">
          beforeUpdate() : Ce hook est appelé juste avant que votre composant ne soit mis à jour en raison d'un changement
          de données.</li>
        <li class="text-emerald-400 text-lg font-bold">
          updated() : Ce hook est appelé après que votre composant a été mis à jour en raison d'un changement de données.
          À ce stade, le DOM a été mis à jour pour refléter les nouvelles données. </li>
        <li class="text-emerald-600 text-lg font-bold">
          beforeUnmounting() : Ce hook est appelé juste avant que votre composant ne soit démonté de la page </li>
        <li class="text-emerald-700 text-lg font-bold">
          unmounted() : Ce hook est appelé après que votre composant a été démonté de la page.</li>
      </ul>




      <Clock />

      <SizeScreen />

  

    </section>

    <section  class="container mx-auto px-4 py-10">

    <div v-if="isLogged" class="bg-emerald-300 p-3 text-slate-800">
        Vous êtes connecté !
      </div>

      <div v-else class="bg-red-300 p-3 mt-2 text-slate-800">
        Vous n'êtes pas connecté !
      </div>
  
      <!--
      <button v-if="isLogged" @click="isLogged = !isLogged" class="bg-white my-2 text-slate-800 p-4">
        Deconnexion
      </button>

      <button v-else @click="isLogged = !isLogged" class="bg-white my-2 text-slate-800 p-4">
        Connexion
      </button>
        -->        
      <button @click="isLogged = !isLogged" class="bg-white my-2 text-slate-800 p-4">
        {{ isLogged ? 'Deconnexion' : 'Connexion' }}
      </button>

      </section>

  </main>
</template>

<style></style>