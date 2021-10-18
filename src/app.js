console.log("Merhaba Kodlama.io")

//undefined
//not type safe
//bu genelde backend sunucusundan istek alır ordan gelir
//const da bir şey atayınca değiştiremezsin

let dolarBugun = 9.30 
let dolarDun = 9.20

{
    let dolarDun = 9.10 
}

console.log(dolarDun)

const euroDun = 11.2
console.log(euroDun)

let konutKredileri = ["konut kredisi","emlak kredisi","Özel Konut Kredisi","Kamu konut kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for(let i =0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("<ul>") 

//1
