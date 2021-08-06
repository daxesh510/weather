import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { FaLocationArrow } from 'react-icons/fa'

const Main = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('mumbai')

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=41fae16316e0579509c8739b2caf66d6`
            const response = await fetch(url);
            const resJson = await response.json();
            // const name = resJson.main
            // console.log(name);
            setCity(resJson.main)
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-10 mt-5 text-center'>
                        <div className='main'>
                            <div className='box'>
                                <input type='search' className='search mt-3' placeholder='Write City Name Here...' style={{ width: '50%' }} onChange={(e) => { setSearch(e.target.value) }} value={search} />
                                <br />
                                {!city ? (<p>No data Found!!</p>) : (
                                    <div>
                                        <h1 className='city mt-5'><FaLocationArrow className='icon' /> {search}</h1>
                                        <div className='temp'>
                                            <h2 className='maintemp'>{city.temp} ℃</h2>
                                        </div>
                                        <div className='minmax'>
                                            <p className='min'> Min : {city.temp_min} ℃ | Max : {city.temp_max }℃</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main