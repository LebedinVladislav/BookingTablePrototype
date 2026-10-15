class PhoneNumber {
    #prefix = '+7 '
    #mask = this.#prefix + '(***) ***-**-**'
    #digitsExp = /[0-9]/
    #digitsList = []
    #currentNumber = this.#mask

    get value() { return this.#trim() }
    get isValid() { return this.#digitsList.length === 10 }

    constructor(input) {
        this.update(input)
    }

    #isDigit(value) {
        if (value?.length !== 1) {
            return false
        }
        return this.#digitsExp.test(value)
    }

    #getLastDigitIndex() {
        for (let i = this.#currentNumber.length - 1; i >= 0; i--) {
            if (this.#isDigit(this.#currentNumber[i])) {
                return i
            }
        }
        return null
    }

    #trim() {
        const lastDigitIndex = this.#getLastDigitIndex()
        if (lastDigitIndex)
            return this.#currentNumber.slice(0, lastDigitIndex + 1)
        return ""
    }

    update(input) {
        this.#digitsList = []
        for (const char of input.replace(this.#prefix, '')) {
            if (this.#isDigit(char)) {
                this.#digitsList.push(char)
            }
        }
        if (this.#digitsList.length === 0) {
            this.#currentNumber = ''
            return
        }
        this.#currentNumber = this.#mask
        this.#digitsList.map(digit => {
            this.#currentNumber = this.#currentNumber.replace('*', digit)
        })
    }
}

export default PhoneNumber