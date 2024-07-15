import React from 'react'
import { Info } from './Info'
import { BlogCard } from './BlogCard'

export default function Blog() {
    return (
        <div className="container w-full mx-auto py-10 md:py-24">
          <div className="flex flex-wrap justify-center">
            {Info.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id}
                title={item.title}
                descResumida={item.descResumen}
                urlImg={item.urlImg}
                Detalle={item.detalle}
              />
            ))}
          </div>
        </div>
    );
}

/**
 * quiero que crees tres componentes jsx, los estilos van a ser todos con tailwind y tienes que hacerla para que sea responsive

En el componente BlogCard.jsx :

recibira por parametro (id,title,descResumida,UrlImg,Detalle)

creara una carta con esos datos que voy a mencionar, organizandolos de ariba a abajo en la carta:

imagen = UrlImg 

titulo = title

elemento div que contenga dos links: uno que diga "Articulo" y otro diga "Vero Cruz" , ambos redireccionando al Blog.jsx

desc = desResumida

link que diga "leer mas" 

los siguientes elemento (imagen,titulo,link"leer mas ") van a tener un link que va a redirigir a DetalleCardr pasandole por parametro ( title, Detalle ) y agregandole al Link de DetalleCard el parametro id?=id

tambien debes agregarle un efecto a la imagen para que si esta en la pc y haga hover , se vera como un pequeño zoom en la imagen , y si esta en el tlf debe de hacerce el zoom de manera automatica cada que vaya bajando y aparezca la carta

En el componente Blog.jsx:

va a importart toda la informacion del componente "./Info.jsx", este componente exporta una constante llamada info. ya te pege como estara guardada la informacion 

en este componente vamos a crear un BlogCard por cada elemento del array y le pasaremos todo lo que pide el componente

En el componente Detalle.jsx

este componente recibira por parametro los siguientes datos (title , Detalle)

apenas se abra la pagina, guardaras en un estalo local el titulo del servicio dependiendo que id este en el parametro del link. si es el numero 1 sera "lifting de pestañas", si es el 2 sera "extensiones de pestañas" y si es el 3 sera "pestañas tecnológicas"

te dire como iras agregando la informacion de arriba a abajo (la pagina tendra un ancho menor al de la pantalla escepto la imagen):

caurusel de imagenes = Detalle.imagenes.

ocupara toda la parte superior de la pagina, siendo del ancho de la pantalla, se mostrara un caurusel de imagenes que se van cambiando de manera automatica una por una. Aqui usas la libreria de react-slick que ya la tengo instalada

titulo = title

descripcion = Detalle.descResumen

de aqui en adelante vas a tener que recorrer el Detalle.temas y por cada tema vas a crear lo siguiente :

un componente div que tendra visible inicialmente en el lado izquierdo el titulo (tema.title) , al lado derecho abra un triangulo que apunte hacia abajo y debajo de estas dos cosas se encontrara una linea del ancho de la pagina

al precionar el titlo o el triangulo hara lo siguiente (si no esta abierto):

rotara el triangulo para que apunte hacia arriba con un efecto agradable 

desapareceras la linea que estaba debajo 

la informacion va a aparecer con un efecto agradable, como si estuviera bajando desde la altura del titulo y pasando por debajo de el

aparecera de bajo del titulo la informacion que no este en null, para eso debe de checkar cada dato, si no estan null debe de recorrer cada uno y para estos datos va a crear distintas cosas... 

tema.desc debe de crear un parrafo por cada elemento

tema.listado debe de crear una lista ul y por cada elemento agregarle un li

tema.pasos debe de crear un subtitulo que diga "Pasos:" y crear una lista ol y por cada elemento crea un li

tema.imagenes debes de chequear cada imagen para ver si tiene imagen.title o imagen.desc. Despues de queckear cual no es null, agrega imagen.url y debajo las que no sean null 

al precionar el titlo o el triangulo hara lo siguiente (si esta abierto):

el triangulo rotara de nuevo para que apunte hacia abajo con un efecto agradable

el texto va a tener un efecto de que esta subiendo y volviendo a ocultarse debajo del titulo, asi desapareciendolo de nuevo

la linea de abajo va a volver a apararecer una ves estar totalmente oculto el texto 

Debajo de todos los temas se encontra un div con la siguiente informacion

Div con el texto que se encontrara en la parte izquierda si esta en la pc ,y si esta en el tlf se encontrara en la parte superior 

titulo = "Agendá un turno" 

parrabo = ´Conocé esta nueva tendencia en ${tituloServicio} agendando un turno en By Vero Cruz. Estamos ubicados en San Martin 195, 4° piso, dpto n°1 Neuquén capital´(usando el titulo del servicio que sacamos apenas se cargara la pagina)

div que contendra el boton que va a rediriguir al whatsApp con este numero 2996214947 y si esta en la pc se encontrara en la parte de la derecha y si esta en el tlf se encontrara en la parte inferior
 */