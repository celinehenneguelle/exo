//let x = 14;
//let Y = 10;

//if (x>Y) {
 //   console.log("profit") ;
//}

//else if (x>y) {
  //  console.log("perte") ;
//}


//let age= 17
//let majeur= 18;
//let resultat= ""

//if (age>=majeur)
 //{resultat="la personne est majeur";
//}
//else (age<majeur)
 //{resultat="la personne est mineur";}

//console.log(resultat)

//let perf = 70
//resultat=""

//if (perf>=90)
//{resultat="prime de 200";}

//else if (perf<90 && perf >= 80)
 //{resultat="prime de 150";}

//else if (perf<80 && perf >= 70)
//{ resultat="prime de 100";}

//else if (perf<70)
//{resultat="prime de 0"}

//console.log(resultat)



//let txt1 = "comment allez-vous aujourd'hui"
//let text2 = "bienvenue chez nous"


//let message = txt1.length>text2.length ? "phrase 1 la plus longue" : txt1.length<text2.length ? "phrase 2 la plus longue":"les phrase sont de meme longueurs";
//console.log(message)


//   id: 11456,
 //    matricule: "GH 11456 - 59",
  //   type: "c",
   //  age: 5,
//};
//
//let message1 =  vehicule.type ="c" ? "le vehicule est un camion":"le vehicule est une voiture";
//console.log(message1)

///let z = prompt("bonjour")
//console.log(z)

//let grade = prompt("indiquez votre grade:junior,confirme,senior");

//switch(grade) {
  //  break;
    //      text=" 2500 euros";
      //      break;
        //    case "senior":
          //      text=" 3200 euros";
            //    break;
              //  default:
                //    text="0 euro";
 
//}
//console.log(text?`avec votre grade de ${grade} vous gagnerez un salaire de ${text}`:"0 euros" ); 




//let roues :=parseInt (prompt("indiquez le nombre de roues"));

//switch(roues){

  //  case 2 : 
    //text=`une moto`;
    //break;

    //case 4 :
      //  text=`une voiture`;
        //break;

    //case 6 :
      //  text=`un camion`;
        //break;

        //default:
          //  text=` vehicule non reconnu`;
        //}


//console.log(roues?`Le fait d'avoir ${roues} roues indique que vous possedez  ${text}`:`vehicule non reconnu`);


//let fruits =["mangue","pasteque","poire","orange","banane"]
//var longueurdefruits=[]
//for(let i = 0 ; i < fruits.length ;i++)


//{

  //  console.log ( fruits[i].length);
    //longueurdefruits.push(fruits[i].length)
    //console.log(longueurdefruits)
    
//}
//console.log(longueurdefruits)


//let i = 0
//let fruit= fruits[i]
////let stiurf=[]
//fruits.forEach(function (fruit) {
  //:stiurf.push(fruit.split('').reverse().join('') );
   
   //});

//console.log(stiurf) 
//let FRUIT = []
 //fruits.forEach(function (fruit) {
  //FRUIT.push(fruit.toUpperCase() );
   
   //});
   //console.log(FRUIT)
 
//const todos = [
  //    {
    //id: 1,
    //text: "Faire les courses",
    //isCompleted: true,
   // },
    //{
    //id: 2,
    //text: "Balade au vieux Lille"
    //,
    //isCompleted: true,
    //},
    //{
     //id: 3,
    //text: "Préparer le diner",
    //isCompleted: false,
    //},
    //{
    //id: 4,
    //text: "Regarder la TV",
    //isCompleted: false,
    //}
    //];


    //for(let i =0; i < todos.length; i++){

    
    
    
   // console.log(`la tache ${todos[i].text} est complétee`)

 
//document.write( `la tache ${todos[i].text} est ${todos[i].isCompleted ? "complete" :"non completee"}<br>`)

//}



//let i = 0
//while (i < todos.length) {
   // document.write(todos[i].text + "<br>");
  //  i++;
    //}
  //let todo=todos[1]  
    
//todos.forEach(function (todo) {
       // document.write(todo.text + "<br>");
  //      });




//let tab =[1,5,7,3,10,8,]
//let sum = 0;
//for(var i=0; i< tab.length; i++){


// sum  += tab[i] 

    

//}


  //let tabl = []

//for (let i =0; i<tabl.length;i++){

  //  tabl.push(math.floor(math.random()*100))
    //document.write(tabl);
//}


//let a=3
//let b=6
//let e=7


//function multiplie (a, b, e){
  //return a*b*e
//}
//console.log(multiplie(a,b,c));

//document.write(multiplie(3,6,9))

//console.log(multiplie(a,b,e))

//let min = parseInt(prompt("nombre de minutes?"))

//let result = minensec(min)


//function minensec(min) {
 
//return min*60
//}
  //document.write(`il y a ${result} secondes dans ${min} minutes`)


//console.log(minensec(min))




//function firstandlast(arr){
  //return arr[0]

  
//}  
 
//console.log(firstandlast (fruits))

//function firstandlast1(arr){
  //return arr[arr.length-1]

//}
//console.log(firstandlast1(fruits))


//function tabrandon(array){
//return array [Math.floor(Math.random()*(array.length))];

//}



//console.log(tabrandon(fruits))





//let j1 = prompt("devinez un chiffre entre 1 et 100")
  //document.write(j1)


//let nbmyst = Math.floor(Math.random() * (100+1 -1) +1);
//let result = joueur ===nbmyst
//console.log(result)
//console.log(nbmyst)
//let cplus = nbmyst<joueur
//let cmoins= nbmyst>joueur



//function jeu(nbmyst){
  //switch (nbmyst){
    //case result :
      //prompt("gagné!!")
     //case cplus :
       //prompt("c'est plus")
      //case cmoins:
        //prompt("c'est moins") 
  //}}

//console.log(joueur) 
//let nbmyst = Math.floor(Math.random() * (100+1 -1) +1);
//console.log(nbmyst)
//let joueur = prompt("devinez un chiffre ")
//console.log(joueur)
//if (joueur === nbmyst) {
  //alert("gagnez!!")
   //(joueur< nbmyst)
  //alert("c'est plus!")
    //(joueur>nbmyst)
    //alert ("c'est moin")
    
//}

let nbmyst = Math.floor(Math.random() * (100+1 -1) +1);
 console.log (nbmyst)

let jeu = prompt("choisissez un chiffre entre 0 et 100")
console.log(jeu)

function tour1(){

 if (jeu = nbmyst) {
  alert("gagnez!!");}
   else if(jeu< nbmyst)
  {alert("c'est plus!");}
  else  (jeu>nbmyst)
  {alert ("c'est moins");}
  
}

tour1();

  function tour2(nbmyst) {
  if (tour1=nbmyst){
    
  }
  }