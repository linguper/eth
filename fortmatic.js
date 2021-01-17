import Fortmatic from 'fortmatic';
import Web3 from 'web3';

let fm = new Fortmatic('pk_live_4BE3D0881168C676');
web3 = new Web3(fm.getProvider());
web3.eth.sendTransaction({
    from: '0x0000000000000000000000000000000000000000',
    to: address,
    value: web3.utils.toWei(amount, 'ether')
  });
