import React, {useState} from 'react';
import './detalhes.css';

import caminhao from '../../assets/frete.gif'
import loading from '../../assets/loading.gif'
import Logo from '../../assets/Logo.PNG';

import {Link} from 'react-router-dom'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton} from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import avengers from '../../assets/avengers.jpg'
import avengers2 from '../../assets/avengers2.jpg'

import insta from '../../assets/insta.png'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'
import cartoes from '../../assets/cartoes.png'

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Destaque6 from '../../Components/Mostruarios/Destaques/destaque6';
import Destaque4 from '../../Components/Mostruarios/Destaques/destaque4';
import Destaque5 from '../../Components/Mostruarios/Destaques/destaque5';

const Detalhes3 = () => {
    const [count, setCount] = useState(1);
    const [cepinput, setCepinput] = useState({
        cepinserido: '',
    });
    const [endereco, setEndereco] = useState({
        ceplogradouro: '',
        cepbairro: '',
        ceplocalidade: '',
        cepuf: '',
    });

    
    function Soma(){
        setCount(count + 1)
        
    }

    function Subtracao(){
        setCount(count - 1);
    

        if(count === 0) {
            alert('Valor do campo inválido');
        }
    }

    function selectedP() {
        document.querySelector('.tamanho-p').classList.add('test-btn')
        document.querySelector('.tamanho-m').classList.remove('test-btn')
        document.querySelector('.tamanho-g').classList.remove('test-btn')
        document.querySelector('.tamanho-gg').classList.remove('test-btn')
    }

    function selectedM() {
        document.querySelector('.tamanho-p').classList.remove('test-btn')
        document.querySelector('.tamanho-m').classList.add('test-btn')
        document.querySelector('.tamanho-g').classList.remove('test-btn')
        document.querySelector('.tamanho-gg').classList.remove('test-btn')
    }

    function selectedG() {
        document.querySelector('.tamanho-p').classList.remove('test-btn')
        document.querySelector('.tamanho-m').classList.remove('test-btn')
        document.querySelector('.tamanho-g').classList.add('test-btn')
        document.querySelector('.tamanho-gg').classList.remove('test-btn')
    }

    function selectedGG() {
        document.querySelector('.tamanho-p').classList.remove('test-btn')
        document.querySelector('.tamanho-m').classList.remove('test-btn')
        document.querySelector('.tamanho-g').classList.remove('test-btn')
        document.querySelector('.tamanho-gg').classList.add('test-btn')
    }

    function handleInputCEP(cepinserido) {
        setCepinput(cepinserido = document.getElementById("CEP_Correios").value);
        console.log(cepinserido)
    }

    function procuraCEP(){
        let Correios = require('node-correios');
        let correios = new Correios();

        correios.consultaCEP({ cep: cepinput})
        .then(result => {
            console.log(result)
            setEndereco({
                ceplogradouro: result.logradouro,
                cepbairro: result.bairro,
                ceplocalidade: result.localidade,
                cepuf: result.uf,
            })
            
        })
        .catch(error => {
            console.log(error);
        });
        }

    function apareceCEP(){
        setTimeout(function(){
            document.getElementById('apareceCEP').style.display="block"; 
        },1800);
    }


    function abreloadingDiv(){
        setTimeout( () => {
            document.getElementById('loadinginformation').style.display='block';
        }, 10) ;
    } 

    function fechaloadingDiv(){
        setTimeout( () => {
            document.getElementById('loadinginformation').style.display='none';
        }, 1800) ;
    } 

    function handleClick(){
        procuraCEP();
        abreloadingDiv();
        fechaloadingDiv();
        apareceCEP();
    }

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
                </div>
                <p className="indice"> Home / Camiseta Avengers </p>
                <h1> Camiseta Avengers </h1>
                <div className="galeria_produto">
                    <Carousel className="prod1">
                        <div>
                            <img src={avengers}/>
                        </div>
                        <div>
                            <img src={avengers2}/>
                        </div>
                    </Carousel>
                </div> 
                <div className="detalhes_prod">
                    <p> Marca: Exemplo </p>
                    <h4 className="precoantigo"> <strike> De: R$ 79,99 </strike> </h4>
                    <h2 className="precodetail"> R$59,99</h2>
                    <h3> OU 1X DE <span style={{color: 'crimson'}}> R$249,99 </span> SEM JUROS OU 6X DE <br/>
                    <span style={{color: 'crimson'}}> R$41,65 </span> SEM JUROS </h3>
                    <div className="quantidade">

                        <IconButton onClick={Soma}>
                                <ArrowDropUpIcon color="primary "className="soma"/>
                        </IconButton>
                        
                        <p> Quantidade: {count}  </p>

                        <IconButton onClick={Subtracao}>
                            <ArrowDropDownIcon color="primary "className="subtracao"/>
                        </IconButton>  

                    </div>
                    <div className="tamanho">
                        <h1> Selecione o tamanho </h1>
                    </div>          
                    <button type="button" id="P" name="p" className="tamanho-p" onClick={()=> selectedP() } > P </button>
                    <button type="button" id="M" name="M" className="tamanho-m" onClick={()=> selectedM() }> M </button>
                    <button type="button" id="G" name="G" className="tamanho-g" onClick={()=> selectedG() }> G </button>
                    <button type="button" id="GG" name="GG" className="tamanho-gg" onClick={()=> selectedGG() }> GG </button>

                    <button className="btnComprar"> Comprar </button>        
                </div>

                <div className="calcfrete">
                    <h1> Simulador de frete </h1>
                    <input type="text" id="CEP_Correios" className="inputCEP" onChange={handleInputCEP}></input>
                    <button className="calcCEP" onClick={() => handleClick()}> Calcular </button>
                    <div className="loading" id="loadinginformation">
                        <img src={loading} className="loadinggif"/>
                    </div>
                    
                        <div className="calcfretedetails" id="apareceCEP"> 
                            <h1> Endereço:</h1>
                            <p>{ endereco.ceplogradouro } -  { endereco.cepbairro } - { endereco.ceplocalidade } - {endereco.cepuf}</p> 
                            <h1> Entrega </h1>
                            <p> Sedex 10 </p>
                            <h1> Prazo </h1>
                            <p> 10 dias </p>
                            <h1> Frete </h1>
                            <p> R$20 reais </p>
                        </div>  
                    </div>

                <div className="informacoes">
                    <h1> Descrição Geral </h1>
                    <table border="1" className="descricao">
                        <tr className="itemtable">
                            <th> Item </th>
                            <td className="celula"> Camiseta Avengers </td>                           
                        </tr>
                        <tr className="itemtable">
                            <th> Material </th>
                            <td className="celula"> 100% Algodão </td>                           
                        </tr>
                        <tr className="itemtable">
                            <th> Dimensões </th>
                            <td className="celula"> P/M/G/GG </td>                           
                        </tr>
                        <tr className="itemtable">
                            <th> Peso </th>
                            <td className="celula"> 150 gramas </td>                          
                        </tr>
                        <tr className="itemtable">
                            <th> Entrega </th>
                            <td className="celula"> Pronta entrega </td>                          
                        </tr>
                    </table>
                </div>
                <div className="interesse">
                    <h1> Quem viu este produto, se interessou por </h1>
                </div>
    
                    <Destaque4/>
                    <Destaque5/>
                    <Destaque6/>
                
                <div className="footer">
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
            <div/>   
        </div>
    )
}

export default Detalhes3;