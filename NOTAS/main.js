// //Practicas Js

// // let nonbreVariables = valor, array, string;

// // funtion nombreFuncion(parametro1,parametro2,)
// //  if (condicion1) deahhh

// //POO
//  class casa{
//     constructor (estilo, plantas, habitaciones, baños, living, cochera){
//     this.estilo = estilo;
//     this.plantas = plantas,
//     this.habitaciones = habitaciones;
//     this.baños = baños;
//     this.living = living;
//     this.cochera = cochera;
//  }
// }

// let MyCasita = new casa("industrial", 2, 3, 2, 1, 1)

// console.log(MyCasita)

// console.log(MyCasita.habitaciones)

// /*
//    Operadores logicos
// */


// /*  
//  Condicionales: if (condicion){
//      ejecutar este codigo
//  }

//  */
// let numero= 0;

//  if (numero < 10){
//     numero++ 
//  }

// console.log(numero)
// /* BUCLES 
//          FOR ->  
//                let array =[a, b, c, d]         |
//                                                | -> muestra el indice de todos los elementos del array 
//                for(letters in variable)        |
               
//                for(letters OF variable)        | -> muestra el valor de los elementos...

//          WHILE -> while(condicion =true){
//             repetir este codigo hasta que la condicion deje de cumplirse
//          }
//          DO WHILE do{ codigo}
//                   while(condicion)*/

// let number=10
// while (number > 0){
//    number--;
//    console.log(number)

//    }

// //console 
// console.clear();

// let Nombre = "Uriel";
//   Apellido = "Barrionuevo";
//   Edad = 23;

// console.error("esto es un error");
// console.group("Persona1")
// console.log(Nombre)
// console.log(Apellido)
// console.log(parse(Edad))
// console.groupEnd("Persona1")


// let Persona2 = {}

// console.clear;
// //METODOS DE CADENAS

// let cadena = "Una cadena de texto que vamos a analizar";
//     cadena1 = ".asi se concatena con ".concat""
// //Concat
// cadena2 = cadena.concat(cadena1);

// console.log(cadena2)



