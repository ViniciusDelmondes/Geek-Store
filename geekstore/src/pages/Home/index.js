import React from 'react';
import './styles.css';
import Logo from '../../assets/Logo.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Link} from 'react-router-dom'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton} from '@material-ui/core';


import slide01 from '../../assets/slide01.png'
import slide02 from '../../assets/slide02.JPG'
import slide04 from '../../assets/slide04.jpg'
import sonic from '../../assets/sonic.gif'
import pikachu from '../../assets/pikachu.gif'
import funko from '../../assets/slide.png'
import mascaras from '../../assets/mascaras.jpg'
import caminhao from '../../assets/frete.gif'

import bottom1 from '../../assets/bottom1.JPG'
import bottom2 from '../../assets/bottom2.JPG'
import bottom3 from '../../assets/bottom3.JPG'

import insta from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import cartoes from '../../assets/cartoes.png'

import Destaque1 from '../../Components/Mostruarios/Destaques/destaque1'
import Destaque2 from '../../Components/Mostruarios/Destaques/destaque2';
import Destaque3 from '../../Components/Mostruarios/Destaques/destaque3';
import Destaque4 from '../../Components/Mostruarios/Destaques/destaque4';
import Destaque5 from '../../Components/Mostruarios/Destaques/destaque5';
import Destaque6 from '../../Components/Mostruarios/Destaques/destaque6';

const Home = () => { 
 
    return ( 
        <div className="page-home">
            <div className="content">
                <div className="entrega">
                    <div className="fretenormal">
                        <img src={caminhao} className="frete"/>
                        <h2> Entregando normalmente! </h2>
                    </div>
                    <h1> Utilize o cupom: <span style={{color: 'yellow'}}>  #FIQUEEMCASA </span> e ganhe até 20% de desconto em qualquer produto + frete grátis nas compras acima de F$200,00.</h1>
                </div>
                <header className="cabecalho">
                    <nav className="menu">
                        <ul>
                            <li> <a href="#"> Jogos </a> 
                                <ul>
                                    <li> <a>  PS4 </a> </li>  
                                    <li> <a> PS3 </a></li>  
                                </ul>
                            </li>
                            <li> <a href="#"> Vestuário </a> 
                                <ul>    
                                    <li> <a href="#"> Masculino </a></li>
                                    <li> <a href="#"> Feminino </a></li>
                                    <li> <a href="#"> Infatil </a></li>
                                </ul>
                            </li>
                            <li> <a href="#"> Colecionáveis </a> 
                                <ul>
                                    <li> <a href="#"> Presentes </a></li>
                                    <li> <a href="#"> Funko Pop </a></li>
                                </ul>
                            </li>
                        </ul>
                        <img src={Logo} className="Logo"/>
                        <input type="text" name="help" id="help" placeholder="O que você está procurando?"/> 
                        <IconButton>
                            <ShoppingCartIcon color="secondary" className="btncompra"/>
                        </IconButton>
                        <IconButton>
                            <AccountCircleIcon color="secondary" className="btnuser"/>
                        </IconButton>
                    </nav>
                </header>

                <div className="slides">
                    <section className="galeria">
                        <img src={slide01} className="foto"/>
                        <img src={slide02} className="foto"/>
                        <img src={slide04} className="foto"/>
                        <img src={funko} className="foto"/>
                    </section>

                    <img src={bottom1} className="bottom1"/>
                    <img src={bottom2} className="bottom2"/> 
                    <img src={bottom3} className="bottom3"/>
                </div>

                <div className="Destaque">
                    <img src={sonic} className="sonic"/>
                    <h1> Destaques </h1>
                </div>

                    <Destaque1/> 
                    <Destaque2/>
                    <Destaque3/>
                
                <div className="fundo">
                    <img src={pikachu} className="pikachu"/>
                    <h1> Colecionáveis </h1>
                </div>

                    <Destaque4/> 
                    <Destaque5/>
                    <Destaque6/>  

                <div className="mascara">
                    <img src={mascaras} className="mascaras" />
                </div>

                <div className="footerhome">
                    <img src={Logo} className="logo2"/>
                    <h2> Lojas </h2>
                    <p> Rua exemplo, teste, numero XX - Pinheiros - SP</p>
                    <p> Avenida exemplo2, testando, numero XXX - Paulista - SP</p>
                    <p> Rua exemplo, teste, numero XX - Consolação - SP</p>
                    <h3> Siga nossas redes!</h3>
                    <img src={insta} className="insta"/>
                    <img src={youtube} className="youtube" />
                    <img src={facebook} className="facebook" />
                    <h1> Cartões </h1>
                    <img src={cartoes} className="cartoes" />
                </div>
            </div>
        </div>
    )
} 

export default Home;