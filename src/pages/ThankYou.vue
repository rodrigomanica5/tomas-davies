<template>
  <div class="thank-you-page">
    <div class="thank-you-content">
      <img src="/images/handyman-logo.png" alt="HandyTom Pest Solutions logo" height="200px">
      <h1>Thank you for submitting your message!</h1>
      <h3>You will be redirected to our Home Page in 5 seconds...</h3>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/');
    }, 5000);
  }
}
</script>

<style scoped>
.thank-you-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FE5E41;
  background-size: cover;
  text-align: center;
  padding: 30px 20px;
  color: #FFFFFF;
}

.thank-you-content {
  max-width: 600px;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: 900;
  color: #FFFFFF;
  margin: 0;
}

h3 {
  margin-top: 20px;
  font-size: 1.25rem;
  color: #DFF8EB;
  /* Color complementario */
  font-weight: 600;
}
</style>