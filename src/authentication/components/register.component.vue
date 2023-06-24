<template>
    <div class="register-container">
        <h2>Registrarse</h2>
        <form @submit.prevent="register" class="register-form">
            <div class="form-group">
                <label>Nombre:</label>
                <input type="text" v-model="user.userName" required />
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" v-model="user.email" required />
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <input type="password" v-model="user.password" required />
            </div>
            <div class="form-group">
                <label>Confirmar contraseña:</label>
                <input type="password" v-model="confirmPassword" required />
            </div>
            <div class="form-group">
                <label>Número de teléfono:</label>
                <input type="tel" v-model="user.isAuthor" required />
            </div>
            <button type="submit" class="register-button">Registrarse</button>
        </form>
    </div>
</template>

<script>
import {UserService} from "@/authentication/services/user-service";

export default {
    data() {
        return {
            user: {
                    userName: "",
                    email: "",
                    password: "",
                    urlPhoto: "",
                    isAuthor: false
            },
            confirmPassword: ""
        };
    },
    async created() {
        this.userService = new UserService();
    },
    methods: {
        async register() {
            if (this.user.password !== this.confirmPassword) {
                alert("Las contraseñas no coinciden.");
            }
            await this.userService.create(this.user);

            console.log("Registrarse con nombre:", this.user.userName, "email:", this.user.email, "contraseña:", this.user.password, "y url de foto:", this.user.urlPhoto);
            this.toLogin();

        },
        toLogin(){
            this.$router.push("/login");
        }
    },
};
</script>

<style scoped>
.register-container {
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

.register-form {
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

.register-button {
    background-color: #212121; /* Negro */
    color: #ffffff; /* Blanco */
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.register-button:hover {
    background-color: #424242;
}
</style>
