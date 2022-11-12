import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
function Portada({imgs}) {
    return(
        <div className="">
            <img width={"130px"} src={imgs} alt="" />
            
        </div>
    )
}

export default function Page4() {
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(null)
    const [data,setData]=useState(null)
    useEffect(()=>{
        setLoading(true);
        fetch(`https://dog.ceo/api/breeds/image/random`
        ).then((response)=>response.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError)
    },[]);
    if (loading) return <h1>Loading ...</h1>;
    
    if (error){
        return <pre>{JSON.stringify(error)}</pre>
    }
    if(data) 
return(  
    <div>
            <pre>{JSON.stringify(data,null,2)}</pre>

        <hr />

        <Portada 
       imgs={data.message}
        />
        <div className="linkto">
            <br /><br /><br />
        <Link to={"/page5"}>page5</Link>
        </div>
        </div>
        )
    
}
