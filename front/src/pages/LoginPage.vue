<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center"
        style="background-image: url('fondo.jpg'); background-size: cover; background-position: center center;">
        <div>
          <div class="text-center">
            <q-img src="logo.png" width="230px" class="text-center" />
          </div>
          <div class="text-subtitle2 text-grey text-center">Ingrese sus credenciales Por favor</div>
          <q-form class="" @submit="login">
            <q-input outlined v-model="user.email" label="Nombre de usuario" class="bg-white"
              :rules="[val => !!val || 'El nombre de usuario es requerido']" style="width: 300px"
            />
            <q-input outlined v-model="user.password" label="Password" class="bg-white"
              :rules="[val => !!val || 'El password es requerido']" style="width: 300px"
                     :type="visible ? 'text' : 'password'"
            >
              <template v-slot:append>
                <q-icon :name="visible ? 'visibility' : 'visibility_off'" class="cursor-pointer" @click="visible = !visible" />
              </template>
            </q-input>
            <q-btn type="submit" size="lg" label="Ingresar a la plataforma" color="primary" class="full-width" no-caps  />
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      visible: false
    }
  },
  created () {
    if (this.$store.isLoggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    login () {
      this.$q.loading.show()
      this.$axios.post('login', this.user).then((res) => {
        this.$q.loading.hide()
        this.$q.notify({
          message: `Bienvenido ${res.data.user.name}`,
          color: 'positive',
          icon: 'check_circle',
          position: 'top'
        })
        this.$store.user = res.data.user
        this.$store.isLoggedIn = true
        localStorage.setItem('tokenAleman', res.data.token)
        this.$axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
        this.$emit('closeDialog', res.data.token)
        this.$router.push('/')
      }).catch((err) => {
        this.$q.loading.hide()
        this.$q.notify({
          message: err.response.data.message,
          color: 'negative',
          icon: 'error',
          position: 'top'
        })
      })
    }
  }
})
</script>
