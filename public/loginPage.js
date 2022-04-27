"use strict";
const userForm = new UserForm();

userForm.loginFormCallback = data => ApiConnector.login(data, response => {
    console.log(response);
    if (response.success) {
        location.reload();
        return userForm.loginFormAction(data);
    } else {
        return userForm.setLoginErrorMessage(response.error);
    }
});

userForm.registerFormCallback = data => ApiConnector.register(data, response => {
    console.log(response);
    if (response.success) {
        location.reload();
        return userForm.registerFormAction(data);
    } else {
        return userForm.setRegisterErrorMessage(response.error);
    }
});