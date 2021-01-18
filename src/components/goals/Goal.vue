<template>
  <div
    class="goal-card"
    :class="{'goal-card_is-open': isOpen}"
    @click="toglgleView"
    >
    <div class="face face1">
      <div class="content">
        <div v-html="typeImage"></div>
        <h3>{{goal.name}}</h3>
      </div>
    </div>
    <div class="face face2">
      <div
        class="content"
      >
        <options :goal="goal" :is-open="transitionIsOpen" />
      </div>
    </div>
  </div>
</template>
<script>
import {SvgController} from '../../img/SvgController'
import Options from './options/Options.vue'
import busEvents from '../../utils/busEvents'
import gsap from 'gsap'
export default {
  components: {
    Options
  },
  data () {
    return {
      SvgController: null,
      isOpen: false,
      transitionIsOpen: false
    }
  },
  props: {
    goal: Object
  },
  computed: {
    typeImage() {
      return this.SvgController.getImageHtml()
    }
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
    busEvents.$on('closeGoal', () => {
      this.isOpen = false
    })
    this.SvgController = new SvgController(this.goal.viewType)
  },
  mounted () {
    this.$el.addEventListener('transitionend', this.transitionHandler)
  },
  beforeDestroy () {
    this.$el.removeEventListener('transitionend', this.transitionHandler)
  }
}
</script>
