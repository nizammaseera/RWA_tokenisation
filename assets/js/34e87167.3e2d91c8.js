"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[7659],{3860:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(5893),r=o(1151);const i={title:"Software Development Kit"},a=void 0,s={id:"back-end-api/sdk/software-development-kit",title:"Software Development Kit",description:"The Defactor SDK is a TypeScript-based Node.js library designed to streamline the process of instantiating contracts and enhancing the seamless interaction with Defactor contracts.",source:"@site/docs/back-end-api/sdk/software-development-kit.md",sourceDirName:"back-end-api/sdk",slug:"/back-end-api/sdk/software-development-kit",permalink:"/docs/back-end-api/sdk/software-development-kit",draft:!1,unlisted:!1,editUrl:"https://github.com/defactor-com/documentation/tree/main/docs/back-end-api/sdk/software-development-kit.md",tags:[],version:"current",frontMatter:{title:"Software Development Kit"},sidebar:"docSidebar",previous:{title:"SDK",permalink:"/docs/category/sdk"},next:{title:"Pools",permalink:"/docs/category/pools"}},c={},l=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Importing the SDK",id:"importing-the-sdk",level:3},{value:"Instantiating the SDK",id:"instantiating-the-sdk",level:3},{value:"Interacting with the SDK",id:"interacting-with-the-sdk",level:3},{value:"Methods Available",id:"methods-available",level:2},{value:"Examples",id:"examples",level:2},{value:"Lending to a Pool",id:"lending-to-a-pool",level:3},{value:"Borrowing from a Pool",id:"borrowing-from-a-pool",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The Defactor SDK is a TypeScript-based Node.js library designed to streamline the process of instantiating contracts and enhancing the seamless interaction with Defactor contracts."}),"\n",(0,t.jsx)(n.p,{children:"Tailored for developers engaged in blockchain or cryptocurrency operations, this SDK offers interfaces for communicating with smart contracts on Ethereum-based networks. By abstracting complexities, developers can concentrate on their application's business logic, free from the intricacies of underlying blockchain technology."}),"\n",(0,t.jsxs)(n.p,{children:["You can find the source code for this repository in ",(0,t.jsx)(n.a,{href:"https://github.com/defactor-com/sdk/",children:"github.com/defactor-com/sdk"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Support for cjs, es, and esm modules."}),"\n",(0,t.jsx)(n.li,{children:"Developed using TypeScript for enhanced type safety and clarity."}),"\n",(0,t.jsxs)(n.li,{children:["Seamless integration with ",(0,t.jsx)(n.code,{children:"ERC20CollateralPool"})," and ",(0,t.jsx)(n.code,{children:"Pools"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Well-defined interfaces that accurately model the Defactor contracts for easy interaction and integration."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This library is built on top of ",(0,t.jsx)(n.code,{children:"ether@6.x.x"})," to provide a simple and easy to use interface to interact with the Defactor contracts."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# yarn\nyarn add @defactor/defactor-sdk\n\n# npm\nnpm install @defactor/defactor-sdk\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"importing-the-sdk",children:"Importing the SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { DefactorSDK } from "@defactor/defactor-sdk";\n'})}),"\n",(0,t.jsx)(n.p,{children:"This library is built to provide a simple and easy to use interface to interact with the Defactor contracts in two different options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"SelfProvider"}),": For developers who prefer using their own ",(0,t.jsx)(n.strong,{children:"digital signature provider"})," to interact with Defactor contracts. In this mode, developers must furnish the private key of the account intended for blockchain interaction. In order to effectuate this integration, the developer team must conscientiously consider the security protocols implemented to safeguard their private key from exposure or compromise in any manner."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AssistedProvider"}),": Geared towards developers seeking to interact with Defactor contracts without providing their private key. In this mode, the Defactor library exposes contract methods similar to ",(0,t.jsx)(n.code,{children:"SelfProvider"}),", but instead of signing transactions, it returns the transaction object for developers to sign. Other contract-interaction functions not requiring signature are seamlessly handled by the SDK."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"instantiating-the-sdk",children:"Instantiating the SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const provider = new SelfProvider(\n  DefactorSDK.ERC20CollateralPool, // contract constructor\n  ERC20_COLLATERAL_POOL_ETH_ADDRESS, // contract address\n  providerUrl, // provider url (alchemy, infura, etc)\n  ADMIN_PRIVATE_KEY // private key\n);\n\n// Pools Contract\nconst provider = new SelfProvider(\n  DefactorSDK.Pools, // contract constructor\n  POOLS_ETH_ADDRESS, // contract address\n  providerUrl, // provider url (alchemy, infura, etc)\n  ADMIN_PRIVATE_KEY // private key\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"interacting-with-the-sdk",children:"Interacting with the SDK"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { ERC20CollateralPool, SelfProvider } from "@defactor/defactor-sdk";\n\nconst providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(\n  ERC20CollateralPool,\n  contractConfig.contractAddress!, // loaded from config file\n  contractConfig.providerUrl!, // loaded from config file\n  contractConfig.adminPrivateKey! // loaded from config file\n);\n\nconst liquidationProtocolFee =\n  providerInstance.contract.LIQUIDATION_PROTOCOL_FEE;\n\nconsole.log(liquidationProtocolFee);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"methods-available",children:"Methods Available"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"async USDC_FEES_COLLECTED(): Promise<bigint>                                                                                                // Returns the total USDC fees collected.\nasync getUsdc(): Promise<string>                                                                                                            // Returns the USDC contract address.\nasync getTotalPools(): Promise<bigint>                                                                                                      // Returns the total number of pools.\nasync getPool(poolId: bigint): Promise<Pool>                                                                                                // Returns the pool with the given ID.\nasync getPools(offset: bigint, limit: bigint): Promise<Array<Pool>>                                                                         // Returns a list of pools within the given range.\nasync getTotalLending(poolId: bigint, address: string): Promise<bigint>                                                                     // Returns the total amount of lending for a given pool and address.\nasync getLoan(poolId: bigint, address: string, lendingId: bigint): Promise<Lend>                                                            // Returns a specific loan.\nasync addPool(pool: PoolInput): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                            // Adds a new pool.\nasync lend(poolId: bigint, amount: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                // Lends a certain amount to a pool.\nasync borrow(poolId: bigint, amount: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                              // Borrows a certain amount from a pool.\nasync getBorrow(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<Borrow>                                                 // Returns a specific borrow.\nasync calculateCollateralTokenAmount(poolId: bigint, amount: bigint): Promise<bigint>                                                       // Calculates the amount of collateral tokens for a given amount.\nasync repay(poolId: bigint, borrowerAddress: string, borrowId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>    // Repays a borrow.\nasync getLiquidationInfo(pool: Pool): Promise<PoolLiquidationInfo>                                                                          // Returns information about the liquidation of a pool.\nasync liquidatePool(poolId: bigint): Promise<ethers.ContractTransaction | ethers.TransactionResponse>                                       // Liquidates a pool.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"lending-to-a-pool",children:"Lending to a Pool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { SelfProvider } from "@defactor/defactor-sdk";\n\nconst providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(\n  ERC20CollateralPool,\n  contractConfig.contractAddress!, // loaded from config file\n  contractConfig.providerUrl!, // loaded from config file\n  contractConfig.privateKey! // loaded from config file\n);\n\nconst poolId = 1;\nconst amount = BigInt(100_000000); // 100 USDC\n\nconst lendTx = await providerInstance.lend(poolId, amount);\nconsole.log(lendTx);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"borrowing-from-a-pool",children:"Borrowing from a Pool"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { SelfProvider } from "@defactor/defactor-sdk";\n\nconst providerInstance = new SelfProvider.SelfProvider<ERC20CollateralPool>(\n  ERC20CollateralPool,\n  contractConfig.contractAddress!, // loaded from config file\n  contractConfig.providerUrl!, // loaded from config file\n  contractConfig.privateKey! // loaded from config file\n);\n\nconst poolId = 1;\nconst amount = BigInt(10_000000); // 10 USDC\n\nconst borrowTx = await providerInstance.borrow(poolId, amount);\nconsole.log(borrowTx);\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(7294);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);