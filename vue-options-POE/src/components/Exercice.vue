<script>
export default {
    name: 'Exercice',
   
    data() {
        return {
            listGames: [
            {id: 1, title: "The Witcher 3", date:"2014", console: 'PS4', isPlayed: false},
            {id: 2, title: "Mario kart Wii", date:"2009", console: 'Wii', isPlayed: true},
            {id: 3, title: "Rocket League", date:"2015", console: 'PC', isPlayed: true},
            {id: 4, title: "Zelda Tears of the Kingdom", date:"2023", console: 'Switch', isPlayed: true},
            ],
            newGame:  {id: Math.floor(Math.random() * 100), title: undefined , date:undefined, console: undefined, isPlayed: false},
            listErrors: [],
            success: false
        }
    },
        methods : {
            changeClass : function (isPlayed) { 
                return (isPlayed) ? 'bg-amber-800' : 'bg-emerald-400'
            },
            changeStatus(game) {
                game.isPlayed = !game.isPlayed
            },

            addGame(e){
                // le piège 
                e.preventDefault();
                this.listErrors = [];
                if(this.newGame.title && this.newGame.console && this.newGame.date) {
                    let data = Object.assign({}, this.newGame);
                    this.listGames.push(data);
                    this.success = true

                    this.newGame.title = '';
                    this.newGame.date = '';
                    this.newGame.console= '';
                    setTimeout(() => {
                        this.success = false
                    }, 2000)
        
                }
                else {
                    if(!this.newGame.title) {
                        this.listErrors.push('Veuillez entrez un titre');
                    }
                    if(!this.newGame.date) {
                        this.listErrors.push('Veuillez entrez une date');
                    }
                    if(!this.newGame.console) {
                        this.listErrors.push('Veuillez entrez une console');
                    }
                }

            },

            deleteGame: function(id) {
               this.listGames = this.listGames.filter((game) => game.id !== id)
            }
        }
    }

</script>
<template lang="">
<div class="py-6">
    <h4 class="text-center mb-3 mt-4 text-2xl font-semibold">Ma liste de jeux vidéos</h4>
    <div class="max-w-3xl mx-auto">
      <ul>
        <li class="bg-red-100 text-red-800 rounded-md p-2 my-2" v-for="error of listErrors" :key="error">{{ error }}</li>
      </ul>
      <p v-show="success" class="bg-green-100 text-green-800 rounded-md text-center p-2 my-2">Le jeu a bien été ajouté</p>

      <form class="flex flex-col md:flex-row gap-2 items-center md:justify-between w-full mx-auto my-5" v-on:submit.prevent="addGame">
        <h3 class="text-xl md:mr-4 mb-2 md:mb-0">Ajouter un jeu</h3>
        <input v-model="newGame.title" type="text" class="f px-4 py-2 border border-gray-300 rounded-md bg-slate-900" placeholder="Title">
        <input v-model="newGame.date" type="text" class=" px-4 py-2 border border-gray-300 rounded-md bg-slate-900" placeholder="Date">
        <input v-model="newGame.console" type="text" class=" px-4 py-2 border border-gray-300 rounded-md bg-slate-900" placeholder="Console">
        <button class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md shadow-sm md:mx-2" type="submit">Enregistrer</button>
      </form>

    </div>

    <table class="table-auto w-11/12 mx-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Titre</th>
          <th class="px-4 py-2">Console</th>
          <th class="px-4 py-2">Date</th>
          <th class="px-4 py-2">Status</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="game of listGames" :key="game.id">
          <td class="border px-4 py-2">{{ game.title }}</td>
          <td class="border px-4 py-2">{{ game.console }}</td>
          <td class="border px-4 py-2">{{ game.date }}</td>
          <td
            class="border px-4 py-2 cursor-pointer text-center"
            v-on:click="changeStatus(game)"
            v-bind:class="changeClass(game.isPlayed)"
          >
            <span v-if="game.isPlayed">Déjà joué</span>
            <span v-else>À faire</span>
          </td>
          <td class="border px-4 py-2 text-center text-red-600 cursor-pointer" v-on:click="deleteGame(game.id)">Supprimer</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>