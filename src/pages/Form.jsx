import { useState } from 'react';
import Button from '../components/button.jsx';


/* Reusable Form Components */

function ShortInput({label, placeholder, value, onChange}) {
    return (
        <div className='fieldinput'>
            <label className='label'>{label}</label>
            <input 
                className='input__field input__field-small' 
                placeholder={placeholder} 
                value={value} 
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}

function Duration({value, onChange}) {
  return (
    <div className='fieldinput'>
        <ShortInput 
            label='From'
            value={value.fromYear}
            placeholder='yyyy'
            onChange={val => onChange('fromYear',val)}
        />
        <ShortInput 
            label='To'
            value={value.toYear}
            placeholder='yyyy'
            onChange={val => onChange('toYear',val)}
        />
    </div>
  );
}

function LongInput ({label, value, onChange}) {
    return (
        <div className='longinput'>
            <label className='label--size-long'>{label}</label>
            <textarea 
                className='input__field input__field-large' 
                rows={4} 
                value={value} 
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}


/* Form Sections */

function BasicSection({data, onChange}) {
  return (
    <div className='form--section'>
        <h2>Basic Information</h2>
        <ShortInput 
            label='Full Name'
            value={data.fullName}
            placeholder='Sam Altman'
            onChange={val => onChange('fullName',val)}
        />
         <ShortInput 
            label='Email'
            value={data.email}
            placeholder='s.altman@gmail.com'
            onChange={val => onChange('email',val)}
        />
         <ShortInput 
            label='LinkedIn'
            value={data.linkedIn}
            placeholder='https://linkedin.com/in/...'
            onChange={val => onChange('linkedIn',val)}
        />

    </div>
  );
}

function EducationSection({data, onChange, onAdd}) {
  return (
    <div className='form--section'>
        <h2>Education</h2>
        {data.map((edu,index) => (
            <div key={index}>
                <ShortInput
                    label='University'
                    value={edu.university}
                    placeholder='Harvard University'
                    onChange={val => onChange(index, 'university', val)}
                />
                <Duration
                    value={edu}
                    onChange={(field, val) => onChange(index, field, val)}
                />
            </div>
        ))}
        <Button text='Add another education' onClick={onAdd} />
    </div>
  );
}

function WorkSection({ data, onChange, onAdd }) {
  return (
    <div className='form--section'>
      <h2>Work Experience</h2>

      {data.map((job, index) => (
        <div key={index}>
          <ShortInput
            label='Company'
            value={job.company}
            placeholder='OpenAI'
            onChange={val => onChange(index, 'company', val)}
          />

          <Duration
            value={job}
            onChange={(field, val) =>
              onChange(index, field, val)
            }
          />

          <LongInput
            label='Describe your experience'
            value={job.description}
            onChange={val =>
              onChange(index, 'description', val)
            }
          />
        </div>
      ))}

      <Button text='Add another job' onClick={onAdd} />
    </div>
  );
}


/* Main Form */

function Form() {

    /* Set form state */
     
    const [formData, setFormData] = useState({
        basic: {
            fullName: '',
            email: '',
            linkedIn: ''
        },
        education: [{
            university: '',
            fromYear: '',
            toYear: ''
        }],
        work: [{
            company: '',
            fromYear: '',
            toYear: '',
            description: ''
        }]
    });

    const updateBasic = (field, value) => {
        setFormData(prev => ({
            ...prev,
            basic: {
                ...prev.basic,
                [field]: value
            }
        }));
    };

    const updateEducation = (index, field, value) => {
        setFormData(prev => {
            const updated = [...prev.education];
            updated[index] = {...updated[index], [field]:value};
            return {...prev, education: updated};
        });
    };

    const updateWork = (index, field, value) => {
        setFormData(prev => {
            const updated = [...prev.work];
            updated[index] = {...updated[index], [field]:value};
            return {...prev, work: updated};
        });
    };

    const addEducation = () => {
        setFormData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                {university: '', fromYear: '', toYear: ''}
            ]
        }));
    };

    const addWork = () => {
        setFormData(prev => ({
            ...prev,
            work: [
                ...prev.work,
                {company: '', fromYear: '', toYear: ''}
            ]
        }));
    };
    
    return (
        <div className='formpage'>
            <BasicSection data={formData.basic} onChange={updateBasic} />
            <EducationSection data={formData.education} onChange={updateEducation} onAdd={addEducation} />
            <WorkSection data={formData.work} onChange={updateWork} onAdd={addWork} />
            <Button className='btn-primary' text='Build My CV' variant='popup' />
        </div>
  );
}

export default Form;