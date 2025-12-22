import { useState } from 'react';
import Button from '../components/button.jsx';

function FormTemplate({ title, fields, values, onChange}) {
  return (
    <>
    <div className='form--section'>
        <h2>{title}</h2>
        {fields.map((field,index)=> (
            <FieldInput 
                key={index} 
                label={field.label} 
                placeholder={field.placeholder} 
                fieldKey={field.valueKey}
                hasDuration={field.hasDuration} 
                hasLongInput={field.hasLongInput} 
                values={values} 
                onChange={onChange} 
            />
        ))}
    </div>
    </>
  );
}

function FieldInput({label, placeholder, fieldKey, hasDuration=false, hasLongInput=false, values, onChange}) {
    return (
        <>
        <div className='fieldinput'>
            <label className='label'>{label}</label>
            <input className='input__field input__field-small' placeholder={placeholder} value={values[fieldKey]} onChange={onChange(fieldKey)}/>
        </div>
        {hasDuration && <Duration fromValue={values.fromYear} toValue={values.toYear} onChangeFrom={onChange('fromYear')} onChangeTo={onChange('toYear')}/>}
        {hasLongInput && <LongInput value={values.workDescription} onChange={onChange('workDescription')}/>}
        </>
    )
}


function Duration({fromValue, toValue, onChangeFrom, onChangeTo}) {
  return (
    <div className='fieldinput'>
        <div className='fieldinput'>
            <label className='label'>From</label>
            <input className='input__field input__field-small' placeholder='yyyy' value={fromValue} onChange={onChangeFrom}/>
        </div>
        <div className='fieldinput'>
            <label className='label'>To</label>
            <input className='input__field input__field-small' placeholder='yyyy' value={toValue} onChange={onChangeTo}/>
        </div>
    </div>
  );
}

function LongInput ({value, onChange}) {
    return (
        <div className='longinput'>
            <label className='label--size-long'>Describe your experience</label>
            <textarea className='input__field input__field-large' rows={4} value={value} onChange={onChange}/>
        </div>
    )
}


function Form() {
    const [currentInput, updateInput] = useState({
        fullName: '',
        email: '',
        linkedIn: '',
        university:'',
        company:''
    })

    const handleChange = (field) => (e) => {
        updateInput(prev => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    const basicFields = [
        {label:'Full Name', placeholder:'Sam Altman', valueKey: 'fullName'},
        {label:'Email', placeholder:'s.altman@gmail.com', valueKey: 'email'},
        {label:'LinkedIn', placeholder:'https://linkedin.com/in/sam-altman', valueKey: 'linkedIn'}
    ] 

    const educationFields = [
        {label:'University', placeholder:'Harvard University', hasDuration:true, valueKey:'university'},
    ] 

    const workFields = [
        {label:'Company', placeholder:'OpenAI', hasDuration:true, hasLongInput:true, valueKey:'company'},
    ] 
    
    return (
    <div className='formpage'>
        <FormTemplate title='Basic Information' fields={basicFields} values={currentInput} onChange={handleChange} />
        <FormTemplate title='Education' fields={educationFields} values={currentInput} onChange={handleChange} />
        <FormTemplate title='Work Experience' fields={workFields} values={currentInput} onChange={handleChange} />
        <Button className='btn-primary' text='Build My CV' variant='popup'/>
    </div>
  );
}

export default Form;