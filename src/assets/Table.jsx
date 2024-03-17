import React, {useState, useEffect} from 'react';
import axios from "axios";
import './Table.css';
import { LoadingAnimation } from './LoadingAnimation/LoadingAnimation';

export const Table = () => {
    const [data, setData] = useState("people");
    const [loadData, setLoadData] = useState(0);
    const [peoples, setPeoples] = useState([]);
    const [vehicles, setVehicles] = useState("vechicle");
    const [films, setFilms] = useState("films");

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

    function changeData(e){
        setData(e);
    }

    function showValue(){
        if(data === "people"){
            return(
                <table>
                    <thead>
                    <tr>
                        <th className='SNo'>S. No.</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Weight</th>
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
                        <th>Vehicle Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Length</th>
                        <th>Cost in Credits</th>
                        <th>Max Speed</th>
                        <th>Vehicle class</th>
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
                        <th>Title</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Release Date</th>
                        <th>Opening crawl</th>
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
