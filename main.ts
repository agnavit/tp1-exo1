input.onButtonPressed(Button.A, function () {
    if (x != 0) {
        led.unplot(x, 0)
        x += -1
        led.plot(x, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x != 4) {
        led.unplot(x, 0)
        x += 1
        led.plot(x, 0)
    }
})
let x = 0
x = 0
led.plot(x, 0)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(x, 0)
    x += 1
    led.plot(x, 0)
    if (x >= 5) {
        while (x != 0) {
            led.unplot(x, 0)
            x += -1
            led.plot(x, 0)
            basic.pause(1000)
        }
    }
})
