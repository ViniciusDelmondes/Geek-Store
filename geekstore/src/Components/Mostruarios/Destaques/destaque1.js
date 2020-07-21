import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {Link} from 'react-router-dom'

import { Alert} from '@material-ui/lab';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './destaques.css'

import thelastofus from '../../../assets/destaque1.jpg'
import thelastofus2 from '../../../assets/destaque2.PNG'

const Destaque1 = () => {

    function mostraAlert(){
            document.getElementById('alertcarrinho').style.display='block'
    }

   
    

    return (
        <div className="conteudo">
            <Carousel className="destaques">
                
                <div>
                    <img src={thelastofus}/>
                </div>
                <div>
                    <img src={thelastofus2}/>
                </div>
            </Carousel>
                <Link to="/detalhes1">
                    <h1> Camiseta The Last Of us part II </h1>
                </Link>
                <p className="precoantigo"> <strike> De: R$89,99 </strike> </p>
                <h2 className="preco"> Por: R$69,99</h2>
                <h3> OU 1X DE <span style={{color: 'crimson'}}> R$69,99 </span> SEM JUROS OU 6X DE <br/>
                <span style={{color: 'crimson'}}> R$11,65 </span> SEM JUROS </h3>
                <button className="Comprar"> Comprar </button>
                <button className="Cart" onClick={mostraAlert}><ShoppingCartIcon/></button>
                <Alert id="alertcarrinho" onClose={() => {
                    document.getElementById('alertcarrinho').style.display="none"
                }}> Produto adicionado no carrinho com sucesso!</Alert>
                
        </div>
    )
}

export default Destaque1;