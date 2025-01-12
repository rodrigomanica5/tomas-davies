<template>
  <q-layout view="hHh lpR fFf">
    <!-- MAIN CONTENT -->
    <q-page-container>

      <!-- HERO SECTION -->
      <section class="hero-section text-center flex flex-center">
        <!-- Overlay -->
        <div class="overlay"></div>
        <div class="hero-content column">
          <h1 class="text-h2 text-bold text-white">HandyPro Cleaners</h1>
          <p class="text-subtitle1 text-white q-my-sm subtitle">
            Don’t let that squeak ruin your week. <br>
            We are your favorite handymen in the Florida Keys!
          </p>
          <q-btn label="Call Now" type="a" :href="'tel:' + phoneNumber" class="q-my-md q-py-md text-bold"
            style="background-color: #242331; color: #DFF8EB; font-size: 25px; width: 80%; align-self: center;"
            rounded />
        </div>
      </section>

      <!-- ABOUT US SECTION -->
      <section class="about-section q-px-xl q-py-md">
        <div class="text-center">
          <h2 class="text-h4 text-bold q-mb-sm">About Us</h2>
          <p class="text-body1 q-pt-lg text-content">
            We are a team of skilled handymen based in Key West, Florida, bringing years of hands-on experience to every
            project. We deliver meticulous craftsmanship, professionalism, and open communication, ensuring that each
            task—whether a small home repair or a complex renovation—is completed to your standards. With a deep
            commitment to quality, safety, and customer satisfaction, we offer reliable solutions that maintain your
            property’s appearance and value.
          </p>
        </div>
      </section>

      <!-- SERVICES SECTION -->
      <section class="services-section q-px-xl q-py-xl">
        <h2 class="text-h4 text-bold text-center q-mb-xl">Our Services</h2>
        <q-card-section>
          <div class="row q-col-gutter-md q-mb-md justify-center">
            <div class="col-xs-12 col-sm-6 col-md-4" v-for="(service, index) in services" :key="index">
              <q-card class="my-card" @click="goToService(service)" style="cursor: pointer;">
                <q-img :src="service.image" :alt="service.title" ratio="16/9" style="height: 250px;">
                  <div class="absolute-bottom text-h6">
                    {{ service.title }}
                    <br>
                    <span style="font-size: 15px; color: #FE5E41; font-weight: bold;">Learn more...</span>
                  </div>
                </q-img>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </section>

      <!-- QUOTE FORM SECTION -->
      <section class="quote-section q-px-xl q-py-xl bg-grey-2">
        <div class="text-center q-mb-md">
          <h2 class="text-h4 text-bold">Get an Instant Quote!</h2>
          <p class="text-body1">
            Choose your service and provide basic info. We'll get in touch ASAP.
          </p>
        </div>
        <div class="row justify-center">
          <div class="col-12 col-sm-8 col-md-6">
            <q-form action="https://formsubmit.co/tomasdubp@gmail.com" method="POST">
              <q-card flat bordered class="q-pa-md">
                <!-- Dropdown para seleccionar el servicio -->
                <q-select v-model="selectedService" :options="serviceOptions" name="Service" label="Select Service"
                  dense filled class="q-mb-md" lazy-rules />

                <!-- Input para el nombre -->
                <q-input v-model="formData.name" name="Name" label="Your Name" dense filled class="q-mb-md" lazy-rules
                  :rules="[
                    val => val && val.length > 0 || 'Please enter your full name',
                    val => /^[a-zA-Z\s]+$/.test(val) || 'Please enter a valid name (letters and spaces only)'
                  ]" />

                <q-input v-model="formData.telephone" name="Phone" label="Your Phone Number" type="tel" dense filled
                  class="q-mb-md" lazy-rules :rules="[
                    val => val && val.length > 0 || 'Please enter your phone number',
                    val => /^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(val) || 'Please enter a valid US phone number (e.g., +1 (123) 456-7890)'
                  ]" />

                <!-- Input para el correo electrónico -->
                <q-input v-model="formData.email" name="Email" label="Your Email" dense filled class="q-mb-md"
                  lazy-rules :rules="[
                    val => val && val.length > 0 || 'Please enter your e-mail address',
                    val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please enter a valid email address'
                  ]" />

                <!-- Inputs ocultos para configuraciones de FormSubmit -->
                <input type="hidden" name="_next" value="http://localhost:9000/#/thank-you">
                <input type="hidden" name="_subject" value="New Quote Request">
                <input type="hidden" name="_captcha" value="true">

                <!-- Botón de envío -->
                <div class="text-center">
                  <q-btn color="primary" label="Request Quote" type="submit" class="text-bold" />
                </div>

                <!-- Botón para reiniciar el formulario -->
                <div class="text-center q-mt-sm">
                  <q-btn v-if="formData.name || formData.email || formData.telephone || selectedService" label="Reset"
                    type="button" color="#0B0500" flat class="text-bold" @click="resetForm" />
                </div>
              </q-card>
            </q-form>
          </div>
        </div>
      </section>

    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { services } from 'src/services.js'

const router = useRouter()

const phoneNumber = '4086056883'

const serviceOptions = services.map((srv) => ({
  label: srv.title,
  value: srv.title
}))

const selectedService = ref(null)
const formData = ref({
  name: '',
  telephone: '',
  email: ''
})

function goToService(service) {
  router.push({
    name: 'service-detail',
    params: {
      slug: service.slug
    }
  })
}

function resetForm() {
  formData.value.name = '',
    formData.value.telephone = '',
    formData.value.email = ''
}
</script>

<style scoped>
h4 {
  color: #0B0500;
}

.subtitle {
  font-weight: 600;
  font-size: 25px;
}

.text-content {
  margin: auto;
  width: 90%;
  font-size: 25px;
  color: #242331;
  line-height: 2;
}

.hero-section {
  background: url('/images/hero.jpg') no-repeat center center;
  background-size: cover;
  min-height: 60vh;
}

.hero-content {
  max-width: 600px;
  margin: auto;
}

.about-section {
  background-color: #fafafa;
}

.services-section {
  background-color: #FCF9EE;
}

.quote-section {
  /* Already has bg-grey-2 from Quasar class */
}

.hero-section {
  position: relative;
  /* Para posicionar el overlay y el contenido */
  background: url('/images/hero.jpg') no-repeat center center;
  background-size: cover;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Overlay */
.hero-section .overlay {
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
.hero-section .hero-content {
  position: relative;
  z-index: 2;
  /* Above the overlay */
  max-width: 600px;
  color: white;
  /* Ensures text contrasts well */
  margin: auto;
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