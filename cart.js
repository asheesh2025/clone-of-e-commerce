let getfromlocal=JSON.parse(localStorage.getItem("items")) || []
let price=[]
function appendCart()
{
    getfromlocal.map(function(el,index)  {
        let img=document.createElement("img")
        img.src=el.img2
        img.style.width="100%%"
        img.style.height="65%"
        let name1=document.createElement("h5")
        name1.innerText=el.name2
        let pri=document.createElement("p")
        pri.innerText=el.price2
        let btnRemove=document.createElement("button")
        btnRemove.id="remove"
        btnRemove.addEventListener("click",function () {
            removeFromcart(el,index)
        })
        btnRemove.innerText="Remove"
        let div=document.createElement("div")
        div.style.textAlign="center"
        div.style.border="2px solid green"
        div.style.height="350px"
        div.append(img,name1,pri,btnRemove)
        document.querySelector("#cart").append(div)
        price.push(el.price2)
        console.log()
    })
}
function removeFromcart(el,index)
{
    getfromlocal.splice(index,1)
    localStorage.setItem("items", JSON.stringify(getfromlocal))
    window.location.reload()
}
appendCart()
//console.log(price)
let sum=0
for(let i=0; i<price.length; i++)
{
    sum=sum+price[i]
}
document.querySelector("#cart_total").innerText=sum
