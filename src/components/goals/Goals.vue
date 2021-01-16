<template>
  <div class="goals-container">
    <add-new-goal></add-new-goal>
      <goal v-for="(goal, i) in goals" :key="i" :goal="goal" />
  </div>
</template>
<script>

import Goal from './Goal'
import AddNewGoal from '../goals/AddNewGoal.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['goals'])
  },
  components: {
    AddNewGoal,
    Goal
  }
}
</script>
