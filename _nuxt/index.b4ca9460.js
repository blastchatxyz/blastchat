import{a as r,l as n,c as i,r as a,o as p}from"./entry.3ca8c271.js";import{C as c}from"./ChatFeed.6722062d.js";import"./ChatPost.85fca6b7.js";import"./user.666d16c7.js";import"./domainUtils.63ad3124.js";import"./MintedPostImage.d6eb1b33.js";import"./WaitingToast.f4ac53ac.js";import"./textUtils.602baa67.js";import"./storageUtils.e51f845d.js";import"./site.7692b823.js";import"./ConnectWalletButton.704d4383.js";import"./FileUploadModal.f825b1b0.js";const m={name:"index",components:{ChatFeed:c},computed:{getOrbisContext(){return this.$config.orbisTest?this.$config.orbisTestContext:this.$config.chatChannels.general}},setup(){const{address:t,chainId:e}=n();return{address:t,chainId:e}}};function d(t,e,h,u,f,o){const s=a("ChatFeed");return p(),i(s,{class:"mt-1",showQuotedPost:t.$config.showRepliesOnHomepage,orbisContext:o.getOrbisContext},null,8,["showQuotedPost","orbisContext"])}const P=r(m,[["render",d]]);export{P as default};