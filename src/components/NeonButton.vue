<template>
  <div class="neon-btn" :style="{color}" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <span class="neon-btn-item-1" :style="{background: `linear-gradient(90deg, transparent, ${color})`}"></span>
    <span class="neon-btn-item-2" :style="{background: `linear-gradient(180deg, transparent, ${color})`}"></span>
    <span class="neon-btn-item-3" :style="{background: `linear-gradient(270deg, transparent, ${color})`}"></span>
    <span class="neon-btn-item-4" :style="{background: `linear-gradient(360deg, transparent, ${color})`}"></span>
    <slot></slot>
    <div v-html="label"></div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Кнопка'
    },
    color: {
      type: String,
      default: '#03e9f4'
    }
  },
  methods: {
    onMouseEnter(e) {
      this.addStyles(e)
    },
    onMouseLeave(e) {
      this.removeStyles(e)
    },
    addStyles (e) {
      e.target.style.boxShadow = `0 0 5px ${this.color}, 0 0 25px ${this.color}, 0 0 50px ${this.color}, 0 0 200px ${this.color}`
    },
    removeStyles (e) {
      e.target.style.boxShadow = null
    }
  }
}
</script>
<style >
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

.neon-btn{
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
   
}
.neon-btn:hover{
    color: #050801;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.neon-btn:nth-child(1){
    filter: hue-rotate(110deg);
}
.neon-btn:nth-child(2){
    filter: hue-rotate(110deg);
}
.neon-btn span{
    position: absolute;
    display: block;
}
.neon-btn span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    animation: animate1 1s linear infinite;
}
@keyframes animate1{
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}
.neon-btn span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes animate2{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}
.neon-btn span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}
@keyframes animate3{
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
}


.neon-btn span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate4{
    0%{
        bottom: -100%;
    }
    50%,100%{
        bottom: 100%;
    }
}
</style>
