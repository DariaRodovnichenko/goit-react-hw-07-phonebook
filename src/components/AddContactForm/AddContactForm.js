import { connect } from 'react-redux';
import { addContact } from 'redux/operations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  StyledForm,
  Label,
  ErrorMsg,
  SubmitBtn,
  StyledField,
} from './AddContactForm.styled';

// const phonePattern = /^\d{3}-\d{2}-\d{2}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  phone: Yup.string()
    // .matches(phonePattern, 'Invalid phone number format. Use XXX-XX-XX.')
    .required('Required'),
});

const AddContactForm = ({contacts, addContact }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          const existingContact = contacts.find(
            contact =>
              contact.name === values.name && contact.phone === values.phone
          );

          if (existingContact) {
            alert('Contact already exists!');
          } else {
            addContact({ name: values.name, phone: values.phone });
            actions.resetForm();
          }
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
                name="phone"
                type="tel"
                hasError={touched.phone && errors.phone}
              />
              <ErrorMsg name="phone" component="div" />
            </Label>

            <SubmitBtn type="submit">Add contact</SubmitBtn>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => {
    dispatch(addContact(contact));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
