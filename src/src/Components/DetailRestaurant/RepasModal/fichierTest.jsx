<UploaderCustum
  action="//jsonplaceholder.typicode.com/posts/"
  draggable
  fileListVisible={false}
  listType="picture"
  onUpload={(file) => {
    setUploading(true);
    previewFile(file.blobFile, (value) => {
      setFileInfo(value);
    });
    setImg(file.blobFile);
  }}
  onSuccess={(response, file) => {
    setUploading(false);
  }}
  onError={() => {
    setUploading(false);
  }}
>
  <PreviewImage>
    {uploading && <Loader backdrop center />}

    {fileInfo ? (
      <img src={fileInfo} width="100%" height="100%" />
    ) : (
      <>
        {imgUrlup ? (
          <img
            src={`http://localhost:5000/okraeat/file/${imgUrlup}`}
            width="100%"
            height="100%"
            onChange={(e) => handleChange(e.target.value, "photo")}
          />
        ) : (
          <div
            className="icon-container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>
              <UploadIcon />
            </span>
          </div>
        )}
      </>
    )}
  </PreviewImage>
</UploaderCustum>;
