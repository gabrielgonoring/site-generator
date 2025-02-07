
function MoreCompanyInfo({formNumber, companyInfoValue, setCompanyInfoInArray, deleteCompanyInfo}) {

    function setValueInArray(e) {
        const newCompanyInfoValue = {...companyInfoValue, [e.target.id]: e.target.value};

        setCompanyInfoInArray(formNumber-1, newCompanyInfoValue);
    }

    return (
        <div className="pb-3">
            <div className="form-box p-3 bg-white border">
                <div className="row">
                    <div className="col-8">
                        <h4>Informação {formNumber}</h4>
                    </div>
                    <div className="col text-end">
                        <button className="btn btn-outline-danger" onClick={(e) => deleteCompanyInfo(e, formNumber-1)}><i className="bi bi-trash"></i></button>
                    </div>
                </div>
                <div className="form-group pt-2">
                    <label htmlFor="companyInfoTitle">Nome do produto/serviço</label>
                    <input type="text" className="form-control" id="companyInfoTitle" placeholder="Digite o título da informação" onChange={(e) => setValueInArray(e)} value={companyInfoValue && companyInfoValue.companyInfoTitle? companyInfoValue.companyInfoTitle : ""}/>
                </div>
                <div className="form-group pt-2">
                    <label htmlFor="companyInfoDescription">Descrição do produto/serviço</label>
                    <input type="text" className="form-control" id="companyInfoDescription" placeholder="Digite a descrição da informação" onChange={(e) => setValueInArray(e)} value={companyInfoValue && companyInfoValue.companyInfoDescription? companyInfoValue.companyInfoDescription : ""}/>
                </div>
            </div>
        </div>
    );
}

export default MoreCompanyInfo;