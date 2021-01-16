<template>
  <div class="app-container">
    <goals />
  </div>
</template>
<script>
import Goals from './components/goals/Goals'
import { mapState } from 'vuex'

export default {
  components: {
    Goals
  }
}

</script>
<style lang="less">
  @import './css/index';
</style>
