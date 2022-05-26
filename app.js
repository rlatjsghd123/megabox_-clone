const btn = document.querySelector('.del_btn');
const ad = document.querySelector(".ad");
const list = document.querySelector(".list");
console.log(list);
function adBtnClick(){
    ad.remove()
}
function listMouseOver(){
    const hide =  document.querySelector(".hide_list");
    hide.style.display = "flex";
    hide.style.position = "absolute";
    hide.style.top = "100px";
    hide.style.left = "95px";       
    list.style.borderBottom = "3px solid white"
}

function listMouseOut(){
    const hide =  document.querySelector(".hide_list");
    hide.style.display = "none";
    list.style.border = "none";
}

btn.addEventListener("click", adBtnClick);
list.addEventListener("mouseover", listMouseOver);
list.addEventListener("mouseout", listMouseOut);
