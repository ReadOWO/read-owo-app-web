<template>
    <pv-card class="article-content">
        <template #header>
        </template>
        <template #content>
            <div>
                <p class="align-">ONE PIECE</p>
                <img src="https://i.pinimg.com/originals/4c/46/ee/4c46ee47e0710a6d928454f68fc4ee17.png"
                     alt="One Piece">
            </div>
        </template>
        <template #footer>
        </template>
    </pv-card>
</template>

<script>
export default {
    name: "article-card.component",
}
</script>

<style scoped>
.article-content{
    width: 25%;
}
</style>