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
    
    //% block="show controls||$firstAction$secondAction"
    //% blockId="showControlsShowControls"
    //% firstAction.shadow="showControlsCreateContolAction"
    //% secondAction.shadow="showControlsCreateContolAction"
    //% thirdAction.shadow="showControlsCreateContolAction"
    //% inlineInputMode=external
    export function showControls(firstAction: ControlAction, secondAction?: ControlAction) {
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

    //% block="create control action for $button with action $action"
    //% blockId="showControlsCreateContolAction"
    export function createControlAction(button: Buttons, action: string): ControlAction {
        return new ControlAction(button, action)
    }
}