const { ClientBuilder } = require('@iota/client');
const cripto = require("crypto");

const client =  new ClientBuilder()
    .node('https://api.lb-0.testnet.chrysalis2.com')
    .build();

function seedAddress(){
  
    const seed = cripto.createHash('sha256').update(cripto.randomBytes(256)).digest('hex');
    console.log(seed);

    const mnemonic = client.generateMnemonic();
    console.log(mnemonic);

    const hexEncodedSeed = client.mnemonicToHexSeed(mnemonic);
    console.log(hexEncodedSeed);

}

async function getSeedAddresses(){
    const IOTA_SEED_SECRET = "b3d7092195c36d47133ff786d4b0a1ef2ee6a0052f6e87b6dc337935c70c531e";
    const addresses = await client.getAddresses(IOTA_SEED_SECRET)
        .accountIndex(0)
        .range(0,5)
        .get();
    console.log(addresses);
}

// getSeedAddresses();

async function getBalance(){
    const IOTA_SEED_SECRET = "b3d7092195c36d47133ff786d4b0a1ef2ee6a0052f6e87b6dc337935c70c531e";
    
    // Endereço conhecido
    const balance = await client.getAddressBalance("atoi1qp9427varyc05py79ajku89xarfgkj74tpel5egr9y7xu3wpfc4lkpx0l86");
    console.log(balance);

    //pega o total de todos os endereços da conta
    const balanceTotal = await client.getBalance(IOTA_SEED_SECRET)
        .accountIndex(0)
        .initialAddressIndex(0)
        .get();

    console.log(balanceTotal);
    

}

getBalance();

