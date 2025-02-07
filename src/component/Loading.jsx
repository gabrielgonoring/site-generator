function Loading(){
    
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
            <div className="spinner-border text-light" style={{ width: "3rem", height: "3rem" }} role="status">
                <span className="visually-hidden">Carregando...</span>
            </div>
        </div>
    );
}

export default Loading;