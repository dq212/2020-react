(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(7),i=o.n(a),s=(o(13),o(5),o(1)),l=o(2),c=o(3),p=o(4),m=function(e){console.log(e);var t=e.text,o=e.title,n=e.tools,a=e.imgUrl,i=e.onMouseOver,s=e.onMouseLeave;return r.a.createElement("div",{className:"item",onMouseOver:i},r.a.createElement("img",{className:"img-btn",src:a,alt:""}),r.a.createElement("div",{className:"slider",onMouseLeave:s},r.a.createElement("h3",null,o),r.a.createElement("p",{className:"hover-text"},t),r.a.createElement("p",{className:"hover-text"},n)))},u=function(e){Object(p.a)(o,e);var t=Object(c.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var e=this;return console.log(this.props.portItems),r.a.createElement("div",{className:"work-container"},this.props.portItems.map((function(t){return r.a.createElement(m,{key:t.id,title:t.title,text:t.text,tools:t.tools,imgUrl:t.imgUrl,onMouseOver:e.props.onMouseOver,onMouseLeave:e.props.onMouseLeave})})))}}]),o}(r.a.Component),g=function(e){Object(p.a)(o,e);var t=Object(c.a)(o);function o(){var e;Object(s.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={portItems:[{id:1,title:"Anthem DAC Coverage",text:"Registration for qualified leads to learn more about medical coverage gap.",tools:"HTML5, CSS3, JS, ReactJS, AWS - Lambda, GatewayAPI, SES, Route53, CloudFront, NodeJS",imgUrl:"./images/work/Anthem-DAC.png",link:""},{id:2,title:"Motopreserve App for ios",text:"iOS productivity app for motorcycle riders, builders, and enthusiasts.",tools:"Swift, Xcode, Photoshop, AppStore",imgUrl:"./images/work/mp_app.jpg",link:""},{id:3,title:"Motopreserve Web App",text:"React/Redux web app for motorcycle riders, builders, and enthusiasts.Built to support the iOS app.",tools:"React, Redux, Webpack, HTML, CSS, JS, Photoshop",imgUrl:"./images/work/mp_app_react.png",link:""},{id:4,title:"Bloomingdales App",text:"Layouts and implemetation of assets and codes for shopping items and options for tablet and mobile app.",tools:"Photoshop, HTML5, CSS3, JS",imgUrl:"./images/work/bloomingdales_home.png",link:""},{id:5,title:"Zelis Landing Page",text:"Wordpress custom page in order to get targeted registrations for lead generation.",tools:"HTML5, CSS3, JS",imgUrl:"./images/work/zelis_landing_page.png",link:""},{id:6,title:"USI Attorneys Preferred",text:"Site for Attorneys to get information about all  available types of insurance available to their profession",tools:"Photoshop, HTML5, CSS3, JS",imgUrl:"./images/work/usi-site.png",link:""},{id:7,title:"EMPIRE UNION-GRADE",text:"Information on new IngenioRx benefits in New York targeting union members.",tools:"HTML5, CSS3, JS, AWS, Route53, Cloudfront, SES",imgUrl:"./images/work/empire-union-grade.png",link:""},{id:8,title:"AARP + IRELAUNCH",text:"Landing page promoting older members re-entering the workforce after an extended hiatus.",tools:"HTML5, CSS3, JS",imgUrl:"./images/work/aarp-irelaunch.png",link:""}]},e.onMouseOver=function(e){console.log(e.target);var t=e.target.nextSibling;console.log(t),t&&t.classList.add("close")},e.onMouseLeave=function(e){console.log(e.target);var t=e.target;t&&t.classList.remove("close")},e}return Object(l.a)(o,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u,{portItems:this.state.portItems,onMouseOver:this.onMouseOver,onMouseLeave:this.onMouseLeave}))}}]),o}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,o){},8:function(e,t,o){e.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.dd17fe0a.chunk.js.map