enum Buttons {
    //% block="arrow buttons"
    Arrows,
    //% block="A button"
    A,
    //% block="B button"
    B,
    //% block="menu button"
    Menu
}


//% block="Show Controls"
namespace showControls {
    export class ControlAction {
        constructor(public button: Buttons, public action: string) { }
    }
    let controlsRenderable: scene.Renderable
    
    //% block="set first controls||$firstAction and second controls $secondAction"
    //% blockId="showControlsShowControls"
    //% firstAction.shadow="showControlsCreateContolAction"
    //% secondAction.shadow="showControlsCreateContolAction"
    //% inlineInputMode=external
    export function showControls(firstActions: ControlAction[], secondActions?: ControlAction[]) {
        firstControlActions = firstActions
        if (secondActions) {
            secondControlActions = secondActions
        }
    }

    let firstControlActions: ControlAction[] = []
    let secondControlActions: ControlAction[] = []

    let firstControlActionsIndex: number = 0
    let secondControlActionsIndex: number = 0

    let firstAction: ControlAction
    let secondAction: ControlAction

    //looping
    forever(function() {if (render) {
            if (firstControlActions.length > 0) {
                        firstAction = firstControlActions[firstControlActionsIndex]
                        firstControlActionsIndex++
                        if (firstControlActionsIndex > firstControlActions.length - 1) {
                            firstControlActionsIndex = 0
                        }
                    }
            if (secondControlActions.length > 0) {
                secondAction = secondControlActions[secondControlActionsIndex]
                secondControlActionsIndex++
                if (secondControlActionsIndex > secondControlActions.length - 1) {
                    secondControlActionsIndex = 0
                }
            }

            renderControls()

            pause(cycleTime)
        }
            
    })

    //rendering
    function renderControls() {
        if (firstControlActions.length <= 0 || secondControlActions.length <= 0) {
            if(render) {
                controlsRenderable = scene.createRenderable(100, (screen, camera) => {
                    screen.fillRect(2, scene.screenHeight() - 11, scene.screenWidth() - 4, 11, 1)

                    let x: number = 3

                    const actions: ControlAction[] = [firstAction]
                    if (secondAction) { actions.push(secondAction) }

                    for (let action of actions) {
                        if (action.button == Buttons.Arrows) {
                            spriteutils.drawTransparentImage(arrows, screen, x, scene.screenHeight() - 11)
                            x += arrows.width + 2
                        }
                        else if (action.button == Buttons.A) {
                            spriteutils.drawTransparentImage(aButton, screen, x, scene.screenHeight() - 11)
                            x += aButton.width + 2
                        }
                        else if (action.button == Buttons.B) {
                            spriteutils.drawTransparentImage(bButton, screen, x, scene.screenHeight() - 11)
                            x += bButton.width + 2
                        }
                        else if (action.button == Buttons.Menu) {
                            spriteutils.drawTransparentImage(menuButton, screen, x, scene.screenHeight() - 11)
                            x += menuButton.width + 2
                        }

                        screen.print(action.action, x, scene.screenHeight() - 9, 15)
                        x += action.action.length * 6 + 1
                    }
                })
            }
        }
        
    }

    //% block="create control action for $button with action $action"
    //% blockId="showControlsCreateContolAction"
    export function createControlAction(button: Buttons, action: string): ControlAction {
        return new ControlAction(button, action)
    }

    // settings
    let render: boolean = true
    let cycleTime: number = 1500

    //% block="show controls bar $enable"
    //% blockId="showControlsEnableControls"
    //% enable.shadow="toggleYesNo"
    export function enableControls(enable: boolean) {
        render = enable
        renderControls()
    }

    //% block="showing controls"
    //% blockId="showControlsGetEnabled"
    export function getEnabled(): boolean {
        return render
    }

    //% block="set control loop time to $amount"
    //% blockId="showControlsSetControlLoopTime"
    //% amount.shadow="timePicker"
    export function setControlLoopTime(amount: number) {
        cycleTime = amount
    }

    //% block="control loop time"
    //% blockId="showControlsGetEnabled"
    export function getControlLoopTime(): number {
        return cycleTime
    }
}