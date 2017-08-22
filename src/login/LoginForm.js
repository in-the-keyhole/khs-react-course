import React from 'react'
import { Formik } from 'formik'
import Yup from 'yup' //validation library
import TextInput from '../components/forms/TextInput' //re-usable TextInput!

const formikEnhancer = Formik({
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Your initials wouldn't make a very good username...")
      .required('Username is required.'),
    password: Yup.string()
      .min(6, 'Your password shoud be at least 6 characters.')
      .required('Password is required.')
  }),
  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (values, { setSubmitting, props: { login } }) => {
    login(values)
    setSubmitting(false)
  },
  validateOnChange: true,
  displayName: 'LoginForm'
})

const LoginForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) =>
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
    <button type="submit" className="btn btn-default" disabled={isSubmitting}>
      Login
    </button>
  </form>

const ELoginForm = formikEnhancer(LoginForm)
export default ELoginForm
