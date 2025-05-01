var x = 9
function myFunction() {
    return x * x
}

document.write(myFunction())
x = 5
document.write(myFunction())

/* 

1. Global EC creation:
Outer: null,
LE: [{
  x: undefined,
  myFunction: <function>,
}]
TDZ: {}


2.Global EC execution:
Outer: null, 
LE: [{ 
  x: 5,
  myFunction: <function>,
}], 
TDZ: {}

3. FEC (myFunction first call) creation:
Outer: Global
LE: [{
  arguments: object,
}]
TDZ: {}

4. FEC (myFunction first call) execution:
Outer: Global
LE: [{
  arguments: object,
}]
TDZ: {} 

5. FEC (myFunction second call) creation:
Outer: Global
LE: [{
  arguments: object,
}]
TDZ: {}

6. FEC (myFunction second call) execution:
Outer: Global
LE: [{
  arguments: object,
}]
TDZ: {}

In console will be printed:
81
25
*/