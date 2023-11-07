function turnLeft (speed: number, seconds: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    basic.pause(seconds * 1000)
    stopAndWait()
}
/**
 * beat = 60/120 = 0.5 sec
 * 
 * time for play tone and rest = 0.5 + 0.5/8 = 0.56 sec
 * 
 * Number of times in loop to make it last seonds is seconds/0.56.
 */
function driveBackwardWithSound (speed: number, seconds: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    music.setTempo(120)
    for (let index = 0; index < seconds / 0.56; index++) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Whole))
    }
    stopAndWait()
}
function driveBackward (speed: number, seconds: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    basic.pause(seconds * 1000)
    stopAndWait()
}
function turnRight (speed: number, seconds: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    basic.pause(seconds * 1000)
    stopAndWait()
}
function driveForward (speed: number, seconds: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    basic.pause(seconds * 1000)
    stopAndWait()
}
function stopAndWait () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(300)
}
basic.showIcon(IconNames.TShirt)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
driveForward(30, 3)
turnRight(30, 1)
turnLeft(30, 1)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
driveBackwardWithSound(30, 3)
