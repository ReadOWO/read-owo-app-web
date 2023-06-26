<template>
    <div>
        <h1 class="text-center">Every story begins with a single WORD</h1>
        <h3>Your Work</h3>
        <table>
            <thead>
            <tr>
                <th>PHOTO</th>
                <th>TITLE</th>
                <th>NUMBER OF CHAPTERS</th>
                <th>PUBLICATION DATE</th>
                <TH>ACTIONS</TH>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(book, index) in publishedBooks" :key="index">
                <td><img class="img-container" :src="book.booksImage" :alt="book.booksTitle" @click="showBookInfo(book)"></td>
                <td>{{ book.booksTitle }}</td>
                <td>{{ book.chaptersNumber }}</td>
                <td>{{ book.booksDate }}</td>
                <td>
                    <!-- Aquí puedes agregar botones para editar o eliminar la publicación -->
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { BookService } from "@/publish/services/book-service";
import { ChapterService } from "@/publish/services/chapter-service";
import { mapState } from "vuex";

export default {
    name: "your-artwork",
    computed: { ...mapState(['profile', 'isAuthenticated']) },
    data() {
        return {
            publishedBooks: [],
            book:{
                booksImage: "",
                booksTitle: "",
                booksDate: "",
                chaptersNumber: 0
            }
        };
    },
    async created() {
        this.bookService = new BookService();
        this.chapterService = new ChapterService()
        await this.getPublishedBooks();
    },
    methods: {
        async getPublishedBooks() {
            let responseBook = await this.bookService.getAll();
            let responseChapter = await this.chapterService.getAll();
            for (let bookAux of responseBook.data) {
                if (this.profile.id === bookAux.profileId) {
                    this.book = {
                        booksImage: bookAux.thumbnailUrl,
                        booksTitle: bookAux.title,
                        booksDate: bookAux.publishedAt,
                        chaptersNumber: 0
                    };
                    for (let chapterAux of responseChapter.data) {
                        if (bookAux.id === chapterAux.book.id) {
                            this.book.chaptersNumber += 1;
                        }
                    }
                    this.publishedBooks.push(this.book);
                }
            }
        },
        showBookInfo(book) {
            // Aquí puedes agregar el código para mostrar la información del libro
        }
    }
}
</script>
<style scoped>
.text-center {
    text-align: center;
}
.img-container {
    max-width: 100px;
}
table {
    width: 100%;
}
th, td {
    text-align: center;
    vertical-align: middle;
}
</style>
