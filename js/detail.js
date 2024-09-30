const detailedurl=window.location.search.split('&')

const detailedcategory=detailedurl[0].split('=').at(-1)
const detailedid=detailedurl[1].split('=').at(-1)

const currentProduct=document.getElementById("currentProduct")
const PRODUCT=[]
fetch(`https://papajson.vercel.app/${detailedcategory}/${detailedid}`)
    .then(res=>res.json())
    .then(data=>{
        PRODUCT.push(data)
        showProduct()
    })

function showProduct(){
    PRODUCT.map(item=>{
        currentProduct.innerHTML=`
            <div class="flex-col">
                <p id="titleofproduct${item.id}" class="font-bold text-2xl">${item.title}</p>
                <p class="font-bold">${item.composition}</p>
                <div class="flex mt-[10px] gap-[50px] items-center">
                    <div class="flex">
                        <button onclick="minus('${item.id}','detail')" class="rounded-l-lg cursor-pointer text-white px-2 h-15  bg-[#0F9675] font-bold"><i class="fa-solid fa-minus"></i></button>
                        <p id="countofproduct${item.id}" class="px-3 h-15  bg-[#e8e4e4] text-xl pt-1">1</p>
                        <button onclick="plus('${item.id}','detail')" class="rounded-r-lg cursor-pointer text-white px-2 h-15  bg-[#0F9675] font-bold"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <div class="flex"><p class="text-xl"  id="priceofproduct${item.id}"> ${item.price} </p> <p class="text-xl">man</p></div>
                    <button onclick="addtocart('${item.id}')" class="text-white mx-2 px-2 h-[45px] rounded-lg bg-[#0F9675]">
                        Səbətə at
                    </button>
                </div>
            </div>
            
            <div>
            <img id="imgofproduct${item.id}" class="mt-[20px] w-[350px]" src="${item.img}">
            </div>

        `
    })
    
}
