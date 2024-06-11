import generateUniqueId from 'generate-unique-id';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
// import Adddata from '../Adddata/Adddata';
import { GetData } from '../../Services/helper';


function Edit() {


    const { id } = useParams();

    console.log("id", id);

    useEffect(() => {
        const data = viewData.find((data) => {
            return data.id === id
        })

        setInputData(data);

    }, [])

    const [inputData, setInputData] = useState({
        id: id,
        empName: '',
        empAge: '',
        empDepartment: '',
        empPosition: '',
        empSalary: '',
        empEmail: ''
    });



    const [kru, setKru] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }



    const navigate = useNavigate();


    const [viewData, setViewData] = useState(GetData("myData"));


    const handleSubmit = (e) => {
        e.preventDefault();

        // let obj = {
        //   ...inputData,
        //   id: generateUniqueId({
        //     length: 5,
        //     useLetters: false
        //   })
        // }

        const updateRecord = viewData.map((data) => {
            if (data.id === id) {
                return data = inputData
            }
            return data
        })


        setViewData(updateRecord);
        setKru(true);

    }

    useEffect(() => {
        localStorage.setItem("myData", JSON.stringify(viewData));
    }, [viewData]);




    useEffect(() => {
        if (kru) {
            navigate('/');
        }
    })


    return (
        <>

<Container>
        <Form className='mt-5 p-5 gradient-background' onSubmit={handleSubmit}>
          <Row className="mb-3">

            <Form.Control type="text" name='id' value={inputData.id} onChange={handleChange} hidden/>

            <Form.Group className="mb-3">
              <Form.Label>Employee Id</Form.Label>
              <Form.Control type="number" placeholder="Enter Empolyee Id" name='empId' value={inputData.id} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Empolyee Name" name='empName' value={inputData.empName} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Employee Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Empolyee Age" name='empAge' value={inputData.empAge} onChange={handleChange} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Employee Department</Form.Label>
            <Form.Control placeholder="Enter Empolyee Department" type='text' name='empDepartment' value={inputData.empDepartment} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Position</Form.Label>
            <Form.Control placeholder="Enter Empolyee Position" type='text' name='empPosition' value={inputData.empPosition} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Salary</Form.Label>
            <Form.Control placeholder="Enter Empolyee Salary" type='number' name='empSalary' value={inputData.empSalary} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Email</Form.Label>
            <Form.Control placeholder="Enter Empolyee Email" type='email' name='empEmail' value={inputData.empEmail} onChange={handleChange} />
          </Form.Group>

          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

        </>
    )
}

export default Edit
