package exrates

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type ExchangeRates struct {
	Base  string `json:"base"`
	Date  string `json:"date"`
	Rates struct {
		AUD float64 `json:"AUD"`
		BGN float64 `json:"BGN"`
		BRL float64 `json:"BRL"`
		CAD float64 `json:"CAD"`
		CHF float64 `json:"CHF"`
		CNY float64 `json:"CNY"`
		CZK float64 `json:"CZK"`
		DKK float64 `json:"DKK"`
		GBP float64 `json:"GBP"`
		HKD float64 `json:"HKD"`
		HRK float64 `json:"HRK"`
		HUF float64 `json:"HUF"`
		IDR float64 `json:"IDR"`
		ILS float64 `json:"ILS"`
		INR float64 `json:"INR"`
		JPY float64 `json:"JPY"`
		KRW float64 `json:"KRW"`
		MXN float64 `json:"MXN"`
		MYR float64 `json:"MYR"`
		NOK float64 `json:"NOK"`
		NZD float64 `json:"NZD"`
		PHP float64 `json:"PHP"`
		PLN float64 `json:"PLN"`
		RON float64 `json:"RON"`
		RUB float64 `json:"RUB"`
		SEK float64 `json:"SEK"`
		SGD float64 `json:"SGD"`
		THB float64 `json:"THB"`
		TRY float64 `json:"TRY"`
		USD float64 `json:"USD"`
		ZAR float64 `json:"ZAR"`
	} `json:"rates"`
}

func RetrieveData() ExchangeRates {
	var record ExchangeRates

	url := fmt.Sprintf("http://api.fixer.io/latest")
	resp, error := GET(url)
	if error != nil {
		log.Println(error)
	}

	if err := json.NewDecoder(resp.Body).Decode(&record); err != nil {
		log.Println(err)
	}

	defer resp.Body.Close()

	return record
}

func GET(url string) (*http.Response, error) {
	req, err := http.NewRequest("GET", url, nil)

	if err != nil {
		log.Fatal("NewRequest: ", err)
		return nil, err
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatal("Do: ", err)
		return nil, err
	}

	return resp, nil
}
