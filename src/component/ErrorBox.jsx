import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";


function ErrorBox({actionDescription, action, title, description}){

    const modalRef = useRef(null);
    let modalInstance = null;

    useEffect(() => {
        abrirModal();
    }, [])

    function abrirModal() {
       
        initModal();

        if (modalInstance) {
            modalInstance.show();
        }
    };

    function initModal(){
        if (modalRef.current && !modalInstance) {
            modalInstance = new Modal(modalRef.current);
        }
    }

    function doAction(){
        if(!!action){
            action();
        }
    }

    return (
        <div>
            <div className="modal fade" ref={modalRef} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header bg-danger">
                        <h5 className="modal-title text-white">{title ? title : "--"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-start">{description ? description : "---"}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=> doAction()}>
                        {actionDescription ? actionDescription : 'Ok'}
                        </button>
                       
                    </div>
                    </div>
                </div>
            </div> 
        </div>
       
    );
}

export default ErrorBox;