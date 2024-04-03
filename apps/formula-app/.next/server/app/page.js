(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2781:e=>{"use strict";e.exports=require("stream")},8736:e=>{e.exports={style:{fontFamily:"'__Montserrat_Alternates_47f38f', '__Montserrat_Alternates_Fallback_47f38f'",fontWeight:300,fontStyle:"normal"},className:"__className_47f38f"}},5720:e=>{e.exports={style:{fontFamily:"'__NicoMoji_77a177', '__NicoMoji_Fallback_77a177'",fontWeight:300},className:"__className_77a177",variable:"__variable_77a177"}},8791:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>d,routeModule:()=>p,tree:()=>u});var n=r(9441),i=r(1498),s=r(6580),a=r.n(s),o=r(5511),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8762)),"C:\\Users\\Marcos\\Documents\\GitHub\\Studium-Nexus\\apps\\formula-app\\src\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,2411)),"C:\\Users\\Marcos\\Documents\\GitHub\\Studium-Nexus\\apps\\formula-app\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,3250,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\Users\\Marcos\\Documents\\GitHub\\Studium-Nexus\\apps\\formula-app\\src\\app\\page.tsx"],c="/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},5572:(e,t,r)=>{Promise.resolve().then(r.bind(r,705)),Promise.resolve().then(r.bind(r,5070)),Promise.resolve().then(r.bind(r,7538)),Promise.resolve().then(r.bind(r,5215)),Promise.resolve().then(r.bind(r,9899)),Promise.resolve().then(r.bind(r,6600)),Promise.resolve().then(r.bind(r,4780)),Promise.resolve().then(r.bind(r,8983)),Promise.resolve().then(r.bind(r,849)),Promise.resolve().then(r.bind(r,9558)),Promise.resolve().then(r.bind(r,5269)),Promise.resolve().then(r.bind(r,2615)),Promise.resolve().then(r.bind(r,616)),Promise.resolve().then(r.bind(r,3628)),Promise.resolve().then(r.bind(r,1807)),Promise.resolve().then(r.bind(r,171)),Promise.resolve().then(r.bind(r,5584)),Promise.resolve().then(r.bind(r,5193)),Promise.resolve().then(r.bind(r,1210)),Promise.resolve().then(r.bind(r,8256)),Promise.resolve().then(r.bind(r,2481)),Promise.resolve().then(r.bind(r,3690)),Promise.resolve().then(r.bind(r,5978)),Promise.resolve().then(r.bind(r,7628))},1638:(e,t,r)=>{Promise.resolve().then(r.bind(r,5339))},2215:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9489,23)),Promise.resolve().then(r.t.bind(r,6225,23)),Promise.resolve().then(r.t.bind(r,5964,23)),Promise.resolve().then(r.t.bind(r,5804,23)),Promise.resolve().then(r.t.bind(r,7255,23)),Promise.resolve().then(r.t.bind(r,1021,23))},705:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .indentFormula {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0;
        text-align: center;
        text-indent: 0;
        & span {
            width: 200px;
        }
    
        & .divider {
            border-top: 1px solid ${({theme:e})=>e.text};
        }
    }

`},5070:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.img`
    filter: invert(${({theme:e})=>e.invert});
`},7538:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.input`
    border: none;
    border-radius: 15px;

    width: ${({width:e})=>e}px;
    padding: 8px;
    background-color: ${({theme:e})=>e.bgInput};
    font-family: inherit;
    font-size: 14px;
    text-align: center;
    color: ${({theme:e})=>e.text};
    transition: .3s;

    &:focus {
        outline: none;
    }

    @media screen and (min-width: 541px) {
        font-size: 16px;
    }
`},5215:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7685),i=r(1838),s=r(8765),a=r(4592);let o=a.ZP.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    
    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 50px;
        padding: 10px;
        border-radius: 15px;
        background-color: ${({theme:e})=>e.body};
        font-size: 14px;
        text-decoration: none;
        color: ${({theme:e})=>e.text};
        cursor: pointer;
        transition: .3s;

        &:hover {
            transform: translate(-1px, -1px);
            transition: .3s;
        }

        &::after {
            content: '▸';
            margin-left: 5px;
            filter:  ${({theme:e})=>e.invert};
        }
    }

    @media screen and (min-width: 541px) {
        & a {
            width: 200px;
            font-size: 16px;
        }
    }

`,l=function(){let{theme:e}=(0,i.F)(),t=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})};return(0,n.jsxs)(o,{theme:"light"===e?s.Wb:s.$_,children:[n.jsx("a",{onClick:()=>t("como-foi-criada"),href:"#",children:"Como foi criada"}),n.jsx("a",{onClick:()=>t("passo-a-passo"),href:"#",children:"Como chegar no resultado"})]})}},9899:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    text-align: center;
    word-break: normal;
    border-radius: 15px;
    color: ${({theme:e})=>e.text};
    transition: .3s;

    @media screen and (min-width: 541px) {
        max-width: 350px;
        font-size: 16px;
    }
`},5694:(e,t,r)=>{"use strict";r.d(t,{zx:()=>m.zx,Xz:()=>o,aN:()=>u,N3:()=>m.N3,in:()=>c});var n=r(7685),i=r(1838),s=r(8765),a=r(705);let o=function({children:e,aria_label:t,aria_live:r}){let{theme:o}=(0,i.F)();return n.jsx(a.default,{"aria-label":t,"aria-live":r,theme:"light"===o?s.Wb:s.$_,children:e})};r(5070);var l=r(7538);let u=function({type:e,placeholder:t,value:r,onChange:a,required:o=!1,aria_label:u,width:d}){let{theme:c}=(0,i.F)();return n.jsx(l.default,{type:e,placeholder:t,value:r,onChange:a,required:o,theme:"light"===c?s.Wb:s.$_,"aria-label":u,width:d})};r(5215);var d=r(9899);let c=function({children:e}){let{theme:t}=(0,i.F)();return n.jsx(d.default,{"aria-live":"assertive",theme:"light"===t?s.Wb:s.$_,children:e})};var m=r(2140)},6600:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`},4780:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`},8983:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7685),i=r(1838),s=r(8765),a=r(4592);let o=a.ZP.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 950px;
    height: 100%;
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    background-color: ${({theme:e})=>e.bgCard};

    h1 {
        font-size: 24px;
    }

    & .botoes {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 100%;
    }
`,l=function({children:e}){let{theme:t}=(0,i.F)();return n.jsx(o,{theme:"light"===t?s.Wb:s.$_,children:e})}},2171:(e,t,r)=>{"use strict";r.d(t,{DG:()=>n.default,fv:()=>i.default,il:()=>s.default});var n=r(6600),i=r(4780);r(8983),r(2481),r(3690);var s=r(5978)},1838:(e,t,r)=>{"use strict";r.d(t,{F:()=>i.F,H:()=>n.default});var n=r(849),i=r(1949)},849:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});let n=function(e){if(e.includes("+")){let t=e.split("+").map(e=>{let t=Number(e);return isNaN(t)?0:t}),r=t.length,n=t.reduce((e,t)=>e+t)/r;return Number.isInteger(n)?n:n.toFixed(2)}return"Certifique-se de passar '+' depois de cada n\xfamero"},i=function(e){let[t,r,n]=e,i=r*r-4*t*n;if(0===i)return-r/(2*t);if(i>0){let e=Math.sqrt(i);return[(-r+e)/(2*t),(-r-e)/(2*t)]}return isNaN(i)?"N\xe3o foi poss\xedvel realizar o calculo, certifique-se de que forneceu os valores de todos os coeficientes.":`O discriminante \xe9 igual a ${i} e, portanto, n\xe3o pode ser calculado pois \xe9 menor que zero.`};var s=r(9558),a=r(5269),o=r(3810),l=r(2615);a.default,s.default,l.default;let u=function(e){let[t,r,n]=e,i=t*n*r;return[t+i,i]},d=function(){let[e,t]=(0,o.useState)(),[r,s]=(0,o.useState)([]),a={bhaskara:()=>i([r[0],r[1],r[2]]),"media-aritmetica":()=>n(r[0]),"juros-simples":()=>u(r)};return{values:r,result:e,addNewValue:(e,t)=>{let n=[...r];n[e]=t,s(n)},calculate:e=>{e&&t(a[e])},clear:()=>{t(""),s([])}}}},9558:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(7685),i=r(1838),s=r(4592);let a=s.ZP.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: justify;
    text-indent: 10px;

    h2 {
        text-indent: 0;
        margin-bottom: 0;
    }
    
    & h3 {
        font-size: 20px;
        text-align: center;
        text-indent: 0;
        width: 100%;
        margin: 0;
    }

    & p {
        max-width: 700px;
    }

    & ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            width: 100%;
            text-indent: 0;
            font-size: 14px;

            & p {
                text-align: center;
            }
        }
    }

    
