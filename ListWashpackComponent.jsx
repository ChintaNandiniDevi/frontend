import React,{useState} from 'react'
import { useEffect } from 'react'
import ListWashpackService from '../service/ListWashpackService'

const ListWashpackComponent = () => {

    const[washpacks, setWashpacks]=useState([])

   useEffect(()=>{

    ListWashpackService.getWashPacks().then((response)=>{
        setWashpacks(response.data)
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })

   },[])


  return (
    <div className="container">
        <h2 className="text-center">WashPack List</h2>
        <table className="table table-bordered table-striped">
            <thead>
                {/* <th>WashPackId</th> */}
                <th>WashPack Name</th>
                <th>WashPack description</th>
                <th>WashPack Cost</th>
            </thead>
            <tbody>
                {
                    washpacks.map(
                        washpack=>
                        <tr key={washpack.id}>
                            {/* <td>{washpack.washPackId}</td> */}
                            <td>{washpack.washPackName}</td>
                            <td>{washpack.washPackDescription}</td>
                            <td>{washpack.washPackCost}</td>
                            <td><button >Book</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </div>
  )
}
export default ListWashpackComponent;