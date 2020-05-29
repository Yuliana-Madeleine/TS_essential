//It means that this can be saw from outside after adding reserved word "export"
//With "export" Point class Now is a module
export class Point {// Use always Pascal notation     
    constructor(private x?:number, private y?: number) { //Optional parameters       
    }
    draw(){
        console.log('X:' + this.x + ', Y:' + this.y);
    }
}
