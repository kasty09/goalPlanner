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
    <neon-btn :label="settingBtnValue" :color="goal.viewTypeColor"></neon-btn>
  </div>

</template>
<script>
import {GradientColors} from '../../../variables'
import NeonBtn from '../../NeonButton.vue'
import { mapState } from 'vuex'
export default {
  components: {
    NeonBtn
  },
  data () {
    return {
      gradientWidth: '260px',
      progressColor: 'red',
      progressBarStyles: {},
      svgController: null,
      settingBtnValue: 'Изменить'
    }
  },
  computed: {
    ...mapState(['SvgController'])
  } , 
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
    getProgressBarStyles() {
      return {
        width: `${this.goal.progressInProcents()}%`,
        transition: `${this.goal.progressInProcents()/100}s linear`
      }
    }
  },
  mounted () {
    this.svgController = new this.SvgController()
    this.gradientWidth = this.getGradientWidth()
    this.progressColor = this.getProgressColor()
    this.progressBarStyles = this.getProgressBarStyles()
    this.settingBtnValue = this.svgController.getImageHtml('settings')
    setTimeout(() => {
      this.svgController.initDomElement('#settingsSvg')
      this.svgController.addStyles({ stroke: this.goal.viewTypeColor })
    }, 0)
  }
}
</script>
