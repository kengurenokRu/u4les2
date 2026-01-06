const Goods = function (name, cost, discount = 0) {
    this.name = name;
    this.cost = cost;
    this.discount = discount;
};

const FoodGoods = function (name, cost, calories, discount = 0,) {
    Goods.call(this, name, cost, discount);
    this.calories = calories;
};

const СlothingGoods = function (name, cost, material, discount = 0) {
    Goods.call(this, name, cost, discount);
    this.material = material;
};

const TechnicsGoods = function (name, cost, type, discount = 0) {
    Goods.call(this, name, cost, discount);
    this.type = type;
};

const Cart = function (goods = []) {
    this.goods = goods;
    this.totalPrice = 0;
    this.count = 0;
};


Cart.prototype.calculateGoodsPrice = function () {
    this.totalPrice = this.goods.reduce((acc, good) => {  
        return acc += good.cost *(1- good.discount / 100.00);
    }, 0)
};

Cart.prototype.addGoods = function (good) {
    this.goods.push(good);
    this.increaseCount();
    this.calculateGoodsPrice();
};

Cart.prototype.getTotalPrice = function () {
    return this.totalPrice.toFixed(2);
};

Cart.prototype.increaseCount = function (count) {
    this.count++;
};

Cart.prototype.clear = function () {
    this.goods.length = 0;
    this.totalPrice = 0;
    this.count = 0;
};

Cart.prototype.print = function () {
    console.log(JSON.stringify(this.goods));
    console.log(`Товаров в корзине: ${this.count} на сумму ${this.getTotalPrice()}`)
};

const cart = new Cart();

cart.addGoods(new FoodGoods('Халва', 1.12, 312));
cart.addGoods(new СlothingGoods('Куртка зимняя', 312.11, 'Полиэстер', 10));
cart.addGoods(new TechnicsGoods('Ноутбук LG', 2125.37, 'Компьютеры и комплектующие'));

cart.print();

cart.addGoods(new FoodGoods('Шоколад "Аленка"', 3.99, 289, 5));

cart.print();

console.log(cart.getTotalPrice());
cart.clear();
cart.print();