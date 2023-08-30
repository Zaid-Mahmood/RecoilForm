import React , {useEffect, useState} from 'react'
import {useRecoilValue} from "recoil"
import data  from '../Store/Atom';
function Table() {
const [sample , setSampleData] = useState([])
    const tableData = useRecoilValue(data);

useEffect(()=>{
const localData = JSON.parse(localStorage.getItem("formData")) || []
setSampleData(localData)
} , [tableData])

   

    return (
        <div className='CustomTable'>

            <table class="table-responsive table table-striped bg-light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {sample.map((item , id)=>(
                    <tr>
                        <td>{id +1 } </td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
