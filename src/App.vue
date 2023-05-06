<template>
    <div class="w-full">
        <div>
            <pv-menubar class="sticky bg-blue-500">
                <template #start>
                    <pv-button icon="pi pi-bars"/>
                </template>
                <template #end>
                    <pv-button icon="pi pi-bars"/>
                </template>
            </pv-menubar>
        </div>
        <main-content-component></main-content-component>
        <footer-content-component></footer-content-component>
    </div>
</template>

<script>
import MainContentComponent from "./components/main-content.component.vue";
import FooterContentComponent from "./components/footer-content.component.vue";

export default {
    name: 'App',
    components: {FooterContentComponent, MainContentComponent},
    data(){},
}
</script>

<style scoped>

</style>
