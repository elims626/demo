<template>
    <div class="container">
        <!-- <div @click="openMask">打开弹窗</div> -->
        <!-- <tip-bar v-model="sendVal" content="用户名错误"></tip-bar> -->
        <!-- <dialog-bar v-model="sendVal" type="confirm" content="我是内容" v-on:cancel="clickCancel()"></dialog-bar> -->
        <!-- <dialog-bar v-model="sendVal" type="danger" title="今天明天" content="我是内容" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar> -->
        <!-- <dialog-bar v-model="sendVal" type="danger" :title="this.message" content="我是内容" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar> -->

    <videoPlayer :url='videoURL' :poster="poster"></videoPlayer>
    </div>
</template>
<script>
import dialogBar from '../base/card/dialog.vue'
import tipBar from '../base/card/tip.vue'
import videoPlayer from '../components/video/videoPlayer'
export default {
   components:{
     videoPlayer,
        'dialog-bar': dialogBar,
        'tip-bar': tipBar
    },
    data(){
        return{
          poster: '../assets/logo.png',
          videoURL: '../assets/a.mp4',
          message: '今天明天',
          sendVal: false,
        }
    },
    methods:{
        openMask(index){
            this.sendVal = true;
        },
        clickCancel(){
            console.log('点击了取消');
        },
        clickDanger(){
            console.log('这里是danger回调')
        },
        clickConfirm(){
            console.log('点击了confirm');
        }
    }
}
</script>
<style lang="less" scoped>
</style>
