let icon = document.getElementById("ulli1")
let menulist = document.getElementById("menulist")

let i = 1

function clickme(e){
   let v = e.target
   if(i%2){
    icon.classList.remove("left-[100%]")
    icon.classList.add("left-[0%]")
    menulist.classList.remove("bi-list")
    menulist.classList.add("bi-x")
    i++
   }else{
    icon.classList.remove("left-[0%]")
    icon.classList.add("left-[100%]")
    menulist.classList.remove("bi-x")
    menulist.classList.add("bi-list")
i++
   }
   console.log(icon);
//    console.log(v);

}