let add=document.querySelector("#add");
let input=document.querySelector(".input1")
let ul=document.querySelector(".list")


add.addEventListener("click",()=>
{

    if(input.value=="")
    {
        alert("Enter some task")
        return;
    }
    else{
    let li1=document.createElement("li");
    let checkbox=document.createElement("input")
    checkbox.type="checkbox";
    checkbox.setAttribute("class","check")
    // checkbox.style.width="90px"
    let span1=document.createElement("span")
    span1.innerText=input.value;
   let delete1=document.createElement("button")
// add a edit button

  let edit=document.createElement("button")

edit.innerText="Edit"

   delete1.innerText="delete"
   delete1.style.width="40px"
   input.value=""
   li1.append(checkbox,span1,delete1,edit);
   
   ul.append(li1)
   delete1.addEventListener("click",()=>
    {
        li1.remove();
    })

    checkbox.addEventListener("click",()=>
    {
        if(checkbox.checked)
        {
            span1.style.textDecoration="line-through"
        }
        else{
            span1.style.textDecoration="none"
        }
    })

    edit.addEventListener("click",()=>{
     let oldvalue=span1.innerText;
      let editvalue=prompt("Edit Your Task",oldvalue)

      if(editvalue==""||editvalue.trim()==""){
       
       alert("task cannot be empty")
    }
      
      else{
        span1.innerText=editvalue
      }
       
     
     


     


     


    })
    }
   

})