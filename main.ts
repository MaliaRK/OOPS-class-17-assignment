//1.
class Book{
    static count = 0;
    title: string;
    author: string;

    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
        Book.count += 1;
    }

    displayDetails(): object{
        return {Title: this.title, Author: this.author};
    }

    static numOfCount(){
        return `\nTotal count of book is: ${Book.count}.`;
    }
}

let obj1 = new Book("A Rainy Day", "William Albo");
let obj2 = new Book("The Desert", "John Elbert");

console.log(obj1.displayDetails());
console.log(obj2.displayDetails());

class EBook extends Book{
    fileSize: string;

    constructor(title: string, author: string, fileSize: string, ){
        super(title, author);
        this.fileSize = fileSize;
    }

    displayDetails(): object {
        return {Title: this.title, Author: this.author, FileSize: this.fileSize};
    }
}

let obj3 = new EBook("Climbing Up", "George Mart", "2MB");
let obj4 = new EBook("The City", "Robert Doe", "3KB");

console.log(obj3.displayDetails());
console.log(obj4.displayDetails());
console.log(Book.numOfCount());
