<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <img class="icon_close" @click="closeTip" src="../../assets/icon/close.png" alt="">
            <div class="content" v-html="content"></div>
        </div>

    </div>
</template>
<script>
export default {
  props: {
    value: {},
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showMask: false
    }
  },
  mounted(){
    this.showMask = this.value
  },
  methods: {
    closeTip () {
      this.showMask = false
    }
  },
  watch:{
    value(newVal, oldVal){
      this.showMask = newVal;
    },
    showMask(val) {
      this.$emit('input', val);
    }
  }
}
</script>
<style lang="less" scoped>
    .dialog{
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 45%;
        height: 3.8rem;
        // background: rgba(0, 0, 0, 0.6);
        z-index: 9999;
        .dialog-container{
            width: 100%;
            height: 100%;
            background: rgba(111, 153, 221, 0.69);
            border-radius: 1rem;
            text-align: center;
            .icon_close{
              height: 1rem;
              width: 1rem;
              float: right;
              margin-top: 0.4rem;
              margin-right: 0.6rem;
              color: red;
            }
            .content{
                color: #797979;
                line-height: 3.4rem;
                box-sizing: border-box;
            }
        }
    }
</style>
