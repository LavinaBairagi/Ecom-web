import React, { useState } from "react";
import Base from "../core/Base";
// import Menu from '../core/Menu';
import { isAutheticated } from "../auth/helper";
import{ Link } from 'react-router-dom';
import { createCategory } from "./helper/adminapicall";
const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAutheticated();

  const goBack = () => (
    <div className="mt-5">

      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin</Link>

    </div>
  );

  const handleChange = event => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    
    createCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(true);
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">success created</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      return <h4 className="text-success">fail created</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">enter category</p>
        <input
         type="text"
         className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder = "create"
         ></input>
          <button onClick={onSubmit} className="btn btn-primary">Create Category
          
          </button>
          </div>
    </form>
  );
  
  return (
    <Base title="Add category In page" description="A page for user to sign in!" className="container">

      {warningMessage()}
      {successMessage()}
      {myCategoryForm()}
      {goBack()}



    </Base>
  );

}
export default AddCategory;

