(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{236:function(t,e){},259:function(t,e){},261:function(t,e){},339:function(t,e){},341:function(t,e){},374:function(t,e){},379:function(t,e){},381:function(t,e){},388:function(t,e){},401:function(t,e){},424:function(t,e){},433:function(t,e){},435:function(t,e){},504:function(t,e,n){},506:function(t,e,n){"use strict";n.r(e);var c=n(5),a=n(80),r=n.n(a),o=n(14),s=n.n(o),i=n(40),l=n(64),u=n(53),d=n(63),p=n.n(d),j=n(213),O=n.n(j),b=n(65),h=n(214),f=n(16),C={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(f.a)(Object(f.a)({},C),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(f.a)(Object(f.a)({},C),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(f.a)(Object(f.a)({},t),{},{account:e.payload.account});default:return t}},_={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(f.a)(Object(f.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(f.a)(Object(f.a)({},t),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(f.a)(Object(f.a)({},_),{},{loading:!1,error:!0,errorMsg:e.payload});default:return t}},S=Object(b.b)({blockchain:g,data:m}),x=[h.a],N=Object(b.c)(b.a.apply(void 0,x)),E=Object(b.d)(S,N),T=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},A=function(){return function(){var t=Object(i.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,E.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=t.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(T("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(t){return{type:"CONNECTION_FAILED",payload:t}},y=function(t){return function(){var e=Object(i.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:t}}),n(A());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=(n(504),n.p+"static/media/logo.a94c16df.png"),M=(n.p,n(6));var I=function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.blockchain})),n=Object(u.c)((function(t){return t.data})),a=Object(c.useState)(!1),r=Object(l.a)(a,2),o=r[0],d=r[1],j=Object(c.useState)("Click Mint to mint your NFT."),b=Object(l.a)(j,2),h=b[0],f=b[1],C=Object(c.useState)(1),g=Object(l.a)(C,2),_=g[0],m=g[1],S=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,COST1:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),x=Object(l.a)(S,2),N=x[0],E=x[1],T=function(){""!==e.account&&null!==e.smartContract&&t(A(e.account))},I=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,E(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){I()}),[]),Object(c.useEffect)((function(){T()}),[e.account]),Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"main",children:[Object(M.jsx)("div",{className:"header__logo",children:Object(M.jsx)("img",{src:w,alt:"logo"})}),Object(M.jsxs)("div",{className:"container",children:[Object(M.jsx)("div",{className:"left__col"}),Object(M.jsxs)("div",{className:"right__col",children:[Object(M.jsx)("h3",{className:"title",children:"Mint buto head"}),Object(M.jsxs)("h1",{className:"count",children:[n.totalSupply," / ",N.MAX_SUPPLY]}),Object(M.jsx)("h3",{className:"sub__title",children:"0.1 eth per Buto head"}),Object(M.jsxs)("div",{className:"description",children:[Object(M.jsx)("p",{children:"Excluding gas fee "}),Object(M.jsx)("p",{children:"connect to ethereum network"})]}),Number(n.totalSupply)>=N.MAX_SUPPLY?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("p",{className:"font-bold text-default",children:"The sale has ended."}),Object(M.jsxs)("p",{className:"font-bold text-default",children:["You can still find ",N.NFT_NAME," on"]}),Object(M.jsx)("a",{target:"_blank",href:N.MARKETPLACE_LINK,children:N.MARKETPLACE})]}):Object(M.jsx)(M.Fragment,{children:""===e.account||null===e.smartContract?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("button",{className:"btn",onClick:function(e){e.preventDefault(),t(function(){var t=Object(i.a)(s.a.mark((function t(e){var n,c,a,r,o,i,l,u,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:if(r=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return p.a.setProvider(i),l=new O.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return u=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==r.NETWORK.ID?(d=new p.a(c,r.CONTRACT_ADDRESS),e({type:"CONNECTION_SUCCESS",payload:{account:u[0],smartContract:d,web3:l}}),i.on("accountsChanged",(function(t){e(y(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):e(v("Change network to ".concat(r.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),e(v("Something went wrong."));case 31:t.next=34;break;case 33:e(v("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(e){return t.apply(this,arguments)}}()),T()},children:"Connect"}),""!==e.errorMsg?Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("p",{className:"err__msg",children:e.errorMsg})}):null]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("p",{className:"err__msg",children:h}),Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"buy__wrapper",children:[Object(M.jsx)("div",{children:Object(M.jsx)("button",{className:"",disabled:o?1:0,onClick:function(t){t.preventDefault(),_<=20&&_>1&&m(_-1)},children:Object(M.jsx)("span",{className:"text-xl",children:"-"})})}),Object(M.jsx)("p",{className:"text-default font-bold text-xl border px-4 py-0.5 rounded-sm",children:_}),Object(M.jsx)("div",{children:Object(M.jsx)("button",{className:"",disabled:o?1:0,onClick:function(t){t.preventDefault(),_>=1&&_<20&&m(_+1)},children:Object(M.jsx)("span",{className:"text-xl",children:"+"})})})]})}),Object(M.jsx)(M.Fragment,{children:Object(M.jsx)("div",{children:Object(M.jsx)("button",{className:"btn mint__btn",disabled:o?1:0,onClick:function(c){c.preventDefault(),function(){var c=e.account;c=c.toUpperCase();var a=N.OWNER_ADDRESS;c==(a=a.toUpperCase())?N.WEI_COST=0:n.totalSupply>1&&n.totalSupply<1200?N.WEI_COST=N.COST1:n.totalSupply>1200&&n.totalSupply<2999&&(N.WEI_COST=N.WEI_COST);var r=N.WEI_COST,o=(N.COST1,N.COST2,N.GAS_LIMIT),s=String(r*_),i=String(o*_);console.log("Cost: ",s),console.log("Gas limit: ",i),f("Minting your ".concat(N.NFT_NAME,"...")),d(!0),e.smartContract.methods.mint(_).send({gasLimit:String(i),to:N.CONTRACT_ADDRESS,from:e.account,value:s}).once("error",(function(t){console.log(t),f("Sorry, something went wrong please try again later."),d(!1)})).then((function(n){console.log(n),f("WOW,  you\u2019re now a proud  ".concat(N.NFT_NAME," owners! go visit Opensea.io to view it.")),d(!1),t(A(e.account))}))}(),T()},children:Object(M.jsx)("span",{children:o?"BUSY":"MINT"})})})})]})})]})]})]})})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,510)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};r.a.render(Object(M.jsx)(u.a,{store:E,children:Object(M.jsx)(I,{})}),document.getElementById("root")),D()}},[[506,1,2]]]);
//# sourceMappingURL=main.bc7f5476.chunk.js.map