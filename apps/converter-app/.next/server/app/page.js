(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},7147:e=>{"use strict";e.exports=require("fs")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},8736:e=>{e.exports={style:{fontFamily:"'__Montserrat_Alternates_47f38f', '__Montserrat_Alternates_Fallback_47f38f'",fontWeight:300,fontStyle:"normal"},className:"__className_47f38f"}},5720:e=>{e.exports={style:{fontFamily:"'__NicoMoji_77a177', '__NicoMoji_Fallback_77a177'",fontWeight:300},className:"__className_77a177",variable:"__variable_77a177"}},9528:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>f,tree:()=>u});var n=r(9441),o=r(1498),i=r(6580),s=r.n(i),a=r(5511),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8949)),"C:\\Users\\Marcos\\Documents\\GitHub\\Studium-Nexus\\apps\\converter-app\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1152)),"C:\\Users\\Marcos\\Documents\\GitHub\\Studium-Nexus\\apps\\converter-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,3250,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\Users\\Marcos\\Documents\\GitHub\\Studium-Nexus\\apps\\converter-app\\src\\app\\page.tsx"],d="/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7138:(e,t,r)=>{Promise.resolve().then(r.bind(r,812)),Promise.resolve().then(r.bind(r,5339))},5926:(e,t,r)=>{Promise.resolve().then(r.bind(r,9896)),Promise.resolve().then(r.bind(r,6085)),Promise.resolve().then(r.bind(r,8697)),Promise.resolve().then(r.bind(r,4765)),Promise.resolve().then(r.bind(r,4870)),Promise.resolve().then(r.bind(r,6642)),Promise.resolve().then(r.bind(r,8641)),Promise.resolve().then(r.bind(r,1673)),Promise.resolve().then(r.bind(r,5125)),Promise.resolve().then(r.bind(r,2096)),Promise.resolve().then(r.bind(r,3397)),Promise.resolve().then(r.bind(r,1178)),Promise.resolve().then(r.bind(r,616)),Promise.resolve().then(r.bind(r,3628)),Promise.resolve().then(r.bind(r,1807)),Promise.resolve().then(r.bind(r,171)),Promise.resolve().then(r.bind(r,5584)),Promise.resolve().then(r.bind(r,5193)),Promise.resolve().then(r.bind(r,1210)),Promise.resolve().then(r.bind(r,8256)),Promise.resolve().then(r.bind(r,2481)),Promise.resolve().then(r.bind(r,3690)),Promise.resolve().then(r.bind(r,5978)),Promise.resolve().then(r.bind(r,7628))},2215:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9489,23)),Promise.resolve().then(r.t.bind(r,6225,23)),Promise.resolve().then(r.t.bind(r,5964,23)),Promise.resolve().then(r.t.bind(r,5804,23)),Promise.resolve().then(r.t.bind(r,7255,23)),Promise.resolve().then(r.t.bind(r,1021,23))},812:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(7685),o=r(5030);let i=function({children:e}){return n.jsx(o.x,{children:e})}},9896:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.img`
    position: absolute;
    top: 95%;
    width: 24px;
    height: 50px;
    transform: rotate(180deg);
    z-index: 1;
    filter: invert(${({theme:e})=>e.invert});

    @media screen and (min-width: 541px) {
        width: 30px;
        top: 25%;
        left: 100%;
        transform: rotate(90deg);
    }
`},6085:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.input`
    font-family: inherit;
    font-size: 14px;
    border: none;
    border-radius: 15px;

    width: 230px;
    padding: 8px;
    background-color: ${({theme:e})=>e.bgInput};
    font-size: 14px;
    color: ${({theme:e})=>e.text};
    transition: .3s;

    &:focus {
        outline: none;
    }

    @media screen and (min-width: 541px) {
        width: 100%;
        max-width: 500px;
        font-size: 16px;
    }
`},8697:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.label`
    background-color: ${({theme:e})=>e.bgCard};
    border: 1px solid ${({theme:e})=>e.text};
    border-radius: 15px;
    width: 100%;
    max-width: 300px;
    padding: 5px;
    font-family: inherit;
    font-size: 14px;
    color: ${({theme:e})=>e.text};
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: ${({theme:e})=>e.bgCardHover};
        color: ${({theme:e})=>e.textHover};
        border-color: ${({theme:e})=>e.textHover};
    }
    
    & input[type="file"] {
        display: none;
    }
    
    @media screen and (min-width: 541px) {
        font-size: 18px;
    }
`},4765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(7685),o=r(4592);let i=o.ZP.div`
    width: 150px;
    height: 20px;
    border: 1px solid white;
    
    span {
        display: block;
        position: relative;
        width: ${({percentage:e})=>e}%;
        height: 100%;
        background-color: #6dca6d;
        transition: .3s ease-in-out;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: "";
            background-size: 100%;
            background-image: linear-gradient(45deg, #fff 25%, 
                                            rgba(0, 0, 0, 0) 25%,
                                            rgba(0, 0, 0, 0) 50%,
                                            #fff 50%,
                                            #fff 75%,
                                            rgba(0, 0, 0, 0) 75%,
                                            rgba(0, 0, 0, 0));
            background-size: 20px 20px;
            opacity: 0.5;
            animation: pogress-bar-after 1s infinite linear
        }
    }

    @keyframes pogress-bar-after {
        0% {
            background-position: 0 100%;
        }

        100% {
            background-position: 20px 100%;
        }
    }

`,s=function({percentage:e}){return n.jsx(o.LC,{shouldForwardProp:e=>"percentage"!==e,children:n.jsx(i,{percentage:e,role:"progressbar",children:n.jsx("span",{})})})}},4870:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.p`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    font-size: 14px;
    text-align: center;
    word-break: break-all;
    padding: 20px;
    border-radius: 15px;
    background-color: ${({theme:e})=>e.body};
    transition: .3s;

    @media screen and (min-width: 541px) {
        max-width: 350px;
        font-size: 16px;
    }
`},6642:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(7685),o=r(3810),i=r(4592);let s=i.ZP.select`
    border: none;
    border-radius: 15px;
    width: 95%;
    padding: 8px;
    font-family: inherit;
    font-size: 14px;
    background-color: ${({theme:e})=>e.body};
    color: ${({theme:e})=>e.text};
    transition: .3s;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    @media screen and (min-width: 541px) {
        font-size: 16px;
        max-width: 350px;
    }
`;var a=r(1838),l=r(8765);let u=function({arrayOfUnits:e,name:t,id:r,onChange:i,defaultValue:u=null,setOrigin:c}){let d=u||"",p=e.filter(e=>e!==d),{theme:f}=(0,a.Fg)();return(0,o.useEffect)(()=>{c&&u&&c(u)},[u,c]),(0,n.jsxs)(s,{name:t,id:r,onChange:i,theme:"light"===f?l.Wb:l.$_,role:"listbox",children:[n.jsx("option",{value:d,"aria-live":"polite",children:d||t}),p.map((e,t)=>n.jsx("option",{value:e,role:"option",children:e},t))]})}},681:(e,t,r)=>{"use strict";r.d(t,{Eh:()=>a,zx:()=>g.zx,f0:()=>d,uj:()=>p.default,oB:()=>m,qz:()=>h.default});var n=r(7685),o=r(1838),i=r(8765),s=r(9896);let a=function(){let{theme:e}=(0,o.Fg)();return n.jsx(s.default,{src:"../../images/icons/arrow.png",alt:"arrow",theme:"light"===e?i.Wb:i.$_})};var l=r(6085),u=r(8697);let c=function({children:e,htmlFor:t,role:r}){let{theme:s}=(0,o.Fg)();return n.jsx(u.default,{htmlFor:t,theme:"light"===s?i.Wb:i.$_,role:r,"aria-label":"Carregue o arquivo",children:e})},d=function({type:e,name:t,id:r,placeholder:s,required:a,onChange:u,value:d,accept:p}){let f=d?.replace(/^.*\\/,""),{theme:m}=(0,o.Fg)();return"file"===e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c,{htmlFor:t,role:"button","aria-label":"Carregue o arquivo",children:["Carregue o arquivo",n.jsx(l.default,{type:e,accept:p,name:t,id:r,placeholder:s,value:d||"",onChange:u,required:a,theme:"light"===m?i.Wb:i.$_})]}),n.jsx("p",{"aria-live":"polite",children:f})]}):n.jsx(l.default,{type:e,name:t,id:r,placeholder:s,value:d,onChange:u,required:a,theme:"light"===m?i.Wb:i.$_})};var p=r(4765),f=r(4870);let m=function({children:e,aria_live:t}){let{theme:r}=(0,o.Fg)();return n.jsx(f.default,{"aria-live":t,theme:"light"===r?i.Wb:i.$_,children:e})};var h=r(6642),g=r(2140)},8641:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.section`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    width: 350px;
    height: 220px;
    padding: 10px;
    border-radius: 15px;

    background-color: ${({theme:e})=>e.bgConverter};
    box-shadow: -2px 2px 4px 1px ${({theme:e})=>e.shadown};
    font-size: 14px;
    text-align: center;
    color: ${({theme:e})=>e.text};
    transition: .3s;

    & .divConversao {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        
    }

    & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        

        & .divConversao {
            display: flex;
            gap: 30px;
        }

        & img {
            width: 64px;
            height: 64px;
            filter: invert(${({theme:e})=>e.invert});
        }

        & .convertido {
            filter: invert(0);
        }
    }

    .botoes {
        gap: 5px;
    }

    @media screen and (min-width: 541px) {
        width: 45vw;
        height: 350px;
        font-size: 16px;
    }
`},6249:(e,t,r)=>{"use strict";r.d(t,{cq:()=>a,Gf:()=>l.FlexContainerAdapter});var n=r(7685),o=r(1838),i=r(8765),s=r(8641);let a=function({children:e}){let{theme:t}=(0,o.Fg)();return n.jsx(s.default,{theme:"light"===t?i.Wb:i.$_,children:e})};r(2481);var l=r(3690);r(5978)},5030:(e,t,r)=>{"use strict";r.d(t,{Q:()=>i,x:()=>s});var n=r(7685),o=r(3810);let i=(0,o.createContext)("");function s({children:e}){let[t,r]=(0,o.useState)([]);return n.jsx(i.Provider,{value:{unit:t,setUnit:r},children:e})}i.displayName="UnidadeSelecionada"},1838:(e,t,r)=>{"use strict";r.d(t,{Fg:()=>s.F,O2:()=>i.default,iH:()=>o.default,sL:()=>n.default});var n=r(1673),o=r(5125),i=r(2096),s=r(1949)},5125:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let n=function(e,t){switch(e.slug){case"tempo":return{seculo:.01,ano:1,mes:12,semana:52.143,dia:365,hora:8760,minuto:525600,segundo:31622400,milessegundo:31536e6};case"peso":return{quilograma:1,hectograma:10,decagrama:100,grama:1e3,decigrama:1e4,centigrama:1e5,miligrama:1e6,onca:35.274,libra:2.205};case"temperatura":return{celsius:1,Kelvin:274.15,fahrenheit:32};case"velocidade":return{"quilometro por hora":.2778,"metros por segundo":1,"milhas por hora":.44704,nós:.514444,pés:.3048};case"comprimento":return{quilometro:1,hectometro:10,decametro:100,metro:1e3,decimetro:1e4,centimetro:1e5,milimetro:1e6,milha:.621371,jarda:1094,pes:3281,polegada:39370};case"energia":return{gigawatts:1e-9,megawatts:1e-6,quilowatts:.001,watts:1,miliwatts:1e3,microwatts:1e6,nanowatts:1e9};case"documento":return{pdf:"pdf",docx:"docx",doc:"doc",xls:"xls",xlsx:"xlsx",ppt:"ppt",pptx:"pptx",txt:"txt"};case"moeda":return{USD:"D\xf3lar Americano",AUD:"D\xf3lar Australiano",EUR:"Euro",GBP:"Libra Esterlina",JPY:"Lene",CHF:"Franco Su\xed\xe7o",CAD:"D\xf3lar Canadense",CNY:"Renminbi",ARS:"Peso Argentino",TRY:"Lira Turca",BRL:"Real"};case"midia":return{"3gp":"3gp",mp4:"mp4",mkv:"mkv",mpeg:"mpeg",ogg:"ogg",webm:"webm",wmv:"wmv",mp3:"mp3",wav:"wav",m4a:"m4a",gif:"gif",jpeg:"jpeg",jpg:"jpg",png:"png",raw:"raw",webp:"webp"};default:return e}};var o=r(3810);let i=function(e){let[t,r]=(0,o.useReducer)(n,{slug:e});return(0,o.useEffect)(()=>{r({type:e})},[]),{namesOfUnits:Object.keys(t),valuesOfUnits:Object.values(t),state:t}}},1673:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(3810);async function o({number:e,originCoin:t,destinyCoin:r}){try{let n=process.env.EXCHANGERATE_KEY,o=`https://v6.exchangerate-api.com/v6/${n}/pair/${t}/${r}`,i=await fetch(o),s=await i.json();if(i.ok&&"success"===s.result){let t=s.conversion_rate;return`${(e*t).toLocaleString(r,{style:"currency",currency:r})}`}}catch(e){return console.log("N\xe3o foi poss\xedvel realizar a convers\xe3o de moedas",e),"N\xe3o foi poss\xedvel realizar a convers\xe3o de moedas"}return"Algo errado :("}async function i({unit:e,value:t,state:r,slug:n}){if("moeda"!==n){if(e){let[n,o]=e;if(r){if(r.hasOwnProperty(n)&&r.hasOwnProperty(o))return Number(r[o]/r[n]*Number(t));console.log("Unidades de origem ou destino n\xe3o encontradas.")}}}else{let[n,i]=e,s=Number(t),a=Object.keys(Object.fromEntries(Object.keys(r).filter(e=>r[e]===n).map(e=>[e,r[e]])))[0],l=Object.keys(Object.fromEntries(Object.keys(r).filter(e=>r[e]===i).map(e=>[e,r[e]])))[0];return await o({number:s,originCoin:a,destinyCoin:l})}return 0}async function s({unit:e,upload:t,taskID:r,apiKey:n}){let o=e[0],i=e[1];if(o&&i&&t)try{let e={tasks:{[`import-${r}`]:{operation:"import/upload"},[`task-${r}`]:{operation:"convert",input_format:o,output_format:i,input:[`import-${r}`],optimize_print:!0,include_markup:!1,bookmarks:!1},[`export-${r}`]:{operation:"export/url",input:[`task-${r}`],inline:!1,archive_multiple_files:!1}},tag:"jobbuilder"},t=await fetch("https://api.cloudconvert.com/v2/jobs",{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-type":"application/json"},body:JSON.stringify(e)});return[await t.json(),35]}catch(e){return console.log("Erro ao criar trabalho",e),["",-1]}}async function a({data:e,file:t}){try{let{url:r,parameters:n}=e.data.tasks[0].result.form,o=new FormData;for(let e in n)o.append(e,n[e]);return o.append("file",t),await fetch(r,{method:"POST",body:o}),[e,90]}catch(e){return console.log("Erro ao importar arquivo",e),["",-1]}}async function l({data:e,apiKey:t}){try{let r=e.data.tasks[2].id,n=`https://sync.api.cloudconvert.com/v2/tasks/${r}?include=payload`,o=await fetch(n,{method:"GET",headers:{Authorization:`Bearer ${t}`}});if(o.ok)return[(await o.json()).data.result.files[0].url,100]}catch(e){return console.log("Erro ao fornecer link de download",e),["",-1]}}var u=r(6636),c=r.n(u),d=r(6113),p=r.n(d);let f={randomUUID:p().randomUUID},m=new Uint8Array(256),h=m.length,g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).slice(1));let x=function(e,t,r){if(f.randomUUID&&!t&&!e)return f.randomUUID();let n=(e=e||{}).random||(e.rng||function(){return h>m.length-16&&(p().randomFillSync(m),h=0),m.slice(h,h+=16)})();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]}(n)};var v=r(1838);c().config();let b=function(e){let{state:t}=(0,v.iH)(e),[r,o]=(0,n.useState)(""),[u,c]=(0,n.useState)([]),{unit:d,setUnit:p}=(0,v.O2)(),[f,m]=(0,n.useState)(0),[h,g]=(0,n.useState)(""),[b,y]=(0,n.useState)(""),j=x();(0,n.useEffect)(()=>{p([h,b])},[b,h]);let _=async()=>{if(h&&b){if("documento"===e||"midia"===e){m(["",15]);try{let e=process.env.CONVERT_KEY,t=await s({unit:d,upload:u,taskID:j,apiKey:e});if(m(t),t&&-1!==t[1]){let r=t[0],n=u[0],o=await a({data:r,file:n});if(m(o),o&&-1!==o[1]){let t=await l({data:r,apiKey:e});m(t)}}}catch(e){console.error("Erro durante a convers\xe3o:",e)}}else m(await i({unit:d,value:r,state:t,slug:e}))}else alert("Uma ou mais unidades n\xe3o foram escolhidas")};return{setOrigin:g,setValue:o,setDestiny:y,setUpload:c,setResultOfConversion:m,value:r,unit:d,resultOfConversion:f,upload:u,handleValue:_,clear:()=>{document.querySelectorAll("select").forEach(e=>{e.value=""}),y(""),g(""),m(0),c([]),o("")}}}},2096:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(3810),o=r(5030);let i=function(){let{unit:e,setUnit:t}=(0,n.useContext)(o.Q);return{unit:e,setUnit:t}}},3397:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(7685),o=r(681),i=r(6249),s=r(1838);let a=function({params:e}){let{namesOfUnits:t}=(0,s.iH)(e.slug),{setDestiny:r,setOrigin:a,setUpload:l,upload:u,resultOfConversion:c,handleValue:d,clear:p}=(0,s.sL)(e.slug),f=u?u[1]:"",m=t?.map(e=>`.${e}`).join(", "),h=-1===c[1]?"Erro ao converter arquivo":"Clique em converter para inicar a convers\xe3o";return(0,n.jsxs)(i.Gf,{children:[(0,n.jsxs)(i.cq,{children:[n.jsx("div",{className:"divConversao container",children:n.jsx(o.f0,{type:"file",accept:m,name:"upload",id:"upload",value:f,required:!0,onChange:e=>l([e.target.files[0],e.target.value])})}),n.jsx("div",{className:"divConversao",children:(0,n.jsxs)("div",{className:"divConversao",children:[(0,n.jsxs)("div",{className:"divConversao container",children:[n.jsx("label",{htmlFor:"original",children:"Formato original"}),n.jsx(o.qz,{name:"original",id:"original",defaultValue:f?.replace(/[A-Za-z].*[.]/,""),arrayOfUnits:t,onChange:e=>a(e.target.value),setOrigin:a})]}),n.jsx(o.Eh,{}),(0,n.jsxs)("div",{className:"divConversao container",children:[n.jsx("label",{htmlFor:"destino",children:"Formato destinado"}),n.jsx(o.qz,{name:"destino",id:"destino",defaultValue:null,arrayOfUnits:t,onChange:e=>r(e.target.value)})]})]})}),(0,n.jsxs)("div",{className:"divConversao botoes",children:[n.jsx(o.zx,{onClick:()=>d(),type:"button",children:"Converter"}),n.jsx(o.zx,{type:"button",onClick:()=>p(),children:"limpar"})]})]}),n.jsx(i.cq,{children:n.jsx("div",{className:"divConversao container",children:c[1]>0&&c[1]<100?n.jsx(o.uj,{percentage:c[1]}):100===c[1]?(0,n.jsxs)(n.Fragment,{children:[n.jsx("div",{className:"divConversao",children:n.jsx("img",{src:"../../../images/icons/convertido.png",alt:"Convertido",className:"convertido"})}),n.jsx(o.zx,{onClick:()=>window.open(c[0],"_blank"),type:"button","aria-live":"assertive",children:"Download"})]}):n.jsx("p",{"aria-live":"polite",children:h})})})]})}},1178:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(7685),o=r(681),i=r(6249),s=r(1838);let a=function({params:e}){let t=e.slug,{namesOfUnits:r,valuesOfUnits:a}=(0,s.iH)(t),l="moeda"===t?a:r,{setDestiny:u,setOrigin:c,setValue:d,value:p,resultOfConversion:f,unit:m,handleValue:h,clear:g}=(0,s.sL)(e.slug);return(0,n.jsxs)(i.Gf,{children:[(0,n.jsxs)(i.cq,{children:[(0,n.jsxs)("div",{className:"divConversao container",children:[n.jsx("label",{htmlFor:"valor",children:"Valor"}),n.jsx(o.f0,{type:"number",name:"valor",accept:void 0,id:"valor",value:p,required:!0,onChange:e=>d(e.target.value),placeholder:"Digite o valor a ser convertido"})]}),n.jsx("div",{className:"divConversao",children:(0,n.jsxs)("div",{className:"divConversao",children:[(0,n.jsxs)("div",{className:"divConversao container",children:[n.jsx("label",{htmlFor:"origem",children:"Origem"}),n.jsx(o.qz,{name:"origem",id:"origem",defaultValue:null,arrayOfUnits:l,onChange:e=>c(e.target.value)})]}),n.jsx(o.Eh,{}),(0,n.jsxs)("div",{className:"divConversao container",children:[n.jsx("label",{htmlFor:"destino",children:"Destino"}),n.jsx(o.qz,{name:"destino",id:"destino",defaultValue:null,arrayOfUnits:l,onChange:e=>u(e.target.value)})]})]})}),(0,n.jsxs)("div",{className:"divConversao botoes",children:[n.jsx(o.zx,{onClick:()=>h(),type:"button",children:"Converter"}),n.jsx(o.zx,{type:"button",onClick:()=>g(),children:"limpar"})]})]}),n.jsx(i.cq,{children:(0,n.jsxs)("div",{className:"divConversao container",children:[n.jsx("p",{children:"Resultado"}),(0,n.jsxs)("div",{className:"divConversao",children:[n.jsx(o.oB,{"aria-live":"polite",children:f}),n.jsx(o.oB,{"aria-live":"polite",children:m?m[1]:""})]})]})})]})}},616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(7685),o=r(3810),i=r(4592);let s=i.ZP.button`
    width: 40px;
    height: 40px;
    border: none;
    background-color: ${({theme:e})=>e.body};
    border: 1px solid ${({theme:e})=>e.text};
    border-radius: 50%;
    padding: 10px;
    font-size: 24px;
    color: ${({theme:e})=>e.text};
    transition: 0.3s;
    cursor: pointer;
`,a=i.ZP.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
`;var l=r(1949),u=r(8765);let c=function(){let[e,t]=(0,o.useState)(!1),{theme:r}=(0,l.F)();(0,o.useEffect)(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]);let i=()=>{window.scrollY>100?t(!0):t(!1)};return n.jsx(a,{children:e&&n.jsx(s,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},theme:"light"===r?u.Wb:u.$_,children:"^"})})}},3628:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.button`
    background-color: ${({theme:e})=>e.bgCard};
    border: 1px solid ${({theme:e})=>e.text};
    border-radius: 15px;
    width: 100%;
    padding: 5px;
    font-family: inherit;
    font-size: 14px;
    color: ${({theme:e})=>e.text};
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: ${({theme:e})=>e.bgCardHover};
        color: ${({theme:e})=>e.textHover};
        border-color: ${({theme:e})=>e.textHover};
    }

    @media screen and (min-width: 541px) {
        max-width: 300px;
        font-size: 18px;
    }
`},1807:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(7685),o=r(8765),i=r(5817),s=r(3810);let a=function({children:e,routes:t,slug:r}){let{push:a}=(0,i.useRouter)(),l=(0,o.rx)(t,r);return(0,s.useEffect)(()=>{l||a(`/?404=not-found_${r}`)},[a,l,r]),(0,n.jsxs)(n.Fragment,{children:[!l&&null,l&&e]})}},171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(7685),o=r(4592),i=r(1949),s=r(8765);let a=o.ZP.header`
    display: flex;
    flex-direction: ${({menu:e})=>"true"===e?"column":"row"};
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    text-align: center;

    & img {
        width: 42px;
        height: 42px;
        cursor: pointer;
    }

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & div {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (min-width: 541px) {
        justify-content: space-between;
    }
`,l=o.ZP.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    border: none;
    color: ${({theme:e})=>e.text};
    background-color: ${({theme:e})=>e.text};
