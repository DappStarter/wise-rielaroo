require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot charge razor ranch comic hunt kangaroo army general'; 
let testAccounts = [
"0x1f6103b4f8acfffc55852968970ee8a17502e790af85f902ddedfefcd1b6f395",
"0x1c51119a02f3c2786c1978ecc931d08b43977f8d71b76c5510a96cdbf71bd35e",
"0x1f73e5508d4906d8fc4cedd6344d6796b8f843d1f811e017dd69d26752d3b8ea",
"0xed3ee277f0ef2de29f39de230060ff24370b84843c4650ef712dca48416c2e62",
"0xdcc65e4070c8a759c827a1bfb445c0be8fbda723bbad02d1c81f291d1a1fa383",
"0xa37b6a2f22862db3a48258e9594f2668e1cc7f5988479ed3eef946e615ad30df",
"0x077cefe64f31c727777890d91d4c2a7dfca325d98dfba7c6e2b765910d4f8be1",
"0x6bacdb0f9c97b3ceba60d1737ef9ec10166c768ebb9df49c88fef8a855f889d7",
"0xfcfd1d12e9c737e1c58efa55be86818f7450c13fbfc40c6c57c41a60ad65db56",
"0x55edfe7e58e5503a0458db91c83df7152f8bc9d2721c9a94ca8a5f229fcc8b36"
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
            version: '^0.5.11'
        }
    }
};
