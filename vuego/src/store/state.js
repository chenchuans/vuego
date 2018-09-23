let defaultCity = '北京'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {
    console.log('浏览器不兼容' + error)
}
export default {
    city: defaultCity
}
