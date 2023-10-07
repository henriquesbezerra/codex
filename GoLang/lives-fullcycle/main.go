package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type ViaCEP struct {
	Cep         string `json:"cep"`
	Logradouro  string `json:"logradouro"`
	Complemento string `json:"complemento"`
	Bairro      string `json:"bairro"`
	Localidade  string `json:"localidade"`
	Uf          string `json:"uf"`
}

func (v *ViaCEP) SetCep(cep string) {
	v.Cep = cep
	fmt.Println(v.Cep)
}

func (v ViaCEP) EnderecoCOmpleto() string {
	return fmt.Sprintf("%s, %s, %s, %s, %s", v.Logradouro, v.Complemento, v.Bairro, v.Localidade, v.Uf)
}

func main() {
	cep := "26050145"
	req, err := http.Get("https://viacep.com.br/ws/" + cep + "/json/")
	if err != nil {
		panic(err)
	}

	defer req.Body.Close()

	res, err := io.ReadAll(req.Body)
	if err != nil {
		panic(err)
	}

	var data ViaCEP
	err = json.Unmarshal(res, &data)
	if err != nil {
		panic(err)
	}

	fmt.Println(data.EnderecoCOmpleto())

}
