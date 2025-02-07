
function ProductOferred({formNumber, setProductInArray, productValue, deleteProduct}) {

    function setValueInArray(e) {

        const newProductValue = {...productValue, [e.target.id]: e.target.value};

        setProductInArray(formNumber-1, newProductValue);
    }

    return (
        <div className="pb-3">
            <div className="form-box p-3 bg-white border">
                <div className="row">
                    <div className="col-8">
                        <h4>Produto/Serviço oferecido {formNumber}</h4>
                    </div>
                    <div className="col text-end">
                    <button className="btn btn-outline-danger" onClick={(e) => deleteProduct(e, formNumber-1)}><i className="bi bi-trash"></i></button>
                    </div>
                </div>
                <div className="form-group pt-2">
                    <label htmlFor="productTitle">Nome do produto/serviço</label>
                    <input type="text" className="form-control" id="productTitle" placeholder="Digite o título do produto/serviço" onChange={(e) => setValueInArray(e)} value={productValue && productValue.productTitle? productValue.productTitle : ""}/>
                </div>
                <div className="form-group pt-2">
                    <label htmlFor="productDescription">Descrição do produto/serviço</label>
                    <input type="text" className="form-control" id="productDescription" placeholder="Digite a descrição do produto/serviço" onChange={(e) => setValueInArray(e)} value={productValue && productValue.productDescription? productValue.productDescription : ""}/>
                </div>
            </div>
        </div>
    );
}

export default ProductOferred;