 function abrirmenu() {
    let BarraMenuAberto = document.getElementById('barra-menu');

    if (BarraMenuAberto.style.width == "0px") {
        BarraMenuAberto.style.width = "180px";
    } else {
        BarraMenuAberto.style.width = "0px";
    }
}

function exibirCurriculo() {
    window.open('https://github.com/andreheller87/PortFolio/blob/main/Curriculo.pdf', '_blank');
 
}

function exibirHardSkills() {
    var elementoHardSkills = document.getElementById("HardSkill");
    elementoHardSkills.scrollIntoView({ behavior: 'smooth' });
}

function exibirGitLink() {
    var elementoHardSkills = document.getElementById("gitlink");
    elementoHardSkills.scrollIntoView({ behavior: 'smooth' });
}

function whats() {
    var url = "https://whatsa.me/5547992847590/?t=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio,%20gostaria%20de%20me%20conectar!";
    window.open(url, "_blank");
}


