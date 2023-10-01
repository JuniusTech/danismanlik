import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../../getError";
import LoadingBox from "../LoadingBox";
import { Store } from "../../Store";

const LawyerAbout = () => {
  const [about, setAbout] = useState("");
  const [languages, setLanguages] = useState(["", ""]);
  const [education, setEducation] = useState([
    { school: "", start: "", finish: "" },
  ]);
  const [experience, setExperience] = useState([
    { office: "", start: "", finish: "" },
  ]);

  const [loading, setLoading] = useState(false);

  const { state } = useContext(Store);
  const { lawyerInfo } = state;

  const handleLanguageChange = (e, index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index] = e.target.value;
    setLanguages(updatedLanguages);
  };

  useEffect(() => {
    fetchLawyerData();
  }, []);

  const fetchLawyerData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}`,
        {
          headers: { Authorization: `Bearer ${lawyerInfo.token}` },
        }
      );
      const lawyerDataFromAPI = response.data;
      setAbout(lawyerDataFromAPI.about);
      setLanguages(lawyerDataFromAPI.languages);
      setEducation([...lawyerDataFromAPI.education]);
      setExperience([...lawyerDataFromAPI.experience]);
    } catch (error) {
      toast.error(getError(error));
    }
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const addEducation = () => {
    const newEducation = [...education, { school: "", start: "", finish: "" }];
    setEducation(newEducation);
  };

  const removeEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const addExperience = () => {
    const newExperience = [...experience, { office: "", start: "", finish: "" }];
    setExperience(newExperience);
  };

  const removeExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const bioData = {
        about: about,
        languages: languages,
        education: education,
        experience: experience,
      };
      await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/lawyers/${lawyerInfo._id}/add-bio`,
        bioData,
        {
          headers: { Authorization: `Bearer ${lawyerInfo.token}` },
        }
      );
      setLoading(false);
      toast.success("Bilgileriniz Güncellendi.");
    } catch (error) {
      toast.error(getError(error));
      setLoading(false);
    }
  };

  return (
    <div style={{ width: "650px" }}>
      <div className="lawyerdashboardregisterBaslık">
        <h1>Hakkımda</h1>
      </div>
      <form
        className="lawyerpersonaldetailFormDiv"
        style={{ width: "650px" }}
        onSubmit={submitHandler}
      >
        <div className="row" id="registerRowDiv">
          <div className="d-flex row" style={{ width: "588px" }}>
            <label style={{ fontSize: "20px", marginTop: "10px" }} htmlFor="">
              Biografi
            </label>

            <textarea
              style={{
                width: "588px",
                height: "85px",
                fontSize: "17px",
                borderRadius: "5px",
                opacity: "1",
                resize: "none",
              }}
              className="mx-2 pt-2 "
              name="comment"
              defaultValue={about}
              placeholder={about || "Özgeçmişinizi buraya girin..."}
              id=""
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div
            className="d-flex row"
            style={{ width: "588px", marginTop: "20px" }}
          >
            <label style={{ fontSize: "20px" }} htmlFor="">
              Eğitimler
            </label>
            <div className="d-flex">
              <label style={{ width: "50%" }} htmlFor="">
                Okul
              </label>
              <label style={{ width: "25%" }} htmlFor="">
                Başlangıç
              </label>
              <label
                style={{ width: "25%", paddingLeft: "10px", marginRight: "8px" }}
                htmlFor=""
              >
                Bitiş
              </label>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="d-flex mb-2">
                <input
                  type="text"
                  className="lawyerdashboard-registerFormControl"
                  value={edu.school}
                  onChange={(e) =>
                    updateEducation(index, "school", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={edu.start}
                  style={{ marginLeft: "15px", width: "25%" }}
                  onChange={(e) =>
                    updateEducation(index, "start", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={edu.finish}
                  style={{ marginLeft: "15px", width: "25%" }}
                  onChange={(e) =>
                    updateEducation(index, "finish", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  onClick={() => removeEducation(index)}
                >
                  Sil
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={addEducation}
            >
              Eğitim Ekle
            </button>
          </div>
          <div
            className="d-flex row"
            style={{ width: "588px", marginTop: "20px" }}
          >
            <label style={{ fontSize: "20px" }} htmlFor="">
              Deneyimler
            </label>
            {experience.map((exp, index) => (
              <div key={index} className="d-flex mb-2">
                <input
                  type="text"
                  className="lawyerdashboard-registerFormControl"
                  value={exp.office}
                  onChange={(e) =>
                    updateExperience(index, "office", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={exp.start}
                  style={{ marginLeft: "15px", width: "25%" }}
                  onChange={(e) =>
                    updateExperience(index, "start", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={exp.finish}
                  style={{ marginLeft: "15px", width: "25%" }}
                  onChange={(e) =>
                    updateExperience(index, "finish", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="btn btn-danger ml-2"
                  onClick={() => removeExperience(index)}
                >
                  Sil
                </button>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={addExperience}
            >
              Deneyim Ekle
            </button>
          </div>
          <div
            className="d-flex row"
            style={{ width: "588px", marginTop: "20px" }}
          >
            <label style={{ fontSize: "20px" }} htmlFor="">
              Bildiğim Diller
            </label>
            <input
              type="text"
              className="lawyerdashboard-registerFormControl"
              placeholder="Dil 1"
              value={languages[0]}
              onChange={(e) => handleLanguageChange(e, 0)}
            />
            <input
              type="text"
              className="lawyerdashboard-registerFormControl"
              style={{ marginTop: "10px" }}
              placeholder="Dil 2"
              value={languages[1]}
              onChange={(e) => handleLanguageChange(e, 1)}
            />
          </div>
        </div>
        <br />
        <br />
        <div className="lawyerdashboard-buttons">
          <button className="lawyerdashboard-button-vazgec">Vazgeç</button>
          <button className="lawyerdashboard-button-kaydet" type="submit">
            {loading ? (
              <>
                <LoadingBox />
              </>
            ) : (
              "Kaydet"
            )}
          </button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

export default LawyerAbout;
