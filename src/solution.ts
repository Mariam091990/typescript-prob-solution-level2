function formatValue(value: string | number | boolean){
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return !value;
}


formatValue("hello");
formatValue(5);
formatValue(true);


// 

function getLength(value: string | any[]): any {
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  
}


getLength("typescript");
getLength([10, 20, 30, 40]);




// 

class Person {
name: string ;
age: number;
constructor(name:string, age:number){
    this.name= name ;
    this.age = age;

}
getDetails() {
  return `'Name: ${this.name}, Age: ${this.age}'`;  
}

}


const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);

person2.getDetails();


// 

type RatedItem = {
  title: string;
  rating: number;
};

function filterByRating(items: RatedItem[]) {
  return items.filter((item) => item.rating >= 4);
}


const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);


// 

type user= {

    id: number;
     name: string;
     email: any;
     isActive:boolean;
     
     };

function filterActiveUser ( users: user[]) {


  return users.filter((user)=> user.isActive);
 
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

filterActiveUser(users);


// 

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book){
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}


const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);



// 

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

 
  const pricesAfterDiscount = products.map((product) => {
    let totalPrice = product.price * product.quantity;

    if (product.discount !== undefined) {
      totalPrice = totalPrice - (totalPrice * product.discount) / 100;
    }

    return totalPrice;
  });



let total = 0;

pricesAfterDiscount.map((price )=>
     {total =total+ price} 
);

return total;
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);