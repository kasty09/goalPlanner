<template>
  <div
    class="add-modal-container"
    :class="{'add-modal-container_show': modalShow}"
  >
  <div
    @click="closeModal"
    class="add-modal-container-background"
  ></div>
    <div class="add-modal-box">
      <configurator></configurator>
    </div>
  </div>
</template>
<script>
import Configurator from './configurator/Configurator.vue'
  export default {
    props: {
      modalShow: Boolean
    },
    methods: {
      closeModal () {
        this.$emit('close-modal')
      }
    },
    components: {
      Configurator
    }
  }
</script>
<style lang="less">
  .add-modal {
    &-container {
      position: fixed;
      transition: opacity .3s linear;
      z-index: -100;
      pointer-events: none;
      opacity: 0;
      display: flex;
      justify-content: center;
      padding-top: 10vh;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      &_show {
        z-index: 10;
        opacity: 1;
        pointer-events: auto;
      }
      &-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
      }
    }
    &-box {
      z-index: 1;
      width: 60vw;
      height: 30vh;
      background: #333;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      border-radius: 10px;
    }
  }
</style>
