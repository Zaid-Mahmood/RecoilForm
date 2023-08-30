import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import data from '../Store/Atom';
import { useRecoilState } from 'recoil';
import * as yup from 'yup';
import "../Styles/Form.css";


function RecoilForm() {
    let [sampleData,setSampleData] = useRecoilState(data);
    let initialValues = {
        firstName: "",
        lastName: "",
        email: ""
    }

    const validationSchema = yup.object().shape({
        firstName: yup.string().required("Please Enter first name"),
        lastName: yup.string().required("Please Enter last name"),
        email: yup.string().required("Please Enter your Email").email("Please enter valid Email")
    })
    function handleSubmit(values , {resetForm}) {
            let Data={
                firstName:values.firstName,
                lastName:values.lastName,
                email:values.email
            }
        setSampleData([...sampleData , Data])
        localStorage.setItem("formData" , JSON.stringify([...sampleData , Data]))
        resetForm()
    }
    return (
<>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
            
            <Form>
                <div className="container">
                    <div className="form">
                       
                        <div className="title">Welcome</div>
                        <div className="subtitle">Let's create your account!</div>
                        <div className="input-container ic1">
                            <Field id="firstName" className="input" type="text" placeholder="" name="firstName" />
                            <label for="firstName" className="placeholder">First name</label>

                            <p className='warning text-danger m-0'>
                                <ErrorMessage name="firstName" />
                            </p>
                        </div>

                        <div className="input-container ic2">
                            <Field id="lastName" className="input" type="text" name="lastName" placeholder=" " />
                            <label for="lastName" className="placeholder">Last name</label>

                            <p className='warning text-danger m-0'>
                                <ErrorMessage name="lastName" />
                            </p>
                        </div>

                        <div className="input-container ic2">
                            <Field id="email" className="input" type="text" placeholder=" " name="email" />
                            <label for="email" className="placeholder">Email</label>
                            
                            <p className='warning text-danger m-0'>
                                <ErrorMessage name="email" />
                            </p>
                        </div>
                        <button type="submit" className="submit">submit</button>
                    </div>
                </div>
            </Form>

        </Formik>

        </>

    )
}

export default RecoilForm
