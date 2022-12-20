const rEstadoCarro = document.getElementById("rEstadoCarro");

const progress = document.getElementById("progress");

const kmAndados = document.getElementById("kmAndados");

const roda1 = document.getElementById("roda1");
const roda2 = document.getElementById("roda2");
const roda3 = document.getElementById("roda3");
const roda4 = document.getElementById("roda4");

const img = document.getElementById("img");

class Carro {
  constructor() {
    this.nome = "rangeRover";
    this.modelo = "evoque";
    this.cor = "branca";
    this.consumoDeGasolinaPorKmRodado = 1;
    this.combustivelAtual = 0;
    this.combustivelLimite = 100;
    this.estadoDoMotor = false;
    this.metrosRodados = 0;

    this.rodas = [
      { id: "roda1", state: 100, marca: "Goodyear" },
      { id: "roda2", state: 100, marca: "Goodyear" },
      { id: "roda3", state: 100, marca: "Goodyear" },
      { id: "roda4", state: 100, marca: "Goodyear" },
    ];
  }

  //Nova Versão ES6 - Rodas
  desgasteRodas = (km) => {
    this.rodas = this.rodas.map((rodaObj) => {
      var desgaste = Math.random() * km;
      var element = document.getElementById(rodaObj.id);
      console.log(element);
      element.value = rodaObj.state - desgaste;

      return { ...rodaObj, state: rodaObj.state - desgaste };
    });
    console.log(this.rodas);

    // var desgaste = this.rodas.map((value) => {
    //   return Math.random(value);
    // });
    // console.log(desgaste);
    // roda1.value = this.value - desgaste;
  };

  //Nova Versão ES6 - Ligar
  ligar = () => {
    if (this.estadoDoMotor == false) {
      console.log("Ligado!");
      alert("O veículo está ligado!");
      rEstadoCarro.innerText = "Ligado";
      rEstadoCarro.style.color = "green";
      this.estadoDoMotor = true;
    }
  };

  //Nova Versão ES6 - Desligar
  desligar = () => {
    if (this.estadoDoMotor == true) {
      console.log("Desligado!");
      alert("O veículo está desligado!");
      rEstadoCarro.innerText = "Desligado";
      rEstadoCarro.style.color = "red";
      this.estadoDoMotor = false;
    }
  };

  //Nova Versão ES6 - Abastecer
  abastecer = (litrosGasolina) => {
    if (this.estadoDoMotor == true) {
      console.warn(
        "Veículo ligado, por favor, desligar seu veículo para abastecer."
      );
      alert("Veículo ligado, por favor, desligar seu veículo para abastecer.");
    } else if (
      litrosGasolina + this.combustivelAtual >
      this.combustivelLimite
    ) {
      console.error("Acima do valor permitido para abastecimento.");
      alert("Acima do valor permitido para abastecimento.");
    } else {
      console.log(litrosGasolina + "L.");
      this.combustivelAtual += litrosGasolina;
      console.log("Combustível: " + this.combustivelAtual + "L.");
      progress.value = this.combustivelAtual;
    }
  };

  //Nova Versão ES6 - Andar
  andar = (km) => {
    if (this.estadoDoMotor == false) {
      console.error("Veículo desligado, por favor, ligar seu veículo.");
      alert("Veículo desligado, por favor, ligar seu veículo.");
    } else if (this.combustivelAtual < km) {
      console.error("Abastecer seu veículo para andar os km solicitados");
      alert("Abastecer seu veículo para andar os km solicitados");
    } else {
      console.log(km + "km rodados.");
      this.metrosRodados += km;
      this.combustivelAtual -= km;
      console.log("O total de km rodados é: " + this.metrosRodados);
      console.log("Nível de combustível: " + this.combustivelAtual);
      kmAndados.innerHTML = this.metrosRodados;
      progress.value = this.combustivelAtual;
    }
  };

  //Nova Versão ES6 - Pintar
  pintar = (corDesejada) => {
    if (this.estadoDoMotor == true) {
      console.error("Veículo Ligado, por favor, desligar seu veículo.");
      alert("Veículo Ligado, por favor, desligar seu veículo.");
    } else if (corDesejada == this.cor) {
      console.error("Cor atual");
      alert("Cor atual.");
    } else {
      this.cor = corDesejada;
      console.log("A cor do veículo é: " + this.cor);

      switch (corDesejada) {
        case "rosa":
          img.style.background = "pink";
          corCarro.innerText = "Rosa";
          corCarro.style.color = "pink";
          break; //para de verificar
        case "branco":
          img.style.background = "white";
          corCarro.innerText = "Branco";
          corCarro.style.color = "white";
          break; //para de verificar
        case "verde":
          img.style.background = "green";
          corCarro.innerText = "Verde";
          corCarro.style.color = "green";
          break; //para de verificar
        case "vermelho":
          img.style.background = "red";
          corCarro.innerText = "Vermelho";
          corCarro.style.color = "red";
          break; //para de verificar
        case "amarelo":
          img.style.background = "yellow";
          corCarro.innerText = "Amarelo";
          corCarro.style.color = "yellow";
          break; //para de verificar
        default:
          img.style.background = "gray";
          corCarro.innerText = "NaN";
      }
    }
  };
}

const carro = new Carro();

//Nova Versão ES6 - Ligar
document.getElementById("ligar").onclick = function () {
  carro.ligar();
};

//Nova Versão ES6 - Desligar
document.getElementById("desligar").onclick = function () {
  carro.desligar();
};

//Nova Versão ES6 - Abastecer
document.getElementById("abastecer").onclick = function () {
  const litrosGasolina = Number(prompt("Digite quantos litros irá colocar"));
  carro.abastecer(litrosGasolina);
};

//Nova Versão ES6 - Andar
document.getElementById("andar").onclick = function () {
  const km = Number(prompt("Digite quantos km quer andar"));
  carro.andar(km);
  carro.desgasteRodas(km);
};

//Nova Versão ES6 - Pintar
document.getElementById("cor").onclick = function () {
  const corDesejada = String(prompt("Digite qual cor você quer seu veículo"));
  carro.pintar(corDesejada);
};
