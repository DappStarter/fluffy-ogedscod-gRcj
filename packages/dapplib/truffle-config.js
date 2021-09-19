require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name response outside prosper inflict bread suit gather'; 
let testAccounts = [
"0xd9cd547cef4aa12cc30166982a463d059b133b066098c82976e6af26ea3e730b",
"0xcbda448d73ca0469cd4bfe612e0d83ed99e21e8e3a8e0edfb418a6690f727ccb",
"0xcfda4d8fb776fb3cc331d7f99ddd9069d68f05d143c8873d846e1d581238fe66",
"0xaadde83de4e567071bbc3eed75fe6d81c305228cce984467cfef25df16f95284",
"0x25b65618e10ab3b428fcd01a1d58137b2d89bc0837ef0ffc0d318150ed38011d",
"0x6dc8a232255ebe7c7fd5d6ddd97cf553aad82063d1d78c0a1af81c3246e61bd2",
"0xf3c4923ef98aec8254dde6133798a30c10b819a5a07ed71c70cfebceec108a99",
"0x205ae2518a5a937781ce67c6e647ed83d1b525230386dd2ed59b75259002d8c4",
"0xbbd188883a984c18252f87828cfcaf034a7403eb92766b7a49ee90ba06194611",
"0x0f235b1e0e00a0e30a95754d7a53fcda64241765c5e730f0927e23f4669df372"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