`;var o=r(5694),l=r(2171),u=r(5817);let d=function(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h3",{id:"#como-foi-criada",children:"Como Foi Criada?"}),n.jsx(o.N3,{className:"explantion",children:"A m\xe9dia aritm\xe9tica remonta \xe0 antiguidade e n\xe3o h\xe1 um criador ou evento espec\xedfico associado a ela. "}),(0,n.jsxs)(o.N3,{children:["A l\xf3gica \xe9 bem simples: somar todos os valores em um conjunto e depois dividir pela quantidade de valores presentes, ou seja, se tiver uma soma de ",n.jsx("i",{children:"n"})," n\xfameros, essa soma ser\xe1 dividia por ",n.jsx("i",{children:"n"})]})]})},c=function({values:e}){let t=e?e.reduce((e,t)=>e+t):0,r=e?t/e.length:0;return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h3",{id:"passo-a-passo",children:"Como Chegar no Resultado"}),n.jsx("ol",{type:"1",children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("li",{children:["Primeiro verificamos quantos n\xfameros temos somando, neste caso temos ",n.jsx("strong",{children:e.length})," n\xfameros."]}),(0,n.jsxs)("li",{children:["Agora realizamos a soma de todos os n\xfameros. Com isso, obtemos o resultado ",n.jsx("strong",{children:t})]}),(0,n.jsxs)("li",{children:["Por fim, basta dividir este resultado (",t,") por ",n.jsx("strong",{children:e.length})," e, assim, o teremos como resultado: ",n.jsx("strong",{children:r})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("li",{children:["Primeiro verificamos quantos n\xfameros temos somando, neste caso temos ",n.jsx("i",{children:"n"})," n\xfameros."]}),(0,n.jsxs)("li",{children:["Agora realizamos a soma de todos os n\xfameros.",(0,n.jsxs)("p",{children:["x",n.jsx("sub",{children:"1"})," + x",n.jsx("sub",{children:"2"})," + x",n.jsx("sub",{children:"3"})," + ... + x",n.jsx("sub",{children:"n"})]})]}),(0,n.jsxs)("li",{children:["Por fim, basta dividir este resultado  por ",n.jsx("i",{children:"n"}),"."]})]})})]})},m=function(){let{slug:e}=(0,u.useParams)(),{values:t,result:r,calculate:s,addNewValue:m,clear:p}=(0,i.H)(),f=t[0]?.split("+").map(e=>{let t=Number(e);return isNaN(t)?0:t}),h="object"==typeof f?0===f[0]?void 0:f:void 0;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a,{children:[(0,n.jsxs)(l.DG,{children:[n.jsx("h2",{children:"Insira a soma dos n\xfameros"}),n.jsx(o.aN,{type:"text",placeholder:"Insira a soma dos n\xfameros (a1 + a2 + a3...)",onChange:e=>m(0,e.target.value),aria_label:"Insira a soma dos n\xfameros da m\xe9dia aritm\xe9tica",value:t[0]?t[0]:"",required:!0,width:330}),(0,n.jsxs)(o.Xz,{aria_label:"Form\xfala de M\xe9dia Aritm\xe9tica",children:["M =",(0,n.jsxs)("span",{className:"indentFormula",children:[n.jsx("span",{children:h?h.map((e,t)=>t===h.length-1?(0,n.jsxs)("span",{children:[e,n.jsx("sub",{children:t+1})]},t):(0,n.jsxs)("span",{children:[e,n.jsx("sub",{children:t+1})," + "]},t)):(0,n.jsxs)(n.Fragment,{children:["a",n.jsx("sub",{children:"1"})," + a",n.jsx("sub",{children:"2"})," + a",n.jsx("sub",{children:"3"})," ... a",n.jsx("sub",{children:"n"})]})}),n.jsx("span",{className:"divider",children:h?h.length:"n"})]})]})]}),n.jsx(o.in,{"aria-live":"assertive",children:r?Number.isInteger(r)?(0,n.jsxs)(n.Fragment,{children:["M = ",r]}):(0,n.jsxs)(n.Fragment,{children:["M ≈ ",r]}):n.jsx(n.Fragment,{children:"M = ?"})}),(0,n.jsxs)("div",{className:"botoes",children:[n.jsx(o.zx,{onClick:()=>s(e),role:"button","aria-label":"Calcular ra\xedz(es) da equa\xe7\xe3o quadr\xe1tica",children:"Calcular"}),n.jsx(o.zx,{onClick:()=>p(),role:"button","aria-label":"Limpar valores fornecidos e resultados.",children:"Limpar"})]})]}),(0,n.jsxs)(a,{children:[n.jsx("br",{}),n.jsx(d,{}),n.jsx("br",{}),n.jsx(c,{values:h})]})]})}},5269:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(7685),i=r(5694),s=r(2171),a=r(1838),o=r(5817),l=r(4592);let u=l.ZP.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: justify;
    text-indent: 10px;

    h2 {
        text-indent: 0;
        margin-bottom: 0;
    }
    
    & h3 {
        font-size: 20px;
        text-align: center;
        text-indent: 0;
        width: 100%;
        margin: 0;
    }
    
    & ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            width: 100%;
            text-indent: 0;
            font-size: 14px;
        }

        & ul {
            padding-left: 20px;
        }
    }

    & span {
        font-size: 14px;
    }
    
    & p {
        max-width: 700px;
    }

    & .explantion {
        text-align: left;
    }

    & .formula {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    & .formulaContent {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        & .container {
            display: flex;
        }

        & .fraction {
            display: flex;
            flex-direction: column;

            & .divider {
                border-top: 1px solid ${({theme:e})=>e.text};
            }
        }
    }

    @media screen and (min-width: 541px) {
        & span, ol li { 
            font-size: 16px;
        }
    }

`;var d=r(3883),c=r.n(d);let m={src:"/_next/static/media/equation1.6181307b.png",height:32,width:185,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGUlEQVR42mPIlsjizuAtEkvgzObW5EgUAQAgtwN7oIXefQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1},p={src:"/_next/static/media/equation2.9989bdf7.png",height:26,width:173,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGUlEQVR42mPIls4VTOAqkY3iZWB1Zs3gBQAe4AMpQ3EAjQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1},f={src:"/_next/static/media/equation3.b70d7f43.png",height:36,width:168,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mNIEY7ijRZL5JZh12IyYXPjY8jnCudIFkvhlmBnYPJlTxQEAF/KBUCca1o+AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},h={src:"/_next/static/media/equation4.5799f6b2.png",height:44,width:305,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGMUFRXjYufiYWZgYP/z4/sXdjEJzU9vXl5l5RMUYfzy5SMnAJHvC2f0QYEyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},x={src:"/_next/static/media/equation5.99dd5763.png",height:47,width:226,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASUlEQVR4nGM0Njbm//Dhwz8WFhbe79+/v3v39i2ziKgoEzc392+gOB+joaEhz8ePH/8DFXDef/jgnaigMDs3Lw8DkP/vy5cvAgDI5hvYEMLSYQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2},g={src:"/_next/static/media/equation6.179b3984.png",height:54,width:266,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nA3JUQrAIAgAUAIrGgWDHaC/uv+FOoIMHIKJsr5fGGMkd4/MbCKiAHADxIvoo1KyhTlnUtV80BBx11qf1tpea7299/wDWFYguq7pLh0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},b={src:"/_next/static/media/equation7.2bc10e4d.png",height:45,width:241,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGNUVVVl//nzJ8u/f/+Yvn37+o2dnYOLmZmZn42NjfX79+/PAfY3DlVswrGuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},j={src:"/_next/static/media/equation8.a49d838e.png",height:58,width:234,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mMoZI9lT+BRZ3FkaRatU6oQYChij+NIFmBg9mbL58pV0GcFAHH4Blmd4BHUAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},v={src:"/_next/static/media/equation8.1.2c1d70e8.png",height:41,width:229,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGM0Nzfn/Pr1K8P//wwcV69e+SwjLcMsKyfL+efPHyFmZuYPAPDsDbwJyMWRAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1},y={src:"/_next/static/media/equation9.0953c1e8.png",height:43,width:204,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mPIZGFg0mNK545n6ZBpkq8VZsjiZ2A3Yk1QiBCMFA1VcucBAGcfBiJbniCnAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},A={src:"/_next/static/media/equation9.1.630b3d9c.png",height:52,width:184,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mPIYbFiZmAMFygTr5cukS0TYMgSMOFkZLUXjJWNkbcRCuIDAGhnBgTcJNJVAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},C=function(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h3",{id:"#como-foi-criada",children:"Como Foi Criada?"}),(0,n.jsxs)(i.N3,{className:"explantion",children:["A f\xf3rmula de Bhaskara foi ",n.jsx("strong",{children:"demonstrada"})," pelo matem\xe1tico ",n.jsx("strong",{children:"Bhaskara II no s\xe9culo XII"}),". Ele era um renomado matem\xe1tico e astr\xf4nomo que contribuiu significativamente para a matem\xe1tica e ci\xeancias astron\xf4micas da \xcdndia medieval. Vale ressaltar que, embora tenha a f\xf3rmula tenha seu nome como homenagem, ",n.jsx("strong",{children:"n\xe3o"})," foi Bhaskara II que a criou, pois acredita-se que a f\xf3rmula ja era conhecida antes."]}),(0,n.jsxs)(i.N3,{children:["A f\xf3rmula de Bhaskara \xe9 derivada principalmente de uma t\xe9cnica conhecida como ",n.jsx("strong",{children:"complementar o quadrado"}),". Abaixo est\xe1 um resumo do processo at\xe9 chegar na f\xf3rmula que conhecemos atualmente:"]}),(0,n.jsxs)("ol",{type:"1",children:[(0,n.jsxs)("li",{children:["Come\xe7amos com a forma geral de uma equa\xe7\xe3o quadr\xe1tica:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:m,alt:"equa\xe7\xe3o quadr\xe1tica",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Ap\xf3s isso, movemos o termo constante ",n.jsx("i",{children:"c"})," para outro lado da equa\xe7\xe3o:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:p,alt:"constate no outro lado da equa\xe7\xe3o",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Agora iremos dividir ambos os lados da equa\xe7\xe3o por ",n.jsx("i",{children:"a"})," para simplificar futuros c\xe1lculos, assumindo que ",n.jsx("i",{children:"a"})," seja diferente de zero:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:f,alt:"dividir ambos os lados por a",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Para completar o quadrado, adicionamos o quadrado do quarto do coeficiente de ",n.jsx("i",{children:"x"})," elevado ao quadrado nos dois lados da equa\xe7\xe3o:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:h,alt:"completar o quadrado",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Feito isso, o lado esquerdo da equa\xe7\xe3o pode ser reescrito como um quadrado perfeito:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:x,alt:"quadrado perfeito",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Agora, iremos extrair a ra\xedz quadrada em ambos os lados:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:g,alt:"Extrair a ra\xedz quadrada em ambos os lados",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Na ra\xedz iremos calcular o m\xfaltiplo comum dos denominadores e teremos o este resultado:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:b,alt:"Calcular o m\xfaltiplo comum dos denominadores",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Usando o a propriedade de radia\xe7\xe3o (extrair ra\xedz quadrada de uma divis\xe3o \xe9 a mesma coisa que fazer a ra\xedz quadrada do numerador pelo denominador):",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:j,alt:"Fazer a ra\xedz quadrada do numerador pelo denominador",width:0,height:0})}),"Por\xe9m, nota-se que ",(0,n.jsxs)("i",{children:["4a",n.jsx("sup",{children:"2"})]})," \xe9 um quadrado perfeito e com isso podemos tirar a ra\xedz, resultando em:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:v,alt:"Tirar a ra\xedz",width:0,height:0})})]}),(0,n.jsxs)("li",{children:["Feito isso, iremos passar ",n.jsx("i",{children:"b/2a"})," para o lado direito da equa\xe7\xe3o, deixando apenas o x no lado esquerdo:",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:y,alt:"Tirar a ra\xedz",width:0,height:0})}),"Para ficar mais organizado, iremos deixar tudo no mesmo denomidador e, finalmente, teremos nossa f\xf3rmula de bhaskara!",n.jsx(i.N3,{className:"formulaContent",children:n.jsx(c(),{src:A,alt:"Tirar a ra\xedz",width:0,height:0})})]})]})]})};var w=r(3810);let _=function({a:e,b:t,delta:r}){if("number"==typeof e&&"number"==typeof t&&void 0!==r){let i=Math.sqrt(r);if(0===r)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("li",{children:["Neste caso, ter\xe1 apenas uma ra\xedz que devemos calcular da seguinte forma:",n.jsx("div",{className:"formulaContent",children:(0,n.jsxs)("span",{className:"container",children:["x =",(0,n.jsxs)("p",{className:"fraction",children:[(0,n.jsxs)("span",{className:"denominator",children:[" -(",t,")"]}),(0,n.jsxs)("span",{className:"divider",children:["2.",e]})]})]})})]}),(0,n.jsxs)("li",{children:["Com isso, obtemos o valor da ra\xedz \xfanica que \xe9:",(0,n.jsxs)("p",{className:"formulaContent",children:["x = ",-t/(2*e)]})]})]});if(r>0){let r=(-t+i)/(2*e),s=(-t-i)/(2*e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("li",{children:["Neste caso, ter\xe1 ",n.jsx("strong",{children:"duas ra\xedzes"})," que devemos calcular da seguinte forma:",n.jsx("div",{className:"formulaContent",children:(0,n.jsxs)("p",{className:"fraction",children:[n.jsx("br",{}),n.jsx("span",{children:"Calcular a primeira ra\xedz"})," ",n.jsx("br",{}),(0,n.jsxs)("span",{className:"denominator",children:[(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:"1"})]})," = -(",t,") + ",i]}),(0,n.jsxs)("span",{className:"divider",children:["2.",e]})]})}),n.jsx("br",{}),n.jsx("p",{className:"formulaContent",children:(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:"1"})," = ",r]})}),n.jsx("div",{className:"formulaContent",children:(0,n.jsxs)("p",{className:"fraction",children:[n.jsx("br",{}),n.jsx("span",{children:"Agora calculamos a segunda"})," ",n.jsx("br",{}),(0,n.jsxs)("span",{className:"denominator",children:[(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:"2"})]})," = -(",t,") - ",i]}),(0,n.jsxs)("span",{className:"divider",children:["2.",e]})]})}),n.jsx("br",{}),n.jsx("p",{className:"formulaContent",children:(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:"2"})," = ",s]})})]}),(0,n.jsxs)("li",{children:["Com isso concluimos que o resultado da equa\xe7\xe3o possui duas ra\xedzes que s\xe3o:",(0,n.jsxs)("p",{className:"formulaContent",children:[(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:"1"})," = ",r]})," \xa0 e \xa0",(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:"2"})," = ",s]})]})]})]})}}},P=function({a:e,b:t,c:r}){let[i,s]=(0,w.useState)();return(0,w.useEffect)(()=>{"number"==typeof e&&"number"==typeof t&&"number"==typeof r?s(t*t-4*e*r):s(void 0)},[e,t,r,i]),(0,n.jsxs)(n.Fragment,{children:[n.jsx("h3",{id:"passo-a-passo",children:"Como Chegar no Resultado"}),(0,n.jsxs)("ol",{type:"1",children:[(0,n.jsxs)("li",{children:["Primeiro precisamos calcular o descriminante (delta) como base nos coeficientes fornecidos (a, b e c):",(0,n.jsxs)("p",{className:"formulaContent",children:["delta = ",(0,n.jsxs)("span",{children:[t,n.jsx("sup",{children:"2"})]})," - 4.",e,".",r]}),(0,n.jsxs)("p",{className:"formulaContent",children:["delta = ",void 0!==i?i:"?"]})]}),void 0!==i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("li",{children:["Agora, antes de continuar, precisamos verificar o valor de delta",(0,n.jsxs)("ul",{children:[n.jsx("br",{}),n.jsx("li",{children:"Caso seja maior que zero, a solu\xe7\xe3o ter\xe1 duas ra\xedzes"}),n.jsx("li",{children:"Delta igual a zero, apenas uma ra\xedz"}),n.jsx("li",{children:"Delta sendo negativo (menor que zero) n\xe3o ter\xe1 ra\xedz"})]}),n.jsx("br",{}),(0,n.jsxs)("p",{children:["Neste caso, delta \xe9 igual a ",i]})]}),i<0?n.jsx("li",{children:"J\xe1 que temos o valor menor que zero, n\xe3o ser\xe1 necess\xe1rio prosseguir com o calculo"}):_({a:e,b:t,delta:i})]}):n.jsx("li",{children:"Para continuar certifique-se de fornecer os coeficientes da fun\xe7\xe3o"})]})]})},N=function(e,t,r){if(e){let i=e.toString();return t.includes("^")?(0,n.jsxs)(n.Fragment,{children:[e,n.jsx("sup",{children:r})]}):"b"!==t||i.includes("-")?e:`-${e}`}return"b"===t?`-${t}`:t.includes("^")?(0,n.jsxs)(n.Fragment,{children:[t[0],n.jsx("sup",{children:r})]}):t},S=function(){let{slug:e}=(0,o.useParams)(),{values:t,result:r,calculate:l,addNewValue:d,clear:c}=(0,a.H)(),[m,p,f]=void 0!==t[0]?[t[0],t[1],t[2]]:["a","b","c"];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u,{children:[(0,n.jsxs)(s.DG,{children:[n.jsx("h2",{children:"Insira os coeficientes da equa\xe7\xe3o"}),(0,n.jsxs)(s.fv,{children:[n.jsx(i.aN,{type:"number",placeholder:"a",value:"number"==typeof m?m:"",onChange:e=>d(0,Number(e.target.value)),required:!0,aria_label:"Coeficiente a da equa\xe7\xe3o quadr\xe1tica",width:60}),n.jsx(i.aN,{type:"number",placeholder:"b",value:"number"==typeof p?p:"",onChange:e=>d(1,Number(e.target.value)),required:!0,aria_label:"Coeficiente b da equa\xe7\xe3o quadr\xe1tica",width:60}),n.jsx(i.aN,{type:"number",placeholder:"c",value:"number"==typeof f?f:"",onChange:e=>d(2,Number(e.target.value)),required:!0,aria_label:"Coeficiente c da equa\xe7\xe3o quadr\xe1tica",width:60})]}),(0,n.jsxs)(i.Xz,{aria_label:"Form\xfala de Bhaskara",aria_live:"polite",children:["x =",(0,n.jsxs)("span",{className:"indentFormula",children:[(0,n.jsxs)("span",{children:[N(t[1],"b")," \xb1 √",N(t[1],"b^2",2)," - 4.",N(t[0],"a"),".",N(t[2],"c")]}),(0,n.jsxs)("span",{className:"divider",children:["2.",N(t[0],"a")]})]})]})]}),"object"==typeof r?n.jsx(s.il,{"aria-label":"Resultado da equa\xe7\xe3o",children:n.jsx(i.in,{"aria-live":"assertive",children:r.map((e,t)=>t===r.length-1?(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:t+1})," = ",e]},t):(0,n.jsxs)("span",{children:["x",n.jsx("sub",{children:t+1})," = ",e,","]},t))})}):n.jsx(i.in,{"aria-live":"assertive",children:isNaN(r)?r:(0,n.jsxs)(n.Fragment,{children:["x = ",r||"?"]})}),(0,n.jsxs)("div",{className:"botoes",children:[n.jsx(i.zx,{onClick:()=>l(e),role:"button","aria-label":"Calcular ra\xedz(es) da equa\xe7\xe3o quadr\xe1tica",children:"Calcular"}),n.jsx(i.zx,{onClick:()=>c(),role:"button","aria-label":"Limpar valores fornecidos e resultados.",children:"Limpar"})]})]}),(0,n.jsxs)(u,{children:[n.jsx("br",{}),n.jsx(C,{}),n.jsx("br",{}),n.jsx(P,{a:m,b:p,c:f})]})]})}},2615:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(7685),i=r(1838),s=r(5817),a=r(4592);let o=a.ZP.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    text-align: justify;
    text-indent: 10px;

    h2 {
        text-indent: 0;
        margin-bottom: 0;
    }
    
    & h3 {
        font-size: 20px;
        text-align: center;
        text-indent: 0;
        width: 100%;
        margin: 0;
    }

    & p {
        max-width: 700px;
    }

    & ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            width: 100%;
            text-indent: 0;
            font-size: 14px;
        }
    }

    & ol {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        max-width: 700px;
        text-align: left;
        list-style-position: inside;

        & li {
            width: 100%;
            text-indent: 0;
            font-size: 14px;
            line-height: 24px;

            & p {
                font-size: inherit;
            }
        }
    }
