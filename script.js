

/** Задание 5

let inpz5__1 = document.querySelector(".inpz5__1");
let inpz5__2 = document.querySelector(".inpz5__2");
const btn5 = document.querySelector(".btn5");
const z5__text = document.querySelector(".z5__text");
const z5__text__p = document.querySelector(".z5__text__p");
const z5__text__active1 = document.querySelector(".z5__text__active1");
const z5__text__active2 = document.querySelector(".z5__text__active2");
const z5__text__active3 = document.querySelector(".z5__text__active3");
const z5__text__active4 = document.querySelector(".z5__text__active4");
const z5__text__active1__p = document.querySelector(".z5__text__active1__p");
const z5__text__active2__p = document.querySelector(".z5__text__active2__p");
const z5__text__active3__p = document.querySelector(".z5__text__active3__p");
const z5__text__active4__p = document.querySelector(".z5__text__active4__p");
let imgz5 = document.querySelector(".imgz5");
btn5.addEventListener("click", test)
function test() {
    let val1 = inpz5__1.value;
    let val2 = inpz5__2.value;
    let noVal1;
    let noVal2;
    if(val1 < 1 || val1 > 10 || isNaN(val1)){
        console.log('Номер страницы вне диапазона от 1 до 10')
        noVal1 = val1;
        z5__text.classList.toggle("z5__text__active1");
        z5__text__p.classList.toggle("z5__text__active1__p");
        z5__text__active1.style.display = "block";
        z5__text__active1__p.style.display = "block";
    }
    if(val2 < 1 || val2 > 10 || isNaN(val2)){
        console.log("Лимит вне диапазона от 1 до 10");
        noVal2 = val2;
        z5__text.classList.toggle ("z5__text__active2");
        z5__text__p.classList.toggle ("z5__text__active2__p");
        z5__text__active2.style.display = "block";
        z5__text.style.display = "none";
        z5__text__p.style.display = "none";
        z5__text__active2__p.style.display = "block";
    }
    if(val1 < 1 || val1 > 10 || val2 < 1 || val2 > 10 || isNaN(val1, val2)){
        console.log("Номер страницы и лимит вне диапазона от 1 до 10");
        z5__text.classList.toggle ("z5__text__active3");
        z5__text__p.classList.toggle("z5__text__active3__p");
        z5__text__active3.style.display = "block";
        z5__text__active3__p.style.display = "block";   
    }
    if(val1 > 1 && val1 < 10 || val2 > 1 && val2 < 10){
        z5__text.classList.toggle ("z5__text__active4");
        z5__text__p.classList.toggle("z5__text__active4__p");
        z5__text__active4.style.display = "block";
        z5__text__active4__p.style.display = "block";   
        fetch("https://picsum.photos/v2/list?page=" + val1 + '&limit=' + val2)
        .then((resp)=>{
            imgz5.innerHTML = `<img class="im" src="${resp.url}" title="Картинка полученная по запросу">`
            console.log(resp.status)
        })
    }
}

 */



/** Задание 4 
let inpZ2__1 = document.querySelector(".inpZ2__1");
let inpZ2__2 = document.querySelector(".inpZ2__2");
const btn2 = document.querySelector(".btn2");
const imag = document.querySelector(".imag")
btn2.addEventListener("click", val)
function val (){
    let val1 = inpZ2__1.value;
    let val2 = inpZ2__2.value;
    if(val1 >= 100 && val1 <= 300 || val2 >= 100 && val2 <= 300){
        console.log("верно");
        fetch('https://picsum.photos/' + val1 +'/' + val2)
        .then((resp) =>{
            imag.innerHTML =`<img class="someimg" src="${resp.url}" title="Картинка, полученная по запросу">`
        })
        .catch((er) =>{
            console.log('Ошибка статуса' + er.status)
        })
    }else{
        console.log('Впишите другие числа')
    }
}
    
    
*/


 
/** Задание 3


const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");
let val = []
btn.addEventListener("click", pep)
function pep() {
    val = inp.value;
    console.log(val);
    if(val > 10){
        console.log('Не верное число')
    }if(val <= 10){
    const XML = new XMLHttpRequest();
XML.open('GET', 'https://picsum.photos/v2/list?limit=' +val);
XML.onload = function(){
    if(XML.status != 200){
        console.log('Статус ответа' , XML.status)
        
    }else{
        console.log('Результат' , JSON.parse(XML.response))
    }
}
XML.onprogress = function(event){
    console.log(`Загружено ${event.loaded} из ${event.total}`)
}
XML.onerror = function(){
    console.log('Ошибка статуса ', XML.status)
}
XML.send() }

}

 
 */

/** Задание 2 (9.2) 
const str = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }
   `;


const data = JSON.parse(str);
console.log(data)
const list = data.list
console.log(list);
const result0 = {
    name: list[0].name,
    age: list[0].age,
    prof: list[0].prof
}
const result1 = {
    name: list[1].name,
    age: list[1].age,
    prof: list[1].prof
}

console.log(result0, result1)
*/


/** Задание 1 (9.2)
const parser = new DOMParser();
const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const student = xmlDOM.querySelectorAll("student");
const attr0 = student[0].querySelector("name");
const getAttr0 = attr0.getAttribute("lang");
const first0 = student[0].querySelector("first");
const second0 = student[0].querySelector("second");
const age0 = student[0].querySelector("age");
const prof0 = student[0].querySelector("prof");
const attr1 = student[1].querySelector("name");
const getAttr1 = attr1.getAttribute("lang")
const lang1 = student[1].getAttribute("lang")
const first1 = student[1].querySelector("first");
const second1 = student[1].querySelector("second");
const age1 = student[1].querySelector("age");
const prof1 = student[1].querySelector("prof");
const result0 = {
    lang: getAttr0,
    name: first0.textContent,
    surname: second0.textContent,
    age:Number(age0.textContent),
    prof: prof0.textContent
}
const result1 = {
    lang: getAttr1,
    name: first1.textContent,
    surname: second1.textContent,
    age:Number(age1.textContent),
    prof: prof1.textContent
}
const mas = [];
mas.push(result0, result1);
console.log(mas)
     */