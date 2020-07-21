import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Link} from 'react-router-dom'

import { Alert} from '@material-ui/lab';

import './destaques.css'

import avengers from '../../../assets/avengers.jpg'
import avengers2 from '../../../assets/avengers2.jpg'


const Destaque3 = () => {

    function mostraAlert(){
        document.getElementById('alertcarrinho3').style.display='block'
    }   

    return (
        <div className="conteudo3">
                <Carousel className="destaques3">
                    <div>
                        <img src={avengers}/>
                    </div>
                    <div>
                        <img src={avengers2}/>
                    </div>
                    
                 </Carousel>
            <Link to="/detalhes3">
                <h1> Camiseta Avengers </h1>
            </Link>
            <p className="precoantigo"> <strike> De: R$79,99 </strike> </p>
            <h2 className="preco"> Por: R$59,99</h2>
            <h3> OU 1X DE <span style={{color: 'crimson'}}> R$59,99 </span> SEM JUROS OU 6X DE <br/>
            <span style={{color: 'crimson'}}> R$9,99 </span> SEM JUROS </h3>
            <button className="Comprar"> Comprar </button>
            <button className="Cart" onClick={mostraAlert}><ShoppingCartIcon/></button>
                <Alert id="alertcarrinho3" onClose={() => {
                    document.getElementById('alertcarrinho3').style.display="none"
                }}> Produto adicionado no carrinho com sucesso!</Alert>
        </div>
    )
}

export default Destaque3;