   /* function UPSTYLE(){
        const Di1= document.getElementById(D1)
        D1.classList.add("DIV1")
    }
  
    let NAMES=["umer","raffy","Ali","taimoor"];
    let notfound=true;
    do{
             if(NAMES[0]=="Ali"){
            console.log("present");
        notfound=false;
    }
        else{
            NAMES.shift();
        }
    }
    while(notfound && NAMES.length > 0)
 let number

do{
    number = prompt("Please enter a number 0 to 100")

}
while(!(number>=0 && number<100))
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
let info = [
    Aboutme={
    name : "shaheryar",
    email :"sk84@gmail.com",
    age : 23,
    degree : "cse",
    phone:  "03460650978",
    adress : "house 10",
    course : 3},
    outme={
    name : "shaheryar",
    email :"sk84@gmail.com",
    age : 23,
    degree : "cse",
    phone:  "03460650978",
    adress : "house 16",
    course : 3},
    utme={
    name : "shaheryar",
    email :"sk84@gmail.com",
    age : 23,
    degree : "cse",
    phone:  "03460650978",
    adress : "house 17",
    course : 3},
    tme={
    name : "shaheryar",
    email :"sk84@gmail.com",
    age : 23,
    degree : "cse",
    phone:  "03460650978",
    adress : "house 8",
    course : 3},
    me={
    name : "shaheryar",
    email :"sk84@gmail.com",
    age : 23,
    degree : "cse",
    phone:  "03460650978",
    adress : "house 9",
    course : 3}
]
for (let i=0;i<info.length;i++) {
    
    console.log (info[i].adress);
    
}
*/
let info = [
    {
        name: "shaheryar",
        email: "sk84@gmail.com",
        age: 23,
        degree: "cse",
        phone: "03460650978",
        adress: "house 10",
        course: 3
    },
    {
        name: "shaheryar",
        email: "sk84@gmail.com",
        age: 23,
        degree: "cse",
        phone: "03460650978",
        adress: "house 16",
        course: 3
    }
];


for (let i = 0; i < info.length; i++) {

 for (let key in info[i]) {
        console.log(key + ": " + info[i][key]);
    }

    console.log("-----"); }