function cadastrar(){
    var nome = document.getElementById("nome").value;
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)
    let media;
    let situaçao;

    media = (n1+n2+n3)/3;
    console.log("|A média do", nome, "é de: ", media);
    if(media >= 50){
        console.log("Aprovado")
    }else {
        console.log("Reprovado")
tabela_resultado.innerHTML +=
<tbody>
<tr>
</td>
</tbody>+
