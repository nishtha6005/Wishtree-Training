import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Category(props){
    const [category,setCategory]=useState([]);
    const navigate = useNavigate()

    const getCategory=()=>{
        axios.get("http://localhost:4000/category/")
        .then(res=>{
            setCategory(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getCategory()
    });

   

    const startTest =(category)=>{
        axios.get(`http://localhost:4000/question/${category}`)
        .then(res=>{
            navigate('/test',{state:{quesCategory:category}})
        })
        .catch(err=>{
            console.log(err)
        })        
    }

    
    return (
    <>
    <br/>
        <h1 className='text-primary text-center'>Select Test Category</h1>
        <hr/>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <table className='table table-borderless'>
                    <tbody>
                    { category.map((item)=>{
                        return(
                            <>
                            <tr className='text-center' key={item._id}>
                                <td><h2 >{item.name}</h2></td>
                                <td>
                                    <button type='button' className="btn btn-warning " onClick={()=>startTest(item.name)}>Start Test</button>
                                </td>
                            </tr>
                            </>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className='col-md-4'></div>
        </div>     
    </>
    )
}

export default Category