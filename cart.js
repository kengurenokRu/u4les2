const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },

    add(name, cost, count = 1) {
        this.items.push({ name: name, cost: cost, count: count });
        this.increaseCount(count);
        this.calculateItemPrice();
    },

    increaseCount(count) {
        this.count += count;
    },

    calculateItemPrice() {
        this.totalPrice = this.items.reduce((acc, item) => {
            return acc += item.count * item.cost;
        }, 0)
    },

    clear() {
        this.items.length = 0;
        this.totalPrice = 0;
        this.count = 0;
    },
    print() {
        console.log(JSON.stringify(this.items));
        console.log(`Товаров в корзине: ${this.count} на сумму ${this.totalPrice}`)
    },
}


cart.add("Телевизор LG", 2315.6);
cart.add("Кронштейн для телевизора", 235.4);
cart.add("Батарейки АА", 2.35, 6);

cart.print();

cart.add("Батарейки ААА", 2, 4);

cart.print();

console.log(cart.getTotalPrice());
cart.clear();
cart.print();