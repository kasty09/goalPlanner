<template>
  <div
    class="goal-card"
    :class="{'is_open': isOpen}"
    @click="toglgleView"
    >
    <div class="face face1">
      <div class="content">
        <div v-html="typeImage"></div>
        <h3>{{goal.name}}</h3>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <p>
          wq;eokqopwdk;ac;k; ;j;qowj;wke; ;k;kq;wkq;ek
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</template>
<script>
import {SvgController} from '../../img/SvgController'
import busEvents from '../../utils/busEvents'
export default {
  data () {
    return {
      SvgController: null,
      isOpen: false
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
      let currentActive = this.$el.classList.contains('is_open')
      busEvents.$emit('closeGoal')
      this.isOpen = currentActive ? false : !this.isOpen
    }
  },
  created () {
    busEvents.$on('closeGoal', () => {
      this.isOpen = false
    })
    this.SvgController = new SvgController(this.goal.viewType)
  }
}
</script>
