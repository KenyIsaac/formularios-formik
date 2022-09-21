import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Select from './components/Select'

const validate = (values) => {
  const errors = {}
    if(!values.name) {
      errors.name = 'Requerido'
    } else if (values.name.length < 4) {
      errors.name = 'El nombre es muy corto'
    }

    if(!values.lastname) {
      errors.lastname = 'Requerido'
    } else if (values.lastname.length < 4) {
      errors.lastname = 'El apellido es muy corto'
    }

    if(!values.radio) {
      errors.radio = 'Requerido'
    }

  return errors
}

function App() {
  
  return (
    <Formik
        initialValues={{name: '', lastname: '', email: '', hamburguesa:'', radio:''}}
        validate={validate}
        onSubmit={values => console.log(values)}
    >    
            <Form>
                <TextInput name='name' label='Nombre' />
                <br />
                <TextInput name='lastname' label='Apellido' />
                <br />
                <TextInput name='email' label='Correo' />
                <Select label='Tipo de hamburguesa' name='hamburguesa'>
                  <option value=''>Seleccione hamburguesa</option>
                  <option value='sencilla'>Sencilla</option>
                  <option value='especial'>Especial</option>
                  <option value='choripan'>Choripan</option>
                </Select>
                <Checkbox name='accept'>
                  Aceptar términos y condiciones
                </Checkbox>
                <Radio name='radio' value='hamburguesasencilla' label='Hamburguesa Sencilla' />
                <Radio name='radio' value='hamburguesaespecial' label='Hamburguesa Especial' />
                <Radio name='radio' value='choripan' label='Choripan' />
                <ErrorMessage name='radio' />
                <button type='submit'>Enviar</button>
            </Form>        
    </Formik>
    
  );
}

export default App;