`;var u=r(2140);r(3810);let c=function({menu:e=!1}){let{theme:t,themeToggler:r}=(0,i.F)(),c=e=>{r(e)},d="dark"===t?"light":"dark",p="light"===t?"sol.png":"lua.png";return e?n.jsx(o.LC,{shouldForwardProp:e=>"menu"!==e,children:(0,n.jsxs)(a,{menu:e.toString(),children:[(0,n.jsxs)("div",{children:[n.jsx(u.xv,{children:"SN"}),(0,n.jsxs)("div",{children:[n.jsx("img",{src:`../../images/icons/${p}`,alt:"change theme",onClick:()=>c(d),role:"button"}),n.jsx(u.v2,{})]})]}),n.jsx(l,{theme:"light"===t?s.Wb:s.$_})]})}):n.jsx(o.LC,{shouldForwardProp:e=>"menu"!==e,children:(0,n.jsxs)(a,{menu:e.toString(),children:[n.jsx("span",{}),n.jsx(u.xv,{children:"Studium Nexus"}),n.jsx("img",{src:`../../images/icons/${p}`,alt:`${t} theme`,onClick:()=>c(d),role:"button"})]})})}},5584:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(7685),o=r(3810);let i=function({children:e,className:t}){let[r,i]=(0,o.useState)(!1),s=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(i(!0),e.unobserve(t.target))})});return s.current&&e.observe(s.current),()=>{e.disconnect()}},[]),n.jsx("p",{ref:s,style:{opacity:r?1:0,transition:"opacity 0.3s ease-in"},className:t||"",children:e})}},1210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.button`
    width: 42px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: nowrap;
    gap: 5px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 9999;
    

    .lines {
        background-color: ${({theme:e})=>e.text};
        border: 1px solid ${({theme:e})=>e.text};
        border-radius: 15px;
        z-index: 3;
    }

    .line1 {
        width: ${({isopen:e})=>"true"===e?"40px":"35px"};
        transform: rotate(
            ${({isopen:e})=>"true"===e?"45deg":"0"}
        ) translate(
            ${({isopen:e})=>"true"===e?"4px":"0"}
        );
        transition: .3s ease-in-out;
    }

    .line2 {
        display: ${({isopen:e})=>"true"===e?"none":"block"};
       width: 30px;
       transition: .3s ease-in-out;
    }

    .line3 {
        width: 40px;
        transform: rotate(
            ${({isopen:e})=>"true"===e?"-45deg":"0"}
        ) translate(
            ${({isopen:e})=>"true"===e?"4px":"0"}
        );
        transition: .3s ease-in-out;
    }
