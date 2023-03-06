import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoPreview from '@/assets/images/Upload-video-preview.jpg';
import publishLogo from '@/assets/icons/publish.svg';
import './Upload.scss';

function UploadForm() {
    const navigate = useNavigate();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const message = `Your video ${e.target.title.value} has been uploaded to BrainFlix.`;
        alert(message);
        navigate('/');
    };

    return (
        <div className="upload__form-container">
            <form onSubmit={formSubmitHandler} className="upload__form">
                <div className="upload__form-content">
                    <div className="upload__img">
                        <label htmlFor="upload">video thumbnail</label>
                        <img
                            id="upload"
                            className="upload__video-thumbnail"
                            src={videoPreview}
                            alt="video-thumbnail"
                        />
                    </div>

                    <div className="upload__fields">
                        <div className="upload__field">
                            <label htmlFor="title">title your video</label>
                            <input
                                id="title"
                                placeholder="Add a title to your video"
                                required
                            />
                        </div>

                        <div className="upload__field">
                            <label htmlFor="description">
                                add a video description
                            </label>
                            <textarea
                                id="description"
                                name="upload"
                                placeholder="Add description to your video"
                                required
                                rows="5"
                            />
                        </div>
                    </div>
                </div>

                <div className="upload__btn-container">
                    <button type="submit" className="upload__btn">
                        <img
                            className="upload__btn-logo"
                            src={publishLogo}
                            alt="upload-logo"
                        />
                        <span className="upload__btn-text">publish</span>
                    </button>
                    <button
                        type="reset"
                        className="upload__btn upload__btn--cancel"
                    >
                        cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UploadForm;
