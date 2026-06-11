class Ship {
    constructor(length, isVert=true) {
        this.length = length
        this.hits = 0
        this.isVert = isVert
    }
    hit() {
        this.hits += 1
    }
    isSunk() {
        if (this.hits == this.length)
            return true
        else
            return false
    }

    rotate() {
        this.isVert = !this.isVert
    }
}

export default Ship