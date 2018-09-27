<template>
<div>
  <div class="header">
    <h1 class="logo">
      logo
    </h1>
    <div class="right">
      <i-button type="primary" class="login"
     >Login</i-button>

      <Badge
      v-show="isShop"
      count="10"
      overflow-count="99">
        <router-link
        to="/shopping"
        class="demo-badge shopping"></router-link>
      </Badge>
    </div>

    <Modal
        :visible.sync="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
  </div>
  <div class="banner">

  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        modal1: false,
        isShop: true
    }
  },
  methods: {
    shop () {
      //先判断是否登录
      this.$router.push('/shooping')
    },
    ok () {
      this.$Message.info('点击了确定');
    },
    cancel () {
      this.$Message.info('点击了取消');
    }
  },

}
</script>
<style scoped>
.header{
  height: 110px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* border-bottom: 1px solid red ; */
  background: #ffffff;
}
.logo{
  margin-left: 50px;
  color: transparent;
  background: url('../assets/img/logo.jpg') 0px -10px;
  width: 160px;
}
.right{
  margin-right: 50px;
  margin-top: 30px;
}
.login{
  font-size: 32px;
  margin-right: 20px;
  vertical-align: top;
  color: black;
  background: transparent;
  border: none;
  margin-top: -5px;
}
.shopping{
  display: inline-block;
  width: 50px;
  height: 44px;
  margin-top: 5px;
  background: url('../assets/img/shopping.png') 0 -3px;
  /* margin: 20px 20px 0 0; */
}
</style>
