input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 360)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 24, NeoPixelMode.RGB)
basic.showLeds(`
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    . . . . .
    `)
basic.pause(1000)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(20)
})
