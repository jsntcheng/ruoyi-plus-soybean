import{b4 as le,cf as se,aZ as ne,cg as W,au as c,ax as x,aG as ae,d as E,a1 as g,ch as G,r as j,az as X,aB as F,ci as K,a as B,aF as q,aD as Z,ay as i,at as P,bc as ie,cj as ce,c1 as Y,aH as de,bb as ue,aE as D,bi as O,ck as ge,cl as be,c as M,h as N,o as V,w as f,f as T,R as he,s as fe,a6 as _,e as H,t as U,G as pe}from"./index-Z8DUt18u.js";import{_ as me,a as ve}from"./Grid-tUpxGiRj.js";import{p as J,l as ye}from"./interface-CqSeKUH6.js";import{_ as Ce,a as xe}from"./auth-CEy-eMOu.js";function _e(e){const{baseColor:o,textColor2:r,bodyColor:n,cardColor:l,dividerColor:d,actionColor:v,scrollbarColor:S,scrollbarColorHover:y,invertedColor:b}=e;return{textColor:r,textColorInverted:"#FFF",color:n,colorEmbedded:v,headerColor:l,headerColorInverted:b,footerColor:v,footerColorInverted:b,headerBorderColor:d,headerBorderColorInverted:b,footerBorderColor:d,footerBorderColorInverted:b,siderBorderColor:d,siderBorderColorInverted:b,siderColor:l,siderColorInverted:b,siderToggleButtonBorder:`1px solid ${d}`,siderToggleButtonColor:o,siderToggleButtonIconColor:r,siderToggleButtonIconColorInverted:r,siderToggleBarColor:W(n,S),siderToggleBarColorHover:W(n,y),__invertScrollbar:"true"}}const Q=le({name:"Layout",common:ne,peers:{Scrollbar:se},self:_e}),Se=c("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[c("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Te={embedded:Boolean,position:J,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ee=ae("n-layout");function oe(e){return E({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),Te),setup(o){const r=j(null),n=j(null),{mergedClsPrefixRef:l,inlineThemeDisabled:d}=X(o),v=F("Layout","-layout",Se,Q,o,l);function S(u,h){if(o.nativeScrollbar){const{value:p}=r;p&&(h===void 0?p.scrollTo(u):p.scrollTo(u,h))}else{const{value:p}=n;p&&p.scrollTo(u,h)}}Z(ee,o);let y=0,b=0;const R=u=>{var h;const p=u.target;y=p.scrollLeft,b=p.scrollTop,(h=o.onScroll)===null||h===void 0||h.call(o,u)};K(()=>{if(o.nativeScrollbar){const u=r.value;u&&(u.scrollTop=b,u.scrollLeft=y)}});const w={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},$={scrollTo:S},k=B(()=>{const{common:{cubicBezierEaseInOut:u},self:h}=v.value;return{"--n-bezier":u,"--n-color":o.embedded?h.colorEmbedded:h.color,"--n-text-color":h.textColor}}),C=d?q("layout",B(()=>o.embedded?"e":""),k,o):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:r,scrollbarInstRef:n,hasSiderStyle:w,mergedTheme:v,handleNativeElScroll:R,cssVars:d?void 0:k,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender},$)},render(){var o;const{mergedClsPrefix:r,hasSider:n}=this;(o=this.onRender)===null||o===void 0||o.call(this);const l=n?this.hasSiderStyle:void 0,d=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return g("div",{class:d,style:this.cssVars},this.nativeScrollbar?g("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):g(G,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const Be=oe(!1),we=oe(!0),$e=c("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[x("bordered",[i("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),i("left-placement",[x("bordered",[i("border",`
 right: 0;
 `)])]),x("right-placement",`
 justify-content: flex-start;
 `,[x("bordered",[i("border",`
 left: 0;
 `)]),x("collapsed",[c("layout-toggle-button",[c("base-icon",`
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",[P("&:hover",[i("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),c("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[c("base-icon",`
 transform: rotate(0);
 `)]),c("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[P("&:hover",[i("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),x("collapsed",[c("layout-toggle-bar",[P("&:hover",[i("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),c("layout-toggle-button",[c("base-icon",`
 transform: rotate(0);
 `)])]),c("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[c("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),c("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[i("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),i("bottom",`
 position: absolute;
 top: 34px;
 `),P("&:hover",[i("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),i("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),P("&:hover",[i("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),i("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),c("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),x("show-content",[c("layout-sider-scroll-container",{opacity:1})]),x("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ke=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return g("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},g("div",{class:`${e}-layout-toggle-bar__top`}),g("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ze=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return g("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},g(ie,{clsPrefix:e},{default:()=>g(ce,null)}))}}),Ie={position:J,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Re=E({name:"LayoutSider",props:Object.assign(Object.assign({},F.props),Ie),setup(e){const o=de(ee),r=j(null),n=j(null),l=j(e.defaultCollapsed),d=ue(D(e,"collapsed"),l),v=B(()=>Y(d.value?e.collapsedWidth:e.width)),S=B(()=>e.collapseMode!=="transform"?{}:{minWidth:Y(e.width)}),y=B(()=>o?o.siderPlacement:"left");function b(a,t){if(e.nativeScrollbar){const{value:s}=r;s&&(t===void 0?s.scrollTo(a):s.scrollTo(a,t))}else{const{value:s}=n;s&&s.scrollTo(a,t)}}function R(){const{"onUpdate:collapsed":a,onUpdateCollapsed:t,onExpand:s,onCollapse:L}=e,{value:I}=d;t&&O(t,!I),a&&O(a,!I),l.value=!I,I?s&&O(s):L&&O(L)}let w=0,$=0;const k=a=>{var t;const s=a.target;w=s.scrollLeft,$=s.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,a)};K(()=>{if(e.nativeScrollbar){const a=r.value;a&&(a.scrollTop=$,a.scrollLeft=w)}}),Z(ye,{collapsedRef:d,collapseModeRef:D(e,"collapseMode")});const{mergedClsPrefixRef:C,inlineThemeDisabled:u}=X(e),h=F("Layout","-layout-sider",$e,Q,e,C);function p(a){var t,s;a.propertyName==="max-width"&&(d.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(s=e.onAfterEnter)===null||s===void 0||s.call(e))}const te={scrollTo:b},A=B(()=>{const{common:{cubicBezierEaseInOut:a},self:t}=h.value,{siderToggleButtonColor:s,siderToggleButtonBorder:L,siderToggleBarColor:I,siderToggleBarColorHover:re}=t,m={"--n-bezier":a,"--n-toggle-button-color":s,"--n-toggle-button-border":L,"--n-toggle-bar-color":I,"--n-toggle-bar-color-hover":re};return e.inverted?(m["--n-color"]=t.siderColorInverted,m["--n-text-color"]=t.textColorInverted,m["--n-border-color"]=t.siderBorderColorInverted,m["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,m.__invertScrollbar=t.__invertScrollbar):(m["--n-color"]=t.siderColor,m["--n-text-color"]=t.textColor,m["--n-border-color"]=t.siderBorderColor,m["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),m}),z=u?q("layout-sider",B(()=>e.inverted?"a":"b"),A,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:n,mergedClsPrefix:C,mergedTheme:h,styleMaxWidth:v,mergedCollapsed:d,scrollContainerStyle:S,siderPlacement:y,handleNativeElScroll:k,handleTransitionend:p,handleTriggerClick:R,inlineThemeDisabled:u,cssVars:A,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender},te)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),g("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:Y(this.width)}]},this.nativeScrollbar?g("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):g(G,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),n?n==="bar"?g(ke,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):g(ze,{clsPrefix:o,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?g("div",{class:`${o}-layout-sider__border`}):null)}}),Pe=E({name:"TableSiderLayout",__name:"table-sider-layout",props:{defaultExpanded:{type:Boolean,default:!1},siderTitle:{default:void 0}},setup(e){const o=new Date().getTime(),n=ge(be).smaller("lg");return(l,d)=>{const v=xe,S=Ce,y=he,b=ve,R=me,w=Re,$=we,k=Be;return N(n)?(V(),M(R,{key:0,class:"min-h-500px flex-col-stretch gap-16px overflow-auto","x-gap":12,"y-gap":12,"item-responsive":"",responsive:"screen"},{default:f(()=>[T(b,{span:"24 s:24 1034:10 m:8 l:7 xl:6 xxl:5"},{default:f(()=>[T(y,{bordered:!1,size:"small",class:"sider-layout-card h-full card-wrapper","content-class":"sider-layout-card-content"},{default:f(()=>[N(n)?(V(),M(S,{key:0,"default-expanded-names":l.defaultExpanded?[`table-sider-layout${N(o)}`]:[]},{default:f(()=>[T(v,{title:l.siderTitle,name:`table-sider-layout${N(o)}`,"display-directive":"show"},{header:f(()=>[_(l.$slots,"header",{},()=>[H("span",null,U(l.siderTitle),1)],!0)]),"header-extra":f(()=>[_(l.$slots,"header-extra",{},void 0,!0)]),default:f(()=>[_(l.$slots,"sider",{},void 0,!0)]),_:3},8,["title","name"])]),_:3},8,["default-expanded-names"])):fe("",!0)]),_:3})]),_:3}),T(b,{class:"content",span:"24 s:24 m:16 l:17 xl:18 xxl:19"},{default:f(()=>[_(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3})):(V(),M(k,{key:1,"has-sider":""},{default:f(()=>[T(w,{"collapse-mode":"transform","collapsed-width":0,width:320,"show-trigger":"bar"},{default:f(()=>[T(y,{bordered:!1,size:"small",class:"sider-layout-card h-full card-wrapper","content-class":"sider-layout-card-content"},{header:f(()=>[_(l.$slots,"header",{},()=>[H("span",null,U(l.siderTitle),1)],!0)]),"header-extra":f(()=>[_(l.$slots,"header-extra",{},void 0,!0)]),default:f(()=>[_(l.$slots,"sider",{},void 0,!0)]),_:3})]),_:3}),T($,{"content-class":"bg-transparent"},{default:f(()=>[_(l.$slots,"default",{},void 0,!0)]),_:3})]),_:3}))}}}),Ne=pe(Pe,[["__scopeId","data-v-5ce479cd"]]);export{Ne as _};
