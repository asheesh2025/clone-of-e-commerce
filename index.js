// Store cart items in local storage with key: "items"
const url="https://grocery-masai.herokuapp.com/items"
async function getData()
{
    try{
        const url="https://grocery-masai.herokuapp.com/items"
        let res=await fetch(url)
        let data=await res.json()
        appendData(data.data)
        console.log(data.data)
    }
    catch(error)
    {
        console.log(error)
    }
}
getData()

function appendData(data1)
{
    data1.map(function(el,index){
        let img=document.createElement("img")
        img.src=el.image
        img.style.width="100%"
        img.style.height="60%"
        let name1=document.createElement("h5")
        name1.innerText=el.name
        let price=document.createElement("p")
        price.innerText=el.price
        let btn=document.createElement("button")
        btn.id="add_to_cart"
        btn.innerText="Add to cart"
        btn.addEventListener("click",function ()
        {
            added (el,index)
        })
        let div1=document.createElement("div")
        div1.append(img,name1,price,btn)
        div1.style.textAlign="center"
        div1.style.border="2px solid blue"
        document.querySelector("#items").append(div1)
    })
    let arr=JSON.parse(localStorage.getItem("items")) || []
    function added(el,index)
    {
        //console.log(index,el)
        let obj={
             img2 : el.image,
             name2 : el.name,
             price2 : el.price
        }
        arr.push(obj)
        localStorage.setItem("items", JSON.stringify(arr))
        window.location.reload()
        
    }
    let total=arr.length
    document.querySelector("#item_count").innerText=total
    

}