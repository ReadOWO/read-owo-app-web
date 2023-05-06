<template>
    <footer class="footer bg-black-alpha-90">
        <div class="footer-item">ReadOwo</div>
        <div class="footer-item">Help Center</div>
        <div class="footer-item">Our Social Media</div>
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
    height: 250px;
}
.footer-item {
    margin: 0 10px;
}
</style>