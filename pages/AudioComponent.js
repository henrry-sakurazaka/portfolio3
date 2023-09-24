"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import MusicLog from './MusicLog';


  const AudioComponent = () => {

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      // クライアントサイドのコード
      const currentURL = window.location.href;
      // ここでcurrentURLを使用できます
    }
  }, []);
  
    
  useEffect(() => {

    //  ローカルストレージに再生状態を保存
  
    const saveAudioState = localStorage.getItem('audioIsPlaying');
    if (saveAudioState !== null) {
      setIsAudioPlaying(saveAudioState === 'true');
    }

  },[isAudioPlaying]);
  
  // オーディオ再生状態をクッキーに保存
// useEffect(() => {

//   document.cookie = `audioIsPlaying=${isAudioPlaying}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;


//   const cookies = document.cookie.split(';');
//   for(const cookie of cookies) {
//     const [name, value ] = cookie.split('=');
//     if(name === 'audioIsPlaying' && value === true) {
//       setIsAudioPlaying(true);
//     }
//   } 

// }, []);

 useEffect(() => {

  // オーディオ再生状態を設定する関数
  const setAudioState = (isPlaying) => {
    setIsAudioPlaying(isPlaying);

    localStorage.setItem('audioIsPlaying', isPlaying);
  };


 }, [isAudioPlaying]);
  


// ボタンクリック時に呼ばれるコールバック関数
  
    const handleAudioButtonClick = () => {
            var audio =  document.querySelector('#audio');
            const logo = document.querySelector('.sound-logo');
            audio.preload = 'auto';

            setIsAudioPlaying(!isAudioPlaying);
            if(audio.paused) {
                audio.play();
                logo.setAttribute('src','/media/audio-svgrepo-com.svg');
              
            } else {
                logo.setAttribute('src','/media/mute-svgrepo-com.svg');
                audio.pause();
            }        
    }

    useEffect(() => {
       
      if(isAudioPlaying) {
        audio.play();
    //     if(typeof setIsAudioPlaying === 'function') {
    //       setIsAudioPlaying(true);   
    // }                      
      } else {
        audio.pause();
      //   if(typeof setIsAudioPlaying === 'function') {
      //     setIsAudioPlaying(false);            
      // }           
      }
      return() => {
        audio.pause();
      };
    }, [isAudioPlaying]);
 
      return(
        <MusicLog isAudioPlaying={isAudioPlaying}
         handleAudioButtonClick={handleAudioButtonClick}
         />
      )

}
  
AudioComponent.displayName = 'AudioComponent';

export default AudioComponent;



