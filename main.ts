let cmd = ""
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.StickFigure)
    bluetooth.startUartService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    bluetooth.uartWriteString(cmd)
    if (cmd == "avant") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (cmd == "arriere") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (cmd == "droite") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    }
    if (cmd == "gauche") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (cmd == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
