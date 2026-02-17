//DONT DO THIS - missing delcaration type
totalGlobalVariable = ""

//DONT do this either
var globalVariable = "This is defined in the global scope"

const public = "this variable is named public"

{ //block scope
    var someVariable = true
    {
        var someVariable = false //bløder igennem og someVariable bliver til false
    }
    console.log(someVariable)
}

{ //block scope
    let someVariable1 = true
    {
        let someVariable1 = false //someVariable1 bliver til true 
    }
    console.log(someVariable1)
}

//6 vil kun blive printet, da det er det eneste tal i loopet efter 1000ms - brug LET ELLER CONST
for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}