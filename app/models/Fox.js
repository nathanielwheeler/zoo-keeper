class Fox {
    constructor(data) {
        this.name = data.name || null
        this.sex = data.sex || null
        this.favoriteSnack = data.favoriteSnack || null
    }
    whatTheFoxSay() {
        let possibilities = [
            "Ring-ding-ding-ding-dingeringeding!\nGering-ding-ding-ding-dingeringeding!\nGering-ding-ding-ding-dingeringeding!",
            "Wa-pa-pa-pa-pa-pa-pow!\nWa-pa-pa-pa-pa-pa-pow!\nWa-pa-pa-pa-pa-pa-pow!",
            "Hatee-hatee-hatee-ho!\nHatee-hatee-hatee-ho!\nHatee-hatee-hatee-ho!",
            "Joff-tchoff-tchoffo-tchoffo-tchoff!\nTchoff-tchoff-tchoffo-tchoffo-tchoff!\nJoff-tchoff-tchoffo-tchoffo-tchoff!",
            "Jacha-chacha-chacha-chow!\nChacha-chacha-chacha-chow!\nChacha-chacha-chacha-chow!",
            "Fraka-kaka-kaka-kaka-kow!\nFraka-kaka-kaka-kaka-kow!\nFraka-kaka-kaka-kaka-kow!",
            "A-hee-ahee ha-hee!\nA-hee-ahee ha-hee!\nA-hee-ahee ha-hee!",
            "A-oo-oo-oo-ooo!\nWoo-oo-oo-ooo!"]
        let randomSound = Math.floor(possibilities.length * Math.random() + 1)
        alert(possibilities[possibilities[randomSound]])
    }
}
export default Fox