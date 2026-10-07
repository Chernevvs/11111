let pontos = 870
let anos = 48


if (pontos < 90)
{console.log("Bronze")}

if (pontos >= 100 && pontos <=499)
{console.log("Prata")}

if(pontos>=500 && pontos <= 999)
{console.log("Ouro")}

if (pontos >=1000 && anos>=1) {
    console.log("Diamante")
}



for ( let i = 1; i <=7; i++) {
    console.log(i); }



let tentativa = 5;

while (tentativa > 0) {
    console.log(` Restam ${tentativa}`);
tentativa--;
}

for ( let i = 50; i >= 1; i--) {
    console.log(i); }