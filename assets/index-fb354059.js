import{j as o,a as t}from"./index-3ed079ed.js";import{I as l}from"./Image-6ca3c862.js";import{C as r}from"./Card-cec3b9f5.js";function e(a){return o("div",{className:"box d-flex flex-column",children:[t("div",{className:"transparent-card",children:t(l,{style:{height:"100%",width:"100%"},alt:a.alt,src:a.src})}),t("a",{href:a.href,children:a.title})]})}const s=new URL("/personal-portifolio/assets/parrotcloud-338bf169.png",self.location).href,c=new URL("/personal-portifolio/assets/mostra_ifrj-88386cdf.png",self.location).href,i=new URL("/personal-portifolio/assets/calculadora-508998d0.png",self.location).href;function u(){const a={marginLeft:"4rem",marginRight:"1rem",flexDirection:"row",justifyContent:"space-between",border:"none"};return t("main",{className:"mt-4",id:"canvas_container",children:t(r,{className:"container",style:a,children:o(r,{className:"row",style:a,children:[t(e,{alt:"Parrotcloud",src:s,href:"https://mulekotd.github.io/store.parrotcloud/",title:"Parrotcloud: Site de Publicação de Jogos"}),t(e,{alt:"Mostra IFRJ",src:c,href:"https://mostraifrjduquedecaxias.labculturadigital.com.br/",title:"#Mostra IFRJ"}),t(e,{alt:"Calculadora",src:i,className:"col",href:"https://mulekotd.github.io/simple-react-calculator/",title:"React Simple Calculator"})]})})})}export{u as default};