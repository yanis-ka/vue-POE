<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter : this.counterProps
        }
    },
    methods: {
        increment(){
            this.counter ++

        },
        decrement(){
            if(this.counter > 0) {
                this.counter --
            }     
        },
        buttonClicked() {
            this.$emit('bouton-clique', "Hello from the child")
        } 
    },
    // Watch : surveiller une propriété (data)
    watch: {
        counter(newValue) {
            if(newValue === 20) {
                alert("Le compteur a dépassé 20 !")
            }

        }

    },
    props : {
        counterProps: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            default: 'Compteur',
            required: false
        },
        bgColor: {
            type: String,
            required: true
        },
        changeColor : {
            type: Function
        }  

    }
}
</script>

<template>
   <div :class="`my-3 ${bgColor} text-slate-700 p-7 w-1/2`">
      <h4 class="text-xl my-3 text-center">{{ title }}</h4>
      <p class="text-7xl text-center">{{ counter }}</p>
      <button @click="changeColor" class="border border-slate-700 p-2 my-2">Changer couleur de fond</button>
      <div class="flex justify-around">
        <button @click="decrement" class="bg-white p-4">
            -
        </button>
        <button @click="increment" class="bg-white p-4">
            +
        </button>

        <button @click="buttonClicked">Emit un event</button>

      </div>
   </div>  
</template>

<style>
</style>