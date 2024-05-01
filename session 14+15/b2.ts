class Product3 {
  id: number;
  name: string;
  price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class CartProduct extends Product {
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    super(id, name, price);
    this.quantity = quantity;
  }

  calculatePrice(): number {
    return this.price * this.quantity;
  }

  increaseQuantity(amount: number) {
    this.quantity += amount;
  }
  decreaseQuantity(amount: number) {
    this.quantity -= amount;
  }
}
class ShopProduct extends Product {
  stock: number;
  constructor(id: number, name: string, price: number, stock: number) {
    super(id, name, price);
    this.stock = stock;
  }
}
class Cart {
  items: CartProduct[];

  constructor() {
    this.items = [];
  }

  addItem(product: ShopProduct, quantity: number) {
    if (quantity <= product.stock) {
      const cartProduct = new CartProduct(
        product.id,
        product.name,
        product.price,
        quantity
      );
      this.items.push(cartProduct);
      product.stock -= quantity;
    } else {
      console.log("ko đủ", this.addItem);
    }
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.calculatePrice();
    }
    return total;
  }
}
const shopProducts: ShopProduct[] = [
  new ShopProduct(1, "iphone", 10, 5),
  new ShopProduct(2, "laptop", 20, 8),
  new ShopProduct(3, "ipad", 15, 3),
];

const cart = new Cart();
cart.addItem(shopProducts[0], 7);
cart.addItem(shopProducts[1], 8);
cart.addItem(shopProducts[2], 9);

console.log("mặt hàng trong giỏ:", cart.items);
console.log("Tong tien:", cart.getTotal());