`},5193:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(7685),o=r(8736),i=r.n(o),s=r(146),a=r.n(s),l=r(5817),u=r(3810),c=r(4592),d=r(1949),p=r(8765);let f=c.ZP.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    width: 100vw;
    height: 100vh;
    top: 0;
    right: ${({isopen:e})=>"true"===e?"0":"-100vw"};
    font-family: inherit;

    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    z-index: 2;
    transition: right .3s ease-in-out;

    a {
        text-decoration: none;
        color: ${({theme:e})=>e.text};
        cursor: pointer;
    }

    .active {
        text-decoration: underline !important;
    }
`;var m=r(1210),h=r(9957);let g=function(){let e=(0,l.usePathname)(),[t,r]=(0,u.useState)(!1),{theme:o}=(0,d.F)();return(0,n.jsxs)(c.LC,{shouldForwardProp:e=>"isopen"!==e,children:[(0,n.jsxs)(m.default,{isopen:t.toString(),onClick:()=>r(!t),theme:"light"===o?p.Wb:p.$_,"aria-label":"menu de navega\xe7\xe3o",type:"button","aria-haspopup":t,"aria-controls":"menuNav",children:[n.jsx("div",{className:"lines line1"}),n.jsx("div",{className:"lines line2"}),n.jsx("div",{className:"lines line3"})]}),(0,n.jsxs)(f,{isopen:t.toString(),className:i().className,id:"menuNav",theme:"light"===o?p.Wb:p.$_,role:"menu",children:[n.jsx(a(),{href:"/",children:"Home"}),h.map(t=>n.jsx(a(),{className:`link ${e===t.link?"active":""}`,href:t.link,role:"menuitem",children:t.title},t.id))]})]})}},8256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.h1`
    font-weight: bold;
    font-display: swap;
    text-align: center;
`},2140:(e,t,r)=>{"use strict";r.d(t,{zx:()=>a,v2:()=>l.default,xv:()=>p});var n=r(7685),o=r(1949),i=r(3628),s=r(8765);r(3810);let a=function({children:e,onClick:t,role:r,type:a}){let{theme:l}=(0,o.F)();return n.jsx(i.default,{onClick:t,theme:"light"===l?s.Wb:s.$_,role:r,type:a,children:e})};r(171);var l=r(5193);r(1210);var u=r(5720),c=r.n(u),d=r(8256);let p=function({children:e}){return n.jsx(d.default,{className:c().className,children:e})};r(616),r(1807),r(5584),r(9957)},2481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7685),o=r(1949),i=r(8765),s=r(4592);let a=s.ZP.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    gap: 30px;
    padding: 5px;
    text-align: center;
    color: ${({theme:e})=>e.text};
    background-color: ${({theme:e})=>e.body};
    transition: .3s;

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }
`;r(3810);let l=function({children:e}){let{theme:t}=(0,o.F)();return n.jsx(a,{theme:"light"===t?i.Wb:i.$_,children:e})}},3690:(e,t,r)=>{"use strict";r.r(t),r.d(t,{FlexContainerAdapter:()=>s,FlexContainerCenter:()=>i,FlexContainerSpaceBTW:()=>o});var n=r(4592);let o=n.ZP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`,i=n.ZP.main`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,s=n.ZP.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (min-width: 541px) {
        flex-direction: row;
    }
`},5978:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(4592);let o=n.ZP.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    text-align: center;
    border-radius: 15px;
    transition: .3s;

    @media screen and (min-width: 541px) {
        max-width: 350px;
        font-size: 16px;
    }
