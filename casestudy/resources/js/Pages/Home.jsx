import React, {useEffect, useState} from "react";
import axios from "axios";
import home from '/resources/css/home.css';
import { Link, Head } from '@inertiajs/react';
const Etkinlikler = () => {
    const [activitiy, setActivity] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/activities").then((response) => {
            setActivity(response.data);
        });
    }, []);
    return (
        <>
            <Head title={'Home'} />
            <div className="etkinlik-listesi">
                {activitiy.map((data) => (
                    <div className="etkinlik-karti" key={data.id}>
                        <Link href={'activity/detail/'+data.id}>
                        <img src={data.image} alt={data.title} />
                        <h2>{data.title}</h2>
                        </Link>
                        <b>{data.category}</b>
                        <p className="etkinlik-aciklama">{data.content}</p>
                    </div>

                ))}
            </div>
        </>
    );
};
export default function Home({}
){
    return(
        Etkinlikler()
    );
}
