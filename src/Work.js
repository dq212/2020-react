import React from 'react';
import './portfolio.css';
import WorkItem from './WorkItem';
// import './App.css';


class Work extends React.Component {

  render() {
    
    console.log(this.props.portItems)
    return (
      <div className="work-container">
        {this.props.portItems.map((item)=>(
          <WorkItem key={item.id} title={item.title} text={item.text} tools={item.tools} imgUrl={item.imgUrl} onMouseOver={this.props.onMouseOver} onMouseLeave ={this.props.onMouseLeave}/>
        ))}
    </div>
    )
  }
}



export default Work;