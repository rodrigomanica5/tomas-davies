<template>
    <div class="service-detail-page">
        <!-- HERO SECTION (usa la imagen de props como background) -->
        <section class="service-hero-section text-center flex flex-center" :style="heroStyle">
            <!-- Overlay -->
            <div class="overlay"></div>

            <!-- Hero Content -->
            <div class="hero-content column">
                <h1 class="text-h3 text-bold text-white">{{ serviceTitle }}</h1>
                <p class="text-subtitle1 text-white q-my-sm">
                    {{ serviceSubtitle }}
                </p>
                <q-btn label="Call Now" type="a" :href="'tel:' + phoneNumber" class="q-my-md q-py-md text-bold"
                    style="background-color: #242331; color: #DFF8EB; font-size: 25px; width: 80%; align-self: center;"
                    rounded />
            </div>
        </section>

        <!-- DESCRIPCIÓN DEL SERVICIO -->
        <section class="service-description q-px-xl q-py-xl">
            <div class="text-center">
                <h2 class="text-h4 text-bold q-mb-sm">
                    {{ serviceTitle }}
                </h2>
                <p class="text-body1 text-content">
                    {{ serviceDescription }}
                </p>
            </div>

            <!-- BULLET POINTS -->
            <div v-if="bulletPoints && bulletPoints.length" class="bullet-points q-my-xl">
                <ul class="text-left">
                    <li v-for="(point, index) in bulletPoints" :key="index" class="q-mb-md">
                        <h3 class="text-h6 text-bold">{{ point.title }}</h3>
                        <p class="text-body2">{{ point.description }}</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from 'vue'

// Recibimos la data del servicio por Props
const props = defineProps({
    serviceImage: {
        type: String,
        default: ''
    },
    serviceTitle: {
        type: String,
        default: ''
    },
    serviceDescription: {
        type: String,
        default: ''
    },
    bulletPoints: {
        type: Array,
        default: () => []
    }
})

// Teléfono de ejemplo (puedes ponerlo en props también si quieres)
const phoneNumber = '4086056883'

// Computed para aplicar el background al hero
const heroStyle = computed(() => {
    return {
        background: `url(${props.serviceImage}) no-repeat center center`,
        backgroundSize: 'cover',
        minHeight: '60vh'
    }
})
</script>

<style scoped>
/* Ajustando estilos para mantener la coherencia con tu HomePage */

.text-content {
    margin: auto;
    width: 90%;
    font-size: 25px;
    line-height: 2;
}

.service-hero-section {
    position: relative;
    min-height: 60vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

/* Overlay */
.service-hero-section .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    /* Black overlay with 50% opacity */
    z-index: 1;
    /* Behind the content */
}

/* Hero Content */
.service-hero-section .hero-content {
    position: relative;
    z-index: 2;
    /* Above the overlay */
    color: white;
    /* Ensure text color contrasts */
    max-width: 600px;
    margin: auto;
}

.service-detail-page {
    /* Contenedor general si requieres un estilo adicional */
}

/* Hero Section, similar al hero de tu HomePage */
.service-hero-section {
    /* Reutiliza el estilo del .hero-section */
    /* Ejemplo:
    background: url('/images/hero.jpg') no-repeat center center;
    background-size: cover;
    min-height: 60vh; */
}

.hero-content {
    max-width: 600px;
    margin: auto;
}

/* Sección de la descripción, puedes replicar el fondo claro, etc. */
.service-description {
    background-color: #fafafa;
    /* o #FCF9EE, como en tu 'services-section' */
}

.bullet-points {
    margin: auto;
    width: 90%;
    padding: 20px 0;
    font-size: 18px;
}

.bullet-points ul {
    list-style-type: disc;
    padding-left: 20px;
}

.bullet-points li {
    margin-bottom: 20px;
}

.bullet-points h3 {
    margin-bottom: 5px;
    font-size: 20px;
}

.bullet-points p {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
}

@media only screen and (max-width: 480px) {
    .text-content {
        font-size: 18px;
        line-height: 1.6;
        width: 95%;
        margin: 10px;
    }
}
</style>