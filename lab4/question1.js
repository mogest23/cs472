let x
var a = 5
var b = 10
var c = function (a, b, c) {
    document.write(x)
    document.write(a)

    var f = function (a, b, c) {
        b = a
        document.write(b)
        b = c
        var x = 5
    }

    f(a, b, c)
    document.write(b)
    var x = 10
}

c(8, 9, 10)
document.write(b)
document.write(x)

/* 

1. Global EC creation:
Outer: null,
LE: [{
  a: undefined,
  b: undefined,
  c: undefined,
}]
TDZ: { x }

2.Global EC execution:
Outer: null,
LE: [{
  a: 5,
  b: 10,
  c: function,
  x: undefined,
}]
TDZ: {}

3. FEC c creation:
Outer: Global
LE: [{
  arguments: object,
  a: 8,
  b: 9,
  c: 10
  f: undefined,
  x: undefined,
}]
TDZ: {}

4. FEC c execution:
Outer: Global
LE: [{
  arguments: object,
  a: 8,
  b: 9,
  c: 10
  f: <function>,
  x: 10,
}]
TDZ: {} 

5. FEC f creation:
Outer: c
LE: [{
  arguments: object,
  a: 8,
  b: 9,
  c: 10,
  x: undefined,
}]
TDZ: {}

6. FEC f execution:
Outer: c
LE: [{
  arguments: object,
  a: 8,
  b: 10,
  c: 10,
  x: 5,
}]
TDZ: {} 

Printed: 
undefined
8
8
9
10
undefined
*/