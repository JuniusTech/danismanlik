import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from "react-bootstrap";

const SearchDate = ({ lawyer }) => {
    const [moreHour, setMoreHour] = useState(false);



    const [hours, setHours] = useState(
        [...Array(5).keys()].map((i) => `${i + 9}:00`)
    );
    const [lawyerHours, setLawyerHours] = useState({});

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
                [lawyerId]: [...Array(10).keys()].map(i => `${i + 9}:00`),
            }));
        }
    };

    const toggleHours = (showMore) => {
        if (showMore) {
            setHours([...Array(10).keys()].map(i => `${i + 9}:00`));
        } else {
            setHours([...Array(5).keys()].map(i => `${i + 9}:00`));
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
        currentDate.setDate(
            dateRange[0].getDate() + index
        )
        return `0${currentDate.getDate()}-0${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`
    })

    // const [days, setDays] = useState(datesDate)

    // useEffect(() => {
    //     setDays(datesDate)
    // }, [datesDate])

    // console.log(days)



    // for (let i = 0; i < 4; i++) {
    //     const date = new Date(today);
    //     date.setDate(today.getDate() + i);
    //     const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    //         date.getMonth() + 1
    //     )
    //         .toString()
    //         .padStart(2, "0")}-${date.getFullYear().toString()}`;
    //     console.log("formattedDate", formattedDate);
    //     days.push(formattedDate);
    // }



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
        return lawyers.dates?.some((date) => date.day === day && date.hour === hour);
    }
    console.log(lawyer)

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
                                    currentDate.setDate(
                                        dateRange[0].getDate() + index
                                    );
                                    const dayOfMonth = currentDate.getDate();
                                    const month = currentDate.toLocaleString(
                                        "default",
                                        {
                                            month: "short",
                                        }
                                    );
                                    const dayOfWeek = currentDate.toLocaleString(
                                        "default",
                                        {
                                            weekday: "short",
                                        }
                                    );
                                    let label = "";
                                    if (dayOfMonth === today.getDate() && month === today.toLocaleString("default",
                                        {
                                            month: "short",
                                        })) {
                                        label = "Bugün";
                                    } else if (dayOfMonth === today.getDate() + 1 && month === today.toLocaleString("default",
                                        {
                                            month: "short",
                                        })) {
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
                                <tr >
                                    <td></td>
                                    {datesDate.map((day, index) => (
                                        <td >
                                            <button
                                                key={index}
                                                className={isAvailable(lawyer, day, toggleHours) ? "search-hoursbutton selected rounded-2" : "search-hoursbutton rounded-2"}
                                                size="sm">
                                                {toggleHours}
                                            </button>

                                        </td>
                                    ))}
                                </tr>
                            ))}

                            <tr className="much">
                                <td
                                    id={lawyer._id}
                                    onClick={() => {
                                        handleMoreHour(lawyer._id);
                                        toggleHours(!moreHour[lawyer._id]);
                                    }}
                                    colSpan={6}
                                >
                                    {moreHour[lawyer._id] ? "Daha Az Saat Göster" : "Daha Fazla Saat Göster"}
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
    )
}

export default SearchDate