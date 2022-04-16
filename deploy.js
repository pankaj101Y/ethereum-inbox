// deploy code will go here

const Hwp = require('@truffle/hdwallet-provider');
const Web3 = require('Web3');
const {interface,bytecode}= require('./compile');

const provider = new Hwp(
  'fame female later accident oyster snack gesture lemon evil medal question region',
  'https://rinkeby.infura.io/v3/d91100abb9dc457d84084afcfaf30e62'
);

const web3= new Web3(provider);


const init= async ()=>{
  console.log('getting account info');
  accounts= await web3.eth.getAccounts();

  console.log('deploying contract from account',accounts[0]);

  inbox= await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data:bytecode,arguments:['Hey doc']})
  .send({from:accounts[0],gas:'1000000'});

  console.log('contract deployed to',inbox.options.address);

  provider.engine.stop();
}

init();
