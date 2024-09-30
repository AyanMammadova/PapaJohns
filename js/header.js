                        // ADD MENU LISTITEMS 
let datacategory = []
fetch("https://papajson.vercel.app/category")
    .then(res => res.json())
    .then(categories => {
        datacategory.push(...categories)
        addmenuitems()
    })  

let menu = document.querySelectorAll(".menu")
let menukod=''
function addmenuitems() {
    menukod=''
    datacategory.map(item => {
        let link = item.slug == 'kampaniyalar' 
            ? `/pages/kampaniyalar.html` 
            : `/pages/category.html?category=${item.slug}`
                menukod += `
                <li>
                    <a href="${link}" 
                    class="uppercase font-bold text-[17px] hover:text-[#D6878A]">
                        ${item.category}
                    </a>
                </li>
                `
            
            menu.forEach(menuelement=>{
            menuelement.innerHTML=menukod})
    })
}

