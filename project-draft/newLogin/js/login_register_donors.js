let sub_singIn = document.querySelector('.sub_singIn')
let sub_singUp = document.querySelector('.sub_singUp')
let in_userName = document.querySelector('.in_userName')
let in_pwd = document.querySelector('.in_pwd')
sub_singIn.onclick = function () {
    if(in_userName.value == ''){
        return alert('请输入账号')
    }
    if(in_pwd.value == ''){
        return alert('请输入密码')
    }
    if(localStorage.getItem('donorsUser') == null){
        return alert('您还未注册账号')
    }else {
        let foodUser = JSON.parse(localStorage.getItem('donorsUser'))
        let userState = false
        for(let i = 0; i < foodUser.user.length; i++){
            if(in_userName.value == foodUser.user[i]){
                userState = true
                if(foodUser.pwd[i] == in_pwd.value){
                    // 登录成功
                    location.href = '../maps/map-static.html'
                    return alert('登录成功')
                }else {
                    return alert('密码错误')
                }
                break
            }
        }
        if(!userState){
            return alert('该账号未注册！')
        }
    }
}
let up_userName = document.querySelector('.up_userName')
let up_Email = document.querySelector('.up_Email')
let up_pwd = document.querySelector('.up_pwd')
sub_singUp.onclick = function () {
    if(up_userName.value == ''){
        return alert('请输入账号')
    }
    if(up_Email.value == ''){
        return alert('请输入邮箱')
    }
    if(up_pwd.value == ''){
        return alert('请输入密码')
    }
    if(up_userName.value.length < 3){
        return alert('账号不可小于3位')
    }
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailRegex.test(up_Email.value)){
        return alert('邮箱格式不正确')
    }
    if(up_pwd.value.length < 6){
        return alert('密码长度不可小于6位')
    }
    let foodUser = JSON.parse(localStorage.getItem('donorsUser'))
    if(foodUser == null){
        let obj = {
            user: [],
            pwd: [],
        }
        obj.user.push(up_userName.value)
        obj.pwd.push(up_pwd.value)
        localStorage.setItem('donorsUser',JSON.stringify(obj))
        up_userName.value = ''
        up_Email.value = ''
        up_pwd.value = ''
        return alert('注册成功，请去登录')
    }else {
        let registerState = true
        for(let i = 0; i < foodUser.user.length; i++){
            if(foodUser.user[i] == up_userName.value){
                registerState = false
                return alert('该账号已注册')
            }
        }
        if(registerState){
            foodUser.user.push(up_userName.value)
            foodUser.pwd.push(up_pwd.value)
            up_userName.value = ''
            up_Email.value = ''
            up_pwd.value = ''
            return alert('注册成功，请去登录')
        }
    }


}
