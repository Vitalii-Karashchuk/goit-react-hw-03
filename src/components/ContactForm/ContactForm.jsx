import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';
//

const FormShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ onaddContact }) {
  const handleSubmit = (values, actions) => {
    onaddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={FormShema}
      >
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field className={css.inputStyle} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor="number">Number</label>
          <Field
            className={css.inputStyle}
            type="text"
            name="number"
            id="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />

          <button type="submit" className={css.btnForm}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
