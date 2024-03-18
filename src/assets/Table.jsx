import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Table.css';
import { LoadingAnimation } from './LoadingAnimation/LoadingAnimation';

export const Table = () => {

    //Variable declaration start
    const [data, setData] = useState("people");
    const [loadData, setLoadData] = useState(0);
    const [peoples, setPeoples] = useState([]);
    const [vehicles, setVehicles] = useState("vechicle");
    const [films, setFilms] = useState("films");
    const [order, setOrder] = useState("ASC");
    const [colType, setColType] = useState();
    //Variables declaration end


    //Fetch the data in the useEffect and save it in variable.
    useEffect(()=>{
        const loadPeopleData = async ()=>{
            setLoadData(1);
            const peopleResponse = await axios.get(
                "https://swapi.dev/api/people"
            );
            setPeoples(peopleResponse.data.results);
            console.log("people");
            console.log(peopleResponse.data.results);
            setLoadData(0);
        }
        const loadVehicleData = async ()=>{
            setLoadData(1);
            const vehicleResponse = await axios.get(
                "https://swapi.dev/api/vehicles"
            );
            setVehicles(vehicleResponse.data.results);
            console.log("Vehicle");
            console.log(vehicleResponse.data.results);
            setLoadData(0);
        }
        const loadFilmsData = async ()=>{
            setLoadData(1);
            var filmsResponse = await axios.get(
                "https://swapi.dev/api/films"
            );
            setFilms(filmsResponse.data.results);
            console.log("Films");
            console.log(filmsResponse.data.results);
            setLoadData(0);
        }
        loadPeopleData();
        loadVehicleData();
        loadFilmsData();
    }, [])

    //When changing the option function will be call
    function changeData(e){
        setData(e);
        setColType("");
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
                                         //Function to sort the table. 
                                         //It will be activate when click any head of the table
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const sorting = (optionType, col, varType)=>{
        setColType(col);
        if(optionType==="people"){
            if(order==="ASC"){
                if(varType==="string"){
                    const sorted = [...peoples].sort((a,b)=>{
                        return(a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1)
                    });
                    setPeoples(sorted);
                }
                else{
                    const sorted = [...peoples].sort((a,b)=>{
                        return(Number(a[col]) > Number(b[col]) ? 1:-1)
                    });
                    setPeoples(sorted);
                }
            }
            else{
                if(varType==="string"){
                    const sorted = [...peoples].sort((a,b)=>{
                        return(a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1)
                    });
                    setPeoples(sorted);
                }
                else{
                    const sorted = [...peoples].sort((a,b)=>{
                        return(Number(a[col]) < Number(b[col]) ? 1:-1)
                    });
                    setPeoples(sorted);
                }
            }
        }

        else if(optionType==="vehicle"){
            if(order==="ASC"){
                if(varType==="string"){
                    const sorted = [...vehicles].sort((a,b)=>{
                        return(a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1)
                    });
                    setVehicles(sorted);
                }
                else{
                    const sorted = [...vehicles].sort((a,b)=>{
                        return(Number(a[col]) > Number(b[col]) ? 1:-1)
                    });
                    setVehicles(sorted);
                }
            }
            else{
                if(varType==="string"){
                    const sorted = [...vehicles].sort((a,b)=>{
                        return(a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1)
                    });
                    setVehicles(sorted);
                }
                else{
                    const sorted = [...vehicles].sort((a,b)=>{
                        return(Number(a[col]) < Number(b[col]) ? 1:-1)
                    });
                    setVehicles(sorted);
                }
            }
        }

        else{
            if(order==="ASC"){
                if(varType==="string"){
                    const sorted = [...films].sort((a,b)=>{
                        return(a[col].toLowerCase() > b[col].toLowerCase() ? 1:-1)
                    });
                    setFilms(sorted);
                }
                else{
                    const sorted = [...films].sort((a,b)=>{
                        return(Number(a[col]) > Number(b[col]) ? 1:-1)
                    });
                    setFilms(sorted);
                }
            }
            else{
                if(varType==="string"){
                    const sorted = [...films].sort((a,b)=>{
                        return(a[col].toLowerCase() < b[col].toLowerCase() ? 1:-1)
                    });
                    setFilms(sorted);
                }
                else{
                    const sorted = [...films].sort((a,b)=>{
                        return(Number(a[col]) < Number(b[col]) ? 1:-1)
                    });
                    setFilms(sorted);
                }
            }
        }

        
        
        if(order=="ASC") setOrder("DSC");
        else setOrder("ASC");
    }
    //Sorting function end here

    function showArrow(col){
        if(colType === col){
            if(order==="DSC") return(<>⬇</>);
            else return(<>⬆</>);
        }
    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////
                                               //Function to print the table
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    function showValue(){
        if(data === "people"){
            return(
                <table>
                    <thead>
                    <tr>
                        <th className='SNo'>S. No.</th>
                        <th onClick={()=>(sorting("people", "name", "string"))}>Name {showArrow("name")}</th>
                        <th onClick={()=>(sorting("people", "gender", "string"))}>Gender {showArrow("gender")}</th>
                        <th onClick={()=>(sorting("people", "height", "number"))}>Height {showArrow("height")}</th>
                        <th onClick={()=>(sorting("people", "mass", "number"))}>Weight {showArrow("mass")}</th>
                    </tr>
                    </thead>
                 <tbody>
                 {peoples.map((people, index)=>{
                    return(
                        <tr key = {index}>
                            <td className='SNo'>{index+1}.</td>
                            <td>{people.name}</td>
                            <td>{people.gender}</td>
                            <td>{people.height}</td>
                            <td>{people.mass}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            )
        }
        else if(data === "vehicle"){
            return(
                <table>
                    <thead>
                    <tr>
                        <th className='SNo'>S. No.</th>
                        <th onClick={()=>(sorting("vehicle", "name", "string"))}>Vehicle Name {showArrow("name")}</th>
                        <th onClick={()=>(sorting("vehicle", "model", "string"))}>Model {showArrow("model")}</th>
                        <th onClick={()=>(sorting("vehicle", "manufacturer", "string"))}>Manufacturer {showArrow("manufacturer")}</th>
                        <th onClick={()=>(sorting("vehicle", "length", "number"))}>Length {showArrow("length")}</th>
                        <th onClick={()=>(sorting("vehicle", "cost_in_credits", "string"))}>Cost in Credits {showArrow("cost_in_credits")}</th>
                        <th onClick={()=>(sorting("vehicle", "max_atmosphering_speed", "number"))}>Max Speed {showArrow("max_atmosphering_speed")}</th>
                        <th onClick={()=>(sorting("vehicle", "vehicle_class", "number"))}>Vehicle class {showArrow("vehicle_class")}</th>
                    </tr>
                    </thead>
                 <tbody>
                 {vehicles.map((vehicle, index)=>{
                    return(
                        <tr key = {index}>
                            <td className='SNo'>{index+1}.</td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.model}</td>
                            <td>{vehicle.manufacturer}</td>
                            <td>{vehicle.length}</td>
                            <td>{vehicle.cost_in_credits}</td>
                            <td>{vehicle.max_atmosphering_speed}</td>
                            <td>{vehicle.vehicle_class}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            )
        }
        else{
            return(
                <table>
                    <thead>
                    <tr>
                        <th className='SNo'>S. No.</th>
                        <th onClick={()=>(sorting("film", "title", "string"))}>Title {showArrow("title")}</th>
                        <th onClick={()=>(sorting("film", "director", "string"))}>Director {showArrow("director")}</th>
                        <th onClick={()=>(sorting("film", "producer", "number"))}>Producer {showArrow("producer")}</th>
                        <th onClick={()=>(sorting("film", "release_date", "string"))}>Release Date {showArrow("release_date")}</th>
                        <th onClick={()=>(sorting("film", "opening_crawl", "string"))}>Opening crawl {showArrow("opening_crawl")}</th>
                    </tr>
                    </thead>
                 <tbody>
                 {films.map((film, index)=>{
                    return(
                        <tr key = {index}>
                            <td className='SNo'>{index+1}.</td>
                            <td>{film.title}</td>
                            <td>{film.director}</td>
                            <td>{film.producer}</td>
                            <td>{film.release_date}</td>
                            <td>{film.opening_crawl}</td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            )
        }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                      //Return of the main function 
//////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
    {loadData===0?
        <>
        <div>
        <select name="" id="selectOption" onChange={(e)=>{changeData(e.target.value)}}>
            <option value="people">people</option>
            <option value="vehicle">vehicle</option>
            <option value="films">films</option>
        </select>
        </div>
        <br/>
        <div className='tableDiv'>
        {showValue()}
        </div>
        </>
        :
        <div><LoadingAnimation/></div>
    }
    </>
  )
}
