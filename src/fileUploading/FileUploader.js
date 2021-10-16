import axios from 'axios'
import React, { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const FileUploader = () => {

    const [singleFile, setsingleFile] = useState('')
    const [singleFileProgress, setsingleFileProgress] = useState('')
    const [multiFile, setmultiFile] = useState([])

    const singleFileChange = (e) => {

        setsingleFile(e.target.files[0])
    }
    
    const multiFileChange = (e) => {

        setmultiFile(e.target.files)
    }

    const singleFileOption = {
        
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000))
            setsingleFileProgress(percentage)


        }
    }

    const uploadSingleFile = () => {

        callApi(singleFile,singleFileOption)


    }
    const uploadMultiFile = () => {

        console.warn(multiFile)


    }
    const callApi = async (singleFile,option) => {

        const formData = new FormData();
        formData.append("file", singleFile)
        formData.append("name", "abcd")

        const res = await axios.post("http://localhost:8080/upload", formData,option)
        console.log(res.data)


    }

    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Choose File</label>
                    <input type="file" className="form-control" onChange={(e) => { singleFileChange(e) }}></input>
                </div>
                <div className="row">
                    <div className="col-10">
                        <button className="btn btn-success" onClick={uploadSingleFile}>UPLOAD</button>
                    </div>
                </div>

            </div>

            <div className="col-6">
                <h1>MULLTIPULE</h1>
                <div className="form-group">
                    <label>Choose File</label>
                    <input type="file" className="form-control" onChange={(e) => { multiFileChange(e) }} multiple></input>
                </div>
                <div className="row">
                    <div className="col-10">
                        <button className="btn btn-success" onClick={uploadMultiFile}>UPLOAD</button>
                    </div>
                </div>

            </div>
            <div className="col-1">
                <CircularProgressbar

                    value={singleFileProgress}
                    text={`${singleFileProgress}%`}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',

                        // Text size
                        textSize: '16px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: `rgba(62, 152, 199, ${singleFileProgress / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>

        </div>
    )
}
