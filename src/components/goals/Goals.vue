<template>
  <div class="goals-container">
    <add-new-goal></add-new-goal>
      <goal v-for="(goal, i) in goals" :key="i" :goal="goal" />
  </div>
</template>
<script>

  import Goal from './Goal'
  import AddNewGoal from '../goals/add-new-goal/AddNewGoal'
  import { mapState } from 'vuex'
  import goalsApi from '../../requests/api.js'
  export default {
    computed: {
      ...mapState(['goals'])
    },
    components: {
      AddNewGoal,
      Goal
    },
    mounted () {
      goalsApi.getAll()
    }
  }
</script>
