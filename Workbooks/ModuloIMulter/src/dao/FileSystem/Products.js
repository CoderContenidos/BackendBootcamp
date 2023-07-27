import fs from 'fs';
import __dirname from '../../utils.js';

export default class ProductsDao {
  constructor() {
    this.path = `${__dirname}/files/products.json`;
    this.init();
  }

  init = async () => {
    if (!fs.existsSync(this.path)) {
      await fs.promises.writeFile(this.path, JSON.stringify([]));
    }
  };

  getProducts = async () => {
    const data = await fs.promises.readFile(this.path, 'utf-8');
    return JSON.parse(data);
  };

  createProduct = async (product) => {
    const products = await this.getProducts();
    if (products.length === 0) {
      product.id = 0;
    } else {
      product.id = products[products.length - 1].id + 1;
    }
    products.push(product);
    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
  };

  getByProductId = async (productId) => {
    const products = await this.getProducts();
    console.log(productId);
    return products.find((product) => product.id == productId);
  };

  updateProduct = async (id, product) => {
    const products = await this.getProducts();
    const index = products.findIndex((product) => product.id == id);
    if (index === -1) return null;
    products[index] = product;
    await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'));
    return id;
  };
}