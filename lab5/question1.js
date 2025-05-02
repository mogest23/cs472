let str = 'Greetings, '

let user = {
    firstName: 'John',
    lastname: 'Smith',
    display: function () {
        console.log(str, this.firstName)
        show('hi')
    },
}

user.display()

function show(msg) {
    console.log(msg + ' ' + this.lastname)
}

show.call(user, 'hello')

/* 

1. Global EC creation:
Outer: null,
this: window,
LE: [{
  show: <function>,
}]
TDZ: { str , user}

2.Global EC execution:
Outer: null, 
this: window,
LE: [{ 
  str: 'Greetings, ',
  show: <function>,
  user: object,
}], 
TDZ: {}

3. FEC display creation:
Outer: Global
this: user,
LE: [{
  arguments: object,
}]
TDZ: {}

4. FEC display execution:
Outer: Global,
this: user,
LE: [{
  str: 'Greetings, ',
  show: <function>,
  arguments: object,
}]
TDZ: {} 

5. FEC show creation:
Outer: Global
this: window,
LE: [{
  msg: 'hi',
  arguments: object,
}]
TDZ: {}

6. FEC show execution:
Outer: Global
this: window,
LE: [{
  msg: 'hi',
  arguments: object,
}]
TDZ: {}

7. FEC show (second call) creation:
Outer: Global
this: user,
LE: [{
  msg: 'hello',
  arguments: object,
}]
TDZ: {}

8. FEC show (second call) execution:
Outer: Global
this: user,
LE: [{
  msg: 'hello',
  arguments: object,
}]
TDZ: {}

In console will be printed:
'Greetings, John'
'hi undefined' 
'hello Smith'
*/