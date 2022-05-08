import React from 'react';
import {useState} from 'react';
import { createRef } from 'react';
import { Component } from 'react';
import bici from '../Imagenes/bici.png'
import celu from '../Imagenes/celu.png'
import delivery from '../Imagenes/delivery.png'
import google from '../Imagenes/google.png'
import logo from '../Imagenes/logo.png'
import notebook from '../Imagenes/notebook.png'
import tilde from '../Imagenes/tilde.png'
import tv from '../Imagenes/tv.png'


    const images = 
    ['https://images.unsplash.com/photo-1506501139174-099022df5260?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80', 'https://images.unsplash.com/photo-1523438097201-512ae7d59c44?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80', 'https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',bici, celu, delivery, google, logo, notebook, tilde,tv ]

    
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
        <div>
          <p className='text-center'><a href="" className='text-blue-500'>@NumenStore  </a> en Instagran:</p>
              <div className="flex items-center justify-center w-full  p-12  md:w-100% h-58 " >
          <div className="relative w-full">
          
              <ul>
              {sliderControl(true)}
              <li className="inline-flex overflow-hidden snap-x mandatory ">
              {images.map((img, i) => (
                <div className="inline-flex justify-center flex-shrink-0 m-4 border-4 " key={img} ref={refs[i]}>
                  <img src={img} className="object-scale-down w-52 h-52" />
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

