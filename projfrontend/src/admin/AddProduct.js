// import React, { useState } from "react";
// import { createProduct } from "./helper/adminapicall";
// import { isAutheticated } from "../auth/helper";
// import{ Link } from 'react-router-dom';

// import Base from "../core/Base";
// const AddProduct =()=> {
//   const [values, setValues] = useState({
//     name: "g@aa.com",
//     description: "",
//     price: "",
//     category:"",
//     stock:"",
//     sold:"",
//     error: "",
//     success: false
//   });
//   const { user, token } = isAutheticated();

//   const { name, description, price,category,stock,sold, error, success } = values;

//   const handleChange = name => event => {
//     setValues({ ...values, error: false, [name]: event.target.value });
//   };

//   const 
//   onSubmit = event => {
//     event.preventDefault();
//     setValues({ ...values, error: false });
//     createProduct(user._id, token,{ name, description, price,category,stock,sold })
//       .then(data => {
//         if (data.error) {
//           setValues({ ...values, error: data.error, success: false });
//         } else {
//           setValues({
//             ...values,
//             description: "",
//             price: "",
//             category: "",
//             stock:"",
//             error: "",
//             success: true
//           });
//         }
//       })
//       .catch(console.log("Error in product"));
//   };

//   const signUpForm = () => {
//     return (
//       <Base title="Add Product here">
//         <div className="container">
//           <form>
//             <div>
//               {/* <div className="form-group">
//                 <input type="file" className="form-control bg-danger" />
//               </div> */}

//               <div className="form-group">
//                 <input
//                   type="category"
//                   className="form-control"
//                   name="product"
//                   onChange={handleChange("name")}

//                   placeholder="name"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="Description"
//                   onChange={handleChange("description")}

//                   placeholder="Description"
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="number"
//                   className="form-control"
//                   name="price"
//                   onChange={handleChange("price")}

//                   placeholder="price"
//                 />
//               </div>
//               {/* <div className="form-group">
//                 <select
//                   id="product_categorie"
//                   name="product_categorie"
//                   onChange={handleChange("category")}

//                   className="form-control"
//                   placeholder="select"
//                 ></select>
//               </div> */}
//               <div className="form-group">
//                 <input
//                   type="number"
//                   className="form-control"
//                   onChange={handleChange("stock")}

//                   name="stock"
//                   placeholder="stock"
//                 />
//               </div>
//               <div className="form-group">
//                 <button onClick={onSubmit} className="btn btn-primary btn-block">
//                   create product
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </Base>
//     );
//   }
//   const successMessage = () => {
//     return (
//       <div className="row">
//         <div className="col-md-6 offset-sm-3 text-left">
//           <div
//             className="alert alert-success"
//             style={{ display: success ? "" : "none" }}
//           >
//             New account was created successfully. Please
//             <Link to="/signin">Login Here</Link>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const errorMessage = () => {
//     return (
//       <div className="row">
//         <div className="col-md-6 offset-sm-3 text-left">
//           <div
//             className="alert alert-danger"
//             style={{ display: error ? "" : "none" }}
//           >
//             {error}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (<>
//       {successMessage()}
//       {errorMessage()}
//       {signUpForm()}
 
//       <p className="text-white text-center">{JSON.stringify(values)}</p>
//  </>
//   );
// };


// export default AddProduct;


import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { getCategories, createProduct } from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";
//  import { createProduct } from "./helper/adminapicall";
const AddProduct = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: ""
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData
  } = values;

  const preload = () => {
    getCategories().then(data => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createProduct(user._id, token, formData).then(data => {
      if (data?.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          createdProduct: data.name
        });
      }
    });
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4>{createdProduct} created successfully</h4>
    </div>
  );

  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control"
          placeholder="Stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="colororange"
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a product here!"
      description="Welcome to product creation section"
      className="container bg-info p-4"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row bg-white text-dark rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
