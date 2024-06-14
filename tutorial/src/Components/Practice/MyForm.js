import React from 'react'

function MyForm() {
    // const submitform=()=>{
    //     console.log("eravika")
    // }

  return (
    <form>
      <label>Enter your name:
        <input type="text" value={"John"}/>
      </label>
      <button type= " submit"> submit</button>
    </form>
  )
}

export default MyForm