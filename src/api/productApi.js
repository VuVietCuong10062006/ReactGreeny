// https://jsonplaceholder.typicode.com

import axiosClient from "./axiosClient";

// https://jsonplaceholder.typicode.com/users
const productApi = {
  getProducts() {
    const url = "/products";
    return axiosClient.get(url);
  },
  addProduct(data){
    const url = "/products";
    return axiosClient.post(url, data);
  },
  deleteProduct(id){
    const url = `/products/${id}`;
    return axiosClient.delete(url, id);
  },
  getProductById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  updateProduct(data){
    const url = `/products/${data.id}`;
    return axiosClient.put(url, data);
  },
  getUserById(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
  getProductFeature() {
    const url = `/products?tag=Feature`;
    return axiosClient.get(url);
  },
  getProductSell() {
    const url = `/products?tag=Sale`;
    return axiosClient.get(url);
  },
  searchProduct(value) {
    const url = `/products?q=${value}`;
    return axiosClient.get(url);
  },
  sortProductShop(object) {
    const { sort, tag, category, rating , priceMin , priceMax } = object;

    const url = `products?${!!sort ? `_sort=price&_order=${sort}&` : ""}${
      !!tag ? `tag=${tag}&` : ""
    }${!!category ? `category=${category}&` : ""}${
      !!rating ? `rating=${rating}` : ""
    }`;
    return axiosClient.get(url);
  },
  // sortProductShop(object) {
  //   const { sort, tag, category, rating , priceMin , priceMax } = object;

  //   const url = `products?${!!sort ? `_sort=price&_order=${sort}&` : ""}${
  //     !!tag ? `tag=${tag}&` : ""
  //   }${!!category ? `category=${category}&` : ""}${
  //     !!rating ? `rating=${rating}` : ""
  //   }${!!(priceMin && priceMax) ? `products?price_gte=${priceMin}&price_lte=${priceMax}&` : ""}`;
  //   return axiosClient.get(url);
  // },
  getRatings() {
    const url = "/ratings";
    return axiosClient.get(url);
  },
  getTags() {
    const url = "/tags";
    return axiosClient.get(url);
  },
  getCategorys() {
    const url = "/categorys";
    return axiosClient.get(url);
  },
  getProductCart(){
    const url = "/carts";
    return axiosClient.get(url);
  },
  addProductCart(data){
    const url = "/carts";
    return axiosClient.post(url, data);
  },
  updateProductCart(data){
    const url = `/carts/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteProductCart(id){
    const url = `/carts/${id}`;
    return axiosClient.delete(url, id);
  },
  getProductHeart(){
    const url = "/hearts";
    return axiosClient.get(url);
  },
  addProductHeart(data){
    const url = "/hearts";
    return axiosClient.post(url, data);
  },
  updateProductHeart(data){
    const url = `/hearts/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteProductHeart(id){
    const url = `/hearts/${id}`;
    return axiosClient.delete(url, id);
  },
  getAuth(){
    const url = `/auth`;
    return axiosClient.get(url);
  },
  authLogin(data){
    const url = `/auth`;
    return axiosClient.put(url, data);
  },
  authLogout(data){
    const url = `/auth`;
    return axiosClient.put(url, data);
  },
  getUsers(){
    const url = `/users`;
    return axiosClient.get(url);
  },
  addUsers(data){
    const url = "/users";
    return axiosClient.post(url, data);
  },
  updateUsers(data){
    const url = `/users/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteUsers(id){
    const url = `/users/${id}`;
    return axiosClient.delete(url, id);
  },
};

export default productApi;
