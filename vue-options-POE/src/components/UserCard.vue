<script>
export default {
    name: "UserVue",
    props: {
        users: {
            type: Array
        }
    }

}
</script>

<template>
    <div v-for="user in users" :key="user.id" class="bg-slate-700 shadow p-5 w-35">
        <img :src="user.avatar" :alt="user.firstName" width="200" height="100">
        <p>Nom: {{ user.firstName }} {{ user.lastName.toUpperCase() }} </p>
        <p>Profession : {{ user.profession }}</p>
    </div>
</template>

<style></style>