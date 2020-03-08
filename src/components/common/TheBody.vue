<template>
  <b-col id="body">
    <router-view />
  </b-col>
</template>

<script>
export default {
  name: 'TheBody'
}
</script>

<style lang="scss" scoped>
#body {
  overflow: scroll;
}
</style>
