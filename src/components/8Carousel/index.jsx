import React from 'react';
import {useState} from 'react';
import {createRef } from 'react';
import gaming from "../Imagenes/gaming.png"
import nbnitro from "../Imagenes/nbnitro.png"
import tvsamg from "../Imagenes/tvsamg.png"
import imac from "../Imagenes/imac.png"
import drone from "../Imagenes/drone.png"
import iphone from "../Imagenes/iphone.jpeg"
import celu from "../Imagenes/celusam.png"



    const images = 
    [gaming,nbnitro,tvsamg,imac,drone,iphone,celu]

    
    const Carousel = () => {
      const [currentImage, setCurrentImage] = useState(0);
      const refs = images.reduce((acc, val, i) => {
        acc[i] = createRef();
        return acc;
      }, {});
    
      const scrollToImage = i => {
        setCurrentImage(i);
        
        refs[i].current.scrollIntoView(
          // images.length[i],
        {
          // behavior: 'smooth', 
          block: 'nearest',
          // inline: 'start',
        });
      };

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
        <div className='flex flex-col items-center justify-center w-full bg-blue-100'>
          <p className='mt-4 text-xl font-bold text-center '><a href="" className='text-blue-500'>@NumenStore  </a> en Instagram</p>
              <div className="flex items-center justify-center w-2/4 h-58 " >
          <div className="relative w-auto">
          
              <ul>
              {sliderControl(true)}
              <li className="inline-flex overflow-hidden snap-x mandatory ">
              {images.map((img, i) => (
                <div className="inline-flex justify-center flex-shrink-0 m-4 border-4 " key={img} ref={refs[i]}>
                  <img src={img} className=" w-52 h-52" />
                </div>
              ))}
              {sliderControl()}
              </li>
              </ul>
            </div>
          </div>
          </div>
        
      );
    };
    
    

export default Carousel

