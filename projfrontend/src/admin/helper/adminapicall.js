import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// export const getCategories = (userId, token, categories) => {
//   return fetch(`{API}/categories/:${userId}`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(categories),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };
export const getCategories = (categories) => {
  return fetch(`${API}/categories`, {
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
  })
      .then(response => {
          return response.json(categories);
      })
      .catch(err => console.log(err));
};