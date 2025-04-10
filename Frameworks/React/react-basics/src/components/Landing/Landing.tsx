import axios from "axios";
import { useEffect, useState } from "react";
import { LandingProductType, LandingUserType } from "./landing.types";
import { LandingUsers } from "./LandingUsers";
import { LandingProducts } from "./LandingProducts";

export const Landing = () => {
  const [users, setUsers] = useState<LandingUserType[]>([]);
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<LandingProductType[]>([]);
  const [isProductsLoading, setIsProductsLoading] = useState<boolean>(false);

  const getUsers = async () => {
    const { data } = await axios.get<LandingUserType[]>(
      "https://fakestoreapi.com/users"
    );
    return data;
  };

  const getProducts = async () => {
    const { data } = await axios.get<LandingProductType[]>(
      "https://fakestoreapi.com/products"
    );
    return data;
  };

  useEffect(() => {
    setIsUsersLoading(true);
    getUsers()
      .then((users) => setUsers(users))
      .finally(() => setIsUsersLoading(false));

    setIsProductsLoading(true);
    getProducts()
      .then((products) => setProducts(products))
      .finally(() => setIsProductsLoading(false));
  }, []);

  return (
    <div>
      <h1>Landing</h1>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-5">Users</h2>

        {isUsersLoading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <LandingUsers users={users} />
        )}
      </div>

      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="mb-5">Products</h2>

        {isProductsLoading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <LandingProducts products={products} />
        )}
      </div>
    </div>
  );
};
