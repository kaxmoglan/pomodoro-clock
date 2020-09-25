(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(3),c=a.n(r),i=a(1),o=(a(9),function(e){var t=e.time,a=e.setTime,n=e.disableControls,r=e.timer;return s.a.createElement("div",{className:"settings disableControls_".concat(n)},s.a.createElement("h2",{className:"labels",id:r.label.id},r.label.title),s.a.createElement("div",{className:"interface"},s.a.createElement("button",{id:r.control1.id,onClick:function(){t>1&&a((function(e){return e-1}))}},s.a.createElement("i",{className:"fas fa-minus"})),s.a.createElement("div",{className:"timer-setting",id:r.display.id},e.time),s.a.createElement("button",{id:r.control2.id,onClick:function(){t<60&&a((function(e){return e+1}))}},s.a.createElement("i",{className:"fas fa-plus"}))))}),l=function(e){var t=e.sessionTime,a=e.setSessionTime,r=e.breakTime,c=e.setBreakTime,i=e.timerType,o=e.setTimerType,l=e.running,m=e.setRunning,u=e.setDisableControls,d=e.clock,b=e.setClock,f=e.loop,p=e.setLoop;return Object(n.useEffect)((function(){0===d&&"Session"===i&&l?(o("Break"),b(60*r)):0===d&&"Break"===i&&l&&(o("Session"),b(60*t))}),[d]),Object(n.useEffect)((function(){var e=document.querySelector("#beep");0===d&&(e.play(),e.addEventListener("ended",(function(){return e.currentTime=0})))}),[d]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"clock"},s.a.createElement("div",{className:"header"},s.a.createElement("i",{className:"fab fa-react"}),s.a.createElement("h2",{id:"timer-label"},i)),s.a.createElement("p",{id:"time-left"},function(e){var t=Math.floor(e/60),a=e-60*t;return a=a<10?"0"+a:a,"".concat(t=t<10?"0"+t:t,":").concat(a)}(d))),s.a.createElement("div",{className:"controls"},s.a.createElement("button",{id:"start_stop",onClick:function(){!1===l?(m(!0),u(!0),p(setInterval((function(){b((function(e){return e-1}))}),1e3))):!0===l&&(m(!1),u(!1),p(clearInterval(f)))}},!1===l?s.a.createElement("i",{className:"fas fa-play"}):s.a.createElement("i",{className:"fas fa-pause"})),s.a.createElement("button",{id:"reset",onClick:function(){p(clearInterval(f)),m(!1),a(25),c(5),b(1500),o("Session"),u(!1);var e=document.querySelector("#beep");e.pause(),e.currentTime=0}},s.a.createElement("i",{className:"fas fa-redo"}))),s.a.createElement("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"}))};var m=function(){var e={sessionTimer:{label:{id:"session-label",title:"Session Length"},control1:{id:"session-decrement"},control2:{id:"session-increment"},display:{id:"session-length"}},breakTimer:{label:{id:"break-label",title:"Break Length"},control1:{id:"break-decrement"},control2:{id:"break-increment"},display:{id:"break-length"}}},t=Object(n.useState)(25),a=Object(i.a)(t,2),r=a[0],c=a[1],m=Object(n.useState)(5),u=Object(i.a)(m,2),d=u[0],b=u[1],f=Object(n.useState)("Session"),p=Object(i.a)(f,2),E=p[0],k=p[1],T=Object(n.useState)(!1),v=Object(i.a)(T,2),j=v[0],S=v[1],O=Object(n.useState)(1500),C=Object(i.a)(O,2),g=C[0],h=C[1],N=Object(n.useState)(!1),y=Object(i.a)(N,2),B=y[0],L=y[1],w=Object(n.useState)(),I=Object(i.a)(w,2),D=I[0],q=I[1];return Object(n.useEffect)((function(){h(60*r)}),[r]),s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Pomodoro Clock"),s.a.createElement("div",{id:"pomodoro-container"},s.a.createElement(l,{sessionTime:r,setSessionTime:c,breakTime:d,setBreakTime:b,timerType:E,setTimerType:k,running:j,setRunning:S,setDisableControls:L,clock:g,setClock:h,loop:D,setLoop:q}),s.a.createElement("div",{className:"settings-container"},s.a.createElement(o,{time:r,setTime:c,timer:e.sessionTimer,disableControls:B}),s.a.createElement(o,{time:d,setTime:b,timer:e.breakTimer,disableControls:B,setDisableControls:L}))))};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.7a13d805.chunk.js.map