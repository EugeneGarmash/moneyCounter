(this["webpackJsonpmoney-counter"]=this["webpackJsonpmoney-counter"]||[]).push([[0],{116:function(e,t,n){e.exports={Animation:"Animation_Animation__2WvQ0"}},122:function(e,t,n){e.exports={AppMainButton__buttonContainer:"AppMainButton_AppMainButton__buttonContainer__17-8w"}},123:function(e,t,n){e.exports=n(165)},128:function(e,t,n){},137:function(e,t,n){},14:function(e,t,n){e.exports={fire:"Fire_fire__x32i-",flames:"Fire_flames__3nTIa",flame:"Fire_flame__10-mD",flameodd:"Fire_flameodd__Yu7-q",paused:"Fire_paused__1merP",flameeven:"Fire_flameeven__1f_AQ",logs:"Fire_logs__1eb_U"}},154:function(e,t,n){},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return s}));var a,r=n(2),o=n(17),c="AUTH_MODAL",u="MENU_MODAL",i=(a={},Object(o.a)(a,c,{isOpen:!1,data:{}}),Object(o.a)(a,u,{isOpen:!1,data:{}}),a),l=function(e,t){return{type:"OPEN_MODAL",payload:{modalName:e,data:t}}},s=function(e){return{type:"CLOSE_MODAL",payload:{modalName:e,data:{}}}};t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return Object(r.a)({},e,Object(o.a)({},t.payload.modalName,{isOpen:!0,data:t.payload.data}));case"CLOSE_MODAL":return Object(r.a)({},e,Object(o.a)({},t.payload.modalName,{isOpen:!1,data:{}}));default:return e}}},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),c=n.n(o),u=(n(128),n(37)),i=n(1),l=n(57),s=n(68),d=n(4),p=n(59),m=n(70),f=n.n(m),_=n(62),E=n(17),b=n(60),v=n.n(b),O=n(34),y=n.n(O),g=n(16),S=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.modal[g.b].isOpen}));return r.a.createElement("div",{onClick:function(){e(Object(g.e)(g.b))},className:y()(v.a.MenuToggleButton,Object(E.a)({},v.a.MenuToggleButton_open,t))},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))},A=(n(137),n(21)),j=n(61),h=n.n(j),N=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.audio.audioInstance})),n=Object(i.d)((function(e){return e.counter.counterIsActive})),a=t&&0===t.volume;return n?r.a.createElement("div",{className:y()([h.a.MuteButton],Object(E.a)({},h.a.muted,a)),onClick:function(){return e(Object(A.c)(a?1:0))}},r.a.createElement("span",null)):null};function I(){var e=Object(p.a)(["\n  margin: 0;\n"]);return I=function(){return e},e}function T(){var e=Object(p.a)(["\n  margin: ",";\n  font-size: calc(10px + 1vmin);\n  @media (min-width: 2500px) {\n    color: orange;\n  }\n"]);return T=function(){return e},e}var C=_.a.p(T(),(function(e){return e.margin})),x=_.a.h1(I()),k=function(){return r.a.createElement("header",{className:"jsx-3312051364 AppHeader"},r.a.createElement("div",{className:"jsx-3312051364 AppHeader__MenuToggleButtonContainer"},r.a.createElement(S,null)),r.a.createElement("div",{className:"jsx-3312051364 "},r.a.createElement(x,null,"Money counter"),r.a.createElement(C,{margin:"0"},"See how much your time cost")),r.a.createElement("div",{className:"jsx-3312051364 AppHeader__muteButtonContainer"},r.a.createElement(N,null)),r.a.createElement(f.a,{id:"3312051364"},[".AppHeader.jsx-3312051364{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}",".AppHeader__MenuToggleButtonContainer.jsx-3312051364{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:30px;}"]))},w=n(56),M=n(36),D=n(28),U=n(6),L=(n(122),n(154),n(47)),P={padding:"10px",border:"none",borderRadius:"3px",maxWidth:"100%",color:"#282c34",fontSize:"50px",marginBottom:"20px",textAlign:"center",backgroundColor:"rgba(230, 224, 224, 0.5)",":hover":{outline:"none",backgroundColor:"rgba(230, 224, 224, 0.7)"},":focus":{outline:"none",backgroundColor:"rgba(230, 224, 224, 0.7)"},"@media (min-width: 2500px)":{backgroundColor:"orange"}},R=Object(i.b)((function(e){return{salaryValue:e.salary.salaryValue,authModalIsOpen:e.modal[g.a].isOpen}}),(function(e){return{setSalaryValue:function(t){return e({type:"SET_SALARY_VALUE",payload:t})},toggleAppState:function(){return e(Object(U.d)())},setCounterSalaryStep:function(){return e(Object(D.c)())},initializeACounter:function(t){return e(Object(D.b)(t))}}}))(Object(w.a)((function(e){Object(i.c)();var t=Object(i.d)((function(e){return e.auth.success.token}));return r.a.createElement("div",{className:"SalaryStep"},r.a.createElement("span",{className:"SalaryStep__topText"},"I make"),r.a.createElement("input",{type:"text",style:P,value:e.salaryValue,onChange:function(t){e.setSalaryValue(t.target.value)},placeholder:"type here",onKeyDown:function(n){"Enter"===n.key&&e.salaryValue&&e.initializeACounter(t)}}),r.a.createElement("span",{className:"SalaryStep__bottomText"},"units per month"),r.a.createElement("br",null),r.a.createElement("div",{className:"SalaryStep__testBlock"}))}))),B=n(24),H=n.n(B),V=function(e){if(e<60)return"".concat(e," second(s)");if(e>=60&&e<3600){var t=Math.floor(e/60),n=e%60;return"".concat(t," minute(s) ").concat(n?"and ".concat(n," second(s)"):"")}if(e>=3600){var a=Math.floor(e/3600),r=e-3600*a,o=Math.floor(r/60),c=r%60;return"".concat(a," hour(s)")+"".concat(c&&o?",":c||o?" and":"")+"".concat(o?" ".concat(o," minute(s)"):"")+"".concat(c?" and ".concat(c," second(s)"):"")}},G=n(14),F=n.n(G),Y=function(e){return r.a.createElement("div",{className:F.a.fire},r.a.createElement("div",{className:F.a.flames},r.a.createElement("div",{className:"".concat(F.a.flame," ").concat(e.paused?F.a.paused:"")}),r.a.createElement("div",{className:"".concat(F.a.flame," ").concat(e.paused?F.a.paused:"")}),r.a.createElement("div",{className:"".concat(F.a.flame," ").concat(e.paused?F.a.paused:"")}),r.a.createElement("div",{className:"".concat(F.a.flame," ").concat(e.paused?F.a.paused:"")})),r.a.createElement("div",{className:F.a.logs}))},W=n(19),z=n.n(W),J=function(e){return r.a.createElement("div",{className:z.a.triangles},r.a.createElement("div",{className:z.a.triangle2}),r.a.createElement("div",{className:z.a.triangle1}),r.a.createElement("div",{className:z.a.triangle3}),r.a.createElement("div",{className:z.a.triangle5}),r.a.createElement("div",{className:z.a.triangle6}),r.a.createElement("div",{className:"".concat(z.a.sun," ").concat(e.paused?z.a.paused:"")}))},Q=(n(161),function(){return r.a.createElement("p",null,"TBD")}),K=n(3),q=n.n(K),X=function(e){var t=e.paused;return r.a.createElement("div",{className:q.a.rainyWeather},r.a.createElement("div",{className:q.a.cloudMain}),r.a.createElement("div",{className:q.a.cloudCenter}),r.a.createElement("div",{className:q.a.cloudLeft}),r.a.createElement("div",{className:"".concat(q.a.droplet," ").concat(t?q.a.paused:""," ").concat(q.a.droplet1)}),r.a.createElement("div",{className:"".concat(q.a.droplet," ").concat(t?q.a.paused:""," ").concat(q.a.droplet2)}),r.a.createElement("div",{className:"".concat(q.a.droplet," ").concat(t?q.a.paused:""," ").concat(q.a.droplet3)}),r.a.createElement("div",{className:"".concat(q.a.droplet," ").concat(t?q.a.paused:""," ").concat(q.a.droplet4)}),r.a.createElement("div",{className:"".concat(q.a.droplet," ").concat(t?q.a.paused:""," ").concat(q.a.droplet5)}),r.a.createElement("div",{className:"".concat(q.a.droplet," ").concat(t?q.a.paused:""," ").concat(q.a.droplet6)}))},Z=n(116),$=n.n(Z),ee=function(){var e=Object(i.d)((function(e){return e.app.entertainmentMode})),t=Object(i.d)((function(e){return e.counter.counterIsActive}));return r.a.createElement("div",{className:$.a.Animation},function(){switch(e){case"fire":return r.a.createElement(Y,{paused:!t});case"forest":return r.a.createElement(J,{paused:!t});case"sea":return r.a.createElement(Q,{paused:!t});case"rain":return r.a.createElement(X,{paused:!t});default:return r.a.createElement(Y,null)}}())},te=n(8),ne=function(e){var t=e.counterState,n=Object(i.c)(),a=Object(i.d)((function(e){return e.counter.counterTimeStep})),o=Object(i.d)((function(e){return e.counter.counterSalaryStep})),c=Object(i.d)((function(e){return e.app.entertainmentMode}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:H.a.mainInfoContainer},r.a.createElement("p",{className:H.a.CounterStep__noPaddingItem},"You've got"),r.a.createElement("p",{className:"".concat(H.a.CounterStep," ").concat(H.a.CounterStep__noPaddingItem)},t.counterValue.toFixed(2)," items"),r.a.createElement("p",{className:H.a.CounterStep__noPaddingItem},"for the last ",V(t.secondsPassed)),r.a.createElement("p",null,"You get ~",o.toFixed(2)," items per ",a/1e3," second(s)")),r.a.createElement(ee,null),r.a.createElement("ul",{className:H.a.CounterStep__entertainmentModes},Object.entries(te.c).map((function(e){var t=e[0];return r.a.createElement("li",{key:t,className:H.a.CounterStep__entertainmentItem},r.a.createElement(L.a,{onClick:function(){return n(Object(U.a)(e))},disabled:t===c},t))}))))},ae=(n(162),function(e){var t=Object(i.d)((function(e){return e.app.appIsInSalaryStep}));return r.a.createElement("main",{className:"AppStepManager"},t?r.a.createElement(R,null):r.a.createElement(ne,{counterState:e.counterState}))}),re=n(63),oe=n.n(re),ce=function(){return Object(i.d)((function(e){return e.app.spinner}))?r.a.createElement("div",{className:oe.a.LoaderContainer},r.a.createElement("div",{className:oe.a.Loader})):null},ue=function(){Object(i.c)(),Object(i.d)((function(e){return e.audio.entertainmentMode}));return null},ie=n(2),le=function(e){var t=e.counterIsActive,n=e.setCounterPassed,r=Object(a.useRef)(null),o=Object(i.d)((function(e){return e.counter.counterTimeStep})),c=Object(i.d)((function(e){return e.counter.counterSalaryStep})),u=Object(a.useCallback)((function(){r.current=setInterval((function(){n((function(e){return t?Object(ie.a)({},e,{counterValue:e.counterValue+c,secondsPassed:e.secondsPassed+o/1e3}):e}))}),o)}),[t,c,o,n]);return Object(a.useEffect)((function(){return u(),function(){return clearTimeout(r.current)}}),[u]),null},se=n(117),de=n(118),pe=n(120),me=n(121),fe=function(e){return function(t){Object(me.a)(a,t);var n=Object(pe.a)(a);function a(){var e;Object(se.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(de.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),a}(r.a.Component)},_e=(n(163),r.a.lazy((function(){return n.e(4).then(n.bind(null,174))}))),Ee=r.a.lazy((function(){return n.e(5).then(n.bind(null,175))})),be=fe((function(){return n.e(3).then(n.bind(null,173))})),ve=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.counter.counterIsActive})),n=Object(a.useState)({secondsPassed:0,counterValue:0,paused:t}),o=Object(u.a)(n,2),c=o[0],p=o[1];return Object(a.useEffect)((function(){e(Object(M.a)())}),[]),r.a.createElement(s.a,{basename:"development"},r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(k,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:te.d.info},r.a.createElement("p",null,"I am Eugene Garmash and I am a web developer")),r.a.createElement(d.a,{path:te.d.personal},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"LOADING...")},r.a.createElement(Ee,null))),r.a.createElement(d.a,{path:te.d.main},r.a.createElement(ae,{counterState:c}),r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(_e,{setCounterPassed:p,counterState:c})))),r.a.createElement(le,{counterIsActive:t,setCounterPassed:p}),r.a.createElement(ce,null),r.a.createElement(ue,null),r.a.createElement(be,null)))))},Oe=n(23);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=n(119),ge={salaryValue:"",personalData:{}},Se={SET_SALARY_VALUE:function(e,t){var n=e.salaryValue,a=/^\d{0,12}$/.test(t.payload)?t.payload:n;return Object(ie.a)({},e,{salaryValue:a})},SET_PERSONAL_DATA:function(e,t){return Object(ie.a)({},e,{personalData:{name:t.payload.name,surname:t.payload.surname,occupacy:t.payload.occupacy}})}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,n=Se[t.type];return Se[t.type]?n(e,t):e},je={error:{},success:{}},he={SET_PERSONAL_DATA:function(e,t){return Object(ie.a)({},e,{personalData:{name:t.payload.name,surname:t.payload.surname,occupacy:t.payload.occupacy}})},AUTH_FETCHING:function(e,t){return Object(ie.a)({},e)},AUTH_SUCCESS:function(e,t){var n=t.payload;return Object(ie.a)({},e,{success:Object(ie.a)({},n),error:{}})},AUTH_ERROR:function(e,t){return Object(ie.a)({},e,{error:Object(ie.a)({},t.payload),success:{}})},AUTH_LOGOUT:function(e,t){return Object(ie.a)({},e,{success:{}})}},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,n=he[t.type];return he[t.type]?n(e,t):e},Ie=Object(Oe.c)({app:U.b,salary:Ae,counter:D.a,auth:Ne,modal:g.d,audio:A.b}),Te=Oe.d,Ce=Object(Oe.e)(Ie,Te(Object(Oe.a)(ye.a)));c.a.render(r.a.createElement(r.a.StrictMode,null," ",r.a.createElement(i.a,{store:Ce},r.a.createElement(ve,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,t,n){e.exports={triangles:"Forest_triangles__2Tk1l",triangle1:"Forest_triangle1__2kS0p",triangle2:"Forest_triangle2__2J_cv",triangle3:"Forest_triangle3__2Y6mr",triangle5:"Forest_triangle5__2M4lI",triangle6:"Forest_triangle6__yp8mb",sun:"Forest_sun__2H2Nd",movesun:"Forest_movesun__2t-vT",paused:"Forest_paused__1P6Nt"}},21:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return m}));var a=n(2),r=n(31),o=n.n(r),c={audioInstance:null},u=function(e){return e().audio.audioInstance},i=function(){return function(e,t){var n=u(t);return n.play(),e({type:"PLAY_AUDIO",payload:n})}},l=function(){return function(e,t){var n=u(t);return n.pause(),e({type:"PAUSE_AUDIO",payload:n})}},s=function(){return function(e,t){var n=u(t);return n.pause(),e({type:"STOP_AUDIO",payload:n})}},d=function(e){return function(t,n){var a=u(n);if(a)return a.volume=e,t({type:"HANDLE_VOLUME",payload:a})}},p=function(e){return function(t,n){t(function(e){return{type:"CREATE_AUDIO",payload:e}}(e)),t(i())}},m=function(e){return function(t,n){t(l()),t(function(e){return function(t,n){var a=u(n);return a.src=e,t({type:"CHANGE_SOURCE",payload:a})}}(e)),t(i())}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_AUDIO":var n=new Audio(o.a);return n.loop=!0,Object(a.a)({},e,{audioInstance:n});case"PAUSE_AUDIO":case"PLAY_AUDIO":return Object(a.a)({},e,{audioInstance:t.payload});case"STOP_AUDIO":return Object(a.a)({},e,{audioInstance:null});case"CHANGE_SOURCE":case"HANDLE_VOLUME":return Object(a.a)({},e,{audioInstance:t.payload});default:return e}}},24:function(e,t,n){e.exports={CounterStep:"CounterStep_CounterStep__Kq00_",CounterStep__noPaddingItem:"CounterStep_CounterStep__noPaddingItem__1mpTV",mainInfoContainer:"CounterStep_mainInfoContainer__3L4Ks",CounterStep__entertainmentModes:"CounterStep_CounterStep__entertainmentModes__lw2cU",CounterStep__entertainmentItem:"CounterStep_CounterStep__entertainmentItem__HzQnt"}},28:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l}));var a=n(2),r=n(6),o=n(8),c={counterTimeStep:o.a,counterTimeStepInSeconds:o.b,counterSalaryStep:0,counterIsActive:!1},u=function(){return function(e,t){return e({type:"TOGGLE_COUNTER_STATE"})}},i=function(e){return function(e,t){e(Object(r.d)()),e(l()),e(u()),e(Object(r.a)(Object.entries(o.c)[0]))}},l=function(e){return function(t,n){var a=n().salary.salaryValue,r=3600/o.b;return t({type:"SET_COUNTER_SALARY_STEP",payload:a*o.e.monthsInAYear/o.e.workDaysInAYear/o.e.workHoursInADay/r*(e||1)})}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COUNTER_SALARY_STEP":return Object(a.a)({},e,{counterSalaryStep:t.payload});case"TOGGLE_COUNTER_STATE":var n=e.counterIsActive;return Object(a.a)({},e,{counterIsActive:!n});default:return e}}},3:function(e,t,n){e.exports={rainyWeather:"Rain_rainyWeather__2J3He",cloudMain:"Rain_cloudMain__2Bkvq",cloudCenter:"Rain_cloudCenter__2JUQj",cloudLeft:"Rain_cloudLeft__17vLR",droplet:"Rain_droplet__1wgeg",droplet1:"Rain_droplet1__1gkUD",droplet4:"Rain_droplet4__28U_r",droplet2:"Rain_droplet2__1ZX2S",droplet5:"Rain_droplet5__3g10W",droplet3:"Rain_droplet3__3x1Er",droplet6:"Rain_droplet6__NPEwN",rain2:"Rain_rain2__3fBve",rain:"Rain_rain__3DYDo",paused:"Rain_paused__12AXk"}},31:function(e,t,n){e.exports=n.p+"static/media/bonfire.b82c0c68.wav"},36:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m}));var a=n(38),r=n.n(a),o=(r.a.create({baseURL:"https://eugene-s-project-72ed7.firebaseio.com/"}),n(6)),c=n(16),u=function(e){console.log("\ud83d\ude80 ~ file: saveUserToStorage.js ~ line 8 ~ userData",e),localStorage.setItem("userData",JSON.stringify(e))},i="AIzaSyA9xEWlTDvAfOlaBojNIUvUS9zTctNfnUk",l=function(e){return{type:"AUTH_SUCCESS",payload:e}},s=function(e){return function(t,n){console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 46 ~ userSalaryData",e);n().auth.success.email;var a=n().auth.success.localId;console.log("object",n().auth.success),console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 49 ~ saveUserSalary ~ localId",a),fetch("https://eugene-s-project-72ed7.firebaseio.com/salaries/".concat(a,".json"),{method:"POST",body:JSON.stringify({secondsPassed:e.secondsPassed,salaryValue:e.salaryValue,counterValue:e.counterValue})}).then((function(e){console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 49 ~ response",e)})).catch((function(e){console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 52 ~ error",e)}))}},d=function(){return localStorage.removeItem("userData"),{type:"AUTH_LOGOUT"}},p=function(){return function(e){var t=JSON.parse(localStorage.getItem("userData"));(console.log("--------\x3e",t),t&&t.token&&t.expirationDate)?(console.log("hey"),new Date(t.expirationDate)>new Date&&e(l(t))):(console.log("!!!!!!!!!!!!!!!"),e(d()))}},m=function(e,t){return function(n){var a="signup"===e,s={email:t.email,password:t.password,returnSecureToken:!0};n(Object(o.c)());var p=a?"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(i):"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(i);r.a.post(p,s).then((function(e){var t,a=e.data,r=a.idToken,i=a.expiresIn,s=a.email,p=a.localId;console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 134 ~ response.data",e.data),console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 133 ~ localId",p),n(l({idToken:r,email:s,expiresIn:i,localId:p})),console.log("??????/"),n((t=i,function(e){console.log("\ud83d\ude80 ~ file: authActionCreators.js ~ line 96 ~ expirationTime",t),setTimeout((function(){e(d())}),1e3*t)})),n(Object(o.c)()),n(Object(c.c)(c.a));var m=new Date((new Date).getTime()+1e3*i);u({token:e.data.idToken,expirationDate:m,email:s,localId:p})})).catch((function(e){n({type:"AUTH_ERROR",payload:e.response.data.error}),n(Object(o.c)())}))}}},47:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(79),c=n.n(o);t.a=function(e){return r.a.createElement("button",{className:c.a.Button,onClick:e.onClick,disabled:e.disabled},e.textContent||e.children)}},52:function(e,t,n){e.exports=n.p+"static/media/forest.76d2708c.wav"},53:function(e,t,n){e.exports=n.p+"static/media/rain.d96b481d.wav"},54:function(e,t,n){e.exports=n.p+"static/media/sea.798420bb.wav"},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return l}));var a=n(2),r=n(37),o=n(21),c={appIsInSalaryStep:!0,entertainmentMode:""},u=function(){return function(e,t){return t().app.appIsInSalaryStep||(e(l("")),e(Object(o.g)())),e({type:"TOGGLE_APP_STATE"})}},i=function(){return{type:"TOGGLE_APP_SPINNER"}},l=function(e){return function(t,n){var a=Object(r.a)(e,2),c=a[0],u=a[1],i=n(),l=i.counter.counterIsActive,s=i.audio.audioInstance;t({type:"CHANGE_ENTERTAINMENT_MODE",payload:c}),l&&t(s?Object(o.a)(u):Object(o.d)())}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_APP_STATE":var n=e.appIsInSalaryStep;return Object(a.a)({},e,{appIsInSalaryStep:!n});case"TOGGLE_APP_SPINNER":return Object(a.a)({},e,{spinner:!e.spinner});case"CHANGE_ENTERTAINMENT_MODE":return Object(a.a)({},e,{entertainmentMode:t.payload});default:return e}}},60:function(e,t,n){e.exports={MenuToggleButton:"MenuToggleButton_MenuToggleButton__34Wn3",MenuToggleButton_open:"MenuToggleButton_MenuToggleButton_open__FiPH7"}},61:function(e,t,n){e.exports={MuteButton:"MuteButton_MuteButton__Iuhjg",muted:"MuteButton_muted__1wcb4"}},63:function(e,t,n){e.exports={LoaderContainer:"Spinner_LoaderContainer__9XAUG",Loader:"Spinner_Loader__1LZpa",spin:"Spinner_spin__exvrK"}},79:function(e,t,n){e.exports={Button:"Button_Button__2BYYQ",Button_disabled:"Button_Button_disabled__3Oxu_"}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return _}));var a=n(31),r=n.n(a),o=n(52),c=n.n(o),u=n(53),i=n.n(u),l=n(54),s=n.n(l),d={personal:"/personal_history",info:"/info",main:"/"},p={fire:r.a,forest:c.a,sea:s.a,rain:i.a},m=1,f=1e3*m,_={daysInAYear:365,workDaysInAYear:261,monthsInAYear:12,hoursInADay:24,workHoursInADay:9,secondsInAnHour:3600}}},[[123,1,2]]]);
//# sourceMappingURL=main.eb45ce21.chunk.js.map