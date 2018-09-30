<template>
<div>
  <div class="header">
    <h1 class="logo">
      logo
    </h1>
    <div class="right">
      <span
      @click="handleLogin"
      class="login">{{user}}</span>
      <Badge

      :count="this.$store.state.iconNum"
      overflow-count="99">
        <a
        @click="handleShopping"

        class="demo-badge shopping"></a>
      </Badge>
    </div>
    <div class="logins"
    v-show="isLogin">
    <p>请登录您的账号和密码</p>
      <login @closeLogin="handleLo"></login>
    </div>
  </div>
  <div class="zhezhao" v-show="isLogin"></div>
</div>
</template>
<script>
import Login from './Login'
export default {
  components: {
    Login
  },
  data () {
    return {
      isLogin: false,
      user: 'Login'
    }
  },
  watch: {
    user: function (val, oldVal) {
      this.$store.commit('handleLogin',val)
    },
    $router: function () {
      console.log(this.$router)
    }
  },
  methods: {
    handleLogin () {
      this.isLogin = true

    },
    handleLo (name) {
      this.isLogin = false
      this.user = name
    },
    handleShopping () {
      if (this.user !== 'Login') {
        this.$router.push('/shopping')
      } else {
        alert("请先登录")
      }

    }
  }
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
.logins{
  width: 400px;
  height: 200px;
  top: 100px;
  left: 50%;
  margin-left: -200px;
  position: absolute;
  z-index: 1;
  border-radius: 5px;
  background: #ffffff;
}
.logins p{
  margin: 10px 0;
}
.zhezhao{
  width: 100%;
  height: 100%;
  background: black;
  opacity: .3;
  position: absolute;
  top: 0;

}
</style>
