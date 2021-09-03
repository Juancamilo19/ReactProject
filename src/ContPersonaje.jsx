import React from 'react';
import Personaje  from './Personaje';

const personajes =[
    {
        "nombre" : "Bojack",
        "imagen": "https://www.lavanguardia.com/files/image_449_220/uploads/2020/02/05/5fa9031378b30.jpeg"
    },
    {
        "nombre" : "Todd",
        "imagen": "https://static.wikia.nocookie.net/lgbt-characters/images/5/53/Todd_Chavez.png/revision/latest/top-crop/width/360/height/450?cb=20180915202505"
    },
    {
        "nombre" : "Mr peanutbutter", 
        "imagen": "https://i.pinimg.com/originals/4e/c0/34/4ec034528fe7852edd8744087b681dc2.jpg"
    },
    {
        "nombre" : "Diane",   
        "imagen": "https://i.pinimg.com/474x/ce/be/17/cebe17d25722646831a1d0f075361ca7.jpg"
    },
    {
        "nombre" : "Princesa Carolyne",    
        "imagen": "https://pixel.nymag.com/imgs/daily/vulture/2017/09/08/recaps/08-bojack-409.w700.h700.jpg"
    },
    {
        "nombre" : "Sarah Lin",      
        "imagen": "https://static.wikia.nocookie.net/bojackhorseman/images/8/8b/Sarah_Lynn_pills.jpeg/revision/latest/scale-to-width-down/1161?cb=20170724041935"
    }
]

const ContPersonaje = () => (
    <>
    {
        personajes.map(x => <Personaje nombre={x.nombre} imagen={x.imagen}/>)
    }
    </>

);

export default ContPersonaje;
