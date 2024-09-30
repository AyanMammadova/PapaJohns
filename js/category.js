const url=window.location.search.split("=").at(-1)
const DATA=[]
                    // FILTER CARDS BY CATEGORY
 
fetch(`https://papajson.vercel.app/${url}`)
    .then(res=>res.json())
    .then(these=>{
        DATA.push(...these)
        show()
    })
    .catch(error=>{
        return
    })
    
