import { connect } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  Label,
  ErrorMsg,
  SubmitBtn,
  StyledField,
} from './AddContactForm.styled';

const phonePattern = /^\d{3}-\d{2}-\d{2}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .matches(phonePattern, 'Invalid phone number format. Use XXX-XX-XX.')
    .required('Required'),
});

const AddContactForm = ({ addContact }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          addContact(values.name, values.number);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <Label>
              Name
              <StyledField
                name="name"
                type="text"
                hasError={touched.name && errors.name}
              />
              <ErrorMsg name="name" component="div" />
            </Label>

            <Label>
              Number
              <StyledField
                name="number"
                type="tel"
                hasError={touched.number && errors.number}
              />
              <ErrorMsg name="number" component="div" />
            </Label>

            <SubmitBtn type="submit">Add contact</SubmitBtn>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) => {
    dispatch(addContact(name, number)); // Remove .prepare
  },
});

export default connect(null, mapDispatchToProps)(AddContactForm);
