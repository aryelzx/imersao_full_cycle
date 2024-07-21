import * as bcrypt from "bcrypt"

export function generateHash(pass: string) {
    return bcrypt.hashSync(pass, 10);
}