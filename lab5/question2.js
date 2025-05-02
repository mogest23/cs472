'use strict'

function askPassword(ok, fail) {
    let password = prompt('Password?', '')
    if (password == 'rockstar') ok()
    else fail()
}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`)
    },

    loginFail() {
        alert(`${this.name} failed to log in`)
    },
}

askPassword(user.loginOk, user.loginFail)

/* 
user.loginOk and user.loginFail were used outside of the object so "this" is not defined.
We need to use bind, call or apply to set the value of this to the user object before passing them to askPassword.

We can fix the code by binding the methods to the user object:  
askPassword(user.loginOk.bind(user), user.loginFail.bind(user))

OR

askPassword(() => user.loginOk(), () => user.loginFail())
*/