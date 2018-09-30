export default {
  changeData (state, data) {
    // 改变数据的方法
  },
  handleLogin (state, data) {
    // 判断是否登录，将用户名传过来
    state.val = data
  },
  handleIconNum (state, data) {
    // 登录购物车图标的徽标数
    state.iconNum += data
  }
}
