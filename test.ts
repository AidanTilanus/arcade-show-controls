forever(function () {
    showControls.showControls(
        showControls.createControlAction(Buttons.Arrows, "Move"),
        showControls.createControlAction(Buttons.B, "Fireball")
    )
    pause(2500)
    showControls.showControls(
        showControls.createControlAction(Buttons.Arrows, "Move"),
        showControls.createControlAction(Buttons.A, "Jump")
    )
    pause(2500)
    showControls.showControls(
        showControls.createControlAction(Buttons.Arrows, "Move"),
        showControls.createControlAction(Buttons.Menu, "Invertory")
    )
    pause(2500)
})
