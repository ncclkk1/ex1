let VoltageAtpH4 = 0
let VoltageAtpH7 = 0
let times = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(196, music.beat(BeatFraction.Half))
    basic.pause(500)
    music.playTone(196, music.beat(BeatFraction.Half))
    basic.pause(500)
    music.playTone(196, music.beat(BeatFraction.Half))
    basic.pause(500)
    music.playTone(784, music.beat(BeatFraction.Whole))
    basic.showNumber(Math.round(Newman.pH_Val(MyPort.P1, 3062, 2285)))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Math.round(Newman.ReadVolt(MyPort.P1)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("pH4")
    CountDownIn(5)
    VoltageAtpH4 = Newman.ReadVolt(MyPort.P1)
    basic.showNumber(VoltageAtpH4)
    basic.showString("pH7")
    CountDownIn(5)
    VoltageAtpH7 = Newman.ReadVolt(MyPort.P1)
    basic.showNumber(VoltageAtpH7)
})
function CountDownIn (num: number) {
    times = num
    for (let index = 0; index < num; index++) {
        times = times - 1
        basic.showNumber(times)
        music.playTone(196, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(times)
    music.playTone(784, music.beat(BeatFraction.Whole))
}