/* DOM

Metodos selectores

-document.getElementById("ID")

-document.getElementsByTagName("TAG")

-document.querrySelector("CSS SELECTORS: .CLASS #ID")

-document.querrySelectorAll()->selecciona todos los elementos que tengan el mismo selector




//Metodos para definir obtener y eliminar valores de atributos.


en HTML:
    <input type="range" class="rangoEtario">
    <label> Rango de Edad </label>

    en JAVASCRIPT:

    const input = document.querrySelector(".rangoEtario");


    input.setAttribute("type","text") -> el 1er parametro es el atributo que queremos cambiar y el 2do es el que va a reemplazarlo.


    let valorDelAtributo= input.getAttribute(type)

    input.removeAttribute(type)-> lo elimina


ATRIBUTOS GLOBALES (todos los elementos html tienen estos atributos)

    -contenteditableIindica si el elemento puede ser modificable por el usuario(booleano)
   
    -dir indica la direccionalidad del texto
   
    -hidden indica si el elemento aún no es,oya no es,relevante.
      
    -style contiene declaraciones de estilo CSS para ser aplicadas al elemento.
    
    -tabindex-indica si el elemento puede obtener un focus de input
    -title contiene un texto con información relacionada al elemento al que pertenece.
    
    
    S
    Atributos de Inputs
    -classname
    -value
 -type
 -accept
 -form
 -minlength
 -placeholder
 -required

 //Metodos para Definir, obtener y Eliminar valores de atributos.

setattribute("tipo","valor") - Modifica el valor de un atributo
getattribute("tipo") - obtiene el valor de un atributo

removeattribute() - Remueve el valor de un atributo


Atributos globales
- class - lista de clases del elemento separadas por espacios

- contenteditable - indica si el elemento puede ser modificable por el usuario (bool)
- dir - indica la direccionalidad del texto

- hidden - indica si el elemento atin no es, o ya no es, relevante.

- id - define un identificador Gnico.

- style - Contiene declaraciones de estilo css para ser aplicadas al elemento.

- tabindex - indica si el elemento puede obtener un focus de input

- title - Contiene un texto con informacion relacionada al elemento al que pertenece.



atributo style:
element.style.PROPIEDAD= "VALOR"

EJEMPLO: 
en HTML: <div class="cont"></div>

const contenedor= document.querrySelector(".cont");

cont.style.backgroundColor= "#48e"  -> estamos definiendo el estilo del background.


Clases, classtist y Metodos de classList
Definician y usos
add() - aitade una clase
remove() - remueve una clase
item) = dewelve 1a clase del indice especificado
contains() - verifica si ese elenento posee 0 no, 1a clase especificada.
replace() ~ reemplaza una clase por otra

toggle() - sino tiene la clase especificada, 1a agrega, si ya la tiene, la elimina.


siguiendo el ejemplo...

cont.classList.add("valor")

entones en HTML: <div class="cont valor" ></div>

cont.classList.remove("cont")

entones en HTML: <div class="valor" ></div>

36) Obtencion y Modificacion de Elementos
textcontent - devuelve el texto de cualquier nodo sin importar el estilo que se encuentre,
innertext - devuelve el texto visible de un node element.

innerHTML ~ devuelve el contenido html de un elemento
outerHTHL ~ devuelve el codigo HMTL completo del elemento
  

<p class="titulo">Elemento a <b style="visibility: hidden;">
Modificar</b></p>

  const etiqueta = document.getElementByTagName("P")
  alert(etiqueta.textContent);-> resultado: "Elemento a Modificar"
 
  alert(etiqueta.innerHTML); ->  resultado: "Elemento a <b style="visibility: hidden;">Modificar</b>"
 
  alert(etiqueta.outerHTML); ->  resultado: "<p class="titulo">Elemento a <b style="visibility: hidden;">
                                              Modificar</b></p>"
  
    

37) Creacién de Elementos
createElement()
createTextNode()
appendchild()
createdocumentFragment()

en html: <div class="container"></div>
en js: const contenedor= document.querrySelector(".container");
       const item= document.createElement("LI")
       let textoItem= document.createTextNode"Hola mundito"
       item.appendChild(textoItem);
       contenedor.appendChild(item):
       console.log(contenedor) -> resultado: <div class="container"><li>Hola mundito</li></div>
       
       crear muchos elementos en un bucle:
       const fragmento= document.createDocumentFragment() -> Este wey sirve para no consumir recursos de mas.
       for(i=0; i<20; i++){
         const item= document.createElement("LI")
         item.innerHTML= "Este es el item "+i;
         fragmento.appendChild(item);
        }
        contenedor.appendChild(fragmento);




38) Obtencién y wodificacién de childs (Wijos)
firstchild
lastchild
firstElementchild
lastElementchild
childNodes
children ->crea un html collection (para recorrerlo usamos un for of)

38) metodos de childs (Hijos)
replaceChild(elementoNuevo, ElementoAReemplazar)
removeChild(elemento)
hasChildNodes( ) //boolean

41) Propiedades de parents (Padres)
 parentElement
 parentNode


42) Propiedades de Siblings (Hermanos)
nextsibling
previousSibling
nextElementSibling
previousElementSibling
 
*/

const contenedor= document.querySelector(".box-container");
contenedor.style.backgroundColor="#F7DF1E";
contenedor.style.color="white";
const parrafo= document.createElement("p");
parrafo.style.opacity="1";
parrafo.style.alignItems="center";
let texto= document.createTextNode("Editando desde JS!!!");
parrafo.appendChild(texto);

contenedor.lastElementChild.appendChild(parrafo);
for (div of contenedor.children){
div.style.backgroundColor= "#246";

}
console.log(contenedor.outerHTML);
console.log(parrafo)
