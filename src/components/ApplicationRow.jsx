import React from 'react';
import { Link } from 'react-router';

const ApplicationRow = ({appli}) => {
    console.log(appli)
    return (
        <tr>
            <td>
                <img className='w-12 h-12' src={appli.company_logo} alt="" />
                <p className='text-lg font-medium'>{appli.company}</p>
            </td>
            <td>
                <p className=' font-medium'>{appli.title}</p>
            </td>
            <td>
                <Link className='bg-amber-500 p-1 rounded-xs text-white' to={appli.resume}>Resume</Link>
            </td>
        </tr>
    );
};

export default ApplicationRow;