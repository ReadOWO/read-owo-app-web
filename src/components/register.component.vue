<template>
    <div class="register-container">
        <h2>Registrarse</h2>
        <form @submit.prevent="register" class="register-form">
            <div class="form-group">
                <label>Nombre:</label>
                <input type="text" v-model="name" required />
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <input type="password" v-model="password" required />
            </div>
            <div class="form-group">
                <label>Confirmar contraseña:</label>
                <input type="password" v-model="confirmPassword" required />
            </div>
            <div class="form-group">
                <label>Número de teléfono:</label>
                <input type="tel" v-model="phoneNumber" required />
            </div>
            <button type="submit" class="register-button">Registrarse</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: "",
        };
    },
    methods: {
        register() {
            if (this.password !== this.confirmPassword) {
                alert("Las contraseñas no coinciden.");
                return;
            }
            console.log("Registrarse con nombre:", this.name, "email:", this.email, "contraseña:", this.password, "y número de teléfono:", this.phoneNumber);
            // Aquí puedes agregar tu lógica de registro
        },
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