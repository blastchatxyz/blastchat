import{a as p,l as g,o as i,b as h,t as s,z as u,f as a,F as m,I as l,C as w,c as f,w as C,T as I}from"./entry.bbb58849.js";const $={name:"SwitchChainButton",props:["dropdown","navbar"],computed:{showChainName(){return this.chainId===this.$config.supportedChainId?this.$getChainName(this.$config.supportedChainId):"Unsupported network"}},methods:{changeNetwork(t){const e=this.$switchChain(t);window.ethereum.request({method:e.method,params:e.params})}},setup(){const{chainId:t}=g();return{chainId:t}}},k={key:1,class:"dropdown"},_={class:"btn btn-primary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},b={class:"dropdown-menu"},N={key:2,class:"nav-item dropdown"},v={class:"nav-link dropdown-toggle","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false"},y={class:"dropdown-menu dropdown-menu-end"};function S(t,e,n,r,d,o){return i(),h(m,null,[!n.navbar&&!n.dropdown?(i(),h("button",{key:0,class:"btn btn-primary",onClick:e[0]||(e[0]=c=>o.changeNetwork(t.$getChainName(t.$config.supportedChainId)))}," Switch to "+s(t.$getChainName(t.$config.supportedChainId)),1)):u("",!0),!n.navbar&&n.dropdown?(i(),h("div",k,[a("button",_,s(o.showChainName),1),a("div",b,[a("span",{class:"dropdown-item cursor-pointer",onClick:e[1]||(e[1]=c=>o.changeNetwork(t.$getChainName(t.$config.supportedChainId)))}," Switch to "+s(t.$getChainName(t.$config.supportedChainId)),1)])])):u("",!0),n.navbar&&n.dropdown?(i(),h("li",N,[a("a",v,s(o.showChainName),1),a("div",y,[a("span",{class:"dropdown-item cursor-pointer",onClick:e[2]||(e[2]=c=>o.changeNetwork(t.$getChainName(t.$config.supportedChainId)))}," Switch to "+s(t.$getChainName(t.$config.supportedChainId)),1)])])):u("",!0)],64)}const F=p($,[["render",S]]),B={name:"MintedPostImage",props:["id"],data(){return{streamId:null,image:null}},mounted(){this.fetchMetadata()},methods:{async fetchMetadata(){let t=localStorage.getItem("minted-post-"+this.id);if(!t){let r=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(r=this.signer);const d=new l(["function uri(uint256 _tokenId) external view returns (string memory)"]);t=await new w(this.$config.iggyPostAddress,d,r).uri(this.id),localStorage.setItem("minted-post-"+this.id,t)}const e=atob(t.substring(29)),n=JSON.parse(e);this.streamId=n.external_url.split("?id=")[1],this.image=n.image}},setup(){const{isActivated:t,chainId:e,signer:n}=g();return{isActivated:t,chainId:e,signer:n}}},M=["src"];function P(t,e,n,r,d,o){const c=I;return i(),f(c,{to:"/minted-post/?id="+n.id},{default:C(()=>[a("img",{class:"img-fluid rounded",src:d.image},null,8,M)]),_:1},8,["to"])}const D=p(B,[["render",P]]);export{D as M,F as S};