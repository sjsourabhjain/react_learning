import React, { useEffect, useState } from "react"

function List(){
    const [name, setName] = useState([]);

    useEffect(() => {names()},[])

    const names = async () => {
    	const response = await fetch("https://jsonplaceholder.typicode.com/albums/")
    	setName(await response.json())
    }

    return (
    	<>
    	 <table>
    	 	{
    	 		name.map((data) => {
    	 			return (
    	 				<tr><td>{data.title}</td></tr>
    	 			)
    	 		})
    	 	}
    	 </table>
    	</>
    )
}

export default List;