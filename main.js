var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1.
var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
        Book.count += 1;
    }
    Book.prototype.displayDetails = function () {
        return { Title: this.title, Author: this.author };
    };
    Book.numOfCount = function () {
        return "\nTotal count of book is: ".concat(Book.count, ".");
    };
    Book.count = 0;
    return Book;
}());
var obj1 = new Book("A Rainy Day", "William Albo");
var obj2 = new Book("The Desert", "John Elbert");
console.log(obj1.displayDetails());
console.log(obj2.displayDetails());
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(title, author, fileSize) {
        var _this = _super.call(this, title, author) || this;
        _this.fileSize = fileSize;
        return _this;
    }
    EBook.prototype.displayDetails = function () {
        return { Title: this.title, Author: this.author, FileSize: this.fileSize };
    };
    return EBook;
}(Book));
var obj3 = new EBook("Climbing Up", "George Mart", "2MB");
var obj4 = new EBook("The City", "Robert Doe", "3KB");
console.log(obj3.displayDetails());
console.log(obj4.displayDetails());
console.log(Book.numOfCount());
