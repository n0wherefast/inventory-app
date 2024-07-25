
const h1 = document.querySelector('h1')
const product = document.getElementById('product')

h1.innerHTML='Iventory App'


const fetchProd = async () =>{
    const res = await fetch('http://localhost:5000/products',{mode:'cors'})
    const data = await res.json()
    console.log(data)
    return data
}




const  showProduct = async () => {
    const data = await fetchProd()
    data.map((prod)=>{
        const {title,description,price,category,_id ,image} = prod

        const  H2_title= document.createElement('h2')
        const  card= document.createElement('div')
        const P_desc = document.createElement('p')
        const P_price = document.createElement('p')
        const Category = document.createElement('div')
        const containrBtn = document.createElement('div')
        const containrImg = document.createElement('div')
        const del = document.createElement('button')
        const edit = document.createElement('button')
        const img = document.createElement('img')

        del.addEventListener('click', async ()=>{
            console.log(_id)
           await fetch('http://localhost:5000/'+_id,{ mode:'cors', method:'delete'})
           location.reload()
        })
        edit.addEventListener('click', async ()=>{
            document.location.href = `http://localhost:5000/edit/${_id}`;
        })

        card.classList.add('card')
        img.classList.add('img')
        del.classList.add('del')
        P_price.classList.add('price')
        edit.classList.add('edit')
        H2_title.classList.add('title')
        Category.classList.add('category')
        containrBtn.classList.add('containerBtn')
        containrImg.classList.add('containerImg')

        H2_title.innerHTML=title
        P_price.innerHTML=price + ' €'
        P_desc.innerHTML=description
        Category.innerHTML=category
        del.innerHTML='delete'
        edit.innerHTML='edit'
        img.src=image

        product.appendChild(card)
        card.appendChild(containrBtn)
        containrBtn.appendChild(del)
        containrBtn.appendChild(edit)
        card.appendChild(containrImg)
        containrImg.appendChild(img)
        card.appendChild(H2_title)
        card.appendChild(P_desc)
        card.appendChild(Category)
        card.appendChild(P_price)

    })
}

showProduct()