import DragShip from "../helpers/DragShip.js"

class ShipList {
    static render(player) {
        const wrapper = document.querySelector("ship-list-wrapper")
        wrapper.innerHTML = ""
        const shipListDOM = document.createElement("ship-list")
        this.renderRotateButton(player)
        for (let i = 0; i < player.shipsList.length; i++) {
            const shipAmtWrapper = document.createElement("div")
            if (player.shipsList[i].length > 0) {
                const amount = document.createElement("p")
                amount.textContent = `${player.shipsList[i].length}x`
                shipAmtWrapper.appendChild(amount)
                shipAmtWrapper.append(this.#renderShip(player.shipsList[i][0]))
                shipListDOM.appendChild(shipAmtWrapper)
            }
        }

        wrapper.appendChild(shipListDOM)

        DragShip.add(player)
    }

    static renderRotateButton(player) {
        const rotateBtn = document.createElement("button")
        rotateBtn.textContent = "Rotate";
        document.querySelector("ship-list-wrapper").appendChild(rotateBtn)
        rotateBtn.addEventListener("click", () => {
            for (let i = 0; i < player.shipsList.length; i++) {
                if (player.shipsList[i].length > 0)
                    player.shipsList[i][0].rotate()
            }
            this.render(player);
        })
    }

    static #renderShip(ship) {
        const shipDOM = document.createElement("ship");
        for (let i = 0; i < ship.length; i++) {
            const shipPart = document.createElement("div");
            shipDOM.appendChild(shipPart);
        }

        const size = 32;
        if (ship.isVert)
            shipDOM.setAttribute("Style", `display:grid; grid-template-rows: repeat(${ship.length}, ${size}px); grid-template-columns: ${size}px`)
        else
            shipDOM.setAttribute("Style", `display:grid; grid-template-columns: repeat(${ship.length}, ${size}px); grid-template-rows: ${size}px`)
            

        return shipDOM
    }
}

export default ShipList