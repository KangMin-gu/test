<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
    >
      <v-list dense>
        <v-list-item link router :to="{name: 'home'}">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="isLogin === false" router :to="{name: 'login'} ">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link v-if="isLogin === true" router :to="{name: 'mypage'}">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            color="indigo"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y v-if="isLogin">
          <template v-slot:activator="{ on }">
            <v-btn
                    slot="activator"
                    dark
                    flat
                    icon
                    v-on="on"
            >
                more
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{name: 'mypage'}">
              <v-list-item-title>마이페이지</v-list-item-title>
            </v-list-item>
            <v-list-item
                @click="$store.dispatch('logout')"
            >
              <v-list-item-title>로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-else router :to="{name: 'login'}">Log In</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
            color="indigo"
            app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed:{
      ...mapState(['isLogin'])
    },
  }
</script>