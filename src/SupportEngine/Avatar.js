import React, {useState} from 'react';
import {styles} from './styles';


const Avatar = props => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      <div
        className='transition-3'
        style={{
          ...styles.avatarHello,
          ...{opacity:hovered ? 1 : 0}
        }}
      >
        Hey it's Adam!
      </div>

      <div
        onClick={()=>props.onClick && props.onClick()}
        className='transition-3'
        onMouseEnter={(()=> setHovered(true))}
        onMouseLeave={(()=> setHovered(false))}
        style={{
          ...styles.chatWithMeButton,
          ...{border: hovered ? '1px solid #f9f0ff' : '4px solid #7a39e0' }
        }}>

      </div>
    </div>
  );
}

export default Avatar;
