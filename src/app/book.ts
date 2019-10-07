export class Book {
    id:number;
    name:string;
    price:number;
    author:string;
    image:string;
    details:string;

    constructor(id,name,price,author,image,details){
        this.id=id;
        this.name=name;
        this.price=price;
        this.author=author;
        this.image=image;
        this.details=details;
    
    }
}
