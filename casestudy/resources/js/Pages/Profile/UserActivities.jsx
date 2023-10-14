import {Head, Link} from "@inertiajs/react";
import SuccessModal from "@/Components/SuccessModal.jsx";
import ErrorModal from "@/Components/ErrorModal.jsx";
import home from '/resources/css/activitiesList.css';
import React from "react";

export default function UserActivities(props){
    const { activities } = props;
    console.log(activities);
    return (
        <>
        <Head title={'My Activities'} />
            <div className="page-content">
                <div className="box">
                    <ul className="activities">
                        {activities.map((activity, index) => (
                            <li className="activity" key={index}>
                                <div className="activity-info">
                                    <Link href={'activity/detail/'+activity.id}>
                                        <h2>{activity.title}</h2>
                                    </Link>
                                    <p>Category: {activity.category}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
