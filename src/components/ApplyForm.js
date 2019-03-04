/* eslint-disable no-useless-escape */
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { sendForm } from './../api'
import FormError from './FormError'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .matches(/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/, 'Wrong phone number, should be like (999)9999999')
    .required('Required'),
})

const ApplyForm = ({history}) => {
  const handleSubmit = async (values) => {
    await sendForm(values)
    history.push('/confirmation')
  }

  const getInputClasses = (errors, touched, field) => (
    errors[field] && touched[field]
    ? 'form-input form-input__error'
    : 'form-input'
  )
  return (
    <div className="form">
      <div className="resize">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit} >
          {({ errors, touched }) => (
            <Form className="form-content">
              <h2 className="form-title">Fill in about yourself</h2>
              <div className="form-field">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  className={getInputClasses(errors, touched, 'firstName')} />
                <FormError errors={errors} touched={touched} field={'firstName'} />
              </div>
              <div className="form-field">
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  className={getInputClasses(errors, touched, 'lastName')} />
                <FormError errors={errors} touched={touched} field={'lastName'} />
              </div>
              <div className="form-field">
                <Field
                  name="email"
                  placeholder="E-mail"
                  className={getInputClasses(errors, touched, 'email')} />
                <FormError errors={errors} touched={touched} field={'email'} />
              </div>
              <div className="form-field">
                <Field
                  name="phone"
                  placeholder="Mobile"
                  className={getInputClasses(errors, touched, 'phone')} />
                <FormError errors={errors} touched={touched} field={'phone'} />
              </div>
              <button type="submit" className="form-button">Apply now</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default withRouter(ApplyForm)
