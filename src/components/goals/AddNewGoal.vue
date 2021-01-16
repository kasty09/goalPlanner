<template>
    <div
    class="goal-card goal-card-add"
    >
    <div class="face face1">
      <div class="content">
        <div v-html="typeImage"></div>
        <h3>Add Goal</h3>
      </div>
    </div>
    <div class="face face2">
      <div class="content">
        <p>
          Add new goal
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
</template>
<script>
import {SvgController} from '../../img/SvgController'
export default {
  computed: {
    typeImage() {
      return new SvgController('addNew').getImageHtml()
    },
    created () {

    }
  }
}
</script>