import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent {

  public aberto:boolean;

  constructor(
  ) {
    this.aberto = false;
  }

  public CriarCadastro(): void {
    console.log("teste1")

  if (this.aberto == false) {
    console.log("teste2")
    // Crie um elemento div para representar o retângulo

    // Aplique estilos ao retângulo, incluindo posição
    const retangulo4 = document.createElement("div");
    retangulo4.style.width = "1362px";
    retangulo4.style.height = "487px";
    retangulo4.style.backgroundColor = "white";
    retangulo4.style.border = "2px solid black";
    retangulo4.style.position = "absolute"; // Defina a posição absoluta
    retangulo4.style.top = "450px"; // Ajuste conforme necessário, para posicioná-lo abaixo dos botões
    retangulo4.style.left = "250px"; // Ajuste conforme necessário

    const distanciaVertical = 55; // Distância vertical entre os textos

    // Crie um elemento de parágrafo para o texto "Dados de Cadastro:"
    const textoDadosCadastro = document.createElement("p");
    textoDadosCadastro.innerText = "Dados de cadastro:";
    textoDadosCadastro.style.fontSize = "30px"; // Tamanho da fonte
    textoDadosCadastro.style.fontWeight = "bold"; // Deixa o texto em negrito
    textoDadosCadastro.style.fontFamily = "arial";
    textoDadosCadastro.style.position = "absolute"; // Defina a posição
    textoDadosCadastro.style.textAlign = "left"; // Alinhar o texto ao centro
    textoDadosCadastro.style.top = "-10px"; // Ajuste conforme necessário
    textoDadosCadastro.style.left = "20px";

    // Crie um elemento de parágrafo para o texto CPF
    const textoCPF = document.createElement("p");
    textoCPF.innerText = "CPF:";
    textoCPF.style.fontFamily = "arial";
    textoCPF.style.fontSize = "30px"; // Tamanho da fonte do texto
    textoCPF.style.textAlign = "left"; // Alinhar o texto ao centro
    textoCPF.style.position = "absolute"; // Defina a posição absoluta
    textoCPF.style.top = `${10 + distanciaVertical}px`; // Calcula a posição com base na distância vertical
    textoCPF.style.left = "20px";

    // Texto Nome
    const textoNome = document.createElement("p");
    textoNome.innerText = "Nome:";
    textoNome.style.fontFamily = "arial";
    textoNome.style.fontSize = "30px";
    textoNome.style.position = "absolute"; // Defina a posição absoluta
    textoNome.style.top = `${10 + 2 * distanciaVertical}px`; // Calcula a posição com base na distância vertical
    textoNome.style.left = "20px";

    this.aberto = true;
  }
}
 public exibirPopupSair(): void {
  this.aberto = false;
 }
}
