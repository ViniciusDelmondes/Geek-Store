import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Link} from 'react-router-dom'

import { Alert} from '@material-ui/lab';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './destaques.css'

import game from '../../../assets/game.jpg'


const Destaque2 = () => {

    function mostraAlert(){
        document.getElementById('alertcarrinho2').style.display='block'
    }   

    return (
        <div className="conteudo2">
                <Carousel className="destaques2">
                    <div>
                        <img src={game}/>
                    </div>
                 </Carousel>
            <Link to="/detalhes2">
                <h1> The Last Of us part II PS4 </h1>
            </Link>
            <p className="precoantigo"> <strike> De: R$329,99 </strike> </p>
            <h2 className="preco"> Por: R$249,99</h2>
            <h3> OU 1X DE <span style={{color: 'crimson'}}> R$249,99 </span> SEM JUROS OU 6X DE <br/>
            <span style={{color: 'crimson'}}> R$41,65 </span> SEM JUROS </h3>
            <button className="Comprar"> Comprar </button>
            <button className="Cart" onClick={mostraAlert}><ShoppingCartIcon/></button>
            <Alert id="alertcarrinho2" onClose={() => {
                    document.getElementById('alertcarrinho2').style.display="none"
                }}> Produto adicionado no carrinho com sucesso!</Alert>
        </div>
    )
}

export default Destaque2;