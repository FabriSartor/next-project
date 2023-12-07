import './globals.css'
import SliderStart from './components/SliderStart/SliderStart';
import SliderImage from './components/SliderImage/SliderImage';
import PaymentMethods from './components/home/PaymentMethods/PaymentMethods';
import Separator from './Shader componen/Separator/Separator';
import TitulosHome from './components/TitulosHome/TitulosHome';
import Nivel6 from './components/home/Nivel6/Nivel6';
import SliderCategorias from './components/SliderCategorias/SliderCategorias';
import Ofertas from './components/Ofertas/Ofertas';
import MercadoPuntos from './components/MercadoPuntos/MercadoPuntos';
import Moulinex from './components/home/Moulinex/Moulinex';
import MercadoPlay from './components/home/MercadoPlay/MercadoPlay';
import MaxWidth from './Shader componen/MaxWidth/MaxWidth';
const paymentMethods = require('./mocks/metodos-pago.json');

export default function Home() {

  return (
    <div>
      
      <SliderImage />
      <MaxWidth>
        <Separator>
          <PaymentMethods {...paymentMethods}/>
        </Separator>
      </MaxWidth>

        <Separator>
          <MaxWidth>
            <TitulosHome titulosHome="Ofertas" tituloLink="Ver todas" link="https://www.mercadolibre.com.ar/ofertas#c_id=/home/promotions-recommendations&c_uid=41906862-5d1e-4219-bbde-1cafbba6e029"/>
          </MaxWidth>
          <SliderStart/>
        </Separator>

      <MaxWidth>
        <Separator>
          <Nivel6 />
        </Separator>

        <Separator>
          <MercadoPlay />
        </Separator>

        <Separator>
          <TitulosHome titulosHome="Beneficios de Mercado Puntos" tituloLink="Ver todos los beneficios" link="https://www.mercadolibre.com.ar/mercado-puntos#origin=onboarding"/>
          <MercadoPuntos />
          <Moulinex />
          <Ofertas />
        </Separator>
        
        <Separator>
          <TitulosHome titulosHome="Categorías Populares"/>
        </Separator> 

      </MaxWidth>
      
        <SliderCategorias />  
          
    </div>
  );
}
