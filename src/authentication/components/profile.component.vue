<template>
  <div class="image-container">
    <img src="/images/fontProfile.png" alt="ProfileImage" class="center-image" />
    <p>Nombre: {{ user.name }}</p>
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
.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center-image {
  width: 50%;
  height: auto;
}
</style>
