basic.showIcon(IconNames.Happy)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(1000)
})
