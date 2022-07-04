"use strict";(self.webpackChunkmobx_cookbook=self.webpackChunkmobx_cookbook||[]).push([[119],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,b=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(b,i(i({ref:n},u),{},{components:t})):r.createElement(b,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},i="Actions",c={unversionedId:"actions",id:"actions",title:"Actions",description:"MobX \u043d\u0435 \u043e\u0431\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0430\u0441 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0435 \u043f\u043e\u043b\u044f \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u044d\u043a\u0448\u0435\u043d\u043e\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u0439\u0442 \u043e\u0442\u043a\u0443\u0434\u0430 \u0443\u0433\u043e\u0434\u043d\u043e, \u0438\u0437 \u043b\u044e\u0431\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",source:"@site/docs/actions.md",sourceDirName:".",slug:"/actions",permalink:"/actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0420\u0435\u0430\u043a\u0446\u0438\u0438",permalink:"/reactions"},next:{title:"Actions",permalink:"/actions"}},p={},l=[],u={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actions"},"Actions"),(0,o.kt)("p",null,"MobX \u043d\u0435 \u043e\u0431\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0430\u0441 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0435 \u043f\u043e\u043b\u044f \u0438\u043c\u0435\u043d\u043d\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u044d\u043a\u0448\u0435\u043d\u043e\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0435\u0439\u0442 \u043e\u0442\u043a\u0443\u0434\u0430 \u0443\u0433\u043e\u0434\u043d\u043e, \u0438\u0437 \u043b\u044e\u0431\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u0435\u0440\u043d\u0435\u0442\u0435\u0441\u044c \u043a \u0444\u0430\u0439\u043b\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/App.tsx"),", \u0442\u043e \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},'"+"')," \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u043d\u0435 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u044d\u043a\u0448\u043d ",(0,o.kt)("inlineCode",{parentName:"p"},"inc"),", \u0430 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u043f\u0440\u044f\u043c\u043e \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430. \u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c \u0447\u0442\u043e \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 10 \u043d\u0430 \u043a\u043b\u0438\u043a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { observer } from 'mobx-react-lite'\nimport { counterStore } from './counter.store'\n\nconst App = observer(() => {\n  return (\n    <div className='App'>\n      <h1>{counterStore.count}</h1>\n\n      <button\n        onClick={() => {\n          counterStore.count = 10\n        }}>\n        +\n      </button>\n      <button onClick={counterStore.dec}>-</button>\n    </div>\n  )\n})\n\nexport default App\n")),(0,o.kt)("p",null,"\u041a\u043e\u0434 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442. \u0414\u0430\u043b\u044c\u0448\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/counter.store.ts")," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setInterval(() => {\n  counterStore.count++\n}, 1000)\n")),(0,o.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u043c\u044b \u043a\u0430\u0436\u0434\u0443\u044e \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u043c ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u043d\u0430 \u0435\u0434\u0438\u043d\u0438\u0446\u0443. \u0411\u043e\u043b\u0435\u0435 \u0442\u043e\u0433\u043e, \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c ",(0,o.kt)("inlineCode",{parentName:"p"},"counterStore")," \u0432 \u043a\u0430\u043a\u043e\u043c-\u043d\u0438\u0431\u0443\u0434\u044c \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435 \u0438 \u0442\u0430\u043c \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0435\u0433\u043e \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c."),(0,o.kt)("p",null,"\u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432 \u043d\u0430\u0448\u0435\u043c \u0441\u0442\u043e\u0440\u0435 \u043d\u0430 \u043f\u043e\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u0437\u0430\u0432\u044f\u0437\u0430\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u043d\u0430\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"double"),", \u0430 \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," \u0432 \u0442\u0435\u043e\u0440\u0438\u0438 \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0431\u044b\u0442\u044c \u0437\u0430\u0432\u044f\u0437\u0430\u043d\u044b \u0435\u0449\u0435 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0430\u043a\u0446\u0438\u0439. \u041f\u043e\u0434\u043e\u0431\u043d\u044b\u0435 \u043a\u0430\u0441\u043a\u0430\u0434\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u044d\u0442\u043e \u043d\u0435 \u0442\u043e, \u0441 \u0447\u0435\u043c \u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u0431\u044b \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043c\u044b \u043e\u0442\u043a\u0440\u043e\u0435\u043c \u043a\u043e\u043d\u0441\u043e\u043b\u044c, \u0442\u043e \u0443\u0432\u0438\u0434\u0438\u043c \u0447\u0442\u043e MobX \u0432\u044b\u0434\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435:\n",(0,o.kt)("inlineCode",{parentName:"p"},"[MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: Store@1.count")),(0,o.kt)("p",null,"\u0412 \u0441\u0442\u0440\u043e\u0433\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0431\u0435\u0437 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f. \u042d\u0442\u043e \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435 \u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0432 \u0440\u0430\u043d\u0442\u0430\u0439\u043c\u0435. \u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043b\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438, \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u043d\u0430\u0448\u0435 \u043f\u043e\u043b\u0435 \u043a\u0430\u043a \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0435."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class Store {\n  constructor() {\n    makeAutoObservable(this)\n  }\n\n  private _count = 0\n\n  get count() {\n    return this._count\n  }\n\n  inc = () => {\n    this._count++\n  }\n\n  dec = () => {\n    this._count--\n  }\n\n  get double() {\n    return this._count * 2\n  }\n}\n")),(0,o.kt)("p",null,"\u041c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 TypeScript-\u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"private")," \u043a \u043f\u043e\u043b\u044e ",(0,o.kt)("inlineCode",{parentName:"p"},"_count"),", \u0430 \u0447\u0442\u043e\u0431\u044b \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u043e\u043b\u0435 \u0438\u0437 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u043c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0433\u0435\u0442\u0442\u0435\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),"."),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043c\u044b \u0432\u0435\u0440\u043d\u0435\u043c\u0441\u044f \u043a \u0444\u0430\u0439\u043b\u0443 ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/App.tsx"),", \u0442\u043e \u0443\u0432\u0438\u0434\u0438\u043c, \u0447\u0442\u043e TypeScript \u0432\u044b\u0434\u0430\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0443:\n",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot assign to 'count' because it is a read-only property")),(0,o.kt)("p",null,"\u0425\u043e\u0442\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0441\u0432\u043e\u0439 \u0433\u0435\u0442\u0442\u0435\u0440 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u043e\u0439, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0442\u043e\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0432\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u044b\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438, \u043a\u0430\u043a \u0432\u0430\u0440\u0438\u0430\u043d\u0442, \u043f\u0440\u043e\u0441\u0442\u043e \u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0437\u0430 \u044d\u0442\u0438\u043c \u043d\u0430 \u0440\u0435\u0432\u044c\u044e \u043a\u043e\u0434\u0430."))}s.isMDXComponent=!0}}]);