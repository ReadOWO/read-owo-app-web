<template>
    <div class="w-full">
        <div class="toolbar-conteiner">
            <pv-menubar class="sticky bg-blue-500">
                <template #start>
                    <pv-button label="Opciones" icon="pi pi-bars" @click="toggleSidebar" />
                    <side-menu v-model:visible="sidebarVisible"></side-menu>
                </template>
                <template #end>
                    <div class="profile-conteiner">>
                        <router-link to="/home">
                            <img class="home-image" src="./publish/models/Logo.png" alt="Home"/>
                        </router-link>
                        <router-link to="/profile">
                            <img class="profile-image" :src="user.urlPhoto" alt="Profile"/>
                        </router-link>
                    </div>
                </template>
            </pv-menubar>
        </div>
        <RouterView/>
        <footer-content-component></footer-content-component>
    </div>
</template>

<script>
import MainContentComponent from "./publish/components/main-content.component.vue";
import FooterContentComponent from "./shared/components/footer-content.component.vue";
import SideMenu from "./shared/components/side-menu.component.vue";
import { mapState } from 'vuex'
export default {
    name: 'App',
    components: {FooterContentComponent, MainContentComponent, SideMenu},
    computed: {...mapState(['user'])},
    data() {
        return {
            sidebarVisible: false
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
.home-image {
    max-height: 70px;
}
.profile-image {
    border-radius: 50%;
    max-height: 70px;
}
.toolbar-conteiner {
    position: relative;
}
</style>
