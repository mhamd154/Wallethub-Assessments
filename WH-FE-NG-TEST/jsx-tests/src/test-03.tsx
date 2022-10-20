/**
 * In the following React template, create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. 
 * Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered.
 * This way the application can function as a simple phone book. 
 * When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:
 * 
    First name = Coder
    Last name = Byte
    Phone = 8885559999
 * 
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface ItableData{
    firstName: string;
    lastName: string;
    phone: string;
}

const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
} as const;

function InformationTable({tableData}) {
    return (
        <table style={style.table} className='informationTable'>
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
            {tableData?.map((info,i)=>{
                return (
                   <tr key={i}>
                       <td>{info.firstName}</td>
                       <td>{info.lastName}</td>
                       <td>{info.phone}</td>
                   </tr>
                );
        
            })}
            </tbody>
        </table>
    );
}

function Application(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [tableData, setTableData] = useState<ItableData[]>([])

    const changeFirstName = (event) => {
        setFirstName(event.target.value);
      };
      
      const changeLastName = (event) => {
        SetLastName(event.target.value);
      };
      
      const changePhone = (event) => {
        setPhone(event.target.value);
      };

      const transferValue = (event) => {
        event.preventDefault();
        setTableData((prev) => [...prev, {firstName,
            lastName,
            phone,}])
        clearState();
      };
      
      const clearState = () => {
        setFirstName('');
        SetLastName('');
        setPhone('')
      };

    return (
        <section>
            <form style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
                value={firstName} 
                onChange={changeFirstName} 
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userLastname'
                name='userLastname'
                type='text'
                value={lastName} 
                onChange={changeLastName} 
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className='userPhone'
                name='userPhone'
                type='text'
                value={phone} 
                onChange={changePhone} 
            />
            <br />
            <input
                style={style.form.submitBtn}
                onClick={transferValue}
                className='submitButton'
                type='button'
                value='Add User'
            />
        </form>
            <InformationTable tableData={tableData}/>
        </section>
    );
}

ReactDOM.render(
    <Application />,
    document.getElementById('test-03')
);