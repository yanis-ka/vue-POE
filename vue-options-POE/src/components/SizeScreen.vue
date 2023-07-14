<script>
import ScreenSizeMixin from "../mixins/ScreenSizeMixin";

export default {
    name: "SizeScreen",
    data() {

    },
    mixins: [ScreenSizeMixin]
}
</script>

<template>
    <p class="font-bold text-xl">La Largeur de l'écran est de {{ screenSize.width }}px</p>
</template>