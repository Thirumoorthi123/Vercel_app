// import React from "react";
// import { Formik } from "formik";

// import "./Form.scss";

// const initialValues = {
//   email: "",
//   password: ""
// };

// const validate = (values) => {
//   let errors = {};
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//   if (!values.email) {
//     errors.email = "Email is required";
//   } else if (!regex.test(values.email)) {
//     errors.email = "Invalid Email";
//   }

//   if (!values.name) {
//     errors.name = "Name is required";
//   } else if (values.name.length < 4) {
//     errors.name = "Name too short";
//   }

//   return errors;
// };

// const submitForm = (values) => {
//   console.log(values);
// };

// const Form = () => {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validate={validate}
//       onSubmit={submitForm}
//     >
//       {(formik) => {
//         const {
//           values,
//           handleChange,
//           handleSubmit,
//           errors,
//           touched,
//           handleBlur,
//           isValid,
//           dirty
//         } = formik;
//         return (
//           <div className="container">
//             <h1>Sign in to continue</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.email && touched.email ? "input-error" : null
//                   }
//                 />
//                 {errors.email && touched.email && (
//                   <span className="error">{errors.email}</span>
//                 )}
//               </div>

//               <div className="form-row">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={values.password}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                   className={
//                     errors.password && touched.password ? "input-error" : null
//                   }
//                 />
//                 {errors.password && touched.password && (
//                   <span className="error">{errors.password}</span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className={!(dirty && isValid) ? "disabled-btn" : ""}
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// };

// export default Form;

import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url()
});

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input {...register("website")} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}


