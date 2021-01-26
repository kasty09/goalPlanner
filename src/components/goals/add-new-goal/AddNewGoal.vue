<template>
  <div class="goal-card-add-container">
    <div
      class="goal-card goal-card-add"
      @click="showModal"
    >
    <div class="face face1">
      <div class="content">
        <div v-html="typeImage"></div>
        <h3>Новая цель</h3>
      </div>
    </div>
  </div>
    <add-goal-modal :modal-show="modalIsShow" @close-modal="closeModal"></add-goal-modal>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import goalsApi from '@requests/api'
import AddGoalModal from './AddGoalModal'

export default {
  data () {
    return {
      svgController: {},
      typeImage: null,
      modalIsShow: false
    }
  },
  components: {
    AddGoalModal
  },
  computed: {
    ...mapState(['SvgController']),
  },
  methods: {
    showModal () {
      this.modalIsShow = true
    },
    closeModal () {
      this.modalIsShow = false
      console.log(this.modalIsShow)
    },
    addGoal() {
      let goal = {
        title: 'Новая цель',
        viewType: 'physical'
      }
      // goalsApi.add(goal)
    }
  },
  mounted () {
    this.svgController = new this.SvgController()
    this.typeImage = this.svgController.getImageHtml('addNew')
  }
}
</script>
