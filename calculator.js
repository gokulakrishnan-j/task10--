var inp =document.createElement('p')
inp.setAttribute('id',"input")
document.body.append(inp)

var de=document.createElement('button')
de.innerHTML="C"
de.setAttribute('id',"delete")
document.body.append(de)

var h=document.createElement('button')
h.innerHTML="7"
h.setAttribute('id',"seven")
document.body.append(h)

var i=document.createElement('button')
i.innerHTML="8"
i.setAttribute('id',"eight")
document.body.append(i)


var j=document.createElement('button')
j.innerHTML="9"
j.setAttribute('id',"nine")
document.body.append(j)

var di=document.createElement('button')
di.innerHTML="/"
di.setAttribute('id',"div")
document.body.append(di)

var e=document.createElement('button')
e.innerHTML="4"
e.setAttribute('id',"four")
document.body.append(e)


var f=document.createElement('button')
f.innerHTML="5"
f.setAttribute('id',"five")
document.body.append(f)


var g=document.createElement('button')
g.innerHTML="6"
g.setAttribute('id',"six")
document.body.append(g)

var mu=document.createElement('button')
mu.innerHTML="*"
mu.setAttribute('id',"mul")
document.body.append(mu)





var a=document.createElement('button')
a.innerHTML="1"
a.setAttribute('id',"one")
document.body.append(a)



var c=document.createElement('button')
c.innerHTML="2"
c.setAttribute('id',"two")
document.body.append(c)


var d=document.createElement('button')
d.innerHTML="3"
d.setAttribute('id',"three")
document.body.append(d)







var su=document.createElement('button')
su.innerHTML="-"
su.setAttribute('id',"sub")
document.body.append(su)


var cl=document.createElement('button')
cl.innerHTML="⬅"
cl.setAttribute('id',"clear")
document.body.append(cl)

var ze=document.createElement('button')
ze.innerHTML="0"
ze.setAttribute('id',"zero")
document.body.append(ze)

var an=document.createElement('button')
an.innerHTML="="
an.setAttribute('id',"ans")
document.body.append(an)


var ad=document.createElement('button')
ad.innerHTML="+"
ad.setAttribute('id',"add")
document.body.append(ad)








var input=document.getElementById('input')

var i=[];
i=Array.from(i)

var zero=document.getElementById ('zero')

zero.addEventListener('click',()=>{
zero=0
   i+=zero
    input.innerHTML=i
console.log(typeof +i)

})

document.addEventListener('keypress',(e)=>{
   console.log(e)

    if(e.code=="Numpad0"){
zero=0
        i+= zero
    input.innerHTML=i
        
    }


  else  if(e.code=="Digit0"){
        zero=0
                i+= zero
            input.innerHTML=i
                
            }
        
   

   else if(e.code=="Numpad1"){
one=1
        i+= one
    input.innerHTML=i
        
    }


    else if(e.code=="Digit1"){
        one=1
                i+= one
            input.innerHTML=i
                
            }
   

   else if(e.code=="Numpad2"){
two=2
        i+= two
    input.innerHTML=i
        
    }

    else if(e.code=="Digit2"){
        two=2
                i+= two
            input.innerHTML=i
                
            }

   

   else if(e.code=="Numpad3"){
three=3
        i+= three
    input.innerHTML=i
        
    }


    else if(e.code=="Digit3"){
        three=3
                i+= three
            input.innerHTML=i
                
            }

   

   else if(e.code=="Numpad4"){
four=4
        i+= four
    input.innerHTML=i
        
    }

    else if(e.code=="Digit4"){
        four=4
                i+= four
            input.innerHTML=i
                
            }

   

  else if(e.code=="Numpad5"){
five=5
        i+= five
    input.innerHTML=i
        
    }

    else if(e.code=="Digit5"){
        five=5
                i+= five
            input.innerHTML=i
                
            }

   

   else if(e.code=="Numpad6"){
six=6
        i+= six
    input.innerHTML=i
        
    }


    else if(e.code=="Digit6"){
        six=6
                i+= six
            input.innerHTML=i
                
            }
   

  else  if(e.code=="Numpad7"){
seven=7
        i+= seven
    input.innerHTML=i
        
    }

    else  if(e.code=="Digit7"){
        seven=7
                i+= seven
            input.innerHTML=i
                
            }
   

  else if(e.code=="Numpad8"){
eight=8
        i+= eight
    input.innerHTML=i
        
    }

    else if(e.code=="Digit8"){
        eight=8
                i+= eight
            input.innerHTML=i
                
            }

   

else if(e.code=="Numpad9"){
nine=9
        i+= nine
    input.innerHTML=i
        
    }

    else if(e.code=="Digit9"){
        nine=9
                i+= nine
            input.innerHTML=i
                
            }

    else{
        alert("Only numbers are allowed")
    }
   
})



