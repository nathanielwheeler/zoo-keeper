import Alligator from "./models/Alligator.js";
import Beaver from "./models/Beaver.js"
import Cheetah from "./models/Cheetah.js"
import Dingo from "./models/Dingo.js"
import Echidna from "./models/Echidna.js"
import Fox from "./models/Fox.js"



let ally = new Alligator({
    name: "Ally",
    color: 'green',
    sex: 'F',
    weight: 200,
    tailLengthInch: 60,
    teethSize: "big",
})
let becky = new Beaver({ name: "Becky", sex: "F", favoriteSnack: "Balsa" })
let chester = new Cheetah({ name: "Chester", sex: "M", favoriteSnack: "Cheetos" })
let dustin = new Dingo({ name: "Dustin", sex: "M", favoriteSnack: "Steak" })
let knuckles = new Echidna({ name: "Knuckles", sex: "M", favoriteSnack: "Hedgehogs" })
let furgis = new Fox({ name: "Furgis", sex: "M", favoriteSnack: "Praerie Dogs" })


window["main"] = new Fox