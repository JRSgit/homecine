import React from 'react';

import Titulo from './titulo';
import logo from '../logojrs.png';
import bg1 from '../DVing.png';
import imp from '../IMPUROS.png'
import doc from '../doc.jpg';
import spt from '../spt.jpg';
import des from '../des.jpg';
import adul from '../adul.jpg'
import './style.css';

function Main () {
  return(
  <div>
    <header>
          <a href="" className="logo"><img src={logo}/></a>
          <a className="toggle">Menu</a>
        <ul className="active">
          <li><a href="">Home</a></li>
          <li><a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">Conheça</a></li>
        </ul>
      </header>
      < Titulo />
      <main className="container">
        <div className="box">
          <div className="imgBox">
            <img src={bg1}/>
          </div>
          <div className="details">
            <div className="content">
              <h2>Filmes</h2>
              <a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">
                <p>Você gosta de assistir filmes?
                  Sabe aquele monento que você chegar em casa e esta cansado da programação
                  normal, aqui você terá todos eu disse todos os canais de filmes com programação 24h
                  só de filme para você assitir a hora quer quiser o que acha? bastar clicar!
                </p>
                </a>
            </div>
          </div>
        </div>
        <div className="box"> <div className="imgBox">
            <img src={imp}/>
          </div>
          <div className="details">
            <div className="content">
              <a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">
                <h2>Serie</h2>
                  <p>Você curte series? Nossa senhora então você esta no local certo
                    você terá uma lista que de serie ela entende, são tantas series e a cada dia 
                    adicionamos mais, todoas as series famosas e de grande sucesso estão aqui, assista até dizer chega.
                    quer provar? Então Clique!!!
                  </p>
              </a>
            </div>
          </div></div>
        <div className="box"> <div className="imgBox">
            <img src={spt}/>
          </div>
          <div className="details">
            <div className="content">
              <h2>Esportes</h2>
              <a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">
                <p>
                Nossa!!! Se você é um fã de esporte, meu Deus.. então você não
                 pode perder essa oportunidade, temos todos os canais de esporte
                 disponíveis pra você, assista os campeonatos regionais, 
                 estaduais do Brasil e do mundo. Diz pra min o que você 
                acha disso?.. só vendo pra cré não é? Então clique.
                </p>
              </a>  
            </div>
          </div></div>
        <div className="box"> <div className="imgBox">
            <img src={des}/>
          </div>
          <div className="details">
            <div className="content">
              <a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">
              <h2>Desenhos</h2>
                <p>
                Você tem crianças em casa? Então não se preocupe temos  todos os
                canais de desenhos que você conhece e até os que você não 
                conhece! Demais em?.. deixe suas crianças a vontade assistindo
                 os desenhos mais tops do brasil e do mundo. Duvida? Ahhh que
                  pena!! CLIQUE Pra VÊ !!:)
                </p>
              </a>  
            </div>
          </div></div>
        <div className="box"> <div className="imgBox">
            <img src={doc}/>
          </div>
          <div className="details">
            <div className="content">
              <a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">
                <h2>Documentários</h2>
                  <p>
                  Quem descobriu o Brasil? Haha te pequei em?..kkk.
                   Se você gosta de conhecimento, aqui é o seu lugar,
                   temos a um clique de distancia de você todos os canais
                    de Documentários do mundo, você seus filhos, sua família 
                    ficarão informados dos fatos passados e dos fatos projetados 
                    para o futuro com esses canais. O que esta esperando? 
                    CLIQUE AI VAI!! 
                  </p>
              </a>
            </div>
          </div></div>
        <div className="box"> <div className="imgBox">
            <img src={adul}/>
          </div>
          <div className="details">
            <div className="content">
              <a target="blank" href="https://www.meuteste.me/c4c816b37cdd8af70647d4d9093795cf-a8e16ad84e175e7ce23d123adfc03d54
">
              <h2>Adultos</h2>
                <p>
                Agora o bicho vai pegar!! Você curte uns filmes mais picantes? Uma programação mais animada?
                 Então você acabou de achar o Paraíso...Todos os canais Adultos 
                 com a programação picante o dia todo..Se você vai aguentar..?
                  Não sei mais eles estarão a sua espera..
                  KKK...CLIQUE e se segura!!..kkkk.
                </p>
             </a>
            </div>
          </div>
          </div>
    </main>
  </div>

  )

}



export default Main;