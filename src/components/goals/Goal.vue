<template>
  <div
    class="goal-card"
    :class="{'goal-card_is-open': isOpen}"
    @click="toglgleView"
    >
    <div class="face face1">
      <div class="content">
        <div v-html="typeImage"></div>
        <h3>{{goal.title}}</h3>
      </div>
    </div>
    <div class="face face2">
      <div
        class="content"
      >
        <options v-if="isOpen" :goal="goal" :is-open="transitionIsOpen" />
      </div>
    </div>
  </div>
</template>
<script>
import Options from './options/Options.vue'
import busEvents from '../../utils/busEvents'
import { mapState } from 'vuex'

export default {
  components: {
    Options
  },
  data () {
    return {
      isOpen: false,
      transitionIsOpen: false,
      svgController: null,
      typeImage: null
    }
  },
  props: {
    goal: Object
  },
  computed: {
    ...mapState(['SvgController'])
  },
  methods: {
    toglgleView () {
      let currentActive = this.$el.classList.contains('goal-card_is-open')
      busEvents.$emit('closeGoal')
      this.isOpen = currentActive ? false : !this.isOpen
    },
    transitionHandler (e) {
      if (e.target.classList.contains('face2')) {
        this.transitionIsOpen = e.target.closest('.goal-card').classList.contains('goal-card_is-open')
      }
    }
  },
  created () {
    busEvents.$on('closeGoal', () => this.isOpen = false)

  },
  mounted () {
    this.svgController = new this.SvgController()
    this.$el.addEventListener('transitionend', this.transitionHandler)
    this.svgController.initDomElement(`#${this.goal.viewType}Svg`)
    this.typeImage = this.svgController.getImageHtml(this.goal.viewType)
  },
  beforeDestroy () {
    this.$el.removeEventListener('transitionend', this.transitionHandler)
  }
}
</script>
