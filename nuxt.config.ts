import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "",
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      blockExplorerBaseUrl: "https://testnet.blastscan.io",
      chatChannels: { // go to Orbis Dashboard (https://useorbis.com/dashboard), create a new Project and then create a new Context for each of the channels below
        "general": "kjzl6cwe1jw14bmxuu72rg0pg5z9dh52guuuk6n1ghoulq9hp92hbxc0jgtpint", // general discussion channel
        "memesImages": "kjzl6cwe1jw14b45cjm6cx11f6zxdv1tqug9wx7t16qnpi9thfcgttqmbfd63yr",
        "shill": "kjzl6cwe1jw148ma371mc0ew99ufsl9y0tpneinc7ryflby3wscvq0uy79lpjrv",
        "nftLaunchpad": "kjzl6cwe1jw149qs1n5djm21f9br6lplu73qsuymfg4swsouhpvn0ipzs4qr35t",
        "friendKeys": "kjzl6cwe1jw1474z0giszr1v3n52t8x99g3vwu00ykst1j294gp2oimfdj9pnhi",
      },
      chatTokenAddress: "", // chat token address
      chatTokenImage: "", // chat token image
      chatTokenSymbol: "", // chat token symbol or name
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.svg",
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. IPFS via Spheron)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || "netlify", // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0x06A7Ab7Bb68b0ad6eB7688C5781E60BE6AFc658d",
      iggyPostMinterAddress: "0x5e54CebB2612744cB56547bC7CC41466ad7ac557",
      iggyPostStatsAddress: "0xF40284a811c82b4B9ab22E94Bb909Df6d2c66C08",
      imagekitEndpoint: process.env.IMAGEKIT_ENDPOINT,
      imagekitPublicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      ipfsGateway: "https://cloudflare-ipfs.com/ipfs/",
      keysAddress: "", // FriendKeys contract address 
      keysFeatured: ["tempe", "tekr"],
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || "netlify", // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://testnets.opensea.io/assets/mumbai/0x06A7Ab7Bb68b0ad6eB7688C5781E60BE6AFc658d",
      marketplacePostNftItemUrl: "https://testnets.opensea.io/assets/mumbai/0x06A7Ab7Bb68b0ad6eB7688C5781E60BE6AFc658d/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://testnets.opensea.io/assets/mumbai/", // url (append nft address to it)
      newsletterLink: "https://paragraph.xyz/@iggy?modal=subscribe",
      nftDefaultRatio: 1, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 4, // number of latest NFTs to show in the NFT launchpad
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/covers/cover.png",
      previewImageAirdrop: "/img/covers/cover-airdrop.png",
      previewImageNftCollection: "/img/covers/cover-nft-collection.png",
      previewImageNftCreate: "/img/covers/cover-nft-create.png",
      previewImageNftLaunchpad: "/img/covers/cover-nft-launchpad.png",
      previewImagePost: "/img/covers/cover-post.png",
      previewImagePostNft: "/img/covers/cover-post-nft.png",
      previewImageProfile: "/img/covers/cover-profile.png",
      previewImageStake: "/img/covers/cover-stake.png",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "BlastChat.xyz | Decentralized Social Network on Blast",
      projectName: "BlastChat",
      projectDescription: "BlastChat is the first decentralized social network on Blast. Join us and discover the power of Web3 Social!",
      projectTwitter: "https://twitter.com/iggysocial",
      projectUrl: "https://blastchat.xyz", // without trailing slash!
      punkMinterAddress: "0x63f8691b048e68E1C3d6E135aDc81291A9bb1987", // punk domain minter contract address
      punkNumberOfPrices: 5, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0x32749Ab66ef1B85aFfF3425d5766d8025E407769", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "https://sepolia.blast.io", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": false, 
        "airdrop": false, 
        "friendKeys": false, 
        "governance": false,
        "newsletter": false, 
        "nftLaunchpad": false, 
        "randomMintedPosts": true, 
        "swap": false, 
        "stake": false, 
        "sendTokens": true, 
        "spotify": false
      }, 
      showRepliesOnHomepage: true, // show replies on the homepage  
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "5y7f2Wxfq49G5KuNQfMPbk", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "BGT", // stake token symbol (governance token symbol)
      supportedChainId: 168587773,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "",
      tldName: ".blastchat",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "ETH"
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
