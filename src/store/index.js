import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  goals: [
    {
      name: '100 отжиманий',
      viewType: 'physical',
      isCurrent: false,
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
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 100,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'mentality',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 125,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'buy big ban',
      viewType: 'material',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 150,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'posture',
      viewType: 'spiritual',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 175,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'posture',
      viewType: 'physical',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 200,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    }
  ]
}

export default {
  state
}
