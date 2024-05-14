let sub_singIn = document.querySelector(".sub_singIn");
let sub_singUp = document.querySelector(".sub_singUp");
let in_userName = document.querySelector(".in_userName");
let in_pwd = document.querySelector(".in_pwd");
sub_singIn.onclick = function () {
  if (in_userName.value == "") {
    return alert("Please enter your account number");
  }
  if (in_pwd.value == "") {
    return alert("Please enter your password");
  }
  if (localStorage.getItem("donorsUser") == null) {
    return alert("You have not registered an account");
  } else {
    let foodUser = JSON.parse(localStorage.getItem("donorsUser"));
    let userState = false;
    for (let i = 0; i < foodUser.user.length; i++) {
      if (in_userName.value == foodUser.user[i]) {
        userState = true;
        if (foodUser.pwd[i] == in_pwd.value) {
          // login successfully
          location.href = "../maps/map-static.html";
          return alert("login successfully");
        } else {
          return alert("Wrong password");
        }
        break;
      }
    }
    if (!userState) {
      return alert("This account is not registered!");
    }
  }
};
let up_userName = document.querySelector(".up_userName");
let up_Email = document.querySelector(".up_Email");
let up_pwd = document.querySelector(".up_pwd");
sub_singUp.onclick = function () {
  if (up_userName.value == "") {
    return alert("Please enter your account number");
  }
  if (up_Email.value == "") {
    return alert("Please enter email");
  }
  if (up_pwd.value == "") {
    return alert("Please enter email");
  }
  if (up_userName.value.length < 3) {
    return alert("The account number cannot be less than 3 digits");
  }
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(up_Email.value)) {
    return alert("The mailbox format is incorrect");
  }
  if (up_pwd.value.length < 6) {
    return alert("The password must contain at least 6 characters");
  }
  let foodUser = JSON.parse(localStorage.getItem("donorsUser"));
  if (foodUser == null) {
    let obj = {
      user: [],
      pwd: [],
    };
    obj.user.push(up_userName.value);
    obj.pwd.push(up_pwd.value);
    localStorage.setItem("donorsUser", JSON.stringify(obj));
    up_userName.value = "";
    up_Email.value = "";
    up_pwd.value = "";
    return alert("The account has been registered");
  } else {
    let registerState = true;
    for (let i = 0; i < foodUser.user.length; i++) {
      if (foodUser.user[i] == up_userName.value) {
        registerState = false;
        return alert("The account has been registered");
      }
    }
    if (registerState) {
      foodUser.user.push(up_userName.value);
      foodUser.pwd.push(up_pwd.value);
      up_userName.value = "";
      up_Email.value = "";
      up_pwd.value = "";
      return alert("Registration success, please go to login");
    }
  }
};
