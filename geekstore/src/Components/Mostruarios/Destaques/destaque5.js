import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Link} from 'react-router-dom'

import { Alert} from '@material-ui/lab';

import './destaques.css'

import the100 from '../../../assets/the100.png'
import the1001 from '../../../assets/the1001.jpg'

const Destaque5 = () => {

    function mostraAlert(){
        document.getElementById('alertcarrinho5').style.display='block'
    }    

    return (
        <div className="conteudo5">
                <Carousel className="destaques5">
                    <div>
                        <img src={the100}/>
                    </div>
                    <div>
                        <img src={the1001}/>
                    </div>
                 </Carousel>
            <Link to="/detalhes5">
                <h1> Funky Pop The 100 </h1>
            </Link>
            <p className="precoantigo"> <strike> De: R$109,99 </strike> </p>
            <h2 className="preco"> Por: R$89,99</h2>
            <h3> OU 1X DE <span style={{color: 'crimson'}}> R$89,99 </span> SEM JUROS OU 6X DE <br/>
            <span style={{color: 'crimson'}}> R$14,99 </span> SEM JUROS </h3>
            <button className="Comprar"> Comprar </button>
            <button className="Cart" onClick={mostraAlert}><ShoppingCartIcon/></button>
            <Alert id="alertcarrinho5" onClose={() => {
                    document.getElementById('alertcarrinho5').style.display="none"
                }}> Produto adicionado no carrinho com sucesso!</Alert>
        </div>
    )
}

export default Destaque5;