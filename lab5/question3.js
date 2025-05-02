'use strict'

let group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],
    showList: function () {
        this.students.forEach(
            function (student) {
                console.log(this.title + ': ' + student)
            }.bind(group)
        )
    },
}
group.showList()

/* 
forEach sets "this" to undefined by default.
Because regular functions have their own execution context, an error occurs within the forEach callback.
To resolve this, we must explicitly bind "this" to the group object.
*/