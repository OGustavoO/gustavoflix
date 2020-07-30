import React from 'react';
import Menu from './components/Menu';
import dadosInicial from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>

      <BannerMain 
      videoTitle={dadosInicial.categorias[0].videos[0].titulo}
      url={dadosInicial.categorias[0].videos[0].url}
      videoDescription={"O que é Front-end? Trabalhando na área"}
      />

      <Carousel ignoreFirstVideo category={dadosInicial.categorias[0]}/>

      <Carousel ignoreFirstVideo category={dadosInicial.categorias[1]}/>

      <Carousel ignoreFirstVideo category={dadosInicial.categorias[2]}/>

      <Carousel ignoreFirstVideo category={dadosInicial.categorias[3]}/>

      <Carousel ignoreFirstVideo category={dadosInicial.categorias[4]}/>

      <Carousel ignoreFirstVideo category={dadosInicial.categorias[5]}/>

      <Footer />

    </div>
  );
}

export default App;
