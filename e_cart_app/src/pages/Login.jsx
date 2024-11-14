import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const Login = () => {
  const [userData, setUserData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const initialValues = { userName: "", email: "", password: "" };
  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleFormSubmit = (values) => {
    if (selectedIndex !== null) {
      // Use map to create a new array with updated values for immutability
      const updatedUserData = userData.map((item, index) =>
        index === selectedIndex ? values : item
      );
      setUserData(updatedUserData);
    } else {
      setUserData([...userData, values]);
    }

    formikDetails.resetForm();
    setSelectedIndex(null); // Clear selectedIndex after submit
  };

  const formikDetails = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  const handleDelete = (index) => {
    const deletedUserData = userData.filter((_, ind) => ind !== index);
    setUserData(deletedUserData);
  };

  const handleUpdate = (index) => {
    setSelectedIndex(index);
    const selectedValue = userData[index];

    formikDetails.setValues({
      userName: selectedValue.userName,
      email: selectedValue.email,
      password: selectedValue.password,
    });

    formikDetails.setErrors({}); // Clear previous errors
  };

  return (
    <div className="w-[80%] m-auto">
      <h1 className="text-5xl font-bold">Register before Login</h1>
      <form
        onSubmit={formikDetails.handleSubmit}
        className="border rounded-xl p-3 w-[50%]"
      >
        <div className="p-2">
          <label>UserName:</label>
          <input
            className="p-1 m-1 border rounded-md"
            name="userName"
            type="text"
            value={formikDetails.values.userName}
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
          />
          {formikDetails.touched.userName && formikDetails.errors.userName && (
            <p className="text-red-600">{formikDetails.errors.userName}</p>
          )}
        </div>
        <div className="p-2">
          <label>Email:</label>
          <input
            className="p-1 m-1 border rounded-md"
            name="email"
            type="email"
            value={formikDetails.values.email}
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
          />
          {formikDetails.touched.email && formikDetails.errors.email && (
            <p className="text-red-600">{formikDetails.errors.email}</p>
          )}
        </div>
        <div className="p-2">
          <label>Password:</label>
          <input
            className="p-1 m-1 border rounded-md"
            name="password"
            type="password"
            value={formikDetails.values.password}
            onChange={formikDetails.handleChange}
            onBlur={formikDetails.handleBlur}
          />
          {formikDetails.touched.password && formikDetails.errors.password && (
            <p className="text-red-600">{formikDetails.errors.password}</p>
          )}
        </div>
        <div>
          <button className="p-2 bg-lime-400 m-2 text-zinc-50" type="submit">
            {selectedIndex !== null ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <div>
        <h1>User Data Cards</h1>
        {userData.map((card, index) => (
          <div key={index} className="p-3 m-3 bg-sky-200 rounded-lg">
            <p className="text-white">{card.userName}</p>
            <p className="text-white">{card.email}</p>
            <button
              onClick={() => handleUpdate(index)}
              className="p-1 m-2 rounded-lg bg-amber-600 text-white"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="p-1 m-2 rounded-lg bg-red-600 text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
