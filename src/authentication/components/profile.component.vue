<template>
    <div>
        <img src="../public/images/fontProfile.png" alt="ProfileImage"/>
        <p>Nombre: {{ profile.name }}</p>
        <p>Foto de Perfil:</p><img :src="profile.urlPhoto" :alt="profile.name">
        <p>Email: {{ profile.user.email}}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "profile",
    computed: {
        ...mapState(['profile'])
    }
}
</script>

<style scoped>
</style>