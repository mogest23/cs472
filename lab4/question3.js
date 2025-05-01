var foo = 1
function bar() {
    if (!foo) {
        var foo = 10
    }
    alert(foo)
}
bar()

/* 

1. Global EC creation:
Outer: null,
LE: [{
  foo: undefined,
  bar: <function>,
}]
TDZ: {}

2.Global EC execution:
Outer: null, 
LE: [{ 
  foo: 1,
  bar: <function>,
}], 
TDZ: {}

3. FEC bar creation:
Outer: Global
LE: [{
  arguments: object,
  foo: undefined,
}]
TDZ: {}

4. FEC bar execution:
Outer: Global
LE: [{
  arguments: object,
  foo: 10,
}]
TDZ: {} 

Alert will print 10
*/