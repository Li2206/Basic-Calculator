const digit = document.getElementsByClassName('numpad')
const addition = document.getElementById('add')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const equals = document.getElementById('equal')
const displayer = document.getElementsByClassName('value')
const clear = document.getElementById('deletePlugg')
const reset = document.getElementById('resetPlugg')
const form = document.querySelector('form')


document.addEventListener("submit",function gestionFormulaire(e) {
    e.preventDefault();
  })


for(let i=0; i< digit.length;i++){
    digit[i].addEventListener('click', function(){
        if(displayer[0].value == '0'){
            displayer[0].value = digit[i].innerText
        }else{
            displayer[0].value += digit[i].innerText
        }
    })
}

reset.addEventListener('click', function(){
    displayer[0].value = 0
    
})

addition.addEventListener('click', function(){
    displayer[0].value += '+' 
})

minus.addEventListener('click', function(){
    displayer[0].value += '-' 
})

multiply.addEventListener('click', function(){
    displayer[0].value += '*' 
})
divide.addEventListener('click', function(){
    displayer[0].value += '/' 
})


clear.addEventListener('click', function(){
     if(displayer[0].value != -1){
        displayer[0].value = displayer[0].value.slice(0,-1)
     }else if(displayer[0] = -1){
        displayer[0].value += 0
     }
})

equals.addEventListener('click', function(){
    const expre = displayer[0].value
    const res = eval(expre)  
    displayer[0].value = res
        
})

