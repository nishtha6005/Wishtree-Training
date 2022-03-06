import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useLocation, useNavigate} from 'react-router-dom'

function Question(props){
    const [ques,setQues]=useState([])
    const [score,setScore]=useState(0)
    const [option,setOption]=useState({})
    const [showScore,setShowScore]=useState(false)
    const [quesNo,setQuesNo]=useState(1)
    const location=useLocation()
    const navigate = useNavigate()
    const maxQues=5

    useEffect(()=>{
        axios.get(`http://localhost:4000/question/${location.state.quesCategory}/${quesNo}`)
        .then(res=>{
            setQues(res.data)
            
        })
        .catch(err=>{
            console.log(err)
        })        
    },[quesNo]);

    const evaluateAnswer=()=>{
        let temp=0;
        const x = Object.keys(option)
        x.forEach(item=>{
            console.log(option[item].selectedOption === option[item].correct)
            if (option[item].selectedOption === option[item].correct)
            {
                temp+=1
            }
        })
        setScore(temp)
        return temp
    }

    const addResult =(score)=>{
        console.log(score)
        axios.post(`http://localhost:4000/result/add`,
        {user:props.currentUser,userAnswer:option,category:location.state.quesCategory,score:score})
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const submitTest=(e)=>{
        e.preventDefault();
        let marks = evaluateAnswer()
        addResult(marks)
        setOption({})
        setShowScore(true)
    }

    const nextQues=(e)=>{
        setQuesNo(pre=>pre+1)
    }

    const preQues=(e)=>{
        setQuesNo(pre=>pre-1)
    }

    const change=(e,answer)=>{
        let {name,value}=e.target
        setOption({...option,[name]:{
            selectedOption:value,
            correct:answer
        }})
    }
    
    const goBack=(e)=>{
        navigate('/category')
    }

    return (
    <>
        <br/>
        { showScore===true ? 
        <>
            <button type='button'className="btn btn-primary btn-block mx-2 " onClick={(e)=>goBack(e)} >Home</button>
            <h3 className='text-danger text-center'>Your {location.state.quesCategory} Test Score is {score}/5</h3>
        </>
        :
        <>
        <h1 className='text-primary text-center'>{location.state.quesCategory} Test Questions</h1>
        <form>   
            { ques.map(item=>{
                return(
                    <>
                        <div className='box-grid' key={item._id}>
                        <h5 >Q{quesNo}. {item.question}</h5> 
                        {item.options.map((opt,index)=>{
                            return (
                                <>
                                    <div className="form-check form-check-inline mx-5 my-2" key={index}>
                                        <input className="form-check-input " type="radio" checked={option[item._id]?.selectedOption === opt}
                                            name={item._id} value={opt} onChange={(e)=>change(e,item.answer)}/>
                                        <label className="form-check-label ">{opt}</label>
                                    </div>
                                </>
                            )
                        })}
                        </div>
                    </>
                )
            })}
            <br/>
            <div className='text-center mb-3'>
            <button type='button' className="btn btn-primary btn-block mx-2" disabled={quesNo===1} onClick={(e)=>preQues(e)}>Previous</button>
                <button type='button' className="btn btn-primary btn-block mx-2" disabled={quesNo===maxQues} onClick={(e)=>nextQues(e)}>Next</button>
                <button type='submit' className="btn btn-success btn-block mx-2"  disabled={quesNo!==maxQues} onClick={(e)=>submitTest(e)}>Submit</button>
            </div>           
        </form> 
        </>
        }
    
    </>
        
    
    )
}

export default Question