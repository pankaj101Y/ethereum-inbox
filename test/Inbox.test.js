const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface,bytecode}= require('../compile');

const web3= new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async ()=>{
  accounts= await web3.eth.getAccounts();

  inbox= await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data:bytecode,arguments:['Hey doc']})
  .send({from:accounts[0],gas:'1000000'});

})


describe('dummy',()=>{
  it('contract deployment',()=>{

    assert.ok(inbox.options.address);

  })

  it('init_test',async ()=>{
    const msg= (await inbox.methods.message().call());//a function call
    assert.equal('Hey doc',msg);
  })


  it('update_test',async ()=>{
    const text='whatsup';
    await inbox.methods.setMessage(text).send({from:accounts[0]}); //returns tx hash
    const msg= (await inbox.methods.message().call());
    assert.equal(text,msg);
  })
})
