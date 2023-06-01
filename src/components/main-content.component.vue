<template>
    <div>
        <h1>TOP POST THIS WEEK</h1>
        <article-card-component class="first-card"
                                name="ONE PIECE"
                                imageUrl="https://i.pinimg.com/originals/4c/46/ee/4c46ee47e0710a6d928454f68fc4ee17.png"/>
    </div>
    <div>
        <h2>What You May Like</h2>
        <div class="article-container">
            <article-card-component name="ONE PIECE"
                                    imageUrl="https://i.pinimg.com/originals/4c/46/ee/4c46ee47e0710a6d928454f68fc4ee17.png"/>
            <article-card-component name="DEMON SLAYER"
                                    imageUrl="https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg"/>
            <article-card-component name="Geomsulmyeongga Mangnaeadeul"
                                    imageUrl="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx149332-adkSyOFY3c5U.jpg"/>
            <article-card-component name="Wu Lian Dianfeng"
                                    imageUrl="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx104494-xmWuGEwxzbfB.jpg"/>
        </div>
    </div>
</template>

<script>
import ArticleCardComponent from "./article-card.component.vue";

export default {
    name: "main-content.component",
    components: {ArticleCardComponent}
}
</script>

<style scoped>

h1{
    text-align: center;
    font-family: Arial, sans-serif;

}
h2{
    font-family: Arial, sans-serif;
}
.first-card{
    margin: 0 auto;
}
.article-container{
    display:flex;
}
</style>
