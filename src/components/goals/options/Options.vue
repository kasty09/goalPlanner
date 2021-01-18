<template>
  <div>
    <div class="goal-progress-bar">
      <div class="goal-progress-percent">{{`${goal.currentProgress}/${goal.finalGoal} (${goal.progressInProcents()}%)`}}</div>
      <div
        class="goal-progress-current"
        :class="{'goal-progress-current_is-close': !isOpen}"
        :style="progressBarStyles"
      >
      <div
        class="goal-progress-color"
        :style="{width: `${gradientWidth}`, background: progressColor}"
      ></div>
      </div>
    </div>
    <div class="goal-description">{{goal.description}}</div>
  </div>

</template>
<script>
import {GradientColors} from '../../../variables'
export default {
  data () {
    return {
      gradientWidth: '260px',
      progressColor: 'red',
      progressBarStyles: {}
    }
  },     
  props: {
    goal: Object,
    isOpen: Boolean
  },
  methods: {
    getGradientWidth() {
      return `${document.querySelector('.goal-progress-bar').offsetWidth}px`
    },
    getProgressColor() {
      return GradientColors.find(c => this.goal.progressInProcents() <= c.progress).value
    },
    getProgressBarStyles () {
      return {
        width: `${this.goal.progressInProcents()}%`,
        transition: `${this.goal.progressInProcents()/100}s linear`
      }
    }
  },
  mounted () {
    this.gradientWidth = this.getGradientWidth()
    this.progressColor = this.getProgressColor()
    this.progressBarStyles = this.getProgressBarStyles()
  }
}
</script>
