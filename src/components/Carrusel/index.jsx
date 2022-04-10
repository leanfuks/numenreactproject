import React from 'react';
import {useState} from 'react';
import { createRef } from 'react';
import { Component } from 'react';
import avenue from './img/avenue-gdcf23deb5_1920.jpg';
import cajon from './img/cajon_azul.jpg'
import fritzroy from './img/fritz-roy-g27bb3f1f0_1920.jpg'
import llaollao from './img/llao-llao-g3cdb5bf7a_1920.jpg'
import rioazul from './img/rio-azul-g2dc99507c_1920.jpg'
import sma from './img/san_martin_de_los_andes.jpg'
import vla from './img/villa-la-angostura-696041_960_720.jpg'


    const images = 
    ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', avenue, cajon, fritzroy, llaollao, rioazul, sma, vla]

    
    const Carrusel = () => {
      const [currentImage, setCurrentImage] = useState(0);
      const refs = images.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
      }, {});
    
      const scrollToImage = i => {
        setCurrentImage(i);
        
        refs[i].current.scrollIntoView(images.length[0,1,2]
        // behavior: 'smooth', 
          // block: 'nearest',
          // inline: 'start',
        );
      };
  
      // const totalImages = images.length;

      const nextImage = () => {
        if (currentImage >= images.length - 1) {
          scrollToImage(0);
        } else {
          scrollToImage(currentImage + 1);
        }
      };
    
      const previousImage = () => {
        if (currentImage === 0) {
          scrollToImage(images.length - 1);
        } else {
          scrollToImage(currentImage - 1);
        }
      };
    
      const arrowStyle =
        'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';
    
      const sliderControl = isLeft => (
        <button
          type="button"
          onClick={isLeft ? previousImage : nextImage}
          className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
          style={{ top: '40%' }}
        >
          <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
            {isLeft ? '◀' : '▶'}
          </span>
        </button>
      );
    
      return (
              <div className="flex items-center justify-center w-full p-12 border-4 md:w-100% h-56 bg-red-500" >
          <div className="relative w-full">
            {/* <div className=> */}
              <ul>
              {sliderControl(true)}
              <li className="inline-flex overflow-hidden snap-x mandatory">
              {images.map((img, i) => (
                <div className="inline-flex justify-center flex-shrink-0 w-full border-4" key={img} ref={refs[i]}>
                  <img src={img} className="object-contain border-4 h-52" />
                </div>
              ))}
              {sliderControl()}
              </li>
              </ul>
            </div>
          </div>
        // </div>
      );
    };
    
    // class App extends Component {
    
    //   constructor(props) {
    //     super(props)
    //   }
    
    //   render() {
    //     return (
    //       <div className="flex justify-center w-full">
    //         <Carrusel />
    //       </div>
    //     )
    //   }
    // }
    
    


export default Carrusel

