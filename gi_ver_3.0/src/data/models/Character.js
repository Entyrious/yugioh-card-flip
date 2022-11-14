class Character{
    constructor(name, element, location, img){
        this.name=name;
        this.element=element
        this.location=location
        this.img=img
        this.atk=(Math.floor(Math.random()*100)+100)*10
    }
}

export default Character