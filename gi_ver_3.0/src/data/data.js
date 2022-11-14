import Card from "./models/Card";
import Character from "./models/Character";
import Element from "./models/Element";
import Location from "./models/Location";
import {amber, kaeya, jean, diluc, qiqi, keqing, xingqiu, yun_jin} from "./pics"

var locations=[
    new Location("mondstadt", "venti"),
    new Location("liyue", "zhongli")
];
var elements=[
    new Element("hydro"),
    new Element("pyro"),
    new Element("cryo"),
    new Element("anemo"),
    new Element("geo"),
    new Element("electro")
];
var characters=[
    new Character("amber", elements[1], locations[0], amber),
    new Character("kaeya", elements[2], locations[0], kaeya),
    new Character("jean", elements[3], locations[0], jean),
    new Character("diluc", elements[1], locations[0], diluc),
    new Character("qiqi", elements[2], locations[1], qiqi),
    new Character("keqing", elements[5], locations[1], keqing),
    new Character("xingqiu", elements[0], locations[1], xingqiu),
    new Character("yun jin", elements[4], locations[1], yun_jin)
];
var cards=[
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("natk","./imgs/natk.png", 50, 10, "normal attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("catk","./imgs/catk.jpg", 80, 20, "charge attack"),
    new Card("eskill", "./imgs/Eskill.jpg", 100, 40, "elemental skill"),
    new Card("eskill", "./imgs/Eskill.jpg", 100, 40, "elemental skill"),
    new Card("eskill", "./imgs/Eskill.jpg", 100, 40, "elemental skill"),
    new Card("eskill", "./imgs/Eskill.jpg", 100, 40, "elemental skill")
];

export {cards, characters}