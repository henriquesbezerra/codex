package main

import (
	"fmt"

	"github.com/henriquesbezerra/go-blockchain/blockchain"
)

func main() {

	chain := blockchain.InitBlockchain()

	chain.AddBlock("Primeiro Block, depois da genesis")
	chain.AddBlock("Segundo Block")
	chain.AddBlock("Terceiro Block")

	for _, block := range chain.Blocks {
		fmt.Printf("PrevHash: %x\n", block.PrevHash)
		fmt.Printf("Data: %s\n", block.Data)
		fmt.Printf("Hash: %x\n", block.Hash)
		fmt.Println("--------------")
	}

}
