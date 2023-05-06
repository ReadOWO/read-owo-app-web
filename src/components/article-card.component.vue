<template>
    <pv-card class="article-content">
        <template #header>
        </template>
        <template #content>
            <div>
                <p>{{name}}</p>
                <img :src="imageUrl" :alt="name">
            </div>
        </template>
        <template #footer>
        </template>
    </pv-card>
</template>

<script>
export default {
    name: "article-card.component",
    props: {
        name: String,
        imageUrl: String
    }
}
</script>

<style scoped>
.article-content{
    width: 25%;
}
img{
    max-width: 300px;
    max-height: 300px;
}
</style>
