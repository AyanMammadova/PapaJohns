                    // FILTER CARDS BY CATEGORY  
let cardContainer=document.getElementById("cardContainer")
function show(){
    cardContainer.innerHTML=''
    DATA.map(item=>{
        cardContainer.innerHTML+=`
            <a href="/pages/details.html?category=${item.category}&id=${item.id}" class="flex-col w-[280px]">
                <img class="h-[200px] mb-3" src="${item.img}" alt="">
                <div class="flex justify-between">
                    <span>${item.title}</span>
                    <button class="cursor-pointer text-white mx-2 px-2 h-6 rounded-lg bg-[#0F9675] ">BUNU SEC</button>
                </div>
                <p class="mt-3">${item.composition}</p>
            </a>
            `
        document.title=`PapaJohns/${item.category}`
    })
}

                 //  POP UP CARDS  AND CLOSE POP UPS

let graybg2=document.getElementById("graybg2")
let yourcart=document.getElementById("yourcart")
let clickedproductcard=document.getElementById("clickedproductcard")
let cartproducts=document.getElementById("cartproducts")


                    // INCREASE AND DECREASE COUNT

function plus(index,where){
    let originalprice=PRODUCT[0].price
    if(where=='detail'){
        let countofproduct=Number(document.getElementById(`countofproduct${index}`).innerText)
        let newcount=countofproduct+=1
        document.getElementById(`countofproduct${index}`).innerText=newcount
        document.getElementById(`priceofproduct${index}`).innerText=newcount*originalprice 
    }
    else if(where=='cart'){
        let countincart=Number(document.getElementById(`countofproductincart${index}`).innerText)
        let newcount=countincart+=1
        document.getElementById(`countofproductincart${index}`).innerText=newcount
        let newprice=originalprice*newcount
        document.getElementById(`priceofproductincart${index}`).innerText= newprice
        addedProduct.count=newcount
        addedProduct.price=newprice
        totalcountbasket.forEach(element=>{
            element.innerHTML=newcount
        })
        totalmoneybasket.forEach(element => {
            element.innerHTML=newprice
        })
    }
}
function minus(index,where){
    let originalprice=PRODUCT[0].price
    if(where=='detail'){
        let countofproduct=Number(document.getElementById(`countofproduct${index}`).innerText)
        if(countofproduct==1)return
        let newcount=countofproduct-=1
        document.getElementById(`countofproduct${index}`).innerText=newcount
        let priceofproduct=Number(document.getElementById(`priceofproduct${index}`).innerText)
        let newprice=priceofproduct*newcount
        
        document.getElementById(`priceofproduct${index}`).innerText=newcount*originalprice 
    }
    else if(where=='cart'){
        let countincart=Number(document.getElementById(`countofproductincart${index}`).innerText)
        if(countincart==1)return
        let newcount=countincart-=1
        document.getElementById(`countofproductincart${index}`).innerText=newcount
        let newprice=originalprice*newcount
        document.getElementById(`priceofproductincart${index}`).innerText= newprice
        addedProduct.count=newcount
        addedProduct.price=newprice
        totalcountbasket.forEach(element=>{
            element.innerHTML=newcount
        })
        totalmoneybasket.forEach(element => {
            element.innerHTML=newprice
        })
    }
}

                         //  ADD PRODUCT TO YOUR ADDEDARRAY AND CART
let addedProduct={}
let addedarr=[]
function addtocart(index){
    let countofadded=Number(document.getElementById(`countofproduct${index}`).innerText)
    let priceofadded=Number(document.getElementById(`priceofproduct${index}`).innerText)
    let imgofadded = document.getElementById(`imgofproduct${index}`).src;
    let titleofadded = document.getElementById(`titleofproduct${index}`).innerText
    let existingProduct=addedarr.find(item=>item.id==index)
    if(existingProduct){
        existingProduct.count+= countofadded
        existingProduct.price+= priceofadded
    }else{
        addedProduct={
            id:index,
            img:imgofadded,
            title:titleofadded,
            count:countofadded,
            price:priceofadded
        }
        addedarr.push(addedProduct)
    }   
    showincart() 
}

                                        // SHOW IN CART
let totalmoneybasket=document.querySelectorAll(".totalmoneybasket")
let totalcountbasket=document.querySelectorAll(".totalcountbasket")
let totalamount=0
let totalcount=0
function showincart(){
    totalamount=0
    totalcount=0
    cartproducts.innerHTML=''
    addedarr.forEach(item=>{
        totalamount+=item.price
        totalcount+=item.count
        cartproducts.innerHTML+=`
            <div  class="mycart flex justify-between items-center my-[10px]">
                <div class="flex">
                        <img class="w-[100px]" src="${item.img}" alt="">
                        <p class="font-bold"> ${item.title} <br> <span class="px-[3px] font-thin">${item.title}</span></p>
                    </div>
                    <div class="flex gap-[20px]">
                        <div class="flex">
                        <button onclick="minus('${item.id}','cart')" class="rounded-l-lg cursor-pointer text-white px-2 h-6  bg-[#0F9675] font-bold"><i class="fa-solid fa-minus"></i></button>
                        <span id="countofproductincart${item.id}" class="px-3 bg-[#F1F1F1]">${item.count}</span>
                        <button onclick="plus('${item.id}','cart')" class="rounded-r-lg cursor-pointer text-white px-2 h-6  bg-[#0F9675] font-bold"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="flex items-center">
                        <p id="priceofproductincart${item.id}">${item.price}</p> azn <i onclick="removethisproduct('${item.id}')" class="fa-solid fa-xmark cursor-pointer"></i>
                    </div>
                    </div>
                </div>
            </div>
        `})
        totalcountbasket.forEach(element=>{
            element.innerHTML=totalcount
        })
        totalmoneybasket.forEach(element => {
            element.innerHTML=`${totalamount}`
        })
}

                    


                    // REMOVE PRODUCT FROM ADDED
function removethisproduct(index){
    addedarr=addedarr.filter(item=>item.id!==index)
    showincart()
}

                    // SHOW AND CLOSE CART
function closecart(){
    graybg2.classList.toggle("hidden")
    yourcart.classList.toggle("hidden")
}

function showcart(){
    graybg2.classList.toggle("hidden")
    yourcart.classList.toggle("hidden")
}