<template>
  <v-footer app class="text-center d-flex flex-column">
    <div>
      © {{ currentYear }} - 我的个人博客
    </div>
    <div class="mt-2">
      <span>联系我：</span>
      <a class="text-decoration-none">moududu@126.com</a>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script> 