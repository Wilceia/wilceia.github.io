function escolha() {
    var amor = "";
    while (amor != 1 && amor != 2) {
        amor = prompt("Você está solteiro? \n 1-Sim \n 2-Não");
        if (amor == 1) {
            window.location.href = "/Users/appleboy/Desktop/lovesim.html";
        } else if (amor == 2) {
            window.location.href = "/Users/appleboy/Desktop/nao.html";
        } else {
            alert("Escolha somente 1 ou 2 ?");
        }
    }
}