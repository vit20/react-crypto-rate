(this["webpackJsonpcrypto-rate"]=this["webpackJsonpcrypto-rate"]||[]).push([[0],{12:function(t,e,r){t.exports=r.p+"static/media/logo.c6440537.svg"},19:function(t,e,r){t.exports=r(45)},24:function(t,e,r){},25:function(t,e,r){},26:function(t,e,r){},44:function(t,e,r){},45:function(t,e,r){"use strict";r.r(e);var a=r(0),n=r.n(a),c=r(11),o=r.n(c),s=(r(24),r(12)),i=r.n(s),l=(r(25),r(16)),u=r(13),m=r(14),p=r(18),y=r(17),f=(r(26),r(15)),h=r.n(f);r(44);var C=function(t){var e=t.cryptoList.map((function(t){return n.a.createElement("li",{key:t.currency},n.a.createElement("span",{className:"CryptoLabel"},"Last rate: "),n.a.createElement("span",{className:"CryptoRate ".concat(t.cssClass)},t.lastRate," ",t.htmlArray),n.a.createElement("span",{className:"CurrencyTicker"},t.currency),n.a.createElement("span",{className:"CurrencySymbol"},"[",t.symbol,"]"))}));return n.a.createElement("div",{className:"CryptoList"},n.a.createElement("ul",{className:"TheList"},e))},d=function(t){Object(p.a)(r,t);var e=Object(y.a)(r);function r(t){var a;return Object(u.a)(this,r),(a=e.call(this,t)).getCryptoData=function(){h.a.get("https://blockchain.info/pl/ticker").then((function(t){var e=t.data;a.setState((function(t){for(var r=[],a=function(){var e=Object(l.a)(c[n],2),a=e[0],o=e[1],s=t.cryptoList.find((function(t){return t.currency===a})),i={currency:a,symbol:o.symbol,buy:o.buy,sell:o.sell,lastRate:o.last};void 0!==s?i.lastRate>s.lastRate?(i.cssClass="green",i.htmlArray=String.fromCharCode(8593)):i.lastRate<s.lastRate?(i.cssClass="red",i.htmlArray=String.fromCharCode(8595)):(i.cssClass="blue",i.htmlArray=String.fromCharCode(8596)):(i.cssClass="blue",i.htmlArray=String.fromCharCode(8596)),r.push(i)},n=0,c=Object.entries(e);n<c.length;n++)a();return{cryptoList:r}})),a.filterCryptoList()}))},a.filterCryptoList=function(){a._inputFilter.value=a._inputFilter.value.trim().toUpperCase(),a.setState((function(t){return{filteredCryptoList:t.cryptoList.filter((function(t){return t.currency.startsWith(a._inputFilter.value)}))}}))},a.state={cryptoList:[],filteredCryptoList:[]},a}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var t=this;this.getCryptoData(),this.timerID=setInterval((function(){return t.getCryptoData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"Crypto"},n.a.createElement("input",{ref:function(e){return t._inputFilter=e},onChange:this.filterCryptoList,type:"text",placeholder:"Filter"}),n.a.createElement(C,{cryptoList:this.state.filteredCryptoList}))}}]),r}(a.Component);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),n.a.createElement("h1",null,"Crypto Rate")),n.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f7267931.chunk.js.map