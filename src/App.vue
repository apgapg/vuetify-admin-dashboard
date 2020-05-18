<template>
  <v-app>
    <v-app-bar id="app-bar" app color="white" elevation="0" height="56" clipped-left="true">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_e94a976f19ce08c25b69d0c73ce55ca3/workozy.png"
          transition="scale-transition"
          width="56"
        />

        <v-toolbar-title>Workozy</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Logout</span>
        <v-icon>la-power-off</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped="true">
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Ayush P Gupta</v-list-item-title>
          <v-list-item-subtitle>GA</v-list-item-subtitle>
          <v-list-item-subtitle>Workozy</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-subheader>HOME</v-subheader>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>la-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader>USER MANAGEMENT</v-subheader>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>la-file-alt</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>View/Download Reports</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>la-file-alt</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Doctor Visit</v-list-item-title>
          </v-list-item-content>
          <v-chip x-small color="indigo" text-color="white">New</v-chip>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>la-file-alt</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Lead Visit</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data() {
    return {
      items: [
        { title: "Add New User", icon: "las la-user-plus" },
        { title: "Update User Details", icon: "las la-user-edit" },

        { title: "Update User Details", icon: "las la-user" }
      ],
      right: null
    };
  }
};
</script>

<style scoped>
#app-bar {
  border-width: 0 0 thin;
  border-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.12) !important;
}
</style>
