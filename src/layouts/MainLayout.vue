<!-- src/layouts/MainLayout.vue -->
<template>
    <q-layout view="hHh lpR fFf">
        <!-- STICKY HEADER -->
        <q-header elevated class="text-white" behavior="sticky" style="background-color: #FE5E41;">
            <q-toolbar class="justify-between q-px-md q-py-sm">
                <!-- Company Name -->
                <div class="text-h5" style="color: #0B0500; cursor: pointer; display: flex; align-items: center;"
                    @click="routerHome()">
                    <img src="/images/handyman-logo.png" alt="HandyTom Pest Solutions logo" height="70px" />
                    <p class="blink_me" style="color: #0B0500;">24 HOUR SERVICE</p>
                </div>

                <!-- Call To Action: Phone Number -->
                <q-btn label="CALL US TODAY! (305) 240-1641" type="a" :href="'tel:' + phoneNumber"
                    class="q-ml-md text-bold text-subtitle1" style="background-color: #FCF9EE; color: #0B0500;"
                    rounded />
            </q-toolbar>
        </q-header>

        <!-- Aquí irán tus páginas (Home, Detalle, etc.) -->
        <q-page-container>
            <router-view />
        </q-page-container>

        <!-- FOOTER -->
        <q-footer class="text-white q-px-md q-py-sm"
            style="background-color: #0031A3; font-weight: 900; font-size: 18px;">
            <div class="row items-center justify-between">
                <div class="col-auto">
                    <div style="font-size: 12px;">Email: handytompestsolutions@gmail.com</div>
                </div>
                <div class="col-auto">
                    <div style="font-size: 12px;">© 2023 HandyTom Pest Solutions. All Rights Reserved.</div>
                </div>
            </div>
        </q-footer>
    </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
const phoneNumber = '3052401641'
const router = useRouter()

function routerHome() {
    router.push({
        name: 'home-page'
    })
}
</script>

<style scoped>
p {
    margin: 0;
}

.blink_me {
    font-size: 24px;
    font-weight: 900;
    animation: blinker 1s linear infinite;
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}

/* Copia los estilos globales que tenías en tu HomePage para el header, footer, etc. */
/* Por ejemplo, si quieres un background particular o un min-height en la sección central */
</style>