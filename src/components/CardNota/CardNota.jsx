import React, { Component } from "react";
import "./estilo.css";
//import deleteSVG from "../../assets/img/delete.svg" dessa forma para importar sera via tag img
import {ReactComponent as DeleteSVG } from "../../assets/img/delete.svg" //dessa forma a importação ocorre via componente do react, para essa importação funcionar, o projeto precisa ser criado via create-react-app, por conta do SVGr


class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
          {/*Essa é outra forma de trazer a imagem via tag <img src={deleteSVG} />*/}
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;