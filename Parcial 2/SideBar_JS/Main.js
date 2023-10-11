document.getElementById("btn").addEventListener("click", function(){
        console.log("Click en el boton");
        document.getElementById("SideBar").classList.toggle("sideBarEscondido");
        document.getElementById("Content").classList.toggle("contentAlCien");
    })