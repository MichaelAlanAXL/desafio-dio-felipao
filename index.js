// Desafio DIO Felipão

// Criando variáveis para armazenar nome do Herói e sua quantidade de XP
const name = "Capitain American"
let experience = 10001 // Substitua com valores somente numéricos entre 0 e ∞

//início de toda a verificação usando else if
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
