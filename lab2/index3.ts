'use strict'

/**
 * user
 */
class User {

    firstname: string;
    lastname: string;
    phone: number;
    password: string;

    constructor(firstname:string, lastname:string, phone:number, password:string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
    }
}


/**
 * Product
 */
class Product {

    name:string;
    type:string;
    quantity:number;
    price:number;

    constructor(name:string, type:string, quantity:number, price:number) {
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
    }
}