alert("BYENVINI NAN PWOGRAM GRADE CALCULATOR LA!\n wap gen pouw kalkile mwayenn kantite not ou vle \n a note ke chak matye sou 100 men ou pap bezwen ekri non matye a, se selman note la! \n klike sou ok pouw komanse!");

let i;
let mwayèn;
let klasifikasyon;

let total=0;
let N = parseInt(prompt("Antre kantite nòt ou vle kalkile mwayèn nan: "));


  do{
    for( i=N; i>0; i--){
        let not= prompt(`Antre ${i}e not la: `);
        total= total + not;
      }
  }
  while(i>0){

  }
 
  
  mwayèn = total / N;
  console.log("ou fe "+ total+ " sou "+N*100+", ou fe mwayenn " +Math.round(mwayèn) +"!")

  
    if (mwayèn >= 90) {
        klasifikasyon = "A";
        console.log("Ekselan! Ou fe mansyon A");
    } 
    else if (mwayèn >= 80) {
        klasifikasyon = "B";
        console.log("Bravo! Ou fe mansyon B");
    } 
    else if (mwayèn >= 70) {
        klasifikasyon = "C";
        console.log("Felisitasyon! Ou fe mansyon C");
    } 
    else if (mwayèn >= 60) {
        klasifikasyon = "D";
        console.log("Pa mal! Ou fe mansyon D");
    } else {
        klasifikasyon = "F";
        console.log("Fe plis efo! Ou fe mansyon F");
    }
