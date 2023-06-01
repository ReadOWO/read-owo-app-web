<template>
    <footer class="footer bg-black-alpha-90">
        <div class="footer-item">
            <a class="terms" href="/terms-conditions"><p>Terms and conditions</p></a>
        </div>
        <div class="footer-item">
            <p>ReadOWO &copy All rights reserved - MangaLounge</p>
        </div>
        <div class="footer-item">
            <p>Our Social Media</p>
            <div class="social-icons">
                <i class="pi pi-facebook"></i>
                <i class="pi pi-instagram"></i>
                <i class="pi pi-youtube"></i>
                <i class="pi pi-twitter"></i>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer-content.component"
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white;
    height: 150px;
    font-family: system-ui;
}
.footer-item {
    margin: 0 10px;
}

a:link{
    color: white;
    text-decoration: none;
}

a:visited{
    color: white;
    text-decoration: none;

}
.social-icons{
    justify-content: space-between;
    display: flex;
}
</style>