import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Link} from 'react-router-dom'

import { Alert} from '@material-ui/lab';

import './destaques.css'

import ellie from '../../../assets/ellie.png'
import ellie2 from '../../../assets/ellie2.png'

const Destaque4 = () => {

    function mostraAlert(){
        document.getElementById('alertcarrinho4').style.display='block'
    }    

    return (
        <div className="conteudo4">
                <Carousel className="destaques4">
                    <div>
                        <img src={ellie2}/>
                    </div>
                    <div>
                        <img src={ellie}/>
                    </div>
                 </Carousel>
            <Link to="/detalhes4">
                <h1> Estátua Ellie Colecionador </h1>
            </Link>
            <p className="precoantigo"> <strike> De: R$499,99 </strike> </p>
            <h2 className="preco"> Por: R$249,99</h2>
            <h3> OU 1X DE <span style={{color: 'crimson'}}> R$249,99 </span> SEM JUROS OU 6X DE <br/>
            <span style={{color: 'crimson'}}> R$41,65 </span> SEM JUROS </h3>
            <button className="Comprar"> Comprar </button>
            <button className="Cart" onClick={mostraAlert}><ShoppingCartIcon/></button>
            <Alert id="alertcarrinho4" onClose={() => {
                    document.getElementById('alertcarrinho4').style.display="none"
                }}> Produto adicionado no carrinho com sucesso!</Alert>
        </div>
    )
}

export default Destaque4;