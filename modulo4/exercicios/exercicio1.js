var idade = 15;
var confere = idade;


function checaIdade(confere) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!confere) {
                throw new Error("Deu erro");
            }
            resolve("Promise resolvida");
        }, 1000);
    });
}
checaIdade(confere)
    .then(resposta => {
        if(idade < 18){
            console.log("Menor que 18");
        }else{
            console.log("Maior que 18");
        } 
    })
    .catch(erro => {
        console.log("erro");
    });
    /*
   checaIdade(confere)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });*/
    //Crie uma função que recebe a idade de um usuário e retorna uma 
    //Promise que depois de 2 segundos retornará se usuário é maior
    // ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o 
    //resultado deve cair no .then, caso contrário, no .catch
 
