<template>
    <div class="login-container">
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="login" class="login-form" ref="formulario">
            <div class="form-group">
                <label>User Name:</label>
                <input v-model="userName" required />
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit" class="login-button">Iniciar sesión</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import {ProfileService} from "@/authentication/services/Profile-service";
export default {
    name:"login.component",
    data() {
        return {
            userName:"Batman Punk 2077",
            password:"password",
        };
    },
    async created() {
        this.profileService=new ProfileService();
    },
    methods: {
        ...mapActions(['setProfile', 'setIsAuthenticated']),
        async login() {
            let responseProfile = await this.profileService.getAll();
            responseProfile.data.forEach((check) => {
                if (check.name === this.userName && check.user.password === this.password) {
                    this.setProfile(check)
                    this.setIsAuthenticated(true)
                }
                //else this.resetForm();
            });
            this.toHome();
        },
        resetForm(){
            this.$refs.formulario.reset();
        },
        toHome(){
            this.$router.push("/home");
        }
    }
};
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4baaf5; /* Celeste */
    padding: 2rem;
    border-radius: 1rem;
    max-width: 1000px;
    margin: 2rem auto;
}

h2 {
    color: #212121; /* Negro */
    margin-bottom: 1rem;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

label {
    color: #212121; /* Negro */
    margin-bottom: 0.5rem;
}

input {
    padding: 0.5rem;
    border: 1px solid #212121; /* Negro */
    border-radius: 0.25rem;
    font-size: 1rem;
}

.login-button {
    background-color: #212121; /* Negro */
    color: #ffffff; /* Blanco */
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.login-button:hover {
    background-color: #424242;
}
</style>
