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

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  phone: Yup.string().required('Required'),
});

const AddContactForm = ({ contacts, addContact }) => {
  const lowercaseNames = new Set(
    contacts.map(contact => contact.name.toLowerCase())
  );
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, actions) => {
          const nameToLower = values.name.toLowerCase();

          if (lowercaseNames.has(nameToLower)) {
            alert('Contact with this name already exists!');
          } else {
            addContact({ name: values.name, phone: values.phone });
            lowercaseNames.add(nameToLower);
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
