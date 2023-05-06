<template>
    <div class="login-container">
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="login" class="login-form">
            <div class="form-group">
                <label>Email:</label>
                <input type="email" v-model="email" required />
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
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            console.log("Iniciar sesión con email:", this.email, "y contraseña:", this.password);
            // Aquí puedes agregar tu lógica de autenticación
        },
    },
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