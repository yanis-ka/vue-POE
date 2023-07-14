<script>
export default {
    name: 'Clock',
    data() {
        return {
            text: "Hello word",
            second: 0,
            intervalId: null

        }
    },
    beforeCreate() {
        console.log('Before create text = ' + this.text)
    },
    created() {
        console.log('created text = ' + this.text)
    },
    mounted() {
        // incrementer ma variable second
       this.intervalId = setInterval(() => {
            this.second++
            console.log('Timer' + this.second)
        }, 1000);
        console.log(this.intervalId);    
    },
    updated() {
        console.log("updated !")
    },
    beforeUnmount() {
        console.log("Pensez a sauvegarder vos modifications")
        console.log("Destroying");
        clearInterval(this.intervalId)

    },
    unmounted() {
        console.log("Instance destroyed");

    }

}
</script>
<template>

    <!--La variable existe dans l'instance de Vue, elle est declaré -> dynamique et modifiable -->
    <p>{{ text }}</p>

    <!--Variable non déclaré , même si je la declare plus tard , elle ne s'affichera pas et ne sera
    pas dynamique 
    <p>{{ text2 }}</p>
    -->

    <!--Ici on récupère la valeur de text3 dans le rendu, mais elle n'est pas réactive car
    non declaré dans l'instance de Vue -->
    <p>{{ text3 = "Hola chico" }}</p>

   <p>Il s'est écoulé {{ second }} seconds depuis que le composant est là.</p>
  
</template>