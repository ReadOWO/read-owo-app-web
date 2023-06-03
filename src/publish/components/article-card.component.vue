<template>
    <pv-card class="card-content">
        <template #header>
        </template>
        <template #content>
            <div class="prev-button" @click="prevBook">
                <i class="fas fa-arrow-left fa-3x"></i>
            </div>
            <p class="book-title">{{bookCard.title}}</p>
            <img :src="bookCard.thumbnailUrl" :alt="name">
            <div class="next-button" @click="nextBook">
                <i class="fas fa-arrow-right fa-3x"></i>
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
        booksCard:Array
    },
    data() {
        return {
            bookCard:{},
            currentBookIndex: 0
        };
    },
    async created() {
        this.bookCard = this.booksCard[0]
        console.log(this.bookCard);
    },
    methods:{
        prevBook() {
            if (this.currentBookIndex > 0) {
                this.currentBookIndex--
                this.bookCard = this.booksCard[this.currentBookIndex]
            }
        },
        nextBook() {
            if (this.currentBookIndex < this.booksCard.length - 1) {
                this.currentBookIndex++
                this.bookCard = this.booksCard[this.currentBookIndex]
            }
        }
    }
}
</script>

<style scoped>
.card-content {
    list-style: none;
    margin: 0 auto;
    text-align: center;
    max-width: 450px;
    max-height: 550px;
    position: relative;
}
.book-title {
    font-weight: bold;
    font-family: 'Inter', sans-serif;
}
img{
    max-width: 300px;
    max-height: 400px;
}
.prev-button {
    position: absolute;
    top: 50%;
    left: 20px;
}
.next-button {
    position: absolute;
    top: 50%;
    right: 20px;
}
</style>
