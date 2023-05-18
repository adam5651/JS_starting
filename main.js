let podstatnémená = ["otec","mama","brat","sestra","milenka","svokor","svokra","srnka","pes","mačka"];
let slovesá = ["orať","páliť","falčiť","sprchovať sa","variť","kódiť","kojiť","riľovať"];
let podstatnémená2 = ["počasia","finančné trhy","operácie","ofenzívi","výpredaje","pondelky","nedele","hodinky"];
let value = 0
let valueMultiply = document.getElementById("multiply").value
let valuePremeň = document.getElementById("premenHodnota").value

function randomMessage(){
let result =  "Môj " +podstatnémená[Math.floor(Math.random() * 9)]+ " vie " +slovesá[Math.floor(Math.random() * 7)]+
" aj keď je zlé "+podstatnémená2[Math.floor(Math.random() * 7)];

 document.getElementById("randomMessage").innerHTML = result;


}

function addOne(){
  value++
  document.getElementById("addOne").innerHTML = value 
}
function minusOne(){
  value-- 
  document.getElementById("addOne").innerHTML = value 
}
function multiply(){
  // this is how you initial value again 
 valueMultiply = document.getElementById("multiply").value
 value = value * valueMultiply

 document.getElementById("addOne").innerHTML = value
 
}

function zero(){
  document.getElementById("addOne").innerHTML = 0
  value = 0
}

function premeň(){
  valuePremeň = document.getElementById("premenHodnota").value
  if(document.getElementById("mySelect").value === "USD"){
    let výsledok =  valuePremeň * 1.09
    document.getElementById("výsledokPremenyMeny").innerHTML = "je to " + výsledok + " USD"
  }else if (document.getElementById("mySelect").value === "KČ"){
    let výsledok = valuePremeň * 25.53
    document.getElementById("výsledokPremenyMeny").innerHTML = "je to " + výsledok + " KČ" 
  }
}
  

