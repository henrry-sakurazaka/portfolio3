import  Image  from 'next/image';
import './Music.css';


const MusicLog = ({isAudioPlaying, handleAudioButtonClick}) => {

          return (
                    <div className={`audio_wrap ${isAudioPlaying ? 'play' : ''}`}>
                        <div className='audio_button' onClick={handleAudioButtonClick}>

                            <audio id='audio' src='/music/palm-tree-lullaby.mp3' preload="auto" loop></audio>
                        
                        <Image className='listen' src='/media/listen.png'
                            width={160} height={160} alt='listen'/>
                        
                      
                         <Image className='sound-logo'src={'/media/mute-svgrepo-com.svg'}
                                    width={72} height={72} alt='on-off'/>   
                        </div>
                    </div>
        )
    }
    

MusicLog.displayName = 'MusicLog';

export default MusicLog;