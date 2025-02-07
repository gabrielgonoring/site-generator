import React, { useState } from "react";
import ImageImport from "./ImageImport";


function Banner({formNumber, setBannerInArray, bannerValue, deleteBanner}) {

    function setValueInArray(e) {

        const newBannerValue = {...bannerValue, [e.target.id]: e.target.value};

        setBannerInArray(formNumber-1, newBannerValue);
    }

    function setImageInArray(fieldName, imageSource) {
    
        const newBannerValue = {...bannerValue, [fieldName]: imageSource};

        setBannerInArray(formNumber-1, newBannerValue);
    }

    function deleteBannerInfo(e){

        deleteBanner(e, formNumber-1);
    }

    return (
        <div className="pb-3">
            <div className="form-box p-3 bg-white border">
                <div className="row">
                    <div className="col-8">
                        <h4>Banner {formNumber}</h4>
                    </div>
                    <div className="col text-end">
                        <button className="btn btn-outline-danger"><i className="bi bi-trash" onClick={(e)=>deleteBannerInfo(e, formNumber-1)}></i></button>
                    </div>
                </div>
                <div className="form-group pt-2">
                    <label htmlFor="bannerTitle">Título do banner</label>
                    <input type="text" className="form-control" id="bannerTitle" placeholder="Digite o título do banner" onChange={(e)=> setValueInArray(e)} value={bannerValue && bannerValue.bannerTitle ? bannerValue.bannerTitle : ''}/>
                </div>
                <div className="form-group pt-2">
                    <label htmlFor="bannerDescription">Descrição do banner</label>
                    <input type="text" className="form-control" id="bannerDescription" placeholder="Digite a descrição do banner" onChange={(e)=> setValueInArray(e)} value={bannerValue && bannerValue.bannerDescription ? bannerValue.bannerDescription : ''}/>
                </div>
                <div className="form-group pt-2">
                    <ImageImport componentId = "bannerImage" title = "Imagem do banner" imageSource = {bannerValue.bannerImage} setImage =  {setImageInArray}/>
                </div>
            </div>
        </div>
    );
}

export default Banner;