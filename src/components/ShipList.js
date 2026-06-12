class ShipList {
    static render(player) {
        const shipListDOM = document.querySelector("ship-list")
        shipListDOM.innerHTML = ""
        for (let i = 0; i < player.shipsList.length; i++) {
            const shipAmtWrapper = document.createElement("div")
            if (player.shipsList[i].length > 0) {
                shipAmtWrapper.append(this.#renderShip(player.shipsList[i][0]))
                const amount = document.createElement("p")
                amount.textContent = `${player.shipsList[i].length}x`
                shipAmtWrapper.appendChild(amount)
                shipListDOM.appendChild(shipAmtWrapper)
            }
        }
    }

    static #renderShip(ship) {
        const shipDOM = document.createElement("ship");
        for (let i = 0; i < ship.length; i++) {
            const shipPart = document.createElement("div");
            shipDOM.appendChild(shipPart);
        }

        const size = 32;
        if (ship.isVert)
            shipDOM.setAttribute("Style", `display:grid; grid-template-columns: repeat(${ship.length}, ${size}px); grid-template-rows: ${size}px`)
        else
            shipDOM.setAttribute("Style", `display:grid; grid-template-rows: repeat(${ship.length}, ${size}px); grid-template-columns: ${size}px`)

        return shipDOM
    }
}

export default ShipList