import React,{useState} from 'react'

const Serach = ({setSearchQuery}) => {
    const [value,setvalue]=useState("");
    // console.log(val);
    const onSearchSubmit=(e)=>{
      e.preventDefault();
      setSearchQuery(value)
    }
    console.log(value)
  return (
    <div>
        <form onSubmit={onSearchSubmit}>
            <input 
            type="text" 
            placeholder='Search Recipes' 
            required 
            className='w-full border border-black outline-none px-3 py-2 rounded'
            onChange={(e)=>setvalue(e.target.value)}
            value={value}
            />
        </form>
    </div>
  )
}

export default Serach