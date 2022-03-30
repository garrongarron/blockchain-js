const BlockChain = require('./BlockChainMine')

const blockChain = new BlockChain()

for (let index = 0; index < 3; index++) {
    const block = blockChain.addBlock(`Block ${index}`)
    console.log(block.toString());
}