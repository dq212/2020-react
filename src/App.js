import React, { Component } from 'react'
import Work from './Work';

 class App extends Component {
    state = {
        portItems: [
       {
         id:1,
         title:'Anthem DAC Coverage',
         text:'Registration for qualified leads to learn more about medical coverage gap.',
         tools:'HTML5, CSS3, JS, ReactJS, AWS - Lambda, GatewayAPI, SES, Route53, CloudFront, NodeJS',
         imgUrl: './images/work/Anthem-DAC.png',
         link:''
       },
       {
         id:2,
         title:'Motopreserve App for ios',
         text:'iOS productivity app for motorcycle riders, builders, and enthusiasts.',
         tools:'Swift, Xcode, Photoshop, AppStore',
         imgUrl: './images/work/mp_app.jpg',
         link:''
       },
       {
         id:3,
         title:'Motopreserve Web App',
         text:'React/Redux web app for motorcycle riders, builders, and enthusiasts.Built to support the iOS app.',
         tools:'React, Redux, Webpack, HTML, CSS, JS, Photoshop',
         imgUrl: './images/work/mp_app_react.png',
         link:''
       },
       {
         id:4,
         title:'Bloomingdales App',
         text:'Layouts and implemetation of assets and codes for shopping items and options for tablet and mobile app.',
         tools:'Photoshop, HTML5, CSS3, JS',
         imgUrl: './images/work/bloomingdales_home.png',
         link:''
       },
       {
         id:5,
         title:'Zelis Landing Page',
         text:'Wordpress custom page in order to get targeted registrations for lead generation.',
         tools:'HTML5, CSS3, JS',
         imgUrl: './images/work/zelis_landing_page.png',
         link:''
       },
       {
         id:6,
         title:'USI Attorneys Preferred',
         text:'Site for Attorneys to get information about all  available types of insurance available to their profession',
         tools:'Photoshop, HTML5, CSS3, JS',
         imgUrl: './images/work/usi-site.png',
         link:''
       },
       {
         id:7,
         title:'EMPIRE UNION-GRADE',
         text:'Information on new IngenioRx benefits in New York targeting union members.',
         tools:'HTML5, CSS3, JS, AWS, Route53, Cloudfront, SES',
         imgUrl: './images/work/empire-union-grade.png',
         link:''
       },
       {
         id:8,
         title:'AARP + IRELAUNCH',
         text:'Landing page promoting older members re-entering the workforce after an extended hiatus.',
         tools:'HTML5, CSS3, JS',
         imgUrl: './images/work/aarp-irelaunch.png',
         link:''
       }
     ]
   }

   onMouseOver = (e) => {
    console.log(e.target)
    const d = e.target.nextSibling;
    console.log(d);
    if(d){
      d.classList.add('close');
    }
  } 

  onMouseLeave = (e)=>{
    console.log(e.target)
    const d = e.target;
    if(d){
       d.classList.remove('close');
      }
  } 

    render() {
        return (
            <div>
                <Work portItems={this.state.portItems} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}/>
            </div>
        )
    }
}
export default App;