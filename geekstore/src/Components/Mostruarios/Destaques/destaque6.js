import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Link} from 'react-router-dom'

import { Alert} from '@material-ui/lab';

import './destaques.css'

import superman from '../../../assets/superman.jpg'
import superman2 from '../../../assets/superman2.png'


const Destaque6 = () => {

    function mostraAlert(){
        document.getElementById('alertcarrinho6').style.display='block'
    }   

    return (
        <div className="conteudo6">
                <Carousel className="destaques6">
                    <div>
                        <img src={superman}/>
                    </div>
                    <div>
                        <img src={superman2}/>
                    </div>
                    
                 </Carousel>
            <Link to="/detalhes6">
                <h1> Xícara Superman Colecionador </h1>
            </Link>
            <p className="precoantigo"> <strike> De: R$35,99 </strike> </p>
            <h2 className="preco"> Por: R$25,99</h2>
            <h3> OU 1X DE <span style={{color: 'crimson'}}> R$25,99 </span> SEM JUROS OU 6X DE <br/>
            <span style={{color: 'crimson'}}> R$4,33 </span> SEM JUROS </h3>
            <button className="Comprar"> Comprar </button>
            <button className="Cart" onClick={mostraAlert}><ShoppingCartIcon/></button>
            <Alert id="alertcarrinho6" onClose={() => {
                    document.getElementById('alertcarrinho6').style.display="none"
                }}> Produto adicionado no carrinho com sucesso!</Alert>
            
        </div>
    )
}

export default Destaque6;