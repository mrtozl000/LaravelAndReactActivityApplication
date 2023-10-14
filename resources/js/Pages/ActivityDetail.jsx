import React, {useEffect, useState} from "react";
import home from '/resources/css/detailPage.css';
import ErrorModal from '@/Components/ErrorModal';
import SuccessModal from "@/Components/SuccessModal";
import {Link} from "@inertiajs/react";
import axios from "axios";

export default function Detail(props) {
    const { DetailData } = props;

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userIsJoin, setUserIsJoin] = useState([]);

    {
        props.auth.user ? (
            useEffect(() => {
                axios.post("http://localhost:8000/api/v1/check-user-in-join-activity",
                    { userId: props.auth.user.id, id: DetailData.id}).then((response) => {
                    setUserIsJoin(response.data);
                });
            }, [])
        ):(
            setUserIsJoin(false)
        )
    }
    const handleModalClose = () => {
        setIsModalOpen(false);
        window.location.reload();
    };

    const handlePostData = () => {
        axios
            .post("http://localhost:8000/api/v1/join/activity", { userId: props.auth.user.id, id: DetailData.id})
            .then((response) => {
                setResponse(response.data); // Assuming the response is a boolean
                setIsModalOpen(true); // Modalı aç
            })
            .catch((error) => {
                setError(error);
                setIsModalOpen(true); // Modalı aç
            });
    };

    return (
        <div className="detail-page">
            <div className="detail-header">
                <img src={DetailData.image} alt={DetailData.title} />
                <div className="category">{DetailData.category}</div>
                <div className="title">{DetailData.title}</div>
                <div className="created-at">Eklenme Tarihi: {new Date(DetailData.created_at).toLocaleDateString()}</div>
            </div>
            <div className="detail-content">
                {DetailData.content}
            </div>
            <div className="join-button">
                { props.auth.user ? (
                      <>
                          {userIsJoin === false ?
                              ( <button onClick={handlePostData}>Katıl</button>) :
                              ( <button> Katıldınız</button>)
                          }
                      </>
                ):(
                    <Link
                        href={route('login')}
                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        Katılmak için hemen giriş yap veya üye ol
                    </Link>
                )}
            </div>
            {isModalOpen && response === true && <SuccessModal />}
            {isModalOpen && response === false && error && <ErrorModal />}
        </div>
    );
}
