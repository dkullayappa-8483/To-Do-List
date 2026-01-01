const input=document.querySelector('.input');
console.log(input)
const btn=document.querySelector('.btn');

const items=document.querySelector(".items")
console.log(items)
// console.log(btn)



// Adding Functionality to button

btn.addEventListener("click",()=>{
    if(input.value===""){
        alert("Input Field is Empty Type Somthing and Add Item");
    }

    else{
        const pop=document.createElement('button');
        pop.classList.add('btn');
        pop.innerText="delete"  
        const list=document.createElement("li");
list.classList.add("items");
        items.appendChild(list);
        list.innerText=input.value;
        items.append(pop);
        input.value="";
        pop.addEventListener('click',()=>{
            list.remove()
            pop.remove();
        }
        )
        list.addEventListener('click',()=>{
            list.classList.toggle("done");
        });

    }
})

// console.log(list)


