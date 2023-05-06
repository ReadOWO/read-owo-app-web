<template>
    <div class="w-full">
        <div>
            <pv-menubar class="sticky bg-blue-500">
                <template #start>
                    <pv-button label="Opciones" icon="pi pi-bars" @click="toggleSidebar" />
                    <side-menu v-model:visible="sidebarVisible"></side-menu>
                </template>
                <template #end>
                    <router-link v-for="item in items" :key="item.label" :to="item.to" class="p-button-text text-white">
                        <pv-button class="p-button-text text-white">{{ item.label }}</pv-button>
                    </router-link>
                </template>
            </pv-menubar>
        </div>
        <router-view></router-view>
        <footer-content-component></footer-content-component>
    </div>
</template>

<script>
//import MainContentComponent from "./components/main-content.component.vue";
import FooterContentComponent from "./components/footer-content.component.vue";
import SideMenu from "./components/side-menu.component.vue";
export default {
    name: 'App',
    components: {FooterContentComponent/*, MainContentComponent*/, SideMenu},
    data() {
        return {
            sidebarVisible: false,
            items: [
                { label: "Home", to: "/home" },
                { label: "Login", to: "/login" },
                { label: "Register", to: "/register" },
            ],
        };
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible;
        }
    }
}
</script>

<style scoped>

</style>
