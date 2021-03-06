import React from 'react';
import './portfolio.css';
// import './App.css';

const WorkItem = (props) =>  {
console.log(props)
  // props = {
  //   text:'text',
  //   title:'title',
  //   techText: 'tech text', 
  //   imgUrl:"./images/work/Anthem-DAC.png"
  // }

  const {text, title, tools, imgUrl, onMouseOver, onMouseLeave} = props;

  return (
        <div className="item" onMouseOver={onMouseOver}>
          <img className="img-btn"  src={imgUrl} alt="" />
          <div className="slider" onMouseLeave={onMouseLeave}>
            <h3>{title}</h3>
            <p className='hover-text'>{text}</p>
            <p className="hover-text">
            {tools}</p>
          </div>
        </div>

  );
}

export default WorkItem;


