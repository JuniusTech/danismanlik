import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../getError";

const FavouriteLawyers = () => {
  const [favoriteLawyers, setFavoriteLawyers] = useState([]);
  const { state } = useContext(Store);
  const { userInfo } = state;
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URI}/api/users/${userInfo?._id}`, {
        headers: { Authorization: `Bearer ${userInfo?.token}` },
      })
      .then((response) => {
        setFavoriteLawyers(response.data.favoriteLawyers);
        console.log("response.data.dates", response.data.favoriteLawyers);
      })
      .catch((error) => {
        toast.error(getError(error));
      });
  }, []);
  return (
    <>



      <div
        className="userDashboardRight2"
        style={{
          width: "660px",
          margin: "20px",
        }}
      >
        <p
          style={{
            top: "160px",
            left: "795px",
            width: "186px",
            height: "24px",
            fontStyle: "normal",
            fontWeight: " bold",
            fontSize: "20px",
            lineHeight: "24px",
            fontFamily: "SF Pro Text",
          }}
        >
          Favori Avukatlarım
        </p>
        {favoriteLawyers?.map((favoriteLawyer, index) =>
          <div key={favoriteLawyer._id}>



            <div
              className="userDashboardRight2Div"
              style={{
                display: "flex",
                position: "relative",
                height: "150px",
                marginTop: "20px",
              }}
            >
              <svg
                style={{ position: "absolute", right: "0px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22.308 20"
              >
                <path
                  id="Path_92"
                  data-name="Path 92"
                  d="M4537.877,2098.422a6.647,6.647,0,0,0-6.243-7.006,6.088,6.088,0,0,1-9.538-.2,6.636,6.636,0,0,0-6.524,6.734,7.3,7.3,0,0,0,.521,2.876c1.671,6.519,10.218,10.389,10.218,10.389a16.726,16.726,0,0,0,10.464-9.078A7.2,7.2,0,0,0,4537.877,2098.422Z"
                  transform="translate(-4515.571 -2091.21)"
                  fill="#cd541f"
                />
              </svg>
              <img
                src={favoriteLawyer.picture}
                alt=""
                width={"105px"}
                height={"100%"}
                style={{ marginRight: "5%" }}
              />
              <div>
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: " normal",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontFamily: "SF Pro Text",
                  }}
                >
                  {favoriteLawyer.name} {favoriteLawyer.surname}
                </p>

                <div
                  style={{
                    top: "272px",
                    left: "920px",
                    width: "100%",
                    height: "16px",
                  }}
                >
                  <p style={{ width: "100%" }}>{favoriteLawyer.branch} , {favoriteLawyer.address?.city} </p>
                  <p>15 Yıllık Deneyim</p>
                  <p style={{ width: "100%" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                    >
                      <path
                        id="Polygon_1"
                        data-name="Polygon 1"
                        d="M9.688,3.879a2,2,0,0,1,3.624,0l1.171,2.507a2,2,0,0,0,1.561,1.138l2.752.348a2,2,0,0,1,1.122,3.439l-2.038,1.923a2,2,0,0,0-.592,1.829l.523,2.748a2,2,0,0,1-2.934,2.124L12.469,18.6a2,2,0,0,0-1.938,0L8.123,19.934A2,2,0,0,1,5.19,17.811l.523-2.748a2,2,0,0,0-.592-1.829L3.082,11.311A2,2,0,0,1,4.2,7.872l2.752-.348A2,2,0,0,0,8.517,6.386Z"
                        fill="#a97900"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                    >
                      <path
                        id="Polygon_1"
                        data-name="Polygon 1"
                        d="M9.688,3.879a2,2,0,0,1,3.624,0l1.171,2.507a2,2,0,0,0,1.561,1.138l2.752.348a2,2,0,0,1,1.122,3.439l-2.038,1.923a2,2,0,0,0-.592,1.829l.523,2.748a2,2,0,0,1-2.934,2.124L12.469,18.6a2,2,0,0,0-1.938,0L8.123,19.934A2,2,0,0,1,5.19,17.811l.523-2.748a2,2,0,0,0-.592-1.829L3.082,11.311A2,2,0,0,1,4.2,7.872l2.752-.348A2,2,0,0,0,8.517,6.386Z"
                        fill="#a97900"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                    >
                      <path
                        id="Polygon_1"
                        data-name="Polygon 1"
                        d="M9.688,3.879a2,2,0,0,1,3.624,0l1.171,2.507a2,2,0,0,0,1.561,1.138l2.752.348a2,2,0,0,1,1.122,3.439l-2.038,1.923a2,2,0,0,0-.592,1.829l.523,2.748a2,2,0,0,1-2.934,2.124L12.469,18.6a2,2,0,0,0-1.938,0L8.123,19.934A2,2,0,0,1,5.19,17.811l.523-2.748a2,2,0,0,0-.592-1.829L3.082,11.311A2,2,0,0,1,4.2,7.872l2.752-.348A2,2,0,0,0,8.517,6.386Z"
                        fill="#a97900"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                    >
                      <path
                        id="Polygon_1"
                        data-name="Polygon 1"
                        d="M9.688,3.879a2,2,0,0,1,3.624,0l1.171,2.507a2,2,0,0,0,1.561,1.138l2.752.348a2,2,0,0,1,1.122,3.439l-2.038,1.923a2,2,0,0,0-.592,1.829l.523,2.748a2,2,0,0,1-2.934,2.124L12.469,18.6a2,2,0,0,0-1.938,0L8.123,19.934A2,2,0,0,1,5.19,17.811l.523-2.748a2,2,0,0,0-.592-1.829L3.082,11.311A2,2,0,0,1,4.2,7.872l2.752-.348A2,2,0,0,0,8.517,6.386Z"
                        fill="#a97900"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      style={{ background: "white", color: "white" }}
                    >
                      <path
                        id="Polygon_1"
                        data-name="Polygon 1"
                        d="M9.688,3.879a2,2,0,0,1,3.624,0l1.171,2.507a2,2,0,0,0,1.561,1.138l2.752.348a2,2,0,0,1,1.122,3.439l-2.038,1.923a2,2,0,0,0-.592,1.829l.523,2.748a2,2,0,0,1-2.934,2.124L12.469,18.6a2,2,0,0,0-1.938,0L8.123,19.934A2,2,0,0,1,5.19,17.811l.523-2.748a2,2,0,0,0-.592-1.829L3.082,11.311A2,2,0,0,1,4.2,7.872l2.752-.348A2,2,0,0,0,8.517,6.386Z"
                      />
                    </svg>
                    12 yorum
                  </p>
                </div>
              </div>
            </div>
            <p style={{ marginTop: "3%", opacity: "0.75" }}>
              Adres: {favoriteLawyer.address?.description}
              {favoriteLawyer.address?.code} {favoriteLawyer.address?.town} / {favoriteLawyer.address?.city}, Türkiye
            </p>
            <div
              style={{
                display: "flex",
                gap: "6%",
                color: "#A97900",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ display: "flex", height: "15px" }}>
                <p>
                  <svg
                    style={{ marginRight: "9px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.587"
                    height="15.208"
                    viewBox="0 0 17.587 15.208"
                  >
                    <g
                      id="Group_211"
                      data-name="Group 211"
                      transform="translate(0 0)"
                    >
                      <g
                        id="Group_159"
                        data-name="Group 159"
                        transform="translate(0 0)"
                      >
                        <g id="Group_158" data-name="Group 158">
                          <path
                            id="Path_119"
                            data-name="Path 119"
                            d="M149.88,134.222c-10.082,0-8.7,6.126-8.7,6.126h4.6c0-3.09,2.919-3.025,4.1-3.025s4.1-.065,4.1,3.025h4.6S159.962,134.222,149.88,134.222Z"
                            transform="translate(-141.087 -134.222)"
                            fill="#a97900"
                          />
                          <rect
                            id="Rectangle_97"
                            data-name="Rectangle 97"
                            width="4.753"
                            height="0.951"
                            transform="translate(0 6.602)"
                            fill="#a97900"
                          />
                          <rect
                            id="Rectangle_98"
                            data-name="Rectangle 98"
                            width="4.753"
                            height="0.951"
                            transform="translate(12.834 6.602)"
                            fill="#a97900"
                          />
                        </g>
                        <path
                          id="Path_120"
                          data-name="Path 120"
                          d="M158.926,171.8a8.51,8.51,0,0,0-17.011,0Z"
                          transform="translate(-141.698 -156.588)"
                          fill="#a97900"
                        />
                        <path
                          id="Path_121"
                          data-name="Path 121"
                          d="M170.484,155.355c0,2.642-1.524,4.784-3.4,4.784s-3.4-2.142-3.4-4.784,0-4.784,3.4-4.784S170.484,152.713,170.484,155.355Z"
                          transform="translate(-158.287 -146.685)"
                          fill="#a97900"
                        />
                        <path
                          id="Path_122"
                          data-name="Path 122"
                          d="M172.912,173.585a2.3,2.3,0,1,1-2.3-2.3A2.3,2.3,0,0,1,172.912,173.585Z"
                          transform="translate(-161.815 -162.474)"
                          fill="#fff"
                        />
                      </g>
                    </g>
                  </svg>
                  {favoriteLawyer.phone}
                </p>
              </div>
              <div
                style={{
                  borderLeft: "1px solid #A97900",
                  borderRight: "1px solid #A97900",
                  padding: "0 25px",
                }}
              >
                <p>
                  <svg
                    style={{ marginRight: "9px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.167"
                    height="19.237"
                    viewBox="0 0 19.167 19.237"
                  >
                    <g
                      id="Group_212"
                      data-name="Group 212"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_174"
                        data-name="Path 174"
                        d="M143.238,372.915a6.36,6.36,0,0,1,8.739-7.351,8.17,8.17,0,1,0-13.383,8.143l-.059,3.167,2.776-1.534a8.129,8.129,0,0,0,3.511.448A6.331,6.331,0,0,1,143.238,372.915Z"
                        transform="translate(-135.909 -359.48)"
                        fill="#a97900"
                      />
                      <g
                        id="Group_170"
                        data-name="Group 170"
                        transform="translate(7.841 6.337)"
                      >
                        <path
                          id="Path_175"
                          data-name="Path 175"
                          d="M180.058,390.447a5.662,5.662,0,1,1-6.858-4.133A5.662,5.662,0,0,1,180.058,390.447Z"
                          transform="translate(-168.899 -386.146)"
                          fill="#a97900"
                        />
                        <path
                          id="Path_176"
                          data-name="Path 176"
                          d="M194.655,432.593l.7-2.441-2.466.612,1.762,1.83.7-2.441-2.466.612Z"
                          transform="translate(-187.19 -419.693)"
                          fill="#a97900"
                        />
                      </g>
                    </g>
                  </svg>
                  Mesaj Gönder
                </p>
              </div>

              <div>
                <p>
                  <svg
                    style={{ marginRight: "9px" }}
                    id="Group_323"
                    data-name="Group 323"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.002"
                    height="18.168"
                    viewBox="0 0 19.002 18.168"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_152"
                          data-name="Rectangle 152"
                          width="19.002"
                          height="18.168"
                          transform="translate(0 0)"
                          fill="#a97900"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_323-2"
                      data-name="Group 323"
                      transform="translate(0 0)"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_381"
                        data-name="Path 381"
                        d="M75.527,73.868c.278.249.531.476.785.7.553.49,1.1.982,1.662,1.466.156.135.2.251.041.414s-.293.328-.431.5-.246.159-.4.024c-.737-.653-1.48-1.3-2.22-1.949l-.244-.212c-.041.083-.079.147-.106.215-.254.637-.5,1.276-.761,1.91a1,1,0,0,1-.187.226c-.072-.067-.168-.12-.212-.2q-1.959-3.648-3.9-7.3a.881.881,0,0,1-.042-.287,1.03,1.03,0,0,1,.273.026q3.868,1.475,7.732,2.962a1.009,1.009,0,0,1,.233.183,1.023,1.023,0,0,1-.2.213c-.657.37-1.319.731-2.015,1.114"
                        transform="translate(-59.112 -58.993)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_382"
                        data-name="Path 382"
                        d="M59.228,32.562V29.514l3.711-.574a13.192,13.192,0,0,1,.6,3.622Z"
                        transform="translate(-50.368 -24.611)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_383"
                        data-name="Path 383"
                        d="M24.381,59.113h4.3v3.054l-3.7.572a12.849,12.849,0,0,1-.594-3.626"
                        transform="translate(-20.734 -50.271)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_384"
                        data-name="Path 384"
                        d="M25.013,28.961l3.708.575v3.039H24.43a12.789,12.789,0,0,1,.583-3.614"
                        transform="translate(-20.776 -24.629)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_385"
                        data-name="Path 385"
                        d="M.123,26.15A8.163,8.163,0,0,1,1.9,21.405l1.6.774c-.142.651-.311,1.3-.422,1.968s-.16,1.322-.239,2Z"
                        transform="translate(-0.103 -18.203)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_386"
                        data-name="Path 386"
                        d="M91.091,21.369a8.366,8.366,0,0,1,1.791,4.755H90.114a14.907,14.907,0,0,0-.663-3.958l1.64-.8"
                        transform="translate(-76.071 -18.173)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_387"
                        data-name="Path 387"
                        d="M3.431,63.1,1.793,63.9A8.417,8.417,0,0,1,0,59.147H2.766A14.978,14.978,0,0,0,3.431,63.1"
                        transform="translate(0 -50.3)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_388"
                        data-name="Path 388"
                        d="M59.257,0c1.812.483,2.655,1.872,3.391,3.421a13.05,13.05,0,0,1-3.391.53Z"
                        transform="translate(-50.393 -0.003)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_389"
                        data-name="Path 389"
                        d="M30.465,3.424C31.2,1.872,32.042.483,33.86,0V3.949a13.068,13.068,0,0,1-3.395-.525"
                        transform="translate(-25.908 0)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_390"
                        data-name="Path 390"
                        d="M33.858,89.814c-1.811-.485-2.657-1.871-3.394-3.423a13.078,13.078,0,0,1,3.394-.534Z"
                        transform="translate(-25.907 -73.014)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_391"
                        data-name="Path 391"
                        d="M59.234,85.687c.62.066,1.217.144,1.818.19a.86.86,0,0,1,.788.557c.355.741.383.733-.1,1.4a4.235,4.235,0,0,1-2.238,1.75c-.083.024-.168.04-.271.064Z"
                        transform="translate(-50.374 -72.87)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_392"
                        data-name="Path 392"
                        d="M59.245,62.249V59.14H63.57l-.186,1.936c-.347-.13-.654-.245-.961-.362-.55-.21-1.1-.419-1.648-.635a.474.474,0,0,0-.579.093.461.461,0,0,0-.019.584c.293.538.577,1.081.88,1.65l-1.813-.157"
                        transform="translate(-50.383 -50.294)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_393"
                        data-name="Path 393"
                        d="M92.693,59.128H95.42a8.227,8.227,0,0,1-.768,3.1c-.718-.274-1.415-.538-2.107-.811a.211.211,0,0,1-.1-.17c.076-.7.162-1.393.25-2.123"
                        transform="translate(-78.614 -50.283)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_394"
                        data-name="Path 394"
                        d="M18.719,4.111,17.174,6.623l-1.279-.6a8.252,8.252,0,0,1,2.824-1.915"
                        transform="translate(-13.517 -3.496)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_395"
                        data-name="Path 395"
                        d="M15.885,91.769l1.356-.637a9.565,9.565,0,0,0,1.552,2.558,7.97,7.97,0,0,1-2.908-1.921"
                        transform="translate(-13.509 -77.5)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_396"
                        data-name="Path 396"
                        d="M77.09,3.9a8.355,8.355,0,0,1,2.9,1.942l-1.325.629c-.248-.468-.461-.92-.72-1.343s-.558-.806-.855-1.228"
                        transform="translate(-65.559 -3.32)"
                        fill="#a97900"
                      />
                      <path
                        id="Path_397"
                        data-name="Path 397"
                        d="M77.511,101.384l.292.547-1.131.547.839-1.094"
                        transform="translate(-65.203 -86.219)"
                        fill="#a97900"
                      />
                    </g>
                  </svg>
                  Websitesine Git
                </p>
              </div>
            </div>
            <hr style={{ background: "#A97900", height: "0.6px" }} />
          </div>)}
      </div>

    </>
  );
};

export default FavouriteLawyers;
