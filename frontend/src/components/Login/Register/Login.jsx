/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Modal } from 'react-bootstrap'
import "./Login.css"
import { Formik } from "formik";
import * as Yup from "yup";

const LoginPage = ({ show, hide }) => {

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                'Password must contain at least one letter, one number, and one special character'
            )
    });
    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header closeButton>
                <Modal.Title>SIGN IN</Modal.Title>
            </Modal.Header>

            <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                    // Alert the input values of the form that we filled
                    alert(JSON.stringify(values));
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <div className="container model-style">

                        <div className="row">
                            <div className="col-12 mx-auto">
                                <div id="first">
                                    <div className="myform form" noValidate onSubmit={handleSubmit}>

                                        <form action="" method="post" name="login">
                                            <div className="form-group my-2">
                                                <label htmlFor="exampleInputEmail1">Email address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder="Enter email id"
                                                    className="form-control inp_text"
                                                    id="email"
                                                />
                                                {/* If validation is not passed show errors */}
                                                <p className="error" >
                                                    {errors.email && touched.email && errors.email}
                                                </p>
                                            </div>
                                            <div className="form-group my-2">
                                                <label htmlFor="exampleInputEmail1">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                    placeholder="Enter password"
                                                    className="form-control"
                                                />
                                                {/* If validation is not passed show errors */}
                                                <p className="error" >
                                                    {errors.password && touched.password && errors.password}
                                                </p>
                                            </div>
                                            <div className="form-group my-2">
                                                <p className="">Forgot password</p>
                                            </div>
                                            <div className="col-md-12 d-grid text-center mb-2" >
                                                <button type="submit" className="btn  btn-block mybtn btn-primary tx-tfm">Login</button>
                                            </div>

                                            <div className="form-group">
                                                <p className="text-center">Don't have an account? <a href="#" id="signup">Sign up here</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </Formik>

        </Modal>
    )
}

export default LoginPage



