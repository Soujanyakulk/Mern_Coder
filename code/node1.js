console.log("Hello welcome to Node JS -Server Side Scripting........")


a=20
b=30
console.log(a+b)

const Demo=(a=0,b=0)=>{
    return a+b;
}
console.log(Demo(20,40))
console.log(Demo(100))

// ***********************************
const Calci=(a,b)=>{
// console.log(a+b)
return a+b
}

const Addition=(callback,x,y)=>{
    return callback(20,30)+(x+y)
    console.log("addition",result)
}
Addition(Calci,100,200)
// *************************
