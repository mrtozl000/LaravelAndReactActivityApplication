import React from "react";

const SuccessModal = ({}) =>{
    return(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Success</p>
                        <button
                            className="modal-close p-2 -mt-2 -mr-2 h-8 w-8 hover:bg-gray-300 rounded-full hover:text-gray-800"
                            onClick={() => setResponse(false)} // Close the modal
                        >
                            &times;
                        </button>
                    </div>
                    <p>Congratulations, you successfully joined the activity.</p>
                </div>
            </div>
        </div>
    );
}

export default SuccessModal
