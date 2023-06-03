<template>
    <div>
        <img src=".." alt="ProfileImage"/>
        <p>Nombre: {{ user.userName }}</p>
        <p>Email: {{ user.email }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: "profile",
    computed: {
        ...mapState(['user'])
    }
}
</script>

<style scoped>

</style>