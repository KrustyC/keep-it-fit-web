import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Form from 'uikit/blocks/Form';
import Button from 'uikit/blocks/Button';

const StyledForm = styled(Form)`
  width: 60%;
  margin: 50px 0px;
`;

const validationSchema = Yup.object().shape({
  password: Yup.string().required('Please provide your email'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
});

const SignInForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ password: '', passwordConfirm: '' }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {({
      values,
      touched,
      errors,
      isValid,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
    }) => (
      <StyledForm onSubmit={handleSubmit}>
        <Form.FormGroup>
          <Form.Label htmlFor="name">Password</Form.Label>
          <Form.Password
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Form.Feedback show={errors.password && touched.password}>
            {errors.password}
          </Form.Feedback>
        </Form.FormGroup>
        <Form.FormGroup>
          <Form.Label htmlFor="name">Repeat Password</Form.Label>
          <Form.Password
            id="passwordConfirm"
            placeholder="Repeat your password"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Form.Feedback
            show={errors.passwordConfirm && touched.passwordConfirm}
          >
            {errors.passwordConfirm}
          </Form.Feedback>
        </Form.FormGroup>
        <Button
          type="submit"
          size="large"
          color="primary"
          disabled={isSubmitting || !isValid}
        >
          Reset Password
        </Button>
      </StyledForm>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;