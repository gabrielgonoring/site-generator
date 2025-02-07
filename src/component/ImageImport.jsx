function ImageImport({componentId, title, imageSource, setImage}){

    function setImageInParent(event){
        setImage(event.target.id, URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="bannerImage">{title ? title : 'Imagem'}</label>
                <input type="file" className="form-control" id={componentId} accept="image/*" onChange={(e)=> setImageInParent(e)}/>
            </div>

            {
                imageSource &&
                <div className="form-group pt-2">
                    <img src={imageSource ? imageSource : null} style={{'height': '100px'}} className="img-thumbnail" alt="..." />
                </div>
            }
        </div>
    );
}

export default ImageImport;