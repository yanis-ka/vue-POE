<script>
export default {
    name: "Form",
    data() {
        return {
            name1: '',
            name2: '',
            listUser: [],
            listError: [],
            newUser: { firstName: undefined, lastName: undefined }
        }
    },
    methods: {
        updateName(value) {
            this.name1 = value
        },
        // ajout user
        addUser() {

            // on vide la liste des erreurs pour éviter qu'elles s'accumulent
            this.listError = [];
            // on vérifie si les champs ne sont pas vides 
            if (this.newUser.firstName && this.newUser.lastName) {
                // on ajoute l'utilisateur dans le tableau
                // on clone new user 
                let clone = Object.assign({}, this.newUser)
                this.listUser.push(clone)

                // this.listUser.push({...this.newUser});
                // let clone2 = this.newUser
                // clone2 === this.newUser // true
                // clone === this.newUser // false

                // on vide les champs de formulaire
                this.newUser = { firstName: undefined, lastName: undefined }

            } else {
                // on ajoute les erreurs
                if (!this.newUser.firstName) {
                    this.listError.push("Le champs prénom est obligatoire")
                }
                if (!this.newUser.lastName) {
                    this.listError.push("Le champs nom est obligatoire")
                }
            }

        }
    }


}
</script>

<template>
    <div class="w-3/44 mx-auto p-3">
        <div class="flex mb-4">
            <div class="w-1/2 mr-4">
                <label for="name1" class="font-bold block mb-2">Name 1</label>
                <input id="name1" :value="name1" @input="updateName($event.target.value)" type="text"
                    class="bg-slate-900 w-full px-4 py-2 border rounded-md">
                <span>Name 1 : {{ name1 }}</span>
            </div>
            <div class="w-1/2 mr-4">
                <label for="name2" class="font-bold block mb-2">Name 2</label>
                <input v-model="name2" id="name2" type="text" class="bg-slate-900 w-full px-4 py-2 border rounded-md">
                <span>Name 2 : {{ name2 }}</span>
            </div>
        </div>

        <!-- Afficher liste des erreurs -->
        <ul v-if="listError.length">
            <li class="text-red-500" v-for="(error, index) in listError" :key="index">{{ error }}</li>
        </ul>
        <!--Formulaire ajout-->
        <form class="mb-4 bg-black p-3">
            <div class="flex justify-between">
                <div class="w-1/2 mr-4">
                    <label for="firstName" class="font-bold block mb-2">FirstName</label>
                    <input v-model="newUser.firstName" id="firstName" type="text"
                        class="bg-slate-900 w-full px-4 py-2 border rounded-md">
                </div>

                <div class="w-1/2 mr-4">
                    <label for="lastName" class="font-bold block mb-2">LastName</label>
                    <input v-model="newUser.lastName" id="lastName" type="text"
                        class="bg-slate-900 w-full px-4 py-2 border rounded-md">
                </div>

                <div class="w-20">
                    <button @click.prevent="addUser"
                        class="bg-emerald-500 hover:bg-blue-700 text-white py-2 px-4 mt-7">Enregister</button>

                </div>
            </div>
        </form>

        <!--Liste utilisateur-->
        <h2 class="text-lg font-bold mt-6">Mes utilisateurs</h2>

        <ul class="mb-4" v-if="listUser.length">
            <li class="mb-2 bg-emerald-400 text-slate-700 p-3" v-for="(user, index) in listUser" :key="index">
                {{ `${user.firstName} ${user.lastName}` }}</li>
        </ul>

        <p v-else>Pas d'utilisateur enregisté !</p>


    </div>
</template>

<style></style>