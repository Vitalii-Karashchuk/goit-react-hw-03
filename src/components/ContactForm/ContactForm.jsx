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
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="span" clame={css.error} />
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="span" className={css.error} />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
