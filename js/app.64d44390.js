(function(e){function t(t){for(var n,c,i=t[0],o=t[1],l=t[2],d=0,u=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);m&&m(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Football-Leader-App/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var m=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"273e":function(e,t,a){"use strict";a("5f19")},"40a1":function(e,t,a){"use strict";a("96f3")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id="4678"},4878:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("a-layout",[a("a-layout-header",{staticClass:"layout-header"},[e._v(" Футбольный предводитель ")]),a("a-layout-content",[a("router-view")],1)],1)],1)},s=[],c={name:"App",components:{},created:function(){window.vueRouter=this.$router,console.log("this",this)}},i=c,o=(a("034f"),a("2877")),l=Object(o["a"])(i,r,s,!1,null,null,null),m=l.exports,d=(a("4de4"),a("c740"),a("a434"),a("b0c0"),a("2f62")),u=[{id:"0",name:"Миша Блэк Бразе"},{id:"1",name:"Миксер"},{id:"2",name:"Темп"},{id:"3",name:"Серёга Юниор Худой"},{id:"4",name:"Витя Маркс"},{id:"5",name:"Костя"},{id:"6",name:"Виталя"},{id:"7",name:"Железный"},{id:"8",name:"Хомячок"},{id:"9",name:"Волшебник"},{id:"10",name:"Пиф Паф"},{id:"11",name:"Валера"},{id:"12",name:"Вовати"},{id:"13",name:"Вова Энгельс"},{id:"14",name:"Серёга Юниор Полный"},{id:"15",name:"Омар"},{id:"16",name:"Буффон"},{id:"17",name:"Лёха Соренто"},{id:"18",name:"Юрка"},{id:"19",name:"Рома"},{id:"20",name:"Колян"},{id:"21",name:"Динамо"},{id:"22",name:"Шнур"},{id:"23",name:"Дима от Миши"},{id:"24",name:"Саня Орёл"},{id:"25",name:"Андрей Воротчик"},{id:"26",name:"Евгений Анатольевич"},{id:"27",name:"Амарок"},{id:"28",name:"Артём"},{id:"29",name:"Саня Малыш"},{id:"30",name:"Сосед"},{id:"31",name:"Диман от Волшебника"},{id:"32",name:"Илюха Вязкий"},{id:"33",name:"-"},{id:"34",name:"-"}],f=u,b=function(){return"".concat(Math.random())};n["a"].use(d["a"]);var h=new d["a"].Store({state:{players:f,completedGameDays:[],currentGameDay:{teams:[],completedGames:[],currentGame:null}},mutations:{createPlayer:function(e,t){var a=t.name;e.players.push({name:a,id:b()})},editPlayer:function(e,t){var a=t.name,n=t.id,r=e.players.findIndex((function(e){return e.id===n}));e.players.splice(r,1,{id:n,name:a})},deletePlayer:function(e,t){var a=t.id;e.players=e.players.filter((function(e){return e.id!==a}))},createGameDay:function(e,t){var a=t.teams;e.currentGameDay.teams=a},initFirstGame:function(e,t){var a=t.game;e.currentGameDay.currentGame=a},completeTheCurrentGame:function(e){var t=e.currentGameDay.currentGame;e.currentGameDay.completedGames.push(t);var a=t.firstTeam.goals.length>t.secondTeam.goals.length?t.firstTeam.id:t.secondTeam.id,n=function(){return[t.firstTeam.id,t.secondTeam.id].filter((function(t){var a=e.currentGameDay.completedGames[e.currentGameDay.completedGames.length-2];return!(a.firstTeam.id===t||a.secondTeam.id===t)}))[0]};e.currentGameDay.currentGame={firstTeam:{id:1===e.currentGameDay.completedGames.length?a:n(),goals:[]},secondTeam:{id:e.currentGameDay.teams.filter((function(e){var a=e.id;return a!==t.firstTeam.id&&a!==t.secondTeam.id}))[0].id,goals:[]}}}}}),p=h,j=a("f23d"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu"},[a("router-link",{attrs:{to:{name:"players"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.navigate;return[a("a-button",{staticClass:"button",attrs:{type:"primary",block:""},on:{click:n}},[e._v(" Игроки ")])]}}])}),a("router-link",{attrs:{to:{name:"game"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.navigate;return[a("a-button",{staticClass:"button",attrs:{block:""},on:{click:n}},[e._v(" Начать новый день ")])]}}])})],1)},y=[],g={name:"menu-view"},_=g,T=(a("b261"),Object(o["a"])(_,v,y,!1,null,"9e260f1a",null)),G=T.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-list",{attrs:{bordered:"","data-source":e.players},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{},[e._v(" "+e._s(t.name)+" ")])}}])},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v(" Участники чата ")])])],1)},O=[],w=a("5530"),x={name:"players-view",computed:Object(w["a"])({},Object(d["c"])(["players"]))},S=x,D=Object(o["a"])(S,k,O,!1,null,null,null),I=D.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"background-color":"#ececec",padding:"20px"}},[a("a-row",{attrs:{gutter:20}},e._l(e.teams,(function(t){return a("a-col",{key:t.name,attrs:{span:24}},[a("a-card",{style:{margin:"10px 0"},attrs:{title:t.name}},[a("a-list",{attrs:{bordered:"","data-source":e.getPlayersListForTeam(t)},scopedSlots:e._u([{key:"renderItem",fn:function(n){return a("a-list-item",{},[e._v(" "+e._s(n.name)+" "),a("template",{slot:"actions"},[a("button",{on:{click:function(a){return e.deletePlayerFromTeam(t,n)}}},[e._v("Удалить")])])],2)}}],null,!0)}),a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":""},on:{change:function(a){return e.handleChange(t,a)}}},e._l(e.readyForSelect,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1)})),1),e.teams.every((function(e){return 5===e.players.length}))?a("a-button",{staticClass:"button",attrs:{block:""},on:{click:e.next}},[e._v(" Продолжить ")]):e._e()],1)},z=[],E=(a("99af"),a("7db0"),a("caad"),a("d81d"),a("45fc"),a("2532"),a("2909")),$={name:"game-form-setup-view",data:function(){return{teams:[{name:"Жёлтая Команда",id:1,players:["7","12","13","17","18"]},{name:"Красная Команда",id:2,players:["16","0","1","15","6"]},{name:"Фиолетовая Команда",id:3,players:["5","14","3","19","20"]}]}},computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["players"])),{},{readyForSelect:function(){var e=this;return this.players.filter((function(t){return!e.teams.some((function(e){return e.players.includes(t.id)}))}))}}),methods:Object(w["a"])(Object(w["a"])({},Object(d["b"])(["createGameDay"])),{},{handleChange:function(e,t){this.teams.splice(this.teams.findIndex((function(t){return t.name===e.name})),1,Object(w["a"])(Object(w["a"])({},e),{},{players:[].concat(Object(E["a"])(e.players),[t])}))},getPlayersListForTeam:function(e){var t=this;return e.players.map((function(e){return t.players.find((function(t){return t.id===e}))}))},deletePlayerFromTeam:function(e,t){var a=Object(w["a"])({},e);a.players=e.players.filter((function(e){return e!==t.id})),console.log("newTeam",a),this.teams.splice(this.teams.findIndex((function(t){return t.name===e.name})),1,a)},next:function(){this.createGameDay({teams:this.teams}),this.$router.push({name:"process"})}})},P=$,F=Object(o["a"])(P,C,z,!1,null,null,null),L=F.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("select-beginners-modal",{attrs:{visible:e.selectBeginnersModalIsVisible},on:{ok:e.createFirstGame}}),e.selectBeginnersModalIsVisible?e._e():a("div",[a("table",{staticStyle:{width:"100%"}},[e._m(0),a("tr",[a("td",[a("team-in-match-column",{attrs:{"team-in-match":e.currentGameDay.currentGame.firstTeam,"game-has-started":e.currentGameHasStarted},on:{goal:function(t){return e.handleGoal(e.currentGameDay.currentGame.firstTeam.id,t)}}})],1),a("td",[a("game-score"),e.currentGameHasStarted?a("div",{staticClass:"time-left"},[e._v(" "+e._s(e.timeLeftFormatted)+" ")]):a("button",{staticClass:"start-the-game-btn",attrs:{type:"primary",size:"large"},on:{click:e.startCurrentGame}},[e._v(" Начать игру ")]),a("div",{staticClass:"complete-day-btn"},[a("a-button",{attrs:{type:"danger",size:"small"},on:{click:e.completeTheDay}},[a("a-icon",{attrs:{type:"close-circle"}}),e._v(" Завершить день ")],1)],1)],1),a("td",[a("team-in-match-column",{attrs:{"team-in-match":e.currentGameDay.currentGame.secondTeam,"game-has-started":e.currentGameHasStarted},on:{goal:function(t){return e.handleGoal(e.currentGameDay.currentGame.secondTeam.id,t)}}})],1)])])]),a("div",[a("completed-games")],1)],1)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("colgroup",[a("col",{staticStyle:{width:"40%"},attrs:{span:"1"}}),a("col",{staticStyle:{width:"20%"},attrs:{span:"1"}}),a("col",{staticStyle:{width:"40%"},attrs:{span:"1"}})])}],H=(a("96cf"),a("1da1")),B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{visible:e.visible,title:"Выберите две команды, которые начнут играть первыми","ok-button-props":{props:{disabled:!e.teamsAreSelected}},"cancel-button-props":{props:{disabled:!0}}},on:{ok:e.handleOk}},[a("div",[a("div",[a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":""},on:{change:e.selectFirstTeam}},e._l(e.teams,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("div",[a("a-select",{staticStyle:{width:"120px"},attrs:{"default-value":""},on:{change:e.selectSecondTeam}},e._l(e.teams,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)])])},R=[],A={name:"select-beginners-modal",props:{visible:Boolean},data:function(){return{firstTeamId:null,secondTeamId:null}},computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["currentGameDay"])),{},{teamsAreSelected:function(){return this.firstTeamId&&this.secondTeamId},teams:function(){var e=this.currentGameDay.teams,t=[this.firstTeamId,this.secondTeamId].filter(Boolean);return e.filter((function(e){var a=e.id;return!t.includes(a)}))}}),methods:{selectFirstTeam:function(e){this.firstTeamId=e},selectSecondTeam:function(e){this.secondTeamId=e},handleOk:function(){this.$emit("ok",{firstTeamId:this.firstTeamId,secondTeamId:this.secondTeamId})}}},J=A,W=Object(o["a"])(J,B,R,!1,null,null,null),V=W.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"team-name"},[e._v(e._s(e.team.name))]),a("div",{staticClass:"team-players"},e._l(e.team.players,(function(t){return a("button",{key:t,staticClass:"player-btn",attrs:{disabled:!e.gameHasStarted},on:{click:function(a){return e.handlePlayerClick(t)}}},[e._v(" "+e._s(e.getPlayerName(t))+" ")])})),0)])},U=[],K={name:"team-in-match-column",props:{teamInMatch:Object,gameHasStarted:Boolean},methods:{getPlayerName:function(e){return this.players.find((function(t){var a=t.id;return a===e})).name},handlePlayerClick:function(e){var t=this;this.$confirm({title:"".concat(this.getPlayerName(e)," забил гол, вы уверены?"),onOk:function(){t.$emit("goal",e)},okText:"Да",cancelText:"Я перепутал"})}},computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["currentGameDay","players"])),{},{team:function(){var e=this;return this.currentGameDay.teams.find((function(t){var a=t.id;return e.teamInMatch.id===a}))}})},Q=K,X=(a("273e"),Object(o["a"])(Q,q,U,!1,null,"e9fabd06",null)),Y=X.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"score"},[e._v(" "+e._s(e.score)+" ")])},ee=[],te={name:"game-score",computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["currentGameDay"])),{},{score:function(){var e=this.currentGameDay.currentGame,t=e.firstTeam,a=e.secondTeam;return"".concat(t.goals.length,":").concat(a.goals.length)}})},ae=te,ne=(a("ed0c"),Object(o["a"])(ae,Z,ee,!1,null,"d9f11964",null)),re=ne.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("table",{staticClass:"games-table"},[a("caption",[e._v("Завершённые игры")]),e._m(0),e._m(1),e._l(e.completedGames,(function(t,n){return a("tr",{key:n},[a("td",[a("completed-game-team-item",{attrs:{"team-id":t.firstTeam.id,goals:t.firstTeam.goals,won:e.firstTeamWon(t)}})],1),a("td",[e._v(" "+e._s(t.firstTeam.goals.length)+" - "+e._s(t.secondTeam.goals.length)+" ")]),a("td",[a("completed-game-team-item",{attrs:{"team-id":t.secondTeam.id,goals:t.secondTeam.goals,won:e.secondTeamWon(t)}})],1)])}))],2)},ce=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("colgroup",[a("col",{staticStyle:{width:"40%"},attrs:{span:"1"}}),a("col",{staticStyle:{width:"20%"},attrs:{span:"1"}}),a("col",{staticStyle:{width:"40%"},attrs:{span:"1"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Команда 1")]),a("th",[e._v("Счёт")]),a("th",[e._v("Команда 2")])])}],ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"team-name",class:{won:e.won}},[e._v(e._s(e.getTeam(e.teamId).name))]),a("div",{staticClass:"goals"},e._l(e.goals,(function(t,n){return a("div",{key:n},[e._v(" "+e._s(e.formatTime(t.time))+"' "+e._s(e.getPlayerName(t.author))+" ")])})),0)])},oe=[],le={name:"completed-game-team-item",props:{teamId:String,goals:Array,won:Boolean},computed:Object(w["a"])({},Object(d["c"])(["currentGameDay","players"])),methods:{getTeam:function(e){return this.currentGameDay.teams.find((function(t){return t.id===e}))},formatTime:function(e){return"".concat(Math.floor(e/60+1)," мин")},getPlayerName:function(e){return this.players.find((function(t){return t.id===e})).name}}},me=le,de=(a("7bd5"),Object(o["a"])(me,ie,oe,!1,null,"bfd00258",null)),ue=de.exports,fe={name:"completed-games",components:{CompletedGameTeamItem:ue},computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["currentGameDay"])),{},{completedGames:function(){return this.currentGameDay.completedGames}}),methods:{firstTeamWon:function(e){return e.firstTeam.goals.length>e.secondTeam.goals.length},secondTeamWon:function(e){return e.secondTeam.goals.length>e.firstTeam.goals.length}}},be=fe,he=(a("40a1"),Object(o["a"])(be,se,ce,!1,null,"4d03431b",null)),pe=he.exports,je={name:"game-form-view",components:{SelectBeginnersModal:V,TeamInMatchColumn:Y,GameScore:re,CompletedGames:pe},data:function(){return{currentGameHasStarted:!1,timeLeft:420,timeoutId:null,intervalId:null}},methods:Object(w["a"])(Object(w["a"])({},Object(d["b"])(["initFirstGame","completeTheCurrentGame"])),{},{tryEndTheGame:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.currentGameDay.currentGame,n=a.firstTeam,r=a.secondTeam,0!==e.timeLeft&&2!==n.goals.length&&2!==r.goals.length){t.next=9;break}if(!e.currentGameHasStarted){t.next=5;break}return t.next=5,e.completeTheCurrentGame();case 5:clearTimeout(e.timeoutId),clearInterval(e.intervalId),e.timeLeft=420,e.currentGameHasStarted=!1;case 9:case"end":return t.stop()}}),t)})))()},startCurrentGame:function(){var e=this;this.currentGameHasStarted=!0,this.intervalId=setInterval((function(){e.timeLeft-=1}),1e3),this.timeoutId=setTimeout((function(){clearInterval(e.intervalId),e.timeLeft=0,e.tryEndTheGame()}),42e4)},createFirstGame:function(e){var t=e.firstTeamId,a=e.secondTeamId;this.initFirstGame({game:{firstTeam:{id:t,goals:[]},secondTeam:{id:a,goals:[]}}})},handleGoal:function(e,t){var a=this;return Object(H["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={author:t,time:420-a.timeLeft},s=JSON.parse(JSON.stringify(a.currentGameDay.currentGame)),s.firstTeam.id===e?s.firstTeam.goals.push(r):s.secondTeam.goals.push(r),n.next=5,a.initFirstGame({game:s});case 5:a.tryEndTheGame();case 6:case"end":return n.stop()}}),n)})))()},completeTheDay:function(){var e=this;this.$confirm({title:"Время аренды зала вышло, либо все уже поломались и устали? Давайте завершим играть!",okText:"Да, заканчиваем",cancelText:"Я перепутал, ещё есть время поиграть",onOk:function(){var t=Object(H["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.timeLeft=0,t.next=3,e.tryEndTheGame();case 3:return t.next=5,e.$router.push({name:"stats"});case 5:case"end":return t.stop()}}),t)})));function a(){return t.apply(this,arguments)}return a}()})}}),computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["currentGameDay","players"])),{},{timeLeftFormatted:function(){var e=Math.floor(this.timeLeft/60),t="".concat(this.timeLeft%60);return 1===t.length&&(t="0".concat(t)),e?"Осталось ".concat(e,":").concat(t):"Осталось ".concat(t," секунд")},selectBeginnersModalIsVisible:function(){return!this.currentGameDay.currentGame}})},ve=je,ye=(a("76d8"),Object(o["a"])(ve,M,N,!1,null,"23fefd02",null)),ge=ye.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("table",{staticStyle:{width:"100%"}},[e._m(0),e._l(e.scorers,(function(t){return a("tr",{key:t.id},[a("td",{attrs:{col:"3"}},[e._v(e._s(t.name)+" ("+e._s(t.team.name)+")")]),a("td",{attrs:{col:"1"}},[e._v(e._s(t.scored))])])}))],2),a("a-divider"),a("table",{staticStyle:{width:"100%"}},[e._m(1),e._l(e.teamStats,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.games))]),a("td",[e._v(e._s(t.wins))]),a("td",[e._v(e._s(t.draw))]),a("td",[e._v(e._s(t.loses))]),a("td",[e._v(e._s(t.scored))]),a("td",[e._v(e._s(t.failed))]),a("td",[e._v(e._s(t.scored-t.failed))]),a("td",[e._v(e._s(t.points))])])}))],2),a("div",[e._v(" Для тестирования, поиска багов и отладки: "),a("textarea",{domProps:{value:e.debugInfo}})])],1)},Te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Игрок")]),a("th",[e._v("Забил")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",[e._v("Команда")]),a("th",[e._v("И")]),a("th",[e._v("В")]),a("th",[e._v("Н")]),a("th",[e._v("П")]),a("th",[e._v("Заб")]),a("th",[e._v("Проп")]),a("th",[e._v("Разница")]),a("th",[e._v("Очки")])])}],Ge=(a("4160"),a("b64b"),a("07ac"),a("159b"),{name:"stats-view",computed:Object(w["a"])(Object(w["a"])({},Object(d["c"])(["currentGameDay","players"])),{},{scorers:function(){var e=this,t=[];this.currentGameDay.completedGames.forEach((function(e){t.push.apply(t,Object(E["a"])(e.firstTeam.goals)),t.push.apply(t,Object(E["a"])(e.secondTeam.goals))}));var a={};return t.forEach((function(e){var t=e.author;a[t]?a[t]+=1:a[t]=1})),Object.keys(a).map((function(t){var n=e.currentGameDay.teams.find((function(e){return e.players.includes(t)}));return{id:t,name:e.players.find((function(e){return e.id===t})).name,scored:a[t],team:n}})).sort((function(e,t){return e.scored>t.scored?-1:t.scored>e.scored?1:0}))},debugInfo:function(){return JSON.stringify(this.currentGameDay)},teamStats:function(){var e=this.currentGameDay.teams.map((function(e){return{id:e.id,name:e.name,games:0,wins:0,draw:0,loses:0,scored:0,failed:0,points:0}})),t={};return e.forEach((function(e){return t[e.id]=e})),this.currentGameDay.completedGames.forEach((function(e){var a=e.firstTeam,n=e.secondTeam;if(a.goals.length<n.goals.length){var r=[n,a];a=r[0],n=r[1]}t[a.id].games+=1,t[a.id].scored+=a.goals.length,t[a.id].failed+=n.goals.length,t[n.id].games+=1,t[n.id].scored+=n.goals.length,t[n.id].failed+=a.goals.length,a.goals.length===n.goals.length?(t[a.id].points+=1,t[a.id].draw+=1,t[n.id].points+=1,t[n.id].draw+=1):(t[a.id].wins+=1,t[a.id].points+=3,t[n.id].loses+=1)})),Object.values(t).sort((function(e,t){if(e.points>t.points)return-1;if(t.points>e.points)return 1;var a=e.scored-e.failed,n=t.scored-t.failed;return a>n?-1:n>a?1:e.scored>t.scored?-1:t.scored>e.scored?1:e.games>t.games?-1:t.games>e.games?1:0}))}})}),ke=Ge,Oe=(a("8edd"),Object(o["a"])(ke,_e,Te,!1,null,"7baa7706",null)),we=Oe.exports,xe=a("8c4f");n["a"].use(xe["a"]);var Se=[{path:"/",name:"main",component:G},{path:"/players",name:"players",component:I},{path:"/game",name:"game",component:L},{path:"/process",name:"process",component:ge},{path:"/stats",name:"stats",component:we}],De=new xe["a"]({routes:Se,mode:"hash"});a("202f");n["a"].use(j["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(m)},store:p,router:De}).$mount("#app")},"5f19":function(e,t,a){},"76d8":function(e,t,a){"use strict";a("f22c")},"7bd5":function(e,t,a){"use strict";a("9249")},"7cbe":function(e,t,a){},"85ec":function(e,t,a){},"8bd5":function(e,t,a){},"8edd":function(e,t,a){"use strict";a("7cbe")},9249:function(e,t,a){},"96f3":function(e,t,a){},b261:function(e,t,a){"use strict";a("8bd5")},ed0c:function(e,t,a){"use strict";a("4878")},f22c:function(e,t,a){}});
//# sourceMappingURL=app.64d44390.js.map