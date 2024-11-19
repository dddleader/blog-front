<template>
  <v-navigation-drawer v-model="modelValue" app>
    <v-list>
      <v-list-item title="首页" value="home" :to="{ path: '/' }">
        <template v-slot:prepend>
          <v-icon>mdi-home</v-icon>
        </template>
      </v-list-item>
      <v-list-item title="文章" value="articles" :to="{ path: '/articles' }">
        <template v-slot:prepend>
          <v-icon>mdi-post</v-icon>
        </template>
      </v-list-item>
      <v-list-item title="项目" value="projects" href="#projects">
        <template v-slot:prepend>
          <v-icon>mdi-folder</v-icon>
        </template>
      </v-list-item>
      <v-list-item title="关于我" value="about" href="#about">
        <template v-slot:prepend>
          <v-icon>mdi-account</v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppNavDrawer',
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  }
}

</script> 