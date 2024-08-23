import { customAlphabet } from "nanoid"

const UID_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const UID_SIZE = 11

const genId = () => {
    return customAlphabet(UID_ALPHABET, UID_SIZE)
}

export {
    genId
}