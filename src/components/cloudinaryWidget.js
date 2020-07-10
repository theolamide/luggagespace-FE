import React from "react";

const ProfileUpload = () => {

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "dn9dmytls",
        uploadPreset: "LuggageSpaceProfileImages"
    },
        (error, result) => {
            if (result.event === "success") {
                const responseData = result.info
                console.log(responseData)
            } else {
                console.log(error)
            }
        }
    );

    const showWidget = () => {
        widget.open()
    };

    return (
        <div>
            <button onClick={showWidget}>
                Choose Profile Picture
            </button>
        </div>
    )
}

export default ProfileUpload;

//Cloudinary succes response structure:
// { id: "uw-file3", batchId: "uw-batch2", asset_id: "6ff3256372568aa856219d302e0ad17e", public_id: "ProfileImages/whiprk8chhczf7yok40r", version: 1593720693, … }
// access_mode: "public"
// asset_id: "6ff3256372568aa856219d302e0ad17e"
// batchId: "uw-batch2"
// bytes: 336994
// created_at: "2020-07-02T20:11:33Z"
// etag: "1db6770dd6e4792e8d169407d1050c49"
// format: "jpg"
// height: 1333
// id: "uw-file3"
// original_filename: "DSC06606-Edit"
// path: "v1593720693/ProfileImages/whiprk8chhczf7yok40r.jpg"
// placeholder: false
// public_id: "ProfileImages/whiprk8chhczf7yok40r"
// resource_type: "image"
// secure_url: "https://res.cloudinary.com/dn9dmytls/image/upload/v1593720693/ProfileImages/whiprk8chhczf7yok40r.jpg"
// signature: "083713cb344ee46a34329e7a24f9071ebc2b7101"
// tags: []
// thumbnail_url: "https://res.cloudinary.com/dn9dmytls/image/upload/c_limit,h_60,w_90/v1593720693/ProfileImages/whiprk8chhczf7yok40r.jpg"
// type: "upload"
// url: "http://res.cloudinary.com/dn9dmytls/image/upload/v1593720693/ProfileImages/whiprk8chhczf7yok40r.jpg"
// version: 1593720693
// version_id: "1503e7ce0dedfd26cf417f8795673168"
// width: 2000