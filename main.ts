input.onButtonPressed(Button.A, function () {
    basic.showString("!")
    radio.sendString("SOS")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "N") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == 0) {
    	
    } else if (0 == 0) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("A E A E A E A E ", 150), music.PlaybackMode.LoopingInBackground)
    music.setVolume(8998982)
    for (let index = 0; index < 3.2435465787980874e+30; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(7)
basic.showIcon(IconNames.Yes)