`;var l=r(5694),u=r(2171);let d=function(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h3",{id:"#como-foi-criada",children:"Como Foi Criada?"}),n.jsx(l.N3,{className:"explantion",children:"A f\xf3rmula de juros simples \xe9 derivada de uma ideia fundamental de que os juros s\xe3o calculados apenas sobre o principal inicial e n\xe3o incluem os juros acumulados. "}),n.jsx(l.N3,{children:"Est\xe1 f\xf3rmula apresenta ind\xedcios de que era utilizada em atividades comerciais antigas, sendo utilizada h\xe1 muitos anos."}),n.jsx(l.N3,{children:"A f\xf3rmula \xe9 representada da seguinte maneira:"}),(0,n.jsxs)("ul",{children:[n.jsx("li",{children:n.jsx("strong",{children:"J = C x i x t"})}),(0,n.jsxs)("li",{children:[n.jsx("i",{children:"J"})," \xe9 o valor dos ",n.jsx("strong",{children:"juros acumulados"})]}),(0,n.jsxs)("li",{children:[n.jsx("i",{children:"C"})," \xe9 o ",n.jsx("strong",{children:"capital inicial"})]}),(0,n.jsxs)("li",{children:[n.jsx("i",{children:"i"})," \xe9 a ",n.jsx("strong",{children:"taxa de juros"})]}),(0,n.jsxs)("li",{children:[n.jsx("i",{children:"t"})," \xe9 o ",n.jsx("strong",{children:"tempo em anos"})," em que o dinheiro \xe9 aplicado"]})]})]})},c=function({result:e,values:t}){let[r,i]=e,[s,a,o]=t||["C","i","t"];return(0,n.jsxs)(n.Fragment,{children:[n.jsx("h3",{id:"passo-a-passo",children:"Como Chegar no Resultado"}),(0,n.jsxs)("ol",{type:"1",children:[(0,n.jsxs)("li",{children:["Basta multiplicarmos todos os valores obtidos: ",(0,n.jsxs)("strong",{children:["J = ",s||"C"," x ",a||"i"," x ",o||"t"]})," ",n.jsx("br",{}),"Com isso, iremos obter um resultado igual a ",n.jsx("strong",{children:i?.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})||"J"})]}),(0,n.jsxs)("li",{children:["Caso deseje, voc\xea pode calcular o montante somando o capital inicial com o valor do juros que foi calculado anteriormente:  ",(0,n.jsxs)("strong",{children:["M = ",s," + ",i||"J"]}),(0,n.jsxs)("p",{children:["Assim, obtendo o resultado ",n.jsx("strong",{children:r?.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})||"M"})]})]})]})]})},m=function(){let{slug:e}=(0,s.useParams)(),{values:t,result:r,calculate:a,addNewValue:m,clear:p}=(0,i.H)(),[f,h]=r||[0,0],[x,g,b]=[t[0],t[1],t[2]];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o,{children:[(0,n.jsxs)(u.DG,{children:[n.jsx("h2",{children:"Insira os valores da opera\xe7\xe3o financeira"}),(0,n.jsxs)(u.fv,{children:[n.jsx(l.aN,{type:"number",placeholder:"C",value:"number"==typeof x?x:"",onChange:e=>m(0,Number(e.target.value)),required:!0,aria_label:"capital inicial",width:60}),n.jsx(l.aN,{type:"number",placeholder:"t",value:"number"==typeof g?g:"",onChange:e=>m(1,Number(e.target.value)),required:!0,aria_label:"tempo de aplica\xe7\xe3o",width:60}),n.jsx(l.aN,{type:"number",placeholder:"i",value:"number"==typeof b?b:"",onChange:e=>m(2,Number(e.target.value)),required:!0,aria_label:"taxa de juros",width:60})]}),(0,n.jsxs)(l.Xz,{aria_label:"Form\xfala de Juros simples",aria_live:"polite",children:["J = ",x||"C"," . ",b||"i"," . ",g||"t"]})]}),n.jsx(u.il,{"aria-label":"Resultado da equa\xe7\xe3o",children:(0,n.jsxs)(l.in,{"aria-live":"assertive",children:[(0,n.jsxs)("span",{children:["M = ",f.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})]}),(0,n.jsxs)("span",{children:["J = ",h.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})]})]})}),(0,n.jsxs)("div",{className:"botoes",children:[n.jsx(l.zx,{onClick:()=>a(e),role:"button","aria-label":"Calcular juros simples",children:"Calcular"}),n.jsx(l.zx,{onClick:()=>p(),role:"button","aria-label":"Limpar valores fornecidos e resultados.",children:"Limpar"})]})]}),(0,n.jsxs)(o,{children:[n.jsx("br",{}),n.jsx(d,{}),n.jsx("br",{}),n.jsx(c,{values:t,result:r||[]})]})]})}},616:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(7685),i=r(3810),s=r(4592);let a=s.ZP.button`
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
`,o=s.ZP.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
`;var l=r(1949),u=r(8765);let d=function(){let[e,t]=(0,i.useState)(!1),{theme:r}=(0,l.F)();(0,i.useEffect)(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}),[]);let s=()=>{window.scrollY>100?t(!0):t(!1)};return n.jsx(o,{children:e&&n.jsx(a,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},theme:"light"===r?u.Wb:u.$_,children:"^"})})}},3628:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.button`
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
`},1807:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(7685),i=r(8765),s=r(5817),a=r(3810);let o=function({children:e,routes:t,slug:r}){let{push:o}=(0,s.useRouter)(),l=(0,i.rx)(t,r);return(0,a.useEffect)(()=>{l||o(`/?404=not-found_${r}`)},[o,l,r]),(0,n.jsxs)(n.Fragment,{children:[!l&&null,l&&e]})}},171:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(7685),i=r(4592),s=r(1949),a=r(8765);let o=i.ZP.header`
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
`,l=i.ZP.hr`
    width: 100%;
    height: 1px;
    margin-bottom: 30px;
    border: none;
    color: ${({theme:e})=>e.text};
    background-color: ${({theme:e})=>e.text};
`;var u=r(2140);r(3810);let d=function({menu:e=!1}){let{theme:t,themeToggler:r}=(0,s.F)(),d=e=>{r(e)},c="dark"===t?"light":"dark",m="light"===t?"sol.png":"lua.png";return e?n.jsx(i.LC,{shouldForwardProp:e=>"menu"!==e,children:(0,n.jsxs)(o,{menu:e.toString(),children:[(0,n.jsxs)("div",{children:[n.jsx(u.xv,{children:"SN"}),(0,n.jsxs)("div",{children:[n.jsx("img",{src:`../../images/icons/${m}`,alt:"change theme",onClick:()=>d(c),role:"button"}),n.jsx(u.v2,{})]})]}),n.jsx(l,{theme:"light"===t?a.Wb:a.$_})]})}):n.jsx(i.LC,{shouldForwardProp:e=>"menu"!==e,children:(0,n.jsxs)(o,{menu:e.toString(),children:[n.jsx("span",{}),n.jsx(u.xv,{children:"Studium Nexus"}),n.jsx("img",{src:`../../images/icons/${m}`,alt:`${t} theme`,onClick:()=>d(c),role:"button"})]})})}},5584:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(7685),i=r(3810);let s=function({children:e,className:t}){let[r,s]=(0,i.useState)(!1),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(s(!0),e.unobserve(t.target))})});return a.current&&e.observe(a.current),()=>{e.disconnect()}},[]),n.jsx("p",{ref:a,style:{opacity:r?1:0,transition:"opacity 0.3s ease-in"},className:t||"",children:e})}},1210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.button`
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
`},5193:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(7685),i=r(8736),s=r.n(i),a=r(146),o=r.n(a),l=r(5817),u=r(3810),d=r(4592),c=r(1949),m=r(8765);let p=d.ZP.nav`
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
`;var f=r(1210),h=r(9957);let x=function(){let e=(0,l.usePathname)(),[t,r]=(0,u.useState)(!1),{theme:i}=(0,c.F)();return(0,n.jsxs)(d.LC,{shouldForwardProp:e=>"isopen"!==e,children:[(0,n.jsxs)(f.default,{isopen:t.toString(),onClick:()=>r(!t),theme:"light"===i?m.Wb:m.$_,"aria-label":"menu de navega\xe7\xe3o",type:"button","aria-haspopup":t,"aria-controls":"menuNav",children:[n.jsx("div",{className:"lines line1"}),n.jsx("div",{className:"lines line2"}),n.jsx("div",{className:"lines line3"})]}),(0,n.jsxs)(p,{isopen:t.toString(),className:s().className,id:"menuNav",theme:"light"===i?m.Wb:m.$_,role:"menu",children:[n.jsx(o(),{href:"/",children:"Home"}),h.map(t=>n.jsx(o(),{className:`link ${e===t.link?"active":""}`,href:t.link,role:"menuitem",children:t.title},t.id))]})]})}},8256:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.h1`
    font-weight: bold;
    font-display: swap;
    text-align: center;
`},2140:(e,t,r)=>{"use strict";r.d(t,{zx:()=>o,N3:()=>p.default,v2:()=>l.default,xv:()=>m});var n=r(7685),i=r(1949),s=r(3628),a=r(8765);r(3810);let o=function({children:e,onClick:t,role:r,type:o}){let{theme:l}=(0,i.F)();return n.jsx(s.default,{onClick:t,theme:"light"===l?a.Wb:a.$_,role:r,type:o,children:e})};r(171);var l=r(5193);r(1210);var u=r(5720),d=r.n(u),c=r(8256);let m=function({children:e}){return n.jsx(c.default,{className:d().className,children:e})};r(616),r(1807);var p=r(5584);r(9957)},2481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7685),i=r(1949),s=r(8765),a=r(4592);let o=a.ZP.div`
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
`;r(3810);let l=function({children:e}){let{theme:t}=(0,i.F)();return n.jsx(o,{theme:"light"===t?s.Wb:s.$_,children:e})}},3690:(e,t,r)=>{"use strict";r.r(t),r.d(t,{FlexContainerAdapter:()=>a,FlexContainerCenter:()=>s,FlexContainerSpaceBTW:()=>i});var n=r(4592);let i=n.ZP.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`,s=n.ZP.main`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,a=n.ZP.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;

    @media screen and (min-width: 541px) {
        flex-direction: row;
    }
`},5978:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(4592);let i=n.ZP.div`
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
`},1949:(e,t,r)=>{"use strict";r.d(t,{F:()=>n.default});var n=r(7628)},7628:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(3810);r(7685);var i=r(4592);i.vJ`
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
`,r(8765);let s=(0,n.createContext)("light");s.displayName="Theme";let a=function(){let{theme:e,setTheme:t,themeToggler:r}=(0,n.useContext)(s);return{theme:e,setTheme:t,themeToggler:r}}},5339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(7685),i=r(3810),s=r(5817),a=r(4592);function o({children:e}){let[t]=(0,i.useState)(()=>new a.qH);return(0,s.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),n.jsx(n.Fragment,{children:e})}),n.jsx(a.LC,{sheet:t.instance,children:e})}},8765:(e,t,r)=>{"use strict";r.d(t,{$_:()=>i,Wb:()=>s,rx:()=>n});let n=function(e,t){return Object.keys(e).includes(t)},i={body:"#2D2D2D",text:"#FFFFFF",textHover:"#000000",bgCard:"#292929",bgCardHover:"#f6f6f6",shadown:"rgba(89, 89, 89, 0.25)",bgInput:"#2D2D2D",bgSearch:"#282828",bgButton:"#2D2D2D",bgConverter:"#292929",invert:1,invertHover:0},s={body:"#FFFFFF",text:"#000000",textHover:"#FFFFFF",bgCard:"#f6f6f6",bgCardHover:"#292929",shadown:"rgba(0, 0, 0, 0.25)",bgInput:"#FFFFFF",bgSearch:"#EFEFEF",bgButton:"#D9D9D9",bgConverter:"#EFEFEF",invert:0,invertHover:1}},4547:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return n}}),r(7294);let n=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},188:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7177:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return j}});let n=r(3444),i=r(4816),s=r(7685),a=i._(r(3810)),o=n._(r(914)),l=n._(r(4063)),u=r(1920),d=r(7832),c=r(9811);r(4586);let m=r(4482),p=n._(r(7868)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function x(e){let[t,r]=a.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let g=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:o,width:l,decoding:u,className:d,style:c,fetchPriority:m,placeholder:p,loading:f,unoptimized:g,fill:b,onLoadRef:j,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:A,onLoad:C,onError:w,..._}=e;return(0,s.jsx)("img",{..._,...x(m),loading:f,width:l,height:o,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&h(e,p,j,v,y,g))},[r,p,j,v,y,w,g,t]),onLoad:e=>{h(e.currentTarget,p,j,v,y,g)},onError:e=>{A(!0),"empty"!==p&&y(!0),w&&w(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,n),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let j=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(m.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=f||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:o,onLoadingComplete:l}=e,h=(0,a.useRef)(o);(0,a.useEffect)(()=>{h.current=o},[o]);let x=(0,a.useRef)(l);(0,a.useEffect)(()=>{x.current=l},[l]);let[j,v]=(0,a.useState)(!1),[y,A]=(0,a.useState)(!1),{props:C,meta:w}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:j,showAltText:y});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{...C,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:h,onLoadingCompleteRef:x,setBlurComplete:v,setShowAltText:A,ref:t}),w.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},146:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(3444),i=r(7685),s=n._(r(3810)),a=r(8945),o=r(9906),l=r(9430),u=r(4976),d=r(4547),c=r(4482),m=r(7874),p=r(1980),f=r(188),h=r(9517),x=r(4967);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let b=s.default.forwardRef(function(e,t){let r,n;let{href:l,as:b,children:j,prefetch:v=null,passHref:y,replace:A,shallow:C,scroll:w,locale:_,onClick:P,onMouseEnter:N,onTouchStart:S,legacyBehavior:M=!1,...R}=e;r=j,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,i.jsx)("a",{children:r}));let E=s.default.useContext(c.RouterContext),F=s.default.useContext(m.AppRouterContext),k=null!=E?E:F,z=!E,O=!1!==v,U=null===v?x.PrefetchKind.AUTO:x.PrefetchKind.FULL,{href:q,as:I}=s.default.useMemo(()=>{if(!E){let e=g(l);return{href:e,as:b?g(b):e}}let[e,t]=(0,a.resolveHref)(E,l,!0);return{href:e,as:b?(0,a.resolveHref)(E,b):t||e}},[E,l,b]),$=s.default.useRef(q),D=s.default.useRef(I);M&&(n=s.default.Children.only(r));let L=M?n&&"object"==typeof n&&n.ref:t,[B,H,G]=(0,p.useIntersection)({rootMargin:"200px"}),T=s.default.useCallback(e=>{(D.current!==I||$.current!==q)&&(G(),D.current=I,$.current=q),B(e),L&&("function"==typeof L?L(e):"object"==typeof L&&(L.current=e))},[I,L,q,G,B]);s.default.useEffect(()=>{},[I,q,H,_,O,null==E?void 0:E.locale,k,z,U]);let W={ref:T,onClick(e){M||"function"!=typeof P||P(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,r,n,i,a,l,u,d){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,o.isLocalURL)(r)))return;e.preventDefault();let m=()=>{let e=null==l||l;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:u,scroll:e}):t[i?"replace":"push"](n||r,{scroll:e})};d?s.default.startTransition(m):m()}(e,k,q,I,A,C,w,_,z)},onMouseEnter(e){M||"function"!=typeof N||N(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e)},onTouchStart(e){M||"function"!=typeof S||S(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e)}};if((0,u.isAbsoluteUrl)(I))W.href=I;else if(!M||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==_?_:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,f.getDomainLocale)(I,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);W.href=t||(0,h.addBasePath)((0,d.addLocale)(I,e,null==E?void 0:E.defaultLocale))}return M?s.default.cloneElement(n,W):(0,i.jsx)("a",{...R,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4805:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{requestIdleCallback:function(){return r},cancelIdleCallback:function(){return n}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8945:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return c}});let n=r(552),i=r(9430),s=r(4417),a=r(4976),o=r(7294),l=r(9906),u=r(1804),d=r(821);function c(e,t,r){let c;let m="string"==typeof t?t:(0,i.formatWithValidation)(t),p=m.match(/^[a-zA-Z]{1,}:\/\//),f=p?m.slice(p[0].length):m;if((f.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+m+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,a.normalizeRepeatedSlashes)(f);m=(p?p[0]:"")+t}if(!(0,l.isLocalURL)(m))return r?[m]:m;try{c=new URL(m.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){c=new URL("/","http://n")}try{let e=new URL(m,c);e.pathname=(0,o.normalizePathTrailingSlash)(e.pathname);let t="";if((0,u.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,n.searchParamsToUrlQuery)(e.searchParams),{result:a,params:o}=(0,d.interpolateAs)(e.pathname,e.pathname,r);a&&(t=(0,i.formatWithValidation)({pathname:a,hash:e.hash,query:(0,s.omit)(r,o)}))}let a=e.origin===c.origin?e.href.slice(e.origin.length):e.href;return r?[a,t||a]:a}catch(e){return r?[m]:m}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1980:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(3810),i=r(4805),s="function"==typeof IntersectionObserver,a=new Map,o=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,u=l||!s,[d,c]=(0,n.useState)(!1),m=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{m.current=e},[]);return(0,n.useEffect)(()=>{if(s){if(u||d)return;let e=m.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:i,elements:s}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=o.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:i},o.push(r),a.set(r,t),t}(r);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),a.delete(n);let e=o.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!d){let e=(0,i.requestIdleCallback)(()=>c(!0));return()=>(0,i.cancelIdleCallback)(e)}},[u,r,t,d,m.current]),[p,d,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4406:(e,t,r)=>{"use strict";e.exports=r(943).vendored.contexts.AmpContext},4961:(e,t,r)=>{"use strict";e.exports=r(943).vendored.contexts.HeadManagerContext},9811:(e,t,r)=>{"use strict";e.exports=r(943).vendored.contexts.ImageConfigContext},4482:(e,t,r)=>{"use strict";e.exports=r(943).vendored.contexts.RouterContext},4407:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},178:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},1920:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(4586);let n=r(4040),i=r(7832);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,u,{src:d,sizes:c,unoptimized:m=!1,priority:p=!1,loading:f,className:h,quality:x,width:g,height:b,fill:j=!1,style:v,onLoad:y,onLoadingComplete:A,placeholder:C="empty",blurDataURL:w,fetchPriority:_,layout:P,objectFit:N,objectPosition:S,lazyBoundary:M,lazyRoot:R,...E}=e,{imgConf:F,showAltText:k,blurComplete:z,defaultLoader:O}=t,U=F||i.imageConfigDefault;if("allSizes"in U)o=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);o={...U,allSizes:e,deviceSizes:t}}let q=E.loader||O;delete E.loader,delete E.srcSet;let I="__next_img_default"in q;if(I){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=q;q=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let $="",D=a(g),L=a(b);if("object"==typeof(r=d)&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,w=w||e.blurDataURL,$=e.src,!j){if(D||L){if(D&&!L){let t=D/e.width;L=Math.round(e.height*t)}else if(!D&&L){let t=L/e.height;D=Math.round(e.width*t)}}else D=e.width,L=e.height}}let B=!p&&("lazy"===f||void 0===f);(!(d="string"==typeof d?d:$)||d.startsWith("data:")||d.startsWith("blob:"))&&(m=!0,B=!1),o.unoptimized&&(m=!0),I&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(m=!0),p&&(_="high");let H=a(x),G=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:S}:{},k?{}:{color:"transparent"},v),T=z||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:L,blurWidth:l,blurHeight:u,blurDataURL:w||"",objectFit:G.objectFit})+'")':'url("'+C+'")',W=T?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},V=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:a,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),d=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,n)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:o({config:t,src:r,quality:s,width:l[d]})}}({config:o,src:d,unoptimized:m,width:D,quality:H,sizes:c,loader:q});return{props:{...E,loading:B?"lazy":f,fetchPriority:_,width:D,height:L,decoding:"async",className:h,style:{...G,...W},sizes:V.sizes,srcSet:V.srcSet,src:V.src},meta:{unoptimized:m,priority:p,placeholder:C,fill:j}}}},4063:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return h}});let n=r(3444),i=r(4816),s=r(7685),a=i._(r(3810)),o=n._(r(8273)),l=r(4406),u=r(4961),d=r(4407);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(4586);let p=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:r}=t;return e.reduce(m,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let s=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4040:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:a}=e,o=n?40*n:t,l=i?40*i:r,u=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7832:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},3883:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return o},default:function(){return l}});let n=r(3444),i=r(1920),s=r(7177),a=n._(r(7868)),o=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=s.Image},7868:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9430:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return s},urlObjectKeys:function(){return a},formatWithValidation:function(){return o}});let n=r(4816)._(r(552)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,s=e.protocol||"",a=e.pathname||"",o=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let d=e.search||l&&"?"+l||"";return s&&!s.endsWith(":")&&(s+=":"),e.slashes||(!s||i.test(s))&&!1!==u?(u="//"+(u||""),a&&"/"!==a[0]&&(a="/"+a)):u||(u=""),o&&"#"!==o[0]&&(o="#"+o),d&&"?"!==d[0]&&(d="?"+d),""+s+u+(a=a.replace(/[?#]/g,encodeURIComponent))+(d=d.replace("#","%23"))+o}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function o(e){return s(e)}},1804:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return n.getSortedRoutes},isDynamicRoute:function(){return i.isDynamicRoute}});let n=r(2433),i=r(2113)},821:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return s}});let n=r(8740),i=r(6533);function s(e,t,r){let s="",a=(0,i.getRouteRegex)(e),o=a.groups,l=(t!==e?(0,n.getRouteMatcher)(a)(t):"")||r;s=e;let u=Object.keys(o);return u.every(e=>{let t=l[e]||"",{repeat:r,optional:n}=o[e],i="["+(r?"...":"")+e+"]";return n&&(i=(t?"":"/")+"["+i+"]"),r&&!Array.isArray(t)&&(t=[t]),(n||e in l)&&(s=s.replace(i,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(s=""),{params:u,result:s}}},2113:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return s}});let n=r(494),i=/\/\[[^/]+?\](?=\/|$)/;function s(e){return(0,n.isInterceptionRouteAppPath)(e)&&(e=(0,n.extractInterceptionRouteInformation)(e).interceptedRoute),i.test(e)}},9906:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});let n=r(4976),i=r(8977);function s(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},4417:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},552:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function s(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i},assign:function(){return s}})},8740:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(4976);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let s=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(a[e]=~n.indexOf("/")?n.split("/").map(e=>s(e)):t.repeat?[s(n)]:s(n))}),a}}},6533:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return c},getNamedMiddlewareRegex:function(){return m}});let n=r(494),i=r(178),s=r(3370);function a(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function o(e){let t=(0,s.removeTrailingSlash)(e).slice(1).split("/"),r={},o=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),s=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&s){let{key:e,optional:n,repeat:l}=a(s[1]);return r[e]={pos:o++,repeat:l,optional:n},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!s)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=a(s[1]);return r[e]={pos:o++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=o(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function u(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:s,keyPrefix:o}=e,{key:l,optional:u,repeat:d}=a(n),c=l.replace(/\W/g,"");o&&(c=""+o+c);let m=!1;(0===c.length||c.length>30)&&(m=!0),isNaN(parseInt(c.slice(0,1)))||(m=!0),m&&(c=r()),o?s[c]=""+o+l:s[c]=l;let p=t?(0,i.escapeStringRegexp)(t):"";return d?u?"(?:/"+p+"(?<"+c+">.+?))?":"/"+p+"(?<"+c+">.+?)":"/"+p+"(?<"+c+">[^/]+?)"}function d(e,t){let r;let a=(0,s.removeTrailingSlash)(e).slice(1).split("/"),o=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:a.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),s=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&s){let[r]=e.split(s[0]);return u({getSafeRouteKey:o,interceptionMarker:r,segment:s[1],routeKeys:l,keyPrefix:t?"nxtI":void 0})}return s?u({getSafeRouteKey:o,segment:s[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function c(e,t){let r=d(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function m(e,t){let{parameterizedRoute:r}=o(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=d(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},2433:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return n}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,n){if(0===e.length){this.placeholder=!1;return}if(n)throw Error("Catch-all must be the last part of the URL.");let i=e[0];if(i.startsWith("[")&&i.endsWith("]")){let r=i.slice(1,-1),a=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),a=!0),r.startsWith("...")&&(r=r.substring(3),n=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function s(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===i.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(n){if(a){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');s(this.optionalRestSlugName,r),this.optionalRestSlugName=r,i="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');s(this.restSlugName,r),this.restSlugName=r,i="[...]"}}else{if(a)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');s(this.slugName,r),this.slugName=r,i="[]"}}this.children.has(i)||this.children.set(i,new r),this.children.get(i)._insert(e.slice(1),t,n)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function n(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},8273:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(3810),i=()=>{},s=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},4976:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return s},getLocationOrigin:function(){return a},getURL:function(){return o},getDisplayName:function(){return l},isResSent:function(){return u},normalizeRepeatedSlashes:function(){return d},loadGetInitialProps:function(){return c},SP:function(){return m},ST:function(){return p},DecodeError:function(){return f},NormalizeError:function(){return h},PageNotFoundError:function(){return x},MissingStaticPage:function(){return g},MiddlewareNotFoundError:function(){return b},stringifyError:function(){return j}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>i.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function o(){let{href:e}=window.location,t=a();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function d(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let m="undefined"!=typeof performance,p=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class f extends Error{}class h extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2411:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(6491);let i=(0,r(599).createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\lib\registry.tsx`),{__esModule:s,$$typeof:a}=i,o=i.default;function l({children:e}){return n.jsx(o,{children:e})}},8762:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ek});var n=r(6491),i=r(599);let s=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\hooks\useCalculate\index.tsx`),{__esModule:a,$$typeof:o}=s;s.default;let l=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\hooks\useTheme\index.tsx`),{__esModule:u,$$typeof:d}=l;l.default;let c=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\components\FormulaFormat\FormulaFormat.style.tsx`),{__esModule:m,$$typeof:p}=c;c.default;let f=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\components\FormulaImage\FormulaImage.style.tsx`),{__esModule:h,$$typeof:x}=f;f.default;let g=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\components\FormulaInput\FormulaInput.style.tsx`),{__esModule:b,$$typeof:j}=g;g.default;let v=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\components\Navigation\index.tsx`),{__esModule:y,$$typeof:A}=v,C=v.default,w=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\components\ResultFormula\ResultFormula.style.tsx`),{__esModule:_,$$typeof:P}=w;w.default;let N=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Button\Button.style.tsx`),{__esModule:S,$$typeof:M}=N;N.default,r(1367);let R=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Header\index.tsx`),{__esModule:E,$$typeof:F}=R,k=R.default,z=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Menu\index.tsx`),{__esModule:O,$$typeof:U}=z;z.default;let q=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\Menu\MenuButton\index.tsx`),{__esModule:I,$$typeof:$}=q;q.default;let D=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\TitleNicoMoji\TitleNicoMoji.style.tsx`),{__esModule:L,$$typeof:B}=D;D.default;let H=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\BackToTop\index.tsx`),{__esModule:G,$$typeof:T}=H,W=H.default,V=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\ExistingRoutes\index.tsx`),{__esModule:Z,$$typeof:Q}=V,J=V.default,K=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\components\LazyLoadedText\index.tsx`),{__esModule:Y,$$typeof:X}=K;K.default;let ee={bhaskara:"bhaskara","media-aritmetica":"media-aritmetica","juros-simples":"juros-simples"},et=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\containers\FormulaContainer\index.tsx`),{__esModule:er,$$typeof:en}=et;et.default;let ei=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\containers\InputContainer\index.tsx`),{__esModule:es,$$typeof:ea}=ei;ei.default;let eo=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\containers\PageFormulaContainer\index.tsx`),{__esModule:el,$$typeof:eu}=eo,ed=eo.default,ec=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\AppContainer\index.tsx`),{__esModule:em,$$typeof:ep}=ec,ef=ec.default,eh=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx`),{__esModule:ex,$$typeof:eg}=eh;eh.default,(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx#FlexContainerSpaceBTW`),(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx#FlexContainerCenter`),(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\FlexContainer\index.tsx#FlexContainerAdapter`);let eb=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\commons\containers\ResultContainer\index.tsx`),{__esModule:ej,$$typeof:ev}=eb;eb.default;let ey=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\screens\arithmeticAverage\index.tsx`),{__esModule:eA,$$typeof:eC}=ey,ew=ey.default,e_=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\screens\bhaskaraScreen\index.tsx`),{__esModule:eP,$$typeof:eN}=e_,eS=e_.default,eM=(0,i.createProxy)(String.raw`C:\Users\Marcos\Documents\GitHub\Studium-Nexus\apps\formula-app\src\screens\simpleInterest\index.tsx`),{__esModule:eR,$$typeof:eE}=eM,eF={bhaskara:{title:"Bhaskara",Page:eS},"media-aritmetica":{title:"M\xe9dia Aritm\xe9tica",Page:ew},"juros-simples":{title:"Juros Simples",Page:eM.default}},ek=function({params:e}){let t=e.slug,{title:r,Page:i}=eF[t]||[null,null];return n.jsx(J,{slug:t,routes:ee,children:(0,n.jsxs)(ef,{children:[n.jsx(k,{menu:!0}),(0,n.jsxs)(ed,{children:[(0,n.jsxs)("h1",{children:["F\xf3rmula de ",r?.replace("-"," ")]}),n.jsx(C,{}),n.jsx(i,{})]}),n.jsx(W,{})]})})}},9957:e=>{"use strict";e.exports=JSON.parse('[{"id":"1","img":"../../images/icons/tempo.png","title":"Conversor de Tempo","link":"/conversor/tempo","type":"conversor"},{"id":"2","img":"../../images/icons/peso.png","title":"Conversor de Peso","link":"/conversor/peso","type":"conversor"},{"id":"3","img":"../../images/icons/temperatura.png","title":"Conversor de Temperatura","link":"/conversor/temperatura","type":"conversor"},{"id":"4","img":"../../images/icons/moeda.png","title":"Conversor de Moeda","link":"/conversor/moeda","type":"conversor"},{"id":"5","img":"../../images/icons/velocidade.png","title":"Conversor de Velocidade","link":"/conversor/velocidade","type":"conversor"},{"id":"6","img":"../../images/icons/comprimento.png","title":"Conversor de Comprimento","link":"/conversor/comprimento","type":"conversor"},{"id":"7","img":"../../images/icons/documento.png","title":"Conversor de Documento","link":"/conversor/documento","type":"conversor"},{"id":"8","img":"../../images/icons/energia.png","title":"Conversor de Energia","link":"/conversor/energia","type":"conversor"},{"id":"9","img":"../../images/icons/midia.png","title":"Conversor de M\xeddia","link":"/conversor/midia","type":"conversor"},{"id":"10","img":"../../images/icons/bhaskara.png","title":"Formula de Bhaskara","link":"/formula/bhaskara","type":"formula"},{"id":"11","img":"../../images/icons/mediaAritmetica.png","title":"M\xe9dia Aritm\xe9tica","link":"/formula/media-aritmetica","type":"formula"},{"id":"12","img":"../../images/icons/jurosSimples.png","title":"Juros Simples","link":"/formula/juros-simples","type":"formula"}]')}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[233],()=>r(8791));module.exports=n})();