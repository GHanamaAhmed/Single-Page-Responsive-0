let menu = document.getElementsByClassName('menu')
let menu2 = document.getElementsByClassName('menu2')
let toggle=false
menu[0].addEventListener("click", () => {
        if(!toggle){
                menu[0].innerHTML = '<button class="menu"><img src="New folder/menu-button-of-three-horizontal-lines.png" alt="" class="menuicon"></button>' + '<ul class="lis2" ><li>Tutorials</li><li>Reference</li><li>exercice</li><li>videos</li></ul>'
                menu2[0].classList.add("lis2")
                toggle=true
        }else{
                menu[0].innerHTML = '<button class="menu"><img src="New folder/menu-button-of-three-horizontal-lines.png" alt="" class="menuicon"></button>'
                menu2[0].classList.remove("lis2")
                toggle=false
        }
});