var one=document.getElementById ('one')

one.addEventListener('click',()=>{
    
    one=1
    i+=one
    input.innerHTML=i

})

var two=document.getElementById ('two')

two.addEventListener('click',()=>{
   
two=2
i+=two
input.innerHTML=i

})
var three=document.getElementById ('three')

three.addEventListener('click',()=>{
   
    three=3
    i+=three
    input.innerHTML=i

})
var four=document.getElementById ('four')

four.addEventListener('click',()=>{
   
    four=4
    i+=four
    input.innerHTML=i
})

var five=document.getElementById ('five')

five.addEventListener('click',()=>{
   
    five=5
    i+=five
    input.innerHTML=i
})

var six=document.getElementById ('six')

six.addEventListener('click',()=>{
   
    six=6
    i+=six
    input.innerHTML=i

})
var seven=document.getElementById ('seven')

seven.addEventListener('click',()=>{
   
    seven=7
    i+=seven
    input.innerHTML=i
})

var eight=document.getElementById ('eight')

eight.addEventListener('click',()=>{
   
    eight=8
    i+=eight
    input.innerHTML=i
})

var nine=document.getElementById ('nine')

nine.addEventListener('click',()=>{
   
    nine=9
    i+=nine
    input.innerHTML=i
})




var add=document.getElementById('add')
add.addEventListener('click',()=>{
   
add="+"
i+=add
input.innerHTML=i

})

var sub=document.getElementById('sub')
sub.addEventListener('click',()=>{
   
sub="-"
i+=sub
input.innerHTML=i

})

var mul=document.getElementById('mul')
mul.addEventListener('click',()=>{
   
mul="*"
i+=mul
input.innerHTML=i

})

var div=document.getElementById('div')
div.addEventListener('click',()=>{
   
div="/"
i+=div
input.innerHTML=i

})

if(input.length==3){
    alert("This is two number calculator")
}


var ans=document.getElementById('ans')
ans.addEventListener('click',()=>{
 if(i[i.length-2]=='+'){
    var added=   +i[i.length-3] + +i[i.length-1]
    input.innerHTML=added
    console.log(+added)
 } 

 if(i[i.length-2]=='-'){
    var subtra=   +i[i.length-3] - +i[i.length-1]
    input.innerHTML=subtra
    console.log(+subtra)
 }

    if(i[i.length-2]=='*'){
        var multi=   +i[i.length-3] * +i[i.length-1]
        input.innerHTML=multi
        console.log(+multi)
    }

    if(i[i.length-2]=='/'){
        var divi=   +i[i.length-3] / +i[i.length-1]
        input.innerHTML=divi
        console.log(+divi)
    }

  
})

var clear=document.getElementById('clear')
clear.addEventListener('click',()=>{
    if(clear==clear){
   
 i=  i.slice(0,-1)
input.innerHTML=i
    }
})


var del=document.getElementById('delete')
del.addEventListener('click',()=>{
    if(clear==clear){
   
 i=""
input.innerHTML=i
    }
})
