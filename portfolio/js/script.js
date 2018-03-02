function openNav() {

    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        // adiciona menujs à classe
        x.className += "menujs";
        // altera qualquer coisa que estiver no titulo do html > ... < neste caso para "X"
        document.getElementById("threeline-icon").innerHTML = "&Cross;";
    } else {
        // retira menujs do nome
        x.className = "navigation";
        // altera qualquer coisa que estiver no titulo do html > ... < neste caso para o hamburger
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }

}
