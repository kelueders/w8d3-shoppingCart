// EXTERNAL IMPORTS
import { v4 as uuidv4 } from "uuid"

// INTERNAL IMPORTS

// Creates a type Item
type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

// Creates a type User
type User = {
    id: string,
    name: string,
    age: number,
    cart: Item[]
}

// Creates an object of type User
function createUser(name:string, age:number): User {

    let thisUser: User = {
        id: uuidv4(),
        name: name,
        age: age,
        cart: [],
    }

    return thisUser
}

// Creates an object of type Item
function createItem(name: string, price: number, description: string): Item {

    let thisItem: Item = {
        id: uuidv4(),
        name: name,
        price: price,
        description: description
    }

    return thisItem
}

// Adds an item to the cart
function addToCart(item: Item, user: User): void {
    // let itemType: string[] = user.cart[name]

    // if (user.cart.includes(item)) {
    //     user.cart.
    // }
    user.cart.push(item)
}

// Removes all instances of the item from the cart
function removeFromCart(item: Item, user: User): Item[] {

    // return user.cart.filter((ele) => {
    //     return ele.name == item.name;
    // });

    for (let [index, product] of user.cart.entries()) {
        if (item.name === product.name) {
            user.cart.splice(index, 1);
        }
    }

    return user.cart

}

// removes a specific quantity of items from the cart
function removeQuantityFromCart(item: Item, user: User, remove_amt: number): Item[] {

    for (let [index, product] of user.cart.entries()) {
        if ((item.name === product.name) && (remove_amt > 0) === true) {
            user.cart.splice(index, 1);
            remove_amt--;
        }
    }

    return user.cart
}

// calculates the total cost of the items in the cart
function cartTotal(user: User): number {
    let total_cost = 0

    for (let product of user.cart) {
        total_cost += product.price
    }
    console.log(`Total cost: $${Number(total_cost).toFixed(2)}`)
    console.log('')
    return total_cost
}

// prints out a list of items and the total cost for the user
function printCart(user: User): void {
    console.log(`${user.name} has ${user.cart.length} item(s) in their cart`)
    console.log('Item                 Price                 Description')
    for (let product of user.cart) {
        console.log(`${product.name}             ${product.price}             ${product.description}`)
    }
    // console.log(`Total cost: $${cartTotal(user)}`)
    console.log('')
}

// DRIVER CODE

// create a user
let user1 = createUser('Lisa', 23);

// create 3 items
let itemA = createItem('banana', 0.89, 'yellow fruit with K+');
let itemB = createItem('milk', 2.99, 'white liquid from cow with Ca+');
let itemC = createItem('peanut butter', 3.50, 'buttered peanuts');

// add Item A to the user's cart
addToCart(itemA, user1);

// print the contents of the user's cart
printCart(user1);
// print the total of the user's cart
cartTotal(user1);

// add all 3 items to user's cart
addToCart(itemB, user1)
addToCart(itemC, user1)

// print the content of the user's cart
printCart(user1);
// print the total of the user's cart
cartTotal(user1);

// remove all items from the cart
removeFromCart(itemA, user1);
removeFromCart(itemB, user1);
removeFromCart(itemC, user1);

// print the content of the user's cart
printCart(user1);
// print the total of the user's cart
console.log(cartTotal(user1));

// tests the removeQuantityFrom Cart Function
addToCart(itemA, user1);
printCart(user1);
removeQuantityFromCart(itemA, user1, 1);
printCart(user1);



