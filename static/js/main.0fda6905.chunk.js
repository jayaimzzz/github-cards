(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(e,t,a){e.exports=a(257)},160:function(e,t,a){},164:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),c=(a(160),a(33)),o=a.n(c),i=a(51),u=a(52),m=a(53),h=a(56),f=a(54),p=a(57),w=(a(164),a(19)),d=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},followers:{},active:!1},a.handleClick=function(){var e=Object(i.a)(o.a.mark(function e(t){var n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/jayaimzzz");case 2:return n=e.sent,e.next=5,n.json();case 5:return n=e.sent,e.next=8,fetch(n.followers_url);case 8:return r=e.sent,e.next=11,r.json();case 11:r=e.sent,a.setState(function(e){return{user:n,followers:r,active:!e.active}});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w.b,{onClick:this.handleClick,color:"primary",variant:"contained"},"Toggle User"),this.state.active&&r.a.createElement(w.c,{className:"card"},r.a.createElement("img",{className:"profilePic",src:this.state.user.avatar_url,key:this.state.user.id}),r.a.createElement("br",null),r.a.createElement("span",null,this.state.user.name),r.a.createElement("br",null),r.a.createElement("span",null,this.state.user.location),r.a.createElement("br",null),r.a.createElement("span",null,this.state.user.bio),r.a.createElement("h3",null,"Followers"),r.a.createElement("div",{id:"followers",className:"followers"},this.state.followers.map(function(e){return r.a.createElement(w.d,null,r.a.createElement(w.a,{src:e.avatar_url,key:e.id,alt:e.name}),r.a.createElement("p",{className:"followerLogin"},e.login))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[155,2,1]]]);
//# sourceMappingURL=main.0fda6905.chunk.js.map