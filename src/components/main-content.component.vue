<template>
    <div>
        <h1>TOP POST THIS WEEK</h1>
        <article-card-component class="first-card"></article-card-component>
    </div>
    <div>
        <h2>What You May Like</h2>
        <div class="article-container">
            <article-card-component v-for="n in 4" :key="n"/>
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
}
.first-card{
    margin: 0 auto;
}
.article-container{
    display:flex;
}
</style>