import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  goals: [
    {
      name: '200 workout',
      viewType: 'physical',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
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
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'spiritual',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'book',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'book',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'someone book',
      viewType: 'book',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    },
    {
      name: 'stay body',
      viewType: 'habit',
      isCurrent: false,
      startPosition: 0,
      finalGoal: 200,
      currentProgress: 87,
      progressInProcents () {
        return parseInt(100/(this.finalGoal) * this.currentProgress)
      }
    }
  ]
}

export default {
  state
}
