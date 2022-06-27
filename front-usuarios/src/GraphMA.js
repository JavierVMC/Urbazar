export class GraphMA {
  constructor(direct) {
    this.capacity = 10
    this.matrix = Array(this.capacity)
      .fill(null)
      .map(() => Array(this.capacity).fill(undefined))
    this.vertexes = []
    this.directed = direct
  }

  arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length))
  }

  addVertex(data) {
    if (data === undefined || this.vertexes.includes(data)) return false
    this.vertexes.push(data)
    if (this.vertexes.length > this.matrix.length) {
      this.addCapacity()
    }
    return true
  }

  addCapacity() {
    const tmp = [...Array(this.capacity + (this.capacity / 2) * 3)]
    for (let i = 0; i < this.capacity; i++) {
      for (let k = 0; k < this.capacity; k++) {
        tmp[i][k] = this.matrix[i][k]
      }
    }
    this.matrix = tmp
    this.capacity = (this.capacity / 2) * 3
  }

  addEdge(source, destination, weight) {
    if (source === undefined || destination === undefined) return false
    const indexS = this.vertexes.indexOf(source)
    const indexD = this.vertexes.indexOf(destination)
    if (indexS < 0 || indexD < 0) return false
    this.matrix[indexS][indexD] = weight
    if (!this.directed) {
      this.matrix[indexD][indexS] = weight
    }
    return true
  }

  getEdge(source, destination) {
    if (source === undefined || destination === undefined) return null
    const indexS = this.vertexes.indexOf(source)
    const indexD = this.vertexes.indexOf(destination)
    if (indexS > -1 && indexD > -1) {
      return this.matrix[indexS][indexD] ? this.matrix[indexS][indexD] : 0
    } else {
      return null
    }
  }

  setEdge(source, destination, data) {
    if (source === undefined || destination === undefined) return null
    const indexS = this.vertexes.indexOf(source)
    const indexD = this.vertexes.indexOf(destination)
    if (indexS > -1 && indexD > -1) {
      this.matrix[indexS][indexD] = data
      if (!this.directed) {
        this.matrix[indexD][indexS] = data
      }
    }
  }

  removeVertex(element) {
    if (!this.vertexes.includes(element) || element === undefined) return false
    const indice = this.vertexes.indexOf(element)
    this.vertexes.splice(indice, 1)
    for (let i = 0; i <= this.vertexes.length; i++) {
      this.arrayCopy(this.matrix[i + 1], 0, this.matrix[i], 0, indice)
    }
    for (let k = indice; k <= this.vertexes.length; k++) {
      for (let i = indice - 1; i >= 0; i--) {
        this.matrix[i][k] = this.matrix[i][k + 1]
      }
    }
    for (let i = indice; i <= this.vertexes.length; i++) {
      for (let k = indice; k <= this.vertexes.length; k++) {
        this.matrix[i][k] = this.matrix[i + 1][k + 1]
      }
    }
    return true
  }

  size() {
    return this.vertexes.length
  }

  removeEdge(element1, element2) {
    if (
      element1 === undefined ||
      element2 === undefined ||
      !this.vertexes.includes(element1) ||
      !this.vertexes.includes(element2)
    )
      return false
    const start = this.vertexes.indexOf(element1)
    const end = this.vertexes.indexOf(element2)
    this.matrix[start][end] = 0
    if (!this.directed) {
      this.matrix[end][start] = 0
    }
    return true
  }

  toString() {
    let total = 'V:'
    let tuplas = '['
    total = total + this.vertexes.toString()
    total = total + '\nA:'
    for (let i = 0; i < this.capacity; i++) {
      for (let k = 0; k < this.capacity; k++) {
        if (this.matrix[i][k] !== undefined) {
          const s = '(' + this.vertexes[i] + ',' + this.vertexes[k] + ')'
          tuplas = tuplas + s + ';'
        }
      }
    }
    const a = tuplas.slice(-1, 1)
    tuplas = tuplas + ']'
    total = total + tuplas
    return total
  }
}
