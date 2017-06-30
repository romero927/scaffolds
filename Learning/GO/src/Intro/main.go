package main

import (
	"Intro/exrates"
	"strconv"

	ui "github.com/gizak/termui"
)

func main() {
	data := exrates.RetrieveData()
	BuildUI(data)
}

func BuildUI(data exrates.ExchangeRates) {
	err := ui.Init()
	if err != nil {
		panic(err)
	}
	defer ui.Close()

	p := ui.NewPar(":PRESS q TO QUIT")
	p.Height = 3
	p.Width = 50
	p.TextFgColor = ui.ColorWhite
	p.BorderLabel = "Text Box"
	p.BorderFg = ui.ColorCyan

	par3 := ui.NewPar(data.Base)
	par3.Height = 3
	par3.Width = 37
	par3.Y = 6
	par3.BorderLabel = "Exchange Rate Base Currency"

	par4 := ui.NewPar(data.Date)
	par4.Height = 3
	par4.Width = 37
	par4.Y = 3
	par4.BorderLabel = "Exchange Rates Date Pulled"

	var x = strconv.FormatFloat(data.Rates.USD, 'f', 4, 64)
	par5 := ui.NewPar(x)
	par5.Height = 3
	par5.Width = 37
	par5.Y = 9
	par5.BorderLabel = "Exchange Rate to USD"

	ui.Render(p, par3, par4, par5) // feel free to call Render, it's async and non-block

	// handle key q pressing
	ui.Handle("/sys/kbd/q", func(ui.Event) {
		// press q to quit
		ui.StopLoop()
	})

	ui.Handle("/sys/kbd/C-x", func(ui.Event) {
		// handle Ctrl + x combination
	})

	ui.Handle("/sys/kbd", func(ui.Event) {
		// handle all other key pressing
	})

	// handle a 1s timer
	ui.Handle("/timer/1s", func(e ui.Event) {
		t := e.Data.(ui.EvtTimer)
		// t is a EvtTimer
		if t.Count%2 == 0 {
			// do something
		}
	})

	ui.Loop() // block until StopLoop is called
}
