import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import image from "../assets/bg.jpg";
import avatar from "../assets/avatar.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { getError } from "../getError";
import { Store } from "../Store";

const SearchDate = ({ lawyer }) => {
  const [moreHour, setMoreHour] = useState(false);

  const [hours, setHours] = useState(
    [...Array(5).keys()].map((i) => `${i + 9}:00`)
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedMonthtext, setSelectedMonthtext] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [dates, setDates] = useState([]);
  const [lawyerHours, setLawyerHours] = useState({});

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URI}/lawyers`,
          {
            params: {
              lawyerId: lawyer._id,
            },
          }
        );
        setDates(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDates();
  }, [lawyer]);

  const handleButtonClick = (hour, index) => {
    const selectedDate = new Date(dateRange[0]); // dateRange'den seçilen tarihi alıyoruz
    selectedDate.setDate(dateRange[0].getDate() + index); // index değeriyle seçilen günü hesaplıyoruz

    const dayOfMonth = selectedDate.getDate();
    const monthIndex = selectedDate.getMonth();
    const month = monthIndex + 1;
    const monthText = selectedDate.toLocaleString("default", {
      month: "long",
    });
    const year = selectedDate.getFullYear();

    setSelectedHour(hour);
    setSelectedDay(dayOfMonth);
    setSelectedMonth(month);
    setSelectedMonthtext(monthText);
    setSelectedYear(year);
    setModalOpen(true);

    // console.log(dayOfMonth, month, hour);
    // console.log(selectedDay + "." + selectedMonth + "." + selectedYear);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleMoreHour = (lawyerId) => {
    setMoreHour((prevStates) => ({
      ...prevStates,
      [lawyerId]: !prevStates[lawyerId],
    }));
    if (moreHour[lawyerId]) {
      setLawyerHours((prevStates) => ({
        ...prevStates,
        [lawyerId]: hours.slice(0, 6),
      }));
    } else {
      setLawyerHours((prevStates) => ({
        ...prevStates,
        [lawyerId]: [...Array(10).keys()].map((i) => `${i + 9}:00`),
      }));
    }
  };

  const toggleHours = (showMore) => {
    if (showMore) {
      setHours([...Array(10).keys()].map((i) => `${i + 9}:00`));
    } else {
      setHours([...Array(5).keys()].map((i) => `${i + 9}:00`));
    }
  };

  const today = new Date();
  const firstDay = new Date(today);
  firstDay.setDate(today.getDate());
  const lastDay = new Date(today);
  lastDay.setDate(firstDay.getDate() + 3);

  const [dateRange, setDateRange] = useState([firstDay, lastDay]);

  const datesDate = [0, 1, 2, 3].map((day, index) => {
    const currentDate = new Date(dateRange[0]);
    currentDate.setDate(dateRange[0].getDate() + index);
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1
      }.${currentDate.getFullYear()}`;
  });
  // console.log(datesDate);
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [loading, setLoading] = useState(false);
  const [day, setDay] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (
    dayOfMonth,
    selectedHour,
    description,
    jwtToken
  ) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URI}/api/dates/${userInfo._id}/${lawyer._id}`,
        {
          day: selectedDay + "." + selectedMonth + "." + selectedYear,
          hour: selectedHour,
          description: "randevu",
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      // console.log(data);
      setDates([...dates, data]);
      setLoading(false);
      toast.success("Randevunuz oluşturuldu.");
    } catch (error) {
      toast.error(getError(error));
      setLoading(false);
    }
  };

  const handlePrevWeek = (lawyerId) => {
    const firstDay = new Date(dateRange[0]);
    firstDay.setDate(firstDay.getDate() - 4);

    const today = new Date();
    if (firstDay < today + 1) {
      firstDay = firstDay.setDate(today.getDate());
    }
    const lastDay = new Date(dateRange[0]);
    lastDay.setDate(lastDay.getDate() - 1);
    if (lastDay < today) {
      lastDay = new Date(today.getTime() - 1);
    }
    setDateRange([firstDay, lastDay]);
  };

  const handleNextWeek = (lawyerId) => {
    const firstDay = new Date(dateRange[1]);
    firstDay.setDate(firstDay.getDate() + 1);
    const lastDay = new Date(firstDay);
    lastDay.setDate(lastDay.getDate() + 3);
    setDateRange([firstDay, lastDay]);
  };
  function isAvailable(lawyers, day, hour) {
    return lawyers.dates?.some(
      (date) => date.day === day && date.hour === hour
    );
  }

  return (
    <>
      <div className="search-card-lawyer-rightbox">
        <div className="justify-content-center p-2">
          <Table borderless="true">
            <thead>
              <tr className="tarih">
                <td>
                  <button
                    id={lawyer._id}
                    className="rounded-5 mt-3 search-caret"
                    onClick={() => handlePrevWeek(lawyer._id)}
                    disabled={new Date(dateRange[0]) < new Date()}
                  >
                    <i className="fa-solid fa-caret-left fa-sm mx-2"></i>
                  </button>
                </td>
                {datesDate.map((day, index) => {
                  const currentDate = new Date(dateRange[0]);
                  currentDate.setDate(dateRange[0].getDate() + index);
                  const dayOfMonth = currentDate.getDate();
                  const month = currentDate.toLocaleString("default", {
                    month: "short",
                  });
                  const dayOfWeek = currentDate.toLocaleString("default", {
                    weekday: "short",
                  });
                  let label = "";
                  if (
                    dayOfMonth === today.getDate() &&
                    month ===
                    today.toLocaleString("default", {
                      month: "short",
                    })
                  ) {
                    label = "Bugün";
                  } else if (
                    dayOfMonth === today.getDate() + 1 &&
                    month ===
                    today.toLocaleString("default", {
                      month: "short",
                    })
                  ) {
                    label = "Yarın";
                  } else {
                    label = dayOfWeek;
                  }

                  return (
                    <th key={index} className="text-center">
                      {label} <br />
                      {dayOfMonth} {month}
                    </th>
                  );
                })}
                <td>
                  <button
                    id={lawyer._id}
                    className="rounded-5 mt-3 search-caret"
                    onClick={() => handleNextWeek(lawyer._id)}
                  >
                    <i className="fa-solid fa-caret-right fa-sm mx-2"></i>
                  </button>
                </td>
              </tr>
            </thead>
            <tbody>
              {hours.map((toggleHours) => (
                <tr>
                  <td></td>
                  {datesDate.map((day, index) => (
                    <td>
                      <button
                        key={index}
                        className={
                          isAvailable(lawyer, day, toggleHours)
                            ? "search-hoursbutton selected inactive-button rounded-2"
                            : "search-hoursbutton rounded-2"
                        }
                        size="sm"
                        onClick={() => handleButtonClick(toggleHours, index)}
                        disabled={isAvailable(lawyer, day, toggleHours)}
                      >
                        {toggleHours}
                      </button>
                    </td>
                  ))}
                </tr>
              ))}

              {/* Randevu Detay Modal başlıyor */}

              {isModalOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    width: "30%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "100",
                    backgroundColor: "white",
                    padding: "2rem",
                    boxShadow: "0px 0px 30px #0000004D",
                    borderRadius: "25px",
                  }}
                >
                  <div
                    className="randevuDetayModal"
                    style={{
                      border: "1px solid #a97900",
                      borderRadius: "10px",
                    }}
                  >
                    <h2
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid #a97900",
                      }}
                    >
                      Randevu Özeti
                    </h2>
                    <p
                      style={{
                        borderBottom: "1px solid #a97900",
                        margin: "0 20px",
                        textAlign: "center",
                      }}
                    >
                      Seçilen gün: {selectedDay} {selectedMonthtext}{" "}
                      {selectedYear}
                    </p>
                    <p
                      style={{
                        borderBottom: "1px solid #a97900",
                        margin: "0 20px",
                        textAlign: "center",
                      }}
                    >
                      Seçilen saat: {selectedHour}
                    </p>
                    <p
                      style={{
                        borderBottom: "1px solid #a97900",
                        margin: "0 20px",
                        textAlign: "center",
                      }}
                    >
                      Online görüşme - 30 dakika
                    </p>
                    <div
                      className="randevuDetayDiv"
                      style={{ display: "flex", margin: "0 20px" }}
                    >
                      <img
                        src={lawyer.isTick ? image : avatar}
                        alt=""
                        width={"25%"}
                        height={"35%"}
                        style={{
                          marginRight: "13px",
                        }}
                      />
                      <div className="randevuDetayDiv2">
                        <p>
                          {lawyer.name} {lawyer.surname}
                        </p>
                        <p>{lawyer.branch}</p>
                        <p>Adress</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="randevuDetayCheckButons"
                    style={{ display: "block", marginTop: "5%" }}
                  >
                    <label
                      style={{
                        font: "normal normal normal 12px/14px SF Pro Text",
                      }}
                    >
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      Verdiğim bilgilerin doğruluğundan eminim randevumu
                      onaylamak istiyorum.
                    </label>{" "}
                    <br />
                    <label
                      style={{
                        font: "normal normal normal 12px/14px SF Pro Text",
                      }}
                    >
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span style={{ color: "#A97900" }}>
                        Aydınlatma Metni
                      </span>{" "}
                      'ni okudum ve kabul ediyorum.
                    </label>
                    <br />
                    <label
                      style={{
                        font: "normal normal normal 12px/14px SF Pro Text",
                      }}
                    >
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      <span style={{ color: "#A97900" }}>
                        {" "}
                        Kişisel Verilerin İşlenmesine İlişkin Açık Rıza Metni
                      </span>{" "}
                      'ni okudum ve kabul ediyorum.
                    </label>
                    <br />
                    <label
                      style={{
                        font: "normal normal normal 12px/14px SF Pro Text",
                      }}
                    >
                      <input type="checkbox" style={{ marginRight: "10px" }} />
                      Kampanya, reklam, promosyon, hediye kodları gibi ticari
                      elektronik iletilerin (SMS) tarafıma iletilmesine ve bu
                      kapsamda verilerimin işlenmesine onay veriyorum.
                    </label>
                  </div>
                  <div
                    className="randevuDetayButons"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8%",
                    }}
                  >
                    {" "}
                    <button
                      onClick={handleCloseModal}
                      style={{
                        padding: "6px 25px",
                        border: "1px solid #00242E",
                        borderRadius: "5px",
                        font: "normal normal bold 14px/16px SF Pro Text",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                      }}
                    >
                      İptal et
                    </button>
                    <button
                      style={{
                        padding: "6px 25px",
                        border: "1px solid #00242E",
                        borderRadius: "5px",
                        font: "normal normal bold 14px/16px SF Pro Text",
                        background: "#A97900 0% 0% no-repeat padding-box",
                        color: "#F5F5F5",
                      }}
                      onClick={() =>
                        submitHandler(day, selectedHour, description)
                      }
                    >
                      Randevu Oluştur
                    </button>
                  </div>
                </div>
              )}

              <tr className="much">
                <td
                  id={lawyer._id}
                  onClick={() => {
                    handleMoreHour(lawyer._id);
                    toggleHours(!moreHour[lawyer._id]);
                  }}
                  colSpan={6}
                >
                  {moreHour[lawyer._id]
                    ? "Daha Az Saat Göster"
                    : "Daha Fazla Saat Göster"}
                  {moreHour[lawyer._id] ? (
                    <i className="fa-solid fa-caret-up fa-xl mx-2"></i>
                  ) : (
                    <i className="fa-solid fa-caret-down fa-xl mx-2"></i>
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default SearchDate;
