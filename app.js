const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];
let divDOM=document.querySelector("#buttons")

let button1=document.createElement("button")
button1.innerHTML="All"
button1.classList.add("btn-item","btn", "btn-outline-dark","btn-lg")

let button2=document.createElement("button")
button2.innerHTML="Korea"
button2.classList.add("btn-item","btn", "btn-outline-dark","btn-lg")

let button3=document.createElement("button")
button3.innerHTML="Japan"
button3.classList.add("btn-item","btn", "btn-outline-dark","btn-lg")

let button4=document.createElement("button")
button4.innerHTML="China"
button4.classList.add("btn-item","btn", "btn-outline-dark","btn-lg")

divDOM.append(button1)
divDOM.append(button2)
divDOM.append(button3)
divDOM.append(button4)

button1.addEventListener("click",function(){
let myDiv = document.getElementById("row");
myDiv.innerHTML = "";
for(let i=0;i<menu.length;i++){
  let div1=document.createElement("div")
  div1.classList.add("menu-items", "col-lg-6", "col-sm-12")


  
  let img = document.createElement("img");
  img.src = menu[i].img; // Resim kaynağını doğru şekilde atıyoruz
  img.alt = ""
  img.classList.add("photo");
  div1.appendChild(img)


  let div2=document.createElement("div")
  div2.classList.add("menu-info","float-end")

  let div3=document.createElement("div")
  div3.classList.add("menu-title")

  text1=document.createElement("h4")
  text2=document.createElement("h4")

  text1.innerHTML=menu[i].title
  text2.innerHTML=menu[i].price
  div3.appendChild(text1)
  div3.appendChild(text2)
  div2.appendChild(div3)

  let div4=document.createElement("div")
  div4.classList.add("menu-text")
  div4.innerHTML=menu[i].desc
  div2.appendChild(div4)
  
  div1.appendChild(div2)
  
  myDiv.append(div1)

}
})

button2.addEventListener("click",function(){
  let myDiv = document.getElementById("row");
  myDiv.innerHTML = "";
  for(let i=0;i<menu.length;i++){
    if(menu[i].category==="Korea"){
    let div1=document.createElement("div")
    div1.classList.add("menu-items", "col-lg-6", "col-sm-12")
  
  
    
    let img = document.createElement("img");
    img.src = menu[i].img; // Resim kaynağını doğru şekilde atıyoruz
    img.alt = ""
    img.classList.add("photo");
    div1.appendChild(img)
  
  
    let div2=document.createElement("div")
    div2.classList.add("menu-info","float-end")
  
    let div3=document.createElement("div")
    div3.classList.add("menu-title")
  
    text1=document.createElement("h4")
    text2=document.createElement("h4")
  
    text1.innerHTML=menu[i].title
    text2.innerHTML=menu[i].price
    div3.appendChild(text1)
    div3.appendChild(text2)
    div2.appendChild(div3)
  
    let div4=document.createElement("div")
    div4.classList.add("menu-text")
    div4.innerHTML=menu[i].desc
    div2.appendChild(div4)
    
    div1.appendChild(div2)
    
    myDiv.append(div1)}
  
  }
  })

  button3.addEventListener("click",function(){
    let myDiv = document.getElementById("row");
    myDiv.innerHTML = "";
    for(let i=0;i<menu.length;i++){
      if(menu[i].category==="Japan"){
      let div1=document.createElement("div")
      div1.classList.add("menu-items", "col-lg-6", "col-sm-12")
    
    
      
      let img = document.createElement("img");
      img.src = menu[i].img; // Resim kaynağını doğru şekilde atıyoruz
      img.alt = ""
      img.classList.add("photo");
      div1.appendChild(img)
    
    
      let div2=document.createElement("div")
      div2.classList.add("menu-info","float-end")
    
      let div3=document.createElement("div")
      div3.classList.add("menu-title")
    
      text1=document.createElement("h4")
      text2=document.createElement("h4")
    
      text1.innerHTML=menu[i].title
      text2.innerHTML=menu[i].price
      div3.appendChild(text1)
      div3.appendChild(text2)
      div2.appendChild(div3)
    
      let div4=document.createElement("div")
      div4.classList.add("menu-text")
      div4.innerHTML=menu[i].desc
      div2.appendChild(div4)
      
      div1.appendChild(div2)
      
      myDiv.append(div1)}
    
    }
    })

    button4.addEventListener("click",function(){
      let myDiv = document.getElementById("row");
      myDiv.innerHTML = "";
      for(let i=0;i<menu.length;i++){
        if(menu[i].category==="China"){
        let div1=document.createElement("div")
        div1.classList.add("menu-items", "col-lg-6", "col-sm-12")
      
      
        
        let img = document.createElement("img");
        img.src = menu[i].img; // Resim kaynağını doğru şekilde atıyoruz
        img.alt = ""
        img.classList.add("photo");
        div1.appendChild(img)
      
      
        let div2=document.createElement("div")
        div2.classList.add("menu-info","float-end")
      
        let div3=document.createElement("div")
        div3.classList.add("menu-title")
      
        text1=document.createElement("h4")
        text2=document.createElement("h4")
      
        text1.innerHTML=menu[i].title
        text2.innerHTML=menu[i].price
        div3.appendChild(text1)
        div3.appendChild(text2)
        div2.appendChild(div3)
      
        let div4=document.createElement("div")
        div4.classList.add("menu-text")
        div4.innerHTML=menu[i].desc
        div2.appendChild(div4)
        
        div1.appendChild(div2)
        
        myDiv.append(div1)}
      
      }
      })