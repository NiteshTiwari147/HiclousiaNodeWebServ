import React, { Component } from 'react';

const data = [
    {
        position: 'SDE-1',
        jobAvl: '1.2k',
        slryRnge: '70k-80k',
        company: 'Impetus'
    },
    {
        position: 'SDE-1',
        jobAvl: '1.5k',
        slryRnge: '60k-80k',
        company: 'Dunzo'
    },
    {
        position: 'SDE-1',
        jobAvl: '2.5k',
        slryRnge: '40k-60k',
        company: 'TCS'
    },
    {
        position: 'SDE-2',
        jobAvl: '589',
        slryRnge: '60k-120k',
        company: 'IBM'
    },
    {
        position: 'SDE-2',
        jobAvl: '155',
        slryRnge: '100k-120k',
        company: 'HCL'
    },
]
class JobStat extends Component {
    render() {
        return (
            <div className='jobStatContainer'>
                <table>
                    <tr className='tableRow'>
                        <th className='tableHeader'>
                            Positions
                        </th>
                        <th className='tableHeader'>
                            No. of Jobs
                        </th>
                        <th className='tableHeader'>
                            Salary Range 
                        </th>
                        <th className='tableHeader'>
                            Company 
                        </th>
                    </tr>
                    {data.map(obj => <tr>
                        <td className='tableData'>{obj.position}</td>
                        <td className='tableData'>{obj.jobAvl}</td>
                        <td className='tableData'>{obj.slryRnge}</td>
                        <td className='tableData'>{obj.company}</td>
                    </tr>)}
                </table>
            </div>
        )
    }
}

export default JobStat;