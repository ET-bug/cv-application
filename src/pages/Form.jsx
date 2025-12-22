import Button from '../components/button.jsx';

function FormTemplate({ title, fields}) {
  return (
    <>
    <div className='form--section'>
        <h2>{title}</h2>
        {fields.map((field,index)=> (
            <FieldInput key={index} label={field.label} placeholder={field.placeholder} hasDuration={field.hasDuration}/>
        ))}
    </div>
    </>
  );
}

function FieldInput({label, placeholder, hasDuration}) {
    return (
        <>
        <div className='fieldinput'>
            <label className='label'>{label}</label>
            <input className='input__field input__field-small' placeholder={placeholder} />
        </div>
        {hasDuration && <Duration />}
        </>
    )
}

function Duration() {
  return (
    <div className='duration'>
        <label className='label'>From</label>
        <input className='input__field input__field-small' placeholder='yyyy'/>
        <label className='label'>To</label>
        <input className='input__field input__field-small' placeholder='yyyy'/>
    </div>
  );
}

function Form() {
    const basicFields = [
        {label:'Full Name', placeholder:'Sam Altman', hasDuration:false},
        {label:'Email', placeholder:'s.altman@gmail.com', hasDuration:false},
    ] 

    const educationFields = [
        {label:'Place of Education', placeholder:'MIT', hasDuration:true},
    ] 

    const workFields = [
        {label:'Company', placeholder:'OpenAI', hasDuration:true},
    ] 
    
    return (
    <div className='formpage'>
        <FormTemplate title='Basic Information' fields={basicFields} />
        <FormTemplate title='Education' fields={educationFields} />
        <FormTemplate title='Work Experience' fields={workFields} />
        <Button className='btn-primary' text='Build My CV' variant='popup'/>
    </div>
  );
}

export default Form;