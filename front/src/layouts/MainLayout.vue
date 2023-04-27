<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Bienvenido: <span class="text-subtitle1 text-bold">{{ $store.user.name }}</span>
        </q-toolbar-title>

        <div>
          <q-btn
            flat
            dense
            round
            icon="logout"
            aria-label="Logout"
            @click="logout()"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label class="text-center text-bold" header>
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <q-item clickable v-close-popup v-ripple @click="logout">
          <q-item-section avatar><q-icon name="exit_to_app" /></q-item-section>
          <q-item-section><q-item-label>Salir</q-item-label></q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Principal',
    caption: 'Página principal',
    icon: 'o_home',
    to: '/'
  },
  {
    title: 'Mision y vision',
    caption: 'Mision y vision',
    icon: 'o_rocket_launch',
    to: '/misionVision'
  },
  {
    title: 'Historia',
    caption: 'Historia',
    icon: 'o_history_edu',
    to: '/historia'
  },
  {
    title: 'Valores',
    caption: 'Valores',
    icon: 'o_volunteer_activism',
    to: '/valores'
  },
  {
    title: 'Plantel docente',
    caption: 'Plantel docente',
    icon: 'o_people',
    to: '/plantel'
  },
  {
    title: 'Plantel administrativo',
    caption: 'Plantel administrativo',
    icon: 'o_assignment_ind',
    to: '/plantelAdministrativo'
  }
]

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksList
    }
  },
  methods: {
    logout () {
      this.$q.dialog({
        message: '¿Quieres cerrar sesión?',
        title: 'Salir',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        }
      }).onOk(() => {
        this.$q.loading.show()
        this.$axios.post('logout').then(() => {
          this.$axios.defaults.headers.common.Authorization = ''
          this.$store.user = {}
          localStorage.removeItem('tokenAleman')
          this.$store.isLoggedIn = false
          this.$q.loading.hide()
          this.$router.push('/login')
        })
      })
    }
  }
})
</script>
