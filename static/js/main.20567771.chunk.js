(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/frontend.705168e6.svg"},function(e,t,n){e.exports=n.p+"static/media/mobile.08d93d60.svg"},function(e,t,n){e.exports=n.p+"static/media/backend.799d5a6c.svg"},function(e,t,n){e.exports=n(26)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),l=n.n(r),o=(n(21),n(22),n(28)),s=n(29),c=n(30),m=(n(23),n(5)),u=n(6),d=n(8),p=n(7),v=(n(24),function(e){Object(d.a)(AnimateTextContainer,e);var t=Object(p.a)(AnimateTextContainer);function AnimateTextContainer(e){var n;return Object(m.a)(this,AnimateTextContainer),(n=t.call(this,e)).strText="FULL STACK ENGINEER",n.textIntervals=[],n}return Object(u.a)(AnimateTextContainer,[{key:"loadText",value:function loadText(){for(var e=0;e<this.strText.length;e++){var t=this.strText[e],n=document.createElement("span",[]);n.innerHTML=t;var a="text"+e+"Id";n.setAttribute("id",a),n.style.position="absolute",n.style.width="25px",n.style.transitionDuration="1s",e>=0&&" "===this.strText[e-1]&&(n.style.width="16px"),n.style.left=30*e+"px",n.style.top="0px",document.getElementById("animatedTextId").appendChild(n)}this.animate()}},{key:"animate",value:function animate(){for(var e=this,t=function _loop(t){var n="text"+t+"Id",a=document.getElementById(n),i=setInterval((function(){"0px"===a.style.top?a.style.top="-20px":a.style.top=0}),Math.floor(900*Math.random())+500);e.textIntervals.push(i)},n=0;n<this.strText.length;n++)t(n)}},{key:"clearAnimate",value:function clearAnimate(){for(var e=0;e<this.textIntervals.length;e++){var t=this.textIntervals[e];clearInterval(t)}}},{key:"componentDidMount",value:function componentDidMount(){this.loadText()}},{key:"render",value:function render(){return i.a.createElement("div",{id:"animatedTextId",className:"animated-text"})}}]),AnimateTextContainer}(i.a.Component));var f=function TopTitleContainer_TopTitleContainer(){return i.a.createElement("div",{className:"top-title-container"},i.a.createElement("div",{className:"animated-heading centered"},i.a.createElement(v,null)),i.a.createElement("div",{className:"description centered"},i.a.createElement("span",null,"Having 9 years of software development expertise in various domains like mobile and web development, making effective use of Computer Engineering degree in my profession. Currently working as a Lead Front End Engineer for Client Baker Hughes.")))},E=(n(25),n(11)),h=n.n(E),x=n(12),g=n.n(x),y=n(13),k=n.n(y),T=function(e){Object(d.a)(SkillsContainer,e);var t=Object(p.a)(SkillsContainer);function SkillsContainer(){return Object(m.a)(this,SkillsContainer),t.apply(this,arguments)}return Object(u.a)(SkillsContainer,[{key:"render",value:function render(){return i.a.createElement("div",{className:"skills-container"},i.a.createElement("div",{className:"skills-title-container"},i.a.createElement("span",null,"SKILLS")),i.a.createElement("div",{className:"skills-image-container"},i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:h.a})),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:k.a})),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{src:g.a}))))}}]),SkillsContainer}(i.a.Component);var C=function App_App(){return i.a.createElement("div",{className:"App"},i.a.createElement(o.a,{fluid:!0},i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement(f,null))),i.a.createElement(s.a,null,i.a.createElement(c.a,null,i.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root")),function unregister(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}()}],[[14,1,2]]]);
//# sourceMappingURL=main.20567771.chunk.js.map