import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup'

import TextInput from '../components/forms/TextInput'

const formikEnhancer = Formik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('First name is required.'),
    lastName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  }),
  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: payload => {
    alert(payload.username)
    // isSubmitting(false)
  },
  displayName: 'LoginForm'
})

const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="username"
        type="text"
        label="Username"
        placeholder="JohnSmith@gmail.com"
        error={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="password"
        type="password"
        label="Password"
        placeholder="password"
        error={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        type="submit"
        className="btn btn-default"
        disabled={isSubmitting || !dirty}
      >
        Submit
      </button>
    </form>
  )
}

const ELoginForm = formikEnhancer(LoginForm)
export default ELoginForm
