/*
if (experience > 0 && experience <= 1000) {
    console.log("A força do Steve Rogers é " + experience + "/FERRO, ele ainda não se tornou o Capitão América")

} else if (experience === 1001 || experience <= 2000) {
    console.log("Após seu primeiro dia de treinamento no exércio americano, seu XP aumentou até 2000 lhe deixando com poder BRONZE")

} else if (experience === 2001 || experience <= 6000) {
    console.log("Depois da primeira semana de treinamentos ganhou mais força, seu poder aumentou para: " + experience + " e seu XP subiu para PRATA")

} else if (experience === 6001 || experience <= 7000) {
    console.log("Mais uma semana e seu XP aumentou para OURO")

} else if (experience === 7001 || experience <= 8000) {
    console.log("mais alguns meses e ele se tornou PLATINA")

} else if (experience === 8001 || experience <= 9000) {
    console.log("quase um ano no exército e ele ja era ASCENDENTE")

} else if (experience === 9001 || experience <= 10000) {
    console.log("Durante alguns testes em laboratório, o teste de melhor resultado o tornou IMORTAL. " + experience + " de XP tornando o homem mais forte do exército")

} else {
    console.log("Depois de 70 anos então ele se tornou o Capitão América, seu XP era RADIANTE com experiência de: " + experience + ".")
}
*/

const heroes = {
  cap: {
    name: "Capitão América",
    xp: 10001,
    image: "res/images/capitao-america.png",
    desc: "Depois de 70 anos então ele se tornou o Capitão América...",
  },
  iron: {
    name: "Homem de Ferro",
    xp: 7500,
    image: "res/images/homem-de-ferro.png",
    desc: "Tony Stark criou sua primeira armadura numa caverna e foi evoluindo...",
  },
  thor: {
    name: "Thor",
    xp: 8500,
    image: "res/images/thor.png",
    desc: "O Deus do Trovão nasceu com poder, mas amadureceu ao longo das batalhas...",
  }
};

// função que retorna o nível com base no XP
function getLevel(xp) {
  if (xp <= 1000) return "FERRO";
  else if (xp <= 2000) return "BRONZE";
  else if (xp <= 6000) return "PRATA";
  else if (xp <= 7000) return "OURO";
  else if (xp <= 8000) return "PLATINA";
  else if (xp <= 9000) return "ASCENDENTE";
  else if (xp <= 10000) return "IMORTAL";
  else return "RADIANTE";
}

// troca o conteúdo da tela com base no herói selecionado
function atualizarHeroi(id) {
  const hero = heroes[id];
  document.getElementById("hero-name").textContent = hero.name;
  document.getElementById("hero-img").src = hero.image;
  document.getElementById("hero-xp").textContent = hero.xp;
  document.getElementById("hero-level").textContent = getLevel(hero.xp);
  document.getElementById("hero-desc").textContent = hero.desc;
}

// evento para quando mudar o select
document.getElementById("hero").addEventListener("change", (e) => {
  atualizarHeroi(e.target.value);
});

// inicializa com o primeiro herói
atualizarHeroi("cap");
