import React, { useState } from "react";
import { UploadForm } from "../../data/constants";
import { storeFiles, storeImages } from "../../data/api";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

export default function Upload({ broker, account, provider, realEstate }) {
  const [uploadFile, setuploadFile] = useState("");
  const [fileName, setfileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [estateData, SetEstateData] = useState({
    id: "",
    tittle: "",
    address: "",
    price: "",
    residence: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    yearbuilt: "",
    description: "",
    wallet: "",
    image: "",
  });

  const [showModal, setShowModal] = useState({
    visiblity: false,
    closeBtn: false,
    text: "",
  });

  const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether");
  };

  function handleChange(event) {
    const { name, value } = event.target;
    SetEstateData((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
        wallet: account ? account : value,
      };
    });
  }

  function fileChange(event) {
    const url = URL.createObjectURL(event.target.files[0]);
    setPreviewUrl(url);
    setfileName(event.target.files[0].name);
    setuploadFile(event.target.files[0]);
  }

  async function upload(event) {
    event.preventDefault();
    const _totalSupply = await realEstate.totalSupply();
    const totalSupply = Number(_totalSupply.toString());

    setIsUploaded(true);

    estateData.id = totalSupply + 1;
    setShowModal({
      visiblity: true,
      text: "Uploading Image to IPFS plz wait....",
    });

    const UploadedImgCID = await storeImages(uploadFile, fileName);

    const uploadedImg = `https://w3s.link/ipfs/${UploadedImgCID}/${fileName}`;

    estateData.image = uploadedImg;

    setShowModal({
      visiblity: true,
      text: "Storing metadata to IPFS plz wait....",
    });

    const files = await storeFiles(estateData, estateData.tittle);
    console.log(`https://w3s.link/ipfs/${files}/${estateData.tittle}.json`);

    setShowModal({
      visiblity: false,
    });

    const metadata = `https://w3s.link/ipfs/${files}/${estateData.tittle}.json`;

    const acc = await provider.getSigner();

    try {
      setShowModal({
        visiblity: true,
        text: "Plz Mint the token of your listing property",
      });
      const transaction = await realEstate.connect(acc).mint(metadata);
      setShowModal({
        visiblity: true,
        text: "Minting Plz Wait....",
      });
      await transaction.wait();
      console.log("Uploaded to BlockChain");

      setShowModal({
        visiblity: true,
        text: "Successfully Minted Plz pay the listing Fees...",
      });

      const list = await broker
        .connect(acc)
        .listProperties(
          tokens(estateData.price),
          totalSupply + 1,
          realEstate.address,
          {
            value: tokens(0.01),
          }
        );

      setShowModal({
        visiblity: true,
        text: "Transaction in progress....",
      });
      await list.wait();
      console.log("Listed to Contract");
      setShowModal({
        visiblity: true,
        closeBtn: true,
        text: "Property Listed",
      });
    } catch {
      console.log(totalSupply + 1);
      console.log("Transaction Failed");
      setShowModal({
        visiblity: true,
        closeBtn: true,
        text: "Transaction Failed",
      });
    }
  }

  return (
    <div className="flex flex-col my-[150px] mx-auto gap-1">
      <Link className="text-primary cursor-pointer w-[90%] mx-auto" to="/Main">
        {"<-- Back"}
      </Link>
      <h1 className="text-primary glass-gradient px-1 py-2 w-[80%] mx-auto text-center mt-3 font-poppins">
        <span className="font-orbitron font-bold headTextgradient text-[17px]">
          Note:
        </span>{" "}
        it may take some time for your uploads to appear in the Marketplace.
        Please be patient after uploading.
      </h1>
      <form className="w-[90%] mx-auto pb-10" onSubmit={upload}>
        <label htmlFor="file" className=" mx-auto cursor-pointer">
          <div className="glass-gradient mx-auto mt-5 flex flex-col md:p-24 p-5 gap-5 cursor-pointer">
            <img
              src="/images/sidebar/Upload.svg"
              className="w-14 h-14 mx-auto"
              alt="upload"
            />
            <div className="flex flex-col mx-auto">
              <p className="text-primary font-poppins mx-auto">
                Drop Your File Here
              </p>
              <span className="text-primary font-poppins text-[10px] mx-auto">
                {fileName === "" ? "Or click to Browse" : `${fileName}`}
              </span>
              {!isUploaded ? (
                fileName === "" ? (
                  ""
                ) : (
                  <img src={previewUrl} alt="preview" />
                )
              ) : (
                <span className="text-primary font-poppins text-[15px] mx-auto">
                  Uploaded
                </span>
              )}
            </div>
          </div>
        </label>
        <input
          className="hidden"
          type="file"
          id="file"
          required
          onChange={(event) => fileChange(event)}
          disabled={!account}
        />
        <div className="glass-gradient p-10 mt-5">
          {!account && (
            <h1 className="text-primary font-poppins mx-auto text-center mb-5">
              You are in Read-Only Mode ⚠️ Connect To Your Wallet to upload
            </h1>
          )}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 ss:grid-cols-2 grid-cols-1 gap-5 ">
            {UploadForm.map((upload, index) => {
              return (
                <input
                  key={index}
                  name={upload.name}
                  type={upload.type}
                  placeholder={upload.placeholder}
                  value={estateData[`${upload.name}`]}
                  min={upload.min}
                  step={upload.step}
                  minLength={upload.minlength}
                  disabled={!account}
                  onChange={handleChange}
                  className="block py-3 px-5 bg-input text-primary rounded-md w-full"
                  required
                />
              );
            })}
          </div>

          <textarea
            name="description"
            onChange={handleChange}
            value={estateData.description}
            type="textarea"
            placeholder="Write a description"
            className="block py-3 px-5 bg-input rounded-md w-full my-5 text-primary"
            disabled={!account}
            required
          />
          <button
            type="submit"
            className="btn-gradient px-[20px] py-[10px] font-poppins text-primary"
            disabled={!account}
          >
            Submit
          </button>
        </div>
      </form>
      {showModal.visiblity && (
        <div className="glass-gradient p-5 flex flex-col gap-5 fixed font-orbitron text-primary left-[50%] translate-x-[-50%] top-[50%] z-50">
          <img
            src="/images/logo/loading.gif"
            alt="loading"
            className="w-20 h-20 mx-auto"
          />
          {showModal.closeBtn && (
            <img
              src="/images/navicons/x.png"
              alt="close"
              className="w-5 h-5 absolute right-2 top-2 cursor-pointer"
              onClick={() =>
                setShowModal({
                  visiblity: false,
                })
              }
            />
          )}
          {showModal.text}
        </div>
      )}
    </div>
  );
}
