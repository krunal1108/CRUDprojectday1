import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
// import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { GetData } from '../../Services/helper';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom';


function Home() {


    const [storeData, setStoreData] = useState(GetData("myData"));

    const [SearchValue, setSearchValue] = useState("");

    const [viewData, setViewData] = useState(GetData("myData"));


    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
        let data = storeData.filter((data) => {

            return data.id !== id

        })

        localStorage.setItem("myData", JSON.stringify(data));
        setStoreData(data);
    }


    const handleSort = () => {

        let NewData = [...storeData].sort((firstData, secondData) => {
            return firstData.empName.localeCompare(secondData.empName)
        })
        setStoreData(NewData);
    }




    const handleSearch = (e) => {

        setSearchValue(e.target.value);

    }



    function handleSubmit(e) {

        e.preventDefault();

        let rec = GetData("myData");
        console.log("rec",rec);
        let neweData = rec.filter((recAll) => {
            return (
                recAll.empName.toLowerCase().includes(SearchValue.toLowerCase()) ||
                recAll.empAge.toLowerCase().includes(SearchValue.toLowerCase()) ||
                recAll.empDepartment.toLowerCase().includes(SearchValue.toLowerCase()) ||
                recAll.empPosition.toLowerCase().includes(SearchValue.toLowerCase()) ||
                recAll.empSalary.toLowerCase().includes(SearchValue.toLowerCase()) ||
                recAll.empEmail.toLowerCase().includes(SearchValue.toLowerCase())

            )
        })
        console.log("newdata",neweData);
        setStoreData(neweData);
    }






    return (
        <>
            <Container>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <button style={{ marginTop: "20px", padding: "8px 30px" }} onClick={handleSort}>Sort</button>
                    <h1><u>Employee Details Table</u></h1>
                    <div>
                        <Form onSubmit={handleSubmit} className='d-flex'>
                            <Form.Control type="search" placeholder='Search' style={{ borderRight: "none" }} className='p-2' onChange={handleSearch} value={SearchValue}/>
                            <button className='p-2'><i class="bi bi-search"></i></button>
                        </Form>
                    </div>
                </div>
                <Table border={3} className='mt-5'>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Employee Age</th>
                            <th>Employee Department</th>
                            <th>Employee Position</th>
                            <th>Empolyee Salary</th>
                            <th>Empolyee Email</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storeData.map((e) => {
                                return (
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.empName}</td>
                                        <td>{e.empAge}</td>
                                        <td>{e.empDepartment}</td>
                                        <td>{e.empPosition}</td>
                                        <td>{e.empSalary}</td>
                                        <td>{e.empEmail}</td>
                                        <td>
                                            <button className='border-0 bg-body ' ><i className="bi bi-eye"></i></button>
                                        </td>
                                        <td>
                                            <button className='border-0  bg-body' onClick={() => handleEdit(e.id)}><i className="bi bi-pencil-square"></i></button>
                                        </td>
                                        <td>
                                            <button className='border-0  bg-body' onClick={() => handleDelete(e.id)}><i className="bi bi-trash3"></i></button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Home
