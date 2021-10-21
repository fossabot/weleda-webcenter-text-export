import Dropzone from 'react-dropzone';

function FileDrop({ onDrop }: any) {
    return(
        <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps()} className="bg-gray-100 w-full h-96 m-0 mb-2.5 text-center flex flex-col justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <input {...getInputProps()} />
                        <p>Click or drag the XML file to this area to upload.</p>
                    </div>
                </section>
            )}
        </Dropzone>
    );
}

export default FileDrop;
