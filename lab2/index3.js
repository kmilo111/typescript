'use strict';
/**
 * user
 */
var User = (function () {
    function User(firstname, lastname, phone, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.password = password;
    }
    return User;
}());
/**
 * Product
 */
var Product = (function () {
    function Product(name, type, quantity, price) {
        this.name = name;
        this.type = type;
        this.quantity = quantity;
        this.price = price;
    }
    return Product;
}());
