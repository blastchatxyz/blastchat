import{a as r,l as n,c as i,r as p,o as a}from"./entry.909f9c45.js";import{C as c}from"./ChatFeed.f9d1432c.js";import"./ChatPost.e14c6038.js";import"./user.14098e43.js";import"./domainUtils.8c29613d.js";import"./WaitingToast.166024ec.js";import"./textUtils.5173d37d.js";import"./storageUtils.e49d30e7.js";import"./MintedPostImage.53672744.js";import"./site.0a29eb84.js";import"./ConnectWalletButton.fdeed92a.js";import"./SwitchChainButton.51759b8b.js";import"./FileUploadModal.67d42441.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:o}=n();return{address:t,chainId:o}}};function d(t,o,h,u,f,e){const s=p("ChatFeed");return a(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:e.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const Q=r(m,[["render",d]]);export{Q as default};
