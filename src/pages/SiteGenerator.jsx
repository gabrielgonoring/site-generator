import Banner from "../component/Banner";
import MoreCompanyInfo from "../component/MoreCompanyInfo";
import ProductOferred from "../component/ProductOferred";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { act, useState } from "react";
import ImageImport from "../component/ImageImport";
import DialogBox from "../component/DialogBox";
import Loading from "../component/Loading";
import SuccessBox from "../component/SucessBox";
import ErrorBox from "../component/ErrorBox";


function SiteGenerator() {

    const [siteValue, setSiteValue] = useState({});
    const [saveActions, setSaveActions] = useState({})

    function setSiteValueOnChange(e) {
        setSiteValue({
            ...siteValue,
            [e.target.id]: e.target.value
        });
    }

    function setCompanyInfoInSiteValueOnChange(position, object){

        let {moreCompanyInfo} = siteValue;
        
        if(!moreCompanyInfo){
            moreCompanyInfo = [];
        }

        if(moreCompanyInfo[position]){
            moreCompanyInfo[position] = object;
        }else{
            moreCompanyInfo.push(object);
        }

        setSiteValue({
            ...siteValue,
            moreCompanyInfo
        });
    }

    function createNewCompanyInfo(e) {
        e.preventDefault();

        if(!siteValue.moreCompanyInfo){
            alert("Adicione pelo menos uma informação da empresa");
            return;
        }

        setCompanyInfoInSiteValueOnChange(siteValue.moreCompanyInfo.length, {});
    }

    function deleteCompanyInfo(e, position) {

        console.log("trying to delete position: ", position);

        e.preventDefault();

        let {moreCompanyInfo} = siteValue;

        if(!moreCompanyInfo || moreCompanyInfo.length === 1){
            console.log("Cannot delete the last company info");
           return;
        }

        if(moreCompanyInfo[position]){
            console.log("deleting position: ", position);
            moreCompanyInfo.splice(position, 1);
        }

        let newSiteValue = {...siteValue, moreCompanyInfo};

        setSiteValue(newSiteValue);
    }
    
    function setProductsInSiteValueOnChange(position, object){

        let {products} = siteValue;
        
        if(!products){
            products = [];
        }

        if(products[position]){
            products[position] = object;
        }else{
            products.push(object);
        }
 
        setSiteValue({
            ...siteValue,
            products
        });
    }

    function createNewProduct(e) {
        e.preventDefault();

        if(!siteValue.products){
            alert("Adicione pelo menos um produto");
            return;
        }

        setProductsInSiteValueOnChange(siteValue.products.length, {});
    }

    function deleteProduct(e, position) {

        console.log("trying to delete position: ", position);

        e.preventDefault();

        let {products} = siteValue;

        if(!products || products.length === 1){
            console.log("Cannot delete the last product");
           return;
        }

        if(products[position]){
            console.log("deleting position: ", position);
            products.splice(position, 1);
        }

        let newSiteValue = {...siteValue, products};

        setSiteValue(newSiteValue);
    }

    function setBannerInSiteValueOnChange(position, object){

        let {banners} = siteValue;
        
        if(!banners){
            banners = [];
        }

        if(banners[position]){
            banners[position] = object;
        }else{
            banners.push(object);
        }
 
        setSiteValue({
            ...siteValue,
            banners
        });
    }

    function createNewBanner(e) {

        e.preventDefault();

        if(!siteValue.banners){
            alert("Adicione pelo menos um banner");
            return;
        }

        setBannerInSiteValueOnChange(siteValue.banners.length, {});

    }

    function deleteBanner(e, position) {

        console.log("trying to delete position: ", position);

        e.preventDefault();

        let {banners} = siteValue;

        if(!banners || banners.length === 1){
            console.log("Cannot delete the last banner");
           return;
        }

        if(banners[position]){
            console.log("deleting position: ", position);
            banners.splice(position, 1);
        }

        let newSiteValue = {...siteValue, banners};

        setSiteValue(newSiteValue);
    }

    function setImageInSiteValue(fieldName, imageSource) {
    
        const newSiteValue = {...siteValue, [fieldName] : imageSource}

        setSiteValue(newSiteValue);
    }
   

    function saveSiteValues(){

        changeSaveActions(true, false, false)
        
        setTimeout(() => {
            changeSaveActions(false, true, false)
        }, 3000);
    }

    function changeSaveActions(activeLoading, activeSucessBox, activeErrorBox){
        let newSaveActions = {...saveActions, loading:activeLoading, successBox:activeSucessBox, errorBox: activeErrorBox}

        setSaveActions(newSaveActions)
    }

    return (
    <>

    
        {saveActions && saveActions.loading && <Loading />}

        {saveActions && saveActions.successBox && <SuccessBox title="Sucesso" description="Site criado com sucesso"/>}

        {saveActions && saveActions.errorBox && <ErrorBox title="Erro" description="Não foi possível criar o site"/>}
         
        <Header />
    
        <div className="container form-container bg-white">
            <form>
            
                <div className="form-box  bg-white">

                    <div className="pt-1 pb-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="text-success" href="#">Início</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Criador</li>
                            </ol>
                        </nav>
                    </div>

                    <div>
                        <h2>Informações Básicas</h2>
                        <small>São as informações básicas da sua empresa, serve para a identificação dela</small>
                        <div className="pt-4">
                            <div className="form-group pt-2">
                                <label htmlFor="companyName">Nome da empresa</label>
                                <input type="text" className="form-control" id="companyName" placeholder="Digite o nome da sua empresa"  onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.companyName ? siteValue.companyName : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <ImageImport componentId = "companyLogo" title = "Logo da empresa" imageSource = {siteValue.companyLogo} setImage =  {setImageInSiteValue}/>
                            </div>
                        </div>
                        <hr/>
                    </div>

                    
                    <div className="pt-5">
                        <div className="row">
                            <div className="col pb-3">
                                <h2>Banner inicial</h2>
                                <small>Informações do banner exibido na página inicial </small>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-success" style={{width: "40px", height: "40px"}} onClick={(e)=> createNewBanner(e)}>+</button>
                            </div>
                        </div>
                        <div className="pt-4">
                            {
                                        !siteValue.banners?
                                            <Banner key={0} formNumber={1} setBannerInArray={setBannerInSiteValueOnChange} bannerValue={{}} deleteBanner={deleteBanner}/>
                                        : siteValue.banners.map((banner, index) => {
                                            return <Banner key={index} formNumber={index+1} setBannerInArray={setBannerInSiteValueOnChange} bannerValue={banner} deleteBanner={deleteBanner} />
                                        })
                            }
                        </div>
                        <hr />
                    </div>


                    <div className="pt-5">
                        <div className="row">
                            <div className="col pb-3">
                                <h2>Serviços ou produtos oferecidos</h2>
                                <small>Infome abaixo os serviços ou produtos que sua empresa oferece ao seus clientes</small>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-success" style={{width: "40px", height: "40px"}} onClick={(e) => createNewProduct(e)}>+</button>
                            </div>
                        </div>
                        <div className="pt-4">
                            {
                                !siteValue.products || siteValue.products.length === 0?
                                <ProductOferred key={0} formNumber={1} setProductInArray = {setProductsInSiteValueOnChange} productValue={{}} deleteProduct={deleteProduct}/>
                                : siteValue.products.map((product, index) => {
                                    return <ProductOferred key={index} formNumber={index+1} setProductInArray = {setProductsInSiteValueOnChange} productValue={product} deleteProduct={deleteProduct}/>
                                })
                            }
                        </div>
                        <hr/>
                    </div>


                    <div className="pt-5">
                        <h2>Banner central</h2>
                        <small>Informe o que deve ser exibidos no banner central</small>
                        <div className="pt-4">
                            <div className="form-group">
                                <label htmlFor="centralBannerTitle">Título</label>
                                <input type="text" className="form-control pt-2" id="centralBannerTitle" placeholder="Digite o título que deve ser exibido no banner" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.centralBannerTitle ? siteValue.centralBannerTitle : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="centralBannerDescription">Descrição</label>
                                <input type="url" className="form-control" id="centralBannerDescription" placeholder="Digite a descriçãoque deve ser exibido no banner" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.centralBannerDescription ? siteValue.centralBannerDescription : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <ImageImport componentId = "centralBannerImage" title = "Imagem" imageSource = {siteValue.centralBannerImage} setImage = {setImageInSiteValue}/>
                            </div>
                        </div>
                        <hr/>
                    </div>


                    
                    <div className="pt-5">
                        <div className="row">
                            <div className="col pb-3">
                                <h2>Mais informações</h2>
                                <small>Digite mais informções sobre sua empresa, serviços ou produtos oferecidos</small>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-success" style={{width: "40px", height: "40px"}} onClick={(e) => createNewCompanyInfo(e)}>+</button>
                            </div>
                        </div>
                        <div className="pt-4">
                            {
                                !siteValue.moreCompanyInfo || siteValue.moreCompanyInfo.length == 0 ?
                                <MoreCompanyInfo key={0} formNumber={1} companyInfoValue={{}} setCompanyInfoInArray={setCompanyInfoInSiteValueOnChange} deleteCompanyInfo={deleteCompanyInfo}/>
                                :
                                siteValue.moreCompanyInfo.map((companyInfo, index) => {
                                    return <MoreCompanyInfo key={index} formNumber={index+1}  companyInfoValue={companyInfo} setCompanyInfoInArray={setCompanyInfoInSiteValueOnChange} deleteCompanyInfo={deleteCompanyInfo}/>
                                })

                            }
                        </div>
                        <hr/>
                    </div>


                    <div className="pt-5">
                        <h2>Contato</h2>
                        <small>São as forma do cliente entrar me contato com sua empresa</small>
                        <div className="pt-4">
                            <div className="form-group pt-2">
                                <label htmlFor="companyPhoneNumber">Telefone</label>
                                <input type="tel" className="form-control" id="companyPhoneNumber" placeholder="Digite o numero de telefone da sua empresa" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.companyPhoneNumber ? siteValue.companyPhoneNumber : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="companyEmail">Email</label>
                                <input type="tel" className="form-control" id="companyEmail" placeholder="Digite o email da sua empresa" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.companyEmail ? siteValue.companyEmail : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="companyAddress">Endereço</label>
                                <input type="text" className="form-control" id="companyAddress" placeholder="Digite o endereço da sua empresa" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.companyAddress ? siteValue.companyAddress : ''}/>
                            </div> 
                        </div>
                        <hr/>
                    </div>


                    <div className="pt-5">
                        <h2>Redes sociais</h2>
                        <small>Informe os links das suas redes sociais para aumentar seu alcance</small>
                        <div className="pt-4">
                            <div className="form-group">
                                <label htmlFor="instagramLink">Link do Instagram</label>
                                <input type="url" className="form-control pt-2" id="instagramLink" placeholder="Digite o link da sua empresa no Instagram" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.instagramLink ? siteValue.instagramLink : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="facebookLink">Link do Facebook</label>
                                <input type="url" className="form-control" id="facebookLink" placeholder="Digite o link da sua empresa no Facebook" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.facebookLink ? siteValue.facebookLink : ''}/>
                            </div>
                            <div className="form-group pt-2">
                                <label htmlFor="twitterLink">Link do X (Twitter)</label>
                                <input type="url" className="form-control" id="twitterLink" placeholder="Digite o link da sua empresa no X (Twitter)" onChange={(e) => setSiteValueOnChange(e)} value={siteValue && siteValue.twitterLink ? siteValue.twitterLink : ''}/>
                            </div>
                        </div>
                        <hr/>
                    </div>

                    <div className="text-end"> 
                        <DialogBox 
                        positiveAction={saveSiteValues} 
                        classValues="btn btn-success font-weight-bold" 
                        buttonTitle="Salvar"
                        title="Deseja continuar?"
                        description="Se todas as informações do seu site estiverem preenchidas corretamente, clique em 'Sim'. Caso contrário, clique em 'Não' para continuar editando."
                        /> 
                    </div>
                    <button type="button" className="btn btn-danger font-weight-bold" onClick={(e) => console.log(siteValue)}>Teste</button>
                </div>
            </form>
        </div>
        
        <Footer />
    </>
    );
}

export default SiteGenerator;