import Vue from 'vue'
import Vuex from 'vuex'
import {SvgController} from '../img/SvgController'

Vue.use(Vuex)

const tempNewGoalProperties = {
  currentStep: 0,
  viewType: '',
  viewTypeColor: '',
  isActive: false,
  description: '',
  startPosition: 0,
  finalGoal: 0,
  currentProgress: 0,
  iscompleted: false
}

let state = {
  SvgController,
  tempNewGoal: { ...tempNewGoalProperties },
  goals: [
    {
      title: '100 отжиманий',
      viewType: 'physical',
      viewTypeColor: 'greenyellow',
      isActive: false,
      iscompleted: false,
      description: 'Сделать 100 отжиманий за один подход',
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 25,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'mentality',
      viewTypeColor: 'rgb(30, 179, 224)',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 50,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'spiritual',
      viewTypeColor: 'rgb(0, 243, 61)',
      isCurrent: false,
      startPosition: 0,
      description: '',
      finalGoal: 200,
      currentProgress: 75,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'material',
      isCurrent: false,
      viewTypeColor: 'gold',
      startPosition: 0,
      description: '',
      finalGoal: 200,
      currentProgress: 75,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },


  ]
}

let mutations = {
  'CLEAR_TEMP_NEW_GOAL' (state) {
    state.tempNewGoal = { ...tempNewGoalProperties }
  }
}

export default {
  state,
  mutations
}
