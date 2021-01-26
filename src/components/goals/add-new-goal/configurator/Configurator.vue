<template>
  <div class="goal-configurator">
    <div class="goal-configurator-type">

    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['tempNewGoal'])
  },
  mounted () {
    console.log(this.tempNewGoal)
  }
}
</script>
