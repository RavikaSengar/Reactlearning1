import React from 'react'

//one way of giving by props

// function Props(props) {
//   return (
//     <li id='' style={{ listStyle: 'none', textAlign:'center', color:'red'}}>
//        <h2> {props.title}</h2>
//        <p> {props.description}</p>
//     </li>
//   )
// }

// export default Props

//another way of giving props by name but the name should be same in all the places.

function Props({title, description}) {
    return (
      <li id='' style={{ listStyle: 'none', textAlign:'center', color:'red'}}>
         <h2> {title}</h2>
         <p> {description}</p>
      </li>
    )
  }
  
  export default Props

export const CORE_CONCEPT=[
    {
        title: 'Components',
        description: 'The core UI building block'
    },
    {
        title:'JSX',
        description:'Return HTML code'
    },
    {
        title:'Props',
        description:'make component configurable'
    }
]