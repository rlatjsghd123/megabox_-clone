const btn = document.querySelector('.del_btn');
const ad = document.querySelector(".ad");
const list = document.querySelector(".list");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const list4 = document.querySelector(".list4");
const hide =  document.querySelector(".hide_list");
const hide1 =  document.querySelector(".hide_list1");
const hide2 =  document.querySelector(".hide_list2");
const hide3 =  document.querySelector(".hide_list3");
const hide4 =  document.querySelector(".hide_list4");


function adBtnClick(){
    ad.remove()
}
function listMouseOver(){
    hide.style.display = "flex";
    hide.style.flexDirection = "column";
    hide.style.position = "absolute";
    hide.style.top = "90px";
    hide.style.left = "110px";
    hide.style.zIndex = "1";
    list.style.borderBottom = "3px solid white";
}
function listMouseOver1(){
    hide1.style.display = "flex";
    hide1.style.flexDirection = "column";
    hide1.style.position = "absolute";
    hide1.style.top = "90px";
    hide1.style.left = "200px";
    hide1.style.zIndex = "1";
    list1.style.borderBottom = "3px solid white";
}
function listMouseOver2(){
    hide2.style.display = "flex";
    hide2.style.flexDirection = "column";
    hide2.style.position = "absolute";
    hide2.style.top = "90px";
    hide2.style.left = "280px";
    hide2.style.zIndex = "1";
    list2.style.borderBottom = "3px solid white";
}
function listMouseOver3(){
    hide3.style.display = "flex";
    hide3.style.flexDirection = "column";
    hide3.style.position = "absolute";
    hide3.style.top = "90px";
    hide3.style.right = "295px";
    hide3.style.zIndex = "1";
    list3.style.borderBottom = "3px solid white";
}

function listMouseOver4(){
    hide4.style.display = "flex";
    hide4.style.flexDirection = "column";
    hide4.style.position = "absolute";
    hide4.style.top = "90px";
    hide4.style.right = "90px";
    hide4.style.zIndex = "1";
    list4.style.borderBottom = "3px solid white";
}

function listMouseOut(){
    hide.style.display = "none";
    hide.style.border = "none";
    list.style.border = "none";
}
function listMouseOut1(){
    hide1.style.display = "none";
    hide1.style.border = "none";
    list1.style.border = "none";
}
function listMouseOut2(){
    hide2.style.display = "none";
    hide2.style.border = "none";
    list2.style.border = "none";
}

function listMouseOut3(){
    hide3.style.display = "none";
    hide3.style.border = "none";
    list3.style.border = "none";
}

function listMouseOut4(){
    hide4.style.display = "none";
    hide4.style.border = "none";
    list4.style.border = "none";
}

btn.addEventListener("click", adBtnClick);
list.addEventListener("mouseover", listMouseOver);
list1.addEventListener("mouseover", listMouseOver1);
list2.addEventListener("mouseover", listMouseOver2);
list3.addEventListener("mouseover", listMouseOver3);
list4.addEventListener("mouseover", listMouseOver4);
list.addEventListener("mouseout", listMouseOut);
list1.addEventListener("mouseout", listMouseOut1);
list2.addEventListener("mouseout", listMouseOut2);
list3.addEventListener("mouseout", listMouseOut3);
list4.addEventListener("mouseout", listMouseOut4);

