import{H as T,T as U,M as x}from"./components.be03154a.js";import{g}from"./numberUtils.c516b59a.js";import{a as D,p as q,I as w,C as _,$ as W,l as A,v as H,b as u,e as m,w as C,f as t,z as d,t as r,x as h,y as p,i as y,u as b,c as I,F as M,r as N,o as l}from"./entry.8cd1fc01.js";import{C as j}from"./ConnectWalletButton.79625dcc.js";import{W as v}from"./WaitingToast.44aa810e.js";import{F as B}from"./FileUploadModal.e80d70b5.js";import{u as V}from"./user.c59fb4de.js";import{f as E}from"./storageUtils.2a76c52a.js";import"./composables.c9cbe12a.js";import"./site.bfba9d8d.js";const L={name:"NftCreate",data(){return{cDescription:null,cImage:null,cName:null,cSymbol:null,isMounted:!1,launchpadPaused:null,nftName:null,createPriceWei:null,ratio:null,uniqueId:null,waitingCreate:!1,waitingData:!1}},components:{ConnectWalletButton:j,FileUploadModal:B,WaitingToast:v},mounted(){this.isMounted=!0,this.ratio=this.$config.nftDefaultRatio,this.fetchData()},computed:{cleanDescription(){return this.cDescription?this.cDescription.replace(/"/g,"'"):null},createPrice(){if(!this.createPriceWei)return null;const e=Number(q(this.createPriceWei));return e>1?e.toFixed(0):e>.1?e.toFixed(4):e>.01?e.toFixed(5):e>.001?e.toFixed(6):e>1e-4?e.toFixed(7):e>1e-5?e.toFixed(8):e>1e-6?e.toFixed(9):e},fieldsValid(){return this.cName&&this.cSymbol&&this.cImage&&this.cDescription&&this.nftName&&this.ratio}},methods:{calculatePrice(e,o){const n=Number(e)-1;return(n*(n+1)*(2*n+1)-(n-1)*n*(2*(n-1)+1))*1e4/42069*Number(o)/31337},async createCollection(){if(this.waitingCreate=!0,this.signer){const e=new w([`function launch(
              address contractOwner_,
              address referrer_,
              string memory mdDescription_,
              string memory mdImage_,
              string memory mdName_,
              string memory name_,
              string memory symbol_,
              string calldata uniqueId_, 
              uint256 ratio_
            ) external payable`,"function getNftContractAddress(string calldata _uniqueId) external view returns(address)"]),o=new _(this.$config.nftLaunchpadBondingAddress,e,this.signer);try{const n=await o.launch(this.address,E(window),this.cleanDescription,this.cImage,this.nftName,this.cName,this.cSymbol,this.uniqueId,W(String(this.ratio)),{value:this.createPriceWei}),c=this.toast({component:v,props:{text:"Please wait for your transaction to confirm. Click on this notification to see transaction in the block explorer."}},{type:"info",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),i=await n.wait();if(i.status===1){this.toast.dismiss(c),this.toast("You have successfully created an NFT collection!",{type:"success",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()});const s=await o.getNftContractAddress(this.uniqueId);this.makeOrbisPost(s),this.$router.push({path:"/nft/collection",query:{id:s}}),this.waitingCreate=!1}else this.toast.dismiss(c),this.waitingCreate=!1,this.toast("Transaction has failed.",{type:"error",onClick:()=>window.open(this.$config.blockExplorerBaseUrl+"/tx/"+n.hash,"_blank").focus()}),console.log(i)}catch(n){console.error(n),this.toast(n.message,{type:"error"}),this.waitingCreate=!1}}this.waitingCreate=!1},async fetchData(){this.waitingData=!0;let e=this.$getFallbackProvider(this.$config.supportedChainId);this.isActivated&&this.chainId===this.$config.supportedChainId&&(e=this.signer);const o=new w(["function paused() public view returns(bool)","function isUniqueIdAvailable(string calldata _uniqueId) public view returns(bool)","function price() public view returns(uint256)"]),n=new _(this.$config.nftLaunchpadBondingAddress,o,e);this.launchpadPaused=await n.paused(),this.uniqueId=Math.random().toString(36).slice(2),await n.isUniqueIdAvailable(this.uniqueId)||(this.uniqueId=Math.random().toString(36).slice(10)),this.createPriceWei=await n.price(),this.waitingData=!1},insertImage(e){this.cImage=e.replace("?.img","")},async makeOrbisPost(e){if(this.userStore.getIsConnectedToOrbis)try{!String(this.cImage).toLowerCase().endsWith("?.img")&&!String(this.cImage).toLowerCase().endsWith(".png")&&!String(this.cImage).toLowerCase().endsWith(".jpg")&&!String(this.cImage).toLowerCase().endsWith(".jpeg")&&!String(this.cImage).toLowerCase().endsWith(".gif")&&!String(this.cImage).toLowerCase().endsWith(".webp")&&(this.cImage=this.cImage+"?.img");const o={body:"I have launched a new NFT collection: "+this.cName+" <br /><br />Check it out here \u{1F447}",context:this.$config.chatChannels.general,data:{type:"nftCollectionCreated",authorAddress:String(this.address),collectionAddress:String(e),collectionDescription:this.cleanDescription,collectionImage:this.cImage.replace("?.img",""),collectionName:this.cName,collectionRatio:this.ratio,collectionSymbol:this.cSymbol,collectionUniqueId:this.uniqueId,pricePaidWei:this.createPriceWei}};await this.$orbis.createPost(o)}catch(o){console.log(o)}}},setup(){const{address:e,chainId:o,isActivated:n,signer:c}=A(),i=V(),s=H();return{address:e,chainId:o,isActivated:n,signer:c,toast:s,userStore:i}}},R={class:"card border scroll-500"},z={class:"card-body"},O={class:"fs-3"},K=t("h3",{class:"mb-4 mt-3"},"Create NFT Collection",-1),Y={key:0,class:"d-flex justify-content-center mb-3"},G=t("span",{class:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"},null,-1),J=[G],Q={key:1,class:"mb-4"},X={class:"mb-4"},Z=t("label",{for:"cName",class:"form-label"},"Collection Name",-1),$=t("div",{id:"cNameHelp",class:"form-text"},"This is not a token name, but the whole collection name.",-1),ee={class:"mb-4"},te=t("label",{for:"cSymbol",class:"form-label"},"Collection Symbol",-1),ie=t("div",{id:"cSymbolHelp",class:"form-text"},"Collection symbol (required by the ERC-721 smart contract, but not really important).",-1),oe={class:"mb-2"},ne=t("label",{for:"cImage",class:"form-label"},"Collection Image (can be changed later)",-1),se={class:"input-group","aria-describedby":"cImageHelp",id:"cImage"},ae=["data-bs-target"],re=t("i",{class:"bi bi-file-earmark-image-fill"},null,-1),le=t("div",{id:"cImageHelp",class:"form-text"},"Even if you want a generative PFP collection, put a single preview image for now and you will change it to a metadata link later.",-1),ce={key:2,class:"mb-4"},de=["src"],ue=t("br",null,null,-1),me=t("small",null,"If image didn't appear above, then something is wrong with the link you added.",-1),he={class:"mb-4"},pe=t("label",{for:"cDescription",class:"form-label"},"Collection Description (can be changed later)",-1),fe=t("div",{id:"cDescriptionHelp",class:"form-text"},"Too long description means higher gas cost for storing it.",-1),ge={class:"mb-4"},be=t("label",{for:"nftName",class:"form-label"},"NFT Name (can be changed later)",-1),ye={key:0,id:"nftNameHelp",class:"form-text"},we={class:"mb-4"},_e=t("label",{for:"uniqueId",class:"form-label"},"Unique ID (store it - just in case)",-1),Ce=t("div",{id:"uniqueIdHelp",class:"form-text"},"This is just in case the frontend will not show you the NFT collection address and you'll need to find it manually.",-1),Ie={class:"mb-4"},Ne=t("label",{for:"ratio",class:"form-label"},"Bonding Curve Ratio",-1),ve={id:"ratioHelp",class:"form-text"},ke={class:"d-flex justify-content-center mt-5 mb-5"},Se=["disabled"],Pe={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Fe={key:1,disabled:!0,class:"btn btn-primary"};function Te(e,o,n,c,i,s){const k=U,f=x,S=T,P=N("ConnectWalletButton"),F=N("FileUploadModal");return l(),u(M,null,[m(S,null,{default:C(()=>[m(k,null,{default:C(()=>[y("Create NFT Collection | "+r(e.$config.projectMetadataTitle),1)]),_:1}),m(f,{property:"og:title",content:"Create NFT Collection | "+e.$config.projectMetadataTitle},null,8,["content"]),m(f,{name:"description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"]),m(f,{property:"og:image",content:e.$config.projectUrl+e.$config.previewImageNftCreate},null,8,["content"]),m(f,{property:"og:description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"]),m(f,{name:"twitter:image",content:e.$config.projectUrl+e.$config.previewImageNftCreate},null,8,["content"]),m(f,{name:"twitter:description",content:"Create your very own NFT collection on "+e.$config.projectName+"!"},null,8,["content"])]),_:1}),t("div",R,[t("div",z,[t("p",O,[t("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:o[0]||(o[0]=a=>e.$router.back())})]),K,i.waitingData?(l(),u("div",Y,J)):d("",!0),s.createPrice?(l(),u("p",Q," Price for creating a collection is "+r(s.createPrice)+" "+r(e.$config.tokenSymbol)+". ",1)):d("",!0),t("div",X,[Z,h(t("input",{type:"text",class:"form-control",id:"cName","aria-describedby":"cNameHelp",placeholder:"e.g. Crypto Punks","onUpdate:modelValue":o[1]||(o[1]=a=>i.cName=a)},null,512),[[p,i.cName]]),$]),t("div",ee,[te,h(t("input",{type:"text",class:"form-control",id:"cSymbol","aria-describedby":"cSymbolHelp",placeholder:"e.g. PUNKS","onUpdate:modelValue":o[2]||(o[2]=a=>i.cSymbol=a)},null,512),[[p,i.cSymbol]]),ie]),t("div",oe,[ne,t("div",se,[h(t("input",{"onUpdate:modelValue":o[3]||(o[3]=a=>i.cImage=a),type:"text",class:"form-control",placeholder:"Enter image URL or click the upload button"},null,512),[[p,i.cImage]]),c.isActivated&&e.$config.fileUploadEnabled!==""?(l(),u("button",{key:0,class:"btn btn-outline-secondary rounded-end-2","data-bs-toggle":"modal","data-bs-target":"#fileUploadModal"+e.$.uid},[re,y(" Upload ")],8,ae)):d("",!0)]),le]),i.cImage?(l(),u("div",ce,[t("img",{src:i.cImage,class:"img-thumbnail img-fluid",style:{"max-width":"100px"}},null,8,de),ue,me])):d("",!0),t("div",he,[pe,h(t("input",{type:"text",class:"form-control",id:"cDescription","aria-describedby":"cDescriptionHelp",placeholder:"Keep it short and sweet.","onUpdate:modelValue":o[4]||(o[4]=a=>i.cDescription=a)},null,512),[[p,i.cDescription]]),fe]),t("div",ge,[be,h(t("input",{type:"text",class:"form-control",id:"cDescription","aria-describedby":"nftNameHelp",placeholder:"Short, will show up next to each NFT, e.g. Punk","onUpdate:modelValue":o[5]||(o[5]=a=>i.nftName=a)},null,512),[[p,i.nftName]]),i.nftName?(l(),u("div",ye,"The first minted NFTs will be "+r(i.nftName)+" #1, "+r(i.nftName)+" #2, "+r(i.nftName)+" #3 etc.",1)):d("",!0)]),t("div",we,[_e,h(t("input",{type:"text",class:"form-control",id:"uniqueId","aria-describedby":"uniqueIdHelp",disabled:"",readonly:"","onUpdate:modelValue":o[6]||(o[6]=a=>i.uniqueId=a)},null,512),[[p,i.uniqueId]]),Ce]),t("div",Ie,[Ne,h(t("input",{type:"text",class:"form-control",id:"ratio","aria-describedby":"ratioHelp","onUpdate:modelValue":o[7]||(o[7]=a=>i.ratio=a)},null,512),[[p,i.ratio]]),t("div",ve," Price for mint #1 will be "+r(b(g)(s.calculatePrice(2,i.ratio)))+" "+r(e.$config.tokenSymbol)+", for mint #5 will be "+r(b(g)(s.calculatePrice(5,i.ratio)))+" "+r(e.$config.tokenSymbol)+", for mint #15 will be "+r(b(g)(s.calculatePrice(15,i.ratio)))+" "+r(e.$config.tokenSymbol)+", for mint #30 will be "+r(b(g)(s.calculatePrice(30,i.ratio)))+" "+r(e.$config.tokenSymbol)+", etc. ",1)]),t("div",ke,[c.isActivated&&!i.launchpadPaused?(l(),u("button",{key:0,disabled:i.waitingCreate||!s.fieldsValid,class:"btn btn-primary",type:"button",onClick:o[8]||(o[8]=(...a)=>s.createCollection&&s.createCollection(...a))},[i.waitingData||i.waitingCreate?(l(),u("span",Pe)):d("",!0),y(" Create NFT Collection for "+r(s.createPrice)+" "+r(e.$config.tokenSymbol),1)],8,Se)):d("",!0),c.isActivated&&i.launchpadPaused?(l(),u("button",Fe," Paused ")):d("",!0),c.isActivated?d("",!0):(l(),I(P,{key:2,class:"btn btn-primary",btnText:"Connect wallet"}))]),i.isMounted?(l(),I(F,{key:3,onProcessFileUrl:s.insertImage,title:"Upload your NFT image",infoText:"Upload the NFT image.",componentId:e.$.uid,maxFileSize:e.$config.fileUploadSizeLimit},null,8,["onProcessFileUrl","componentId","maxFileSize"])):d("",!0)])])],64)}const Ve=D(L,[["render",Te]]);export{Ve as default};
