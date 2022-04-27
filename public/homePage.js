"use strict";
const logoutBut = new LogoutButton();

logoutBut.action = () => ApiConnector.logout(response => {
    console.log(response);
    if (response.success) {
        location.reload();
        return logoutBut.logoutClick();
    } else {
        alert('Что-то пошло не так...');
    }
});

