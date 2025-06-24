import{au as v,at as x,d as C,a1 as a,az as y,aB as h,aM as z,a as c,aF as $,ax as d,br as B,bs as P}from"./index-Z8DUt18u.js";const S=v("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[x("&:first-child","margin-top: 0;"),x("&:last-child","margin-bottom: 0;")]),V=Object.assign(Object.assign({},h.props),{depth:[String,Number]}),M=C({name:"P",props:V,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=y(e),o=h("Typography","-p",S,z,e,r),s=c(()=>{const{depth:i}=e,l=i||"1",{common:{cubicBezierEaseInOut:u},self:{pFontSize:g,pLineHeight:m,pMargin:f,pTextColor:b,[`pTextColor${l}Depth`]:p}}=o.value;return{"--n-bezier":u,"--n-font-size":g,"--n-line-height":m,"--n-margin":f,"--n-text-color":i===void 0?b:p}}),t=n?$("p",c(()=>`${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:r,cssVars:n?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),a("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),D=v("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("strong",`
 font-weight: var(--n-font-weight-strong);
 `),d("italic",{fontStyle:"italic"}),d("underline",{textDecoration:"underline"}),d("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),O=Object.assign(Object.assign({},h.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),k=C({name:"Text",props:O,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=y(e),o=h("Typography","-text",D,z,e,r),s=c(()=>{const{depth:i,type:l}=e,u=l==="default"?i===void 0?"textColor":`textColor${i}Depth`:B("textColor",l),{common:{fontWeightStrong:g,fontFamilyMono:m,cubicBezierEaseInOut:f},self:{codeTextColor:b,codeBorderRadius:p,codeColor:R,codeBorder:T,[u]:_}}=o.value;return{"--n-bezier":f,"--n-text-color":_,"--n-font-weight-strong":g,"--n-font-famliy-mono":m,"--n-code-border-radius":p,"--n-code-text-color":b,"--n-code-color":R,"--n-code-border":T}}),t=n?$("text",c(()=>`${e.type[0]}${e.depth||""}`),s,e):void 0;return{mergedClsPrefix:r,compitableTag:P(e,["as","tag"]),cssVars:n?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,r,n;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const s=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r);return this.code?a("code",{class:s,style:this.cssVars},this.delete?a("del",null,t):t):this.delete?a("del",{class:s,style:this.cssVars},t):a(this.compitableTag||"span",{class:s,style:this.cssVars},t)}});export{k as _,M as a};