`},1949:(e,t,r)=>{"use strict";r.d(t,{F:()=>n.default});var n=r(7628)},7628:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(3810);r(7685);var o=r(4592);o.vJ`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body { 
        background-color: ${({theme:e})=>e.body};
        transition: .3s;
    }

    p {
        font-size: 14px;
    }

    @media screen and (min-width: 541px) {
        p {
            font-size: 16px;
        }

        h2 {
            font-size: 22px;
        }

        h3 {
            font-size: 18px;
        }
    }
`,r(8765);let i=(0,n.createContext)("light");i.displayName="Theme";let s=function(){let{theme:e,setTheme:t,themeToggler:r}=(0,n.useContext)(i);return{theme:e,setTheme:t,themeToggler:r}}},5339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(7685),o=r(3810),i=r(5817),s=r(4592);function a({children:e}){let[t]=(0,o.useState)(()=>new s.qH);return(0,i.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),n.jsx(n.Fragment,{children:e})}),n.jsx(s.LC,{sheet:t.instance,children:e})}},8765:(e,t,r)=>{"use strict";r.d(t,{$_:()=>o,Wb:()=>i,rx:()=>n});let n=function(e,t){return Object.keys(e).includes(t)},o={body:"#2D2D2D",text:"#FFFFFF",textHover:"#000000",bgCard:"#292929",bgCardHover:"#f6f6f6",shadown:"rgba(89, 89, 89, 0.25)",bgInput:"#2D2D2D",bgSearch:"#282828",bgButton:"#2D2D2D",bgConverter:"#292929",invert:1,invertHover:0},i={body:"#FFFFFF",text:"#000000",textHover:"#FFFFFF",bgCard:"#f6f6f6",bgCardHover:"#292929",shadown:"rgba(0, 0, 0, 0.25)",bgInput:"#FFFFFF",bgSearch:"#EFEFEF",bgButton:"#D9D9D9",bgConverter:"#EFEFEF",invert:0,invertHover:1}},6636:(e,t,r)=>{"use strict";let n=r(7147),o=r(1017),i=r(2037),s=r(6113),a=r(5592).version,l=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function u(e){console.log(`[dotenv@${a}][DEBUG] ${e}`)}function c(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function d(e){let t=null;if(e&&e.path&&e.path.length>0){if(Array.isArray(e.path))for(let r of e.path)n.existsSync(r)&&(t=r.endsWith(".vault")?r:`${r}.vault`);else t=e.path.endsWith(".vault")?e.path:`${e.path}.vault`}else t=o.resolve(process.cwd(),".env.vault");return n.existsSync(t)?t:null}function p(e){return"~"===e[0]?o.join(i.homedir(),e.slice(1)):e}let f={configDotenv:function(e){let t;let r=o.resolve(process.cwd(),".env"),i="utf8",s=!!(e&&e.debug);e&&e.encoding?i=e.encoding:s&&u("No encoding is specified. UTF-8 is used by default");let a=[r];if(e&&e.path){if(Array.isArray(e.path))for(let t of(a=[],e.path))a.push(p(t));else a=[p(e.path)]}let l={};for(let r of a)try{let t=f.parse(n.readFileSync(r,{encoding:i}));f.populate(l,t,e)}catch(e){s&&u(`Failed to load ${r} ${e.message}`),t=e}let c=process.env;return(e&&null!=e.processEnv&&(c=e.processEnv),f.populate(c,l,e),t)?{parsed:l,error:t}:{parsed:l}},_configVault:function(e){console.log(`[dotenv@${a}][INFO] Loading env from encrypted .env.vault`);let t=f._parseVault(e),r=process.env;return e&&null!=e.processEnv&&(r=e.processEnv),f.populate(r,t,e),{parsed:t}},_parseVault:function(e){let t;let r=d(e),n=f.configDotenv({path:r});if(!n.parsed){let e=Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);throw e.code="MISSING_DATA",e}let o=c(e).split(","),i=o.length;for(let e=0;e<i;e++)try{let r=o[e].trim(),i=function(e,t){let r;try{r=new URL(t)}catch(e){if("ERR_INVALID_URL"===e.code){let e=Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw e.code="INVALID_DOTENV_KEY",e}throw e}let n=r.password;if(!n){let e=Error("INVALID_DOTENV_KEY: Missing key part");throw e.code="INVALID_DOTENV_KEY",e}let o=r.searchParams.get("environment");if(!o){let e=Error("INVALID_DOTENV_KEY: Missing environment part");throw e.code="INVALID_DOTENV_KEY",e}let i=`DOTENV_VAULT_${o.toUpperCase()}`,s=e.parsed[i];if(!s){let e=Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${i} in your .env.vault file.`);throw e.code="NOT_FOUND_DOTENV_ENVIRONMENT",e}return{ciphertext:s,key:n}}(n,r);t=f.decrypt(i.ciphertext,i.key);break}catch(t){if(e+1>=i)throw t}return f.parse(t)},config:function(e){if(0===c(e).length)return f.configDotenv(e);let t=d(e);if(!t){var r;return r=`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`,console.log(`[dotenv@${a}][WARN] ${r}`),f.configDotenv(e)}return f._configVault(e)},decrypt:function(e,t){let r=Buffer.from(t.slice(-64),"hex"),n=Buffer.from(e,"base64"),o=n.subarray(0,12),i=n.subarray(-16);n=n.subarray(12,-16);try{let e=s.createDecipheriv("aes-256-gcm",r,o);return e.setAuthTag(i),`${e.update(n)}${e.final()}`}catch(n){let e=n instanceof RangeError,t="Invalid key length"===n.message,r="Unsupported state or unable to authenticate data"===n.message;if(e||t){let e=Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw e.code="INVALID_DOTENV_KEY",e}if(r){let e=Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw e.code="DECRYPTION_FAILED",e}throw n}},parse:function(e){let t;let r={},n=e.toString();for(n=n.replace(/\r\n?/mg,"\n");null!=(t=l.exec(n));){let e=t[1],n=t[2]||"",o=(n=n.trim())[0];n=n.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),'"'===o&&(n=(n=n.replace(/\\n/g,"\n")).replace(/\\r/g,"\r")),r[e]=n}return r},populate:function(e,t,r={}){let n=!!(r&&r.debug),o=!!(r&&r.override);if("object"!=typeof t){let e=Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw e.code="OBJECT_REQUIRED",e}for(let r of Object.keys(t))Object.prototype.hasOwnProperty.call(e,r)?(!0===o&&(e[r]=t[r]),n&&(!0===o?u(`"${r}" is already defined and WAS overwritten`):u(`"${r}" is already defined and was NOT overwritten`))):e[r]=t[r]}};e.exports.configDotenv=f.configDotenv,e.exports._configVault=f._configVault,e.exports._parseVault=f._parseVault,e.exports.config=f.config,e.exports.decrypt=f.decrypt,e.exports.parse=f.parse,e.exports.populate=f.populate,e.exports=f},4547:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(7294);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},188:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(3444),o=r(7685),i=n._(r(3810)),s=r(8945),a=r(9906),l=r(9430),u=r(4976),c=r(4547),d=r(4482),p=r(7874),f=r(1980),m=r(188),h=r(9517),g=r(4967);function x(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let v=i.default.forwardRef(function(e,t){let r,n;let{href:l,as:v,children:b,prefetch:y=null,passHref:j,replace:_,shallow:w,scroll:C,locale:P,onClick:N,onMouseEnter:E,onTouchStart:S,legacyBehavior:$=!1,...k}=e;r=b,$&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let O=i.default.useContext(d.RouterContext),M=i.default.useContext(p.AppRouterContext),D=null!=O?O:M,R=!O,F=!1!==y,U=null===y?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:T,as:I}=i.default.useMemo(()=>{if(!O){let e=x(l);return{href:e,as:v?x(v):e}}let[e,t]=(0,s.resolveHref)(O,l,!0);return{href:e,as:v?(0,s.resolveHref)(O,v):t||e}},[O,l,v]),A=i.default.useRef(T),L=i.default.useRef(I);$&&(n=i.default.Children.only(r));let z=$?n&&"object"==typeof n&&n.ref:t,[H,q,V]=(0,f.useIntersection)({rootMargin:"200px"}),G=i.default.useCallback(e=>{(L.current!==I||A.current!==T)&&(V(),L.current=I,A.current=T),H(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[I,z,T,V,H]);i.default.useEffect(()=>{},[I,T,q,P,F,null==O?void 0:O.locale,D,R,U]);let W={ref:G,onClick(e){$||"function"!=typeof N||N(e),$&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,r,n,o,s,l,u,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let p=()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:s,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?i.default.startTransition(p):p()}(e,D,T,I,_,w,C,P,R)},onMouseEnter(e){$||"function"!=typeof E||E(e),$&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){$||"function"!=typeof S||S(e),$&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,u.isAbsoluteUrl)(I))W.href=I;else if(!$||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&(0,m.getDomainLocale)(I,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);W.href=t||(0,h.addBasePath)((0,c.addLocale)(I,e,null==O?void 0:O.defaultLocale))}return $?i.default.cloneElement(n,W):(0,o.jsx)("a",{...k,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4805:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8945:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return d}});let n=r(552),o=r(9430),i=r(4417),s=r(4976),a=r(7294),l=r(9906),u=r(1804),c=r(821);function d(e,t,r){let d;let p="string"==typeof t?t:(0,o.formatWithValidation)(t),f=p.match(/^[a-zA-Z]{1,}:\/\//),m=f?p.slice(f[0].length):p;if((m.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+p+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,s.normalizeRepeatedSlashes)(m);p=(f?f[0]:"")+t}if(!(0,l.isLocalURL)(p))return r?[p]:p;try{d=new URL(p.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){d=new URL("/","http://n")}try{let e=new URL(p,d);e.pathname=(0,a.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:s,params:a}=(0,c.interpolateAs)(e.pathname,e.pathname,r);s&&(t=(0,o.formatWithValidation)({pathname:s,hash:e.hash,query:(0,i.omit)(r,a)}))}let s=e.origin===d.origin?e.href.slice(e.origin.length):e.href;return r?[s,t||s]:s}catch(e){return r?[p]:p}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1980:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(3810),o=r(4805),i="function"==typeof IntersectionObserver,s=new Map,a=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!i,[c,d]=(0,n.useState)(!1),p=(0,n.useRef)(null),f=(0,n.useCallback)(e=>{p.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(u||c)return;let e=p.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),s.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,c,p.current]),[f,c,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4482:(e,t,r)=>{"use strict";e.exports=r(943).vendored.contexts.RouterContext},178:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function o(e){return r.test(e)?e.replace(n,"\\$&"):e}},9430:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},urlObjectKeys:function(){return s},formatWithValidation:function(){return a}});let n=r(4816)._(r(552)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",s=e.pathname||"",a=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==u?(u="//"+(u||""),s&&"/"!==s[0]&&(s="/"+s)):u||(u=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+i+u+(s=s.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return i(e)}},1804:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let n=r(2433),o=r(2113)},821:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let n=r(8740),o=r(6533);function i(e,t,r){let i="",s=(0,o.getRouteRegex)(e),a=s.groups,l=(t!==e?(0,n.getRouteMatcher)(s)(t):"")||r;i=e;let u=Object.keys(a);return u.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=a[e],o="["+(r?"...":"")+e+"]";return n&&(o=(t?"":"/")+"["+o+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(i=i.replace(o,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:u,result:i}}},2113:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return i}});let n=r(494),o=/\/\[[^/]+?\](?=\/|$)/;function i(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},9906:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(4976),o=r(8977);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},4417:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},552:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o},assign:function(){return i}})},8740:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let n=r(4976);function o(e){let{re:t,groups:r}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},s={};return Object.keys(r).forEach(e=>{let t=r[e],n=o[t.pos];void 0!==n&&(s[e]=~n.indexOf("/")?n.split("/").map(e=>i(e)):t.repeat?[i(n)]:i(n))}),s}}},6533:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return d},getNamedMiddlewareRegex:function(){return p}});let n=r(494),o=r(178),i=r(3370);function s(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function a(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),r={},a=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:n,repeat:l}=s(i[1]);return r[e]={pos:a++,repeat:l,optional:n},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=s(i[1]);return r[e]={pos:a++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=a(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function u(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:a}=e,{key:l,optional:u,repeat:c}=s(n),d=l.replace(/\W/g,"");a&&(d=""+a+d);let p=!1;(0===d.length||d.length>30)&&(p=!0),isNaN(parseInt(d.slice(0,1)))||(p=!0),p&&(d=r()),a?i[d]=""+a+l:i[d]=l;let f=t?(0,o.escapeStringRegexp)(t):"";return c?u?"(?:/"+f+"(?<"+d+">.+?))?":"/"+f+"(?<"+d+">.+?)":"/"+f+"(?<"+d+">[^/]+?)"}function c(e,t){let r;let s=(0,i.removeTrailingSlash)(e).slice(1).split("/"),a=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:s.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&i){let[r]=e.split(i[0]);return u({getSafeRouteKey:a,interceptionMarker:r,segment:i[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return i?u({getSafeRouteKey:a,segment:i[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function d(e,t){let r=c(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function p(e,t){let{parameterizedRoute:r}=a(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(n?"(?:(/.*)?)":"")+"$"}}},2433:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let r=o.slice(1,-1),s=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),s=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function i(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(s){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,r),this.optionalRestSlugName=r,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,r),this.restSlugName=r,o="[...]"}}else{if(s)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,r),this.slugName=r,o="[]"}}this.children.has(o)||this.children.set(o,new r),this.children.get(o)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},4976:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return i},getLocationOrigin:function(){return s},getURL:function(){return a},getDisplayName:function(){return l},isResSent:function(){return u},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return d},SP:function(){return p},ST:function(){return f},DecodeError:function(){return m},NormalizeError:function(){return h},PageNotFoundError:function(){return g},MissingStaticPage:function(){return x},MiddlewareNotFoundError:function(){return v},stringifyError:function(){return b}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function s(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=s();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function d(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await d(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let p="undefined"!=typeof performance,f=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class x extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},1152:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(6491),o=r(599);let i=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\app\providers.tsx`),{__esModule:s,$$typeof:a}=i,l=i.default,u=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\lib\registry.tsx`),{__esModule:c,$$typeof:d}=u,p=u.default;function f({children:e}){return n.jsx(n.Fragment,{children:n.jsx(p,{children:n.jsx(l,{children:e})})})}},8949:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eO});var n=r(6491),o=r(599);let i=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\hooks\useConverter\index.tsx`),{__esModule:s,$$typeof:a}=i;i.default;let l=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\hooks\useConverterReducer\index.tsx`),{__esModule:u,$$typeof:c}=l;l.default;let d=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\hooks\useUnitsSelectedContext\index.tsx`),{__esModule:p,$$typeof:f}=d;d.default;let m=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\hooks\useTheme\index.tsx`),{__esModule:h,$$typeof:g}=m;m.default;let x=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\components\Arrow\Arrow.style.tsx`),{__esModule:v,$$typeof:b}=x;x.default;let y=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\components\InputConverter\InputConverter.style.tsx`),{__esModule:j,$$typeof:_}=y;y.default;let w=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\components\InputConverter\LabelFileInput\LabelFileInput.style.tsx`),{__esModule:C,$$typeof:P}=w;w.default;let N=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\components\LoadingBar\index.tsx`),{__esModule:E,$$typeof:S}=N;N.default;let $=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\components\ResultConverter\ResultConverter.style.tsx`),{__esModule:k,$$typeof:O}=$;$.default;let M=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\components\SelectUnit\index.tsx`),{__esModule:D,$$typeof:R}=M;M.default;let F=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Button\Button.style.tsx`),{__esModule:U,$$typeof:T}=F;F.default,r(1367);let I=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Header\index.tsx`),{__esModule:A,$$typeof:L}=I,z=I.default,H=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Menu\index.tsx`),{__esModule:q,$$typeof:V}=H;H.default;let G=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Menu\MenuButton\index.tsx`),{__esModule:W,$$typeof:Y}=G;G.default;let B=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\TitleNicoMoji\TitleNicoMoji.style.tsx`),{__esModule:K,$$typeof:Z}=B;B.default;let J=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\BackToTop\index.tsx`),{__esModule:Q,$$typeof:X}=J,ee=J.default,et=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\ExistingRoutes\index.tsx`),{__esModule:er,$$typeof:en}=et,eo=et.default,ei=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\LazyLoadedText\index.tsx`),{__esModule:es,$$typeof:ea}=ei;ei.default;let el={tempo:"tempo",peso:"peso",temperatura:"temperatura",velocidade:"velocidade",comprimento:"comprimento",energia:"energia",documento:"documento",moeda:"moeda",midia:"midia"},eu=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\containers\ConverterContainer\ConverterContainer.style.tsx`),{__esModule:ec,$$typeof:ed}=eu;eu.default;let ep=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\AppContainer\index.tsx`),{__esModule:ef,$$typeof:em}=ep,eh=ep.default,eg=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx`),{__esModule:ex,$$typeof:ev}=eg;eg.default,(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx#FlexContainerSpaceBTW`);let eb=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx#FlexContainerCenter`);(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx#FlexContainerAdapter`);let ey=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\ResultContainer\index.tsx`),{__esModule:ej,$$typeof:e_}=ey;ey.default;let ew=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\screens\DocMidiaConversao\index.tsx`),{__esModule:eC,$$typeof:eP}=ew,eN=ew.default,eE=(0,o.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\converter-app\src\screens\GeneralConvert\index.tsx`),{__esModule:eS,$$typeof:e$}=eE,ek=eE.default,eO=function({params:e}){let t=e.slug;return n.jsx(eo,{slug:t,routes:el,children:(0,n.jsxs)(eh,{children:[n.jsx(z,{menu:!0}),(0,n.jsxs)(eb,{children:[(0,n.jsxs)("h2",{children:["Converter ",t]}),"documento"===t||"midia"===t?n.jsx(eN,{params:e}):n.jsx(ek,{params:e})]}),n.jsx(ee,{})]})})}},9957:e=>{"use strict";e.exports=JSON.parse('[{"id":"1","img":"../../images/icons/tempo.png","title":"Conversor de Tempo","link":"/conversor/tempo","type":"conversor"},{"id":"2","img":"../../images/icons/peso.png","title":"Conversor de Peso","link":"/conversor/peso","type":"conversor"},{"id":"3","img":"../../images/icons/temperatura.png","title":"Conversor de Temperatura","link":"/conversor/temperatura","type":"conversor"},{"id":"4","img":"../../images/icons/moeda.png","title":"Conversor de Moeda","link":"/conversor/moeda","type":"conversor"},{"id":"5","img":"../../images/icons/velocidade.png","title":"Conversor de Velocidade","link":"/conversor/velocidade","type":"conversor"},{"id":"6","img":"../../images/icons/comprimento.png","title":"Conversor de Comprimento","link":"/conversor/comprimento","type":"conversor"},{"id":"7","img":"../../images/icons/documento.png","title":"Conversor de Documento","link":"/conversor/documento","type":"conversor"},{"id":"8","img":"../../images/icons/energia.png","title":"Conversor de Energia","link":"/conversor/energia","type":"conversor"},{"id":"9","img":"../../images/icons/midia.png","title":"Conversor de M\xeddia","link":"/conversor/midia","type":"conversor"},{"id":"10","img":"../../images/icons/bhaskara.png","title":"Formula de Bhaskara","link":"/formula/bhaskara","type":"formula"},{"id":"11","img":"../../images/icons/mediaAritmetica.png","title":"M\xe9dia Aritm\xe9tica","link":"/formula/media-aritmetica","type":"formula"},{"id":"12","img":"../../images/icons/jurosSimples.png","title":"Juros Simples","link":"/formula/juros-simples","type":"formula"}]')},5592:e=>{"use strict";e.exports=JSON.parse('{"name":"dotenv","version":"16.4.5","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://dotenvx.com","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3","decache":"^4.6.1","sinon":"^14.0.1","standard":"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0","tap":"^16.3.0","tar":"^6.1.11","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}')}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[233],()=>r(9528));module.exports=n})();