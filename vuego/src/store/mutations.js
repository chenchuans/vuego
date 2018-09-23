export default {
    changeCity (state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (error) {
            console.log('浏览器不兼容' + error)
        }
    }
}
