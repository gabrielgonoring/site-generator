import { Modal } from "bootstrap";
import { useEffect, useRef} from "react";

function DialogBox({negativeAction, positiveAction, classValues, buttonTitle, title, description}){
    
    const modalRef = useRef(null);
    let modalInstance = null;


    function initModal(){
        if (modalRef.current) {
            modalInstance = new Modal(modalRef.current);
        }
    }
  
    function abrirModal(e) {
        e.preventDefault();

        initModal();

        if (modalInstance) {
            modalInstance.show();
        }
    };

    function doPositiveAction(){
        if(!!positiveAction){
            positiveAction();
        }
    }

    function doNegativeAction(){
        if(!!negativeAction){
            negativeAction();
        }
    }
  
    return (
      <div>
        {/* Botão para abrir o modal */}
        <button className={classValues ? classValues : "btn btn-primary"} onClick={(e) => abrirModal(e)}>
          {buttonTitle? buttonTitle : "Abrir Modal"}
        </button>
  
        {/* Estrutura do Modal */}
        <div className="modal fade" ref={modalRef} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title ? title : "--"}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <p className="text-start">{description ? description : "---"}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>doPositiveAction()}>
                  Sim
                </button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=> doNegativeAction()}>
                  Não
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DialogBox;