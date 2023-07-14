<script>
import UserCard from './UserCard.vue'
export default {
    name: "ListRendering",
    components: { UserCard },
    data() {
        return {
            users: [
                {
                    firstname: "Eikixhi",
                    lastName: "Onizuka",
                    profession: "Great Teacher",
                    avatar: "https://www.clique.tv/wp-content/uploads/2016/09/276018gto01.jpg"
                },
                {
                    firstname: "Naruto",
                    lastName: "Uzumaki",
                    profession: "Hokage",
                    avatar: "https://static.hitek.fr/img/actualite/ill_m/1469496384/narutopirehokage.png"
                },
                {
                    firstname: "Luffy",
                    lastName: "Monkey D",
                    profession: "Roi des pirate",
                    avatar: "https://www.melty.fr/wp-content/uploads/meltyfr/2022/02/media-38835-1024x576.jpg"
                }
            ],
            users2: [
                {
                    id: 1,
                    firstName: "Madara",
                    lastName: "Uchiwa",
                    profession: "Fantome des Uchiwa",
                    avatar: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Egaming.2Egentside.2Ecom.2Fs3.2Ffrgsg.2F1280.2Fmanga.2Fdefault_2023-01-26_c57e71c8-a363-48ce-86d0-660e75a54932.2Epng/1200x675/quality/80/madara-uchiwa-dans-naruto.jpg"
                },
                {
                    id: 2,
                    firstName: "Sasuke",
                    lastName: "Uchiwa",
                    profession: "Survivant des Uchiwa",
                    avatar: "https://media.ultimate-manga.com/naruto/wallpaper-naruto-sharingan-sasuke.jpg"
                },
                {
                    id: 3,
                    firstName: "Itachi",
                    lastName: "Uchiwa",
                    profession: "Le traitre des Uchiwa",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oeanUxBacezovESr_-oerqHynDmCUL7RBg&usqp=CAU"
                },
            ],
        }
    },
}
</script>
<template>
    <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        <UserCard :users="users" />
        <UserCard :users="users2" />
    </div>
</template>


<style></style>


