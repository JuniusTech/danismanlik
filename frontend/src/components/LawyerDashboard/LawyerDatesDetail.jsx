import React from 'react'

const LawyerDatesDetail = ({ date }) => {

    return (
        <div className='lawyerdashboard-datedetail'>
            <h1 style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", marginTop: "10px", marginBottom: "10px", paddingBottom: "10px", borderBottom: "1px solid #a97900" }}>Randevu Detayı</h1>
            <div style={{ width: "258px", marginLeft: "20px", marginRight: "25px" }}>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Müvekkil Adı: {date?.username}  </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Randevu Konusu: İcra Takibi </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Randevu Tarihi: {date?.day} </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Randevu Saati: {date?.hour} </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Randevu Yeri: Online </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Randevu Süresi: 30 dakika </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Referans No: {date?._id} </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "5px", fontSize: "14px", fontWeight: "bold" }}> Referans Durumu: <button
                    style={{
                        background: "#82B0FF 0% 0% no-repeat padding-box",
                        borderRadius: "9px",
                        font: "normal normal normal 14px/16px SF Pro Text",
                        padding: "2px 9px",
                        color: "#FFFFFF",
                    }}
                >
                    Planlandı
                </button> </p>
                <p style={{ borderBottom: "1px solid #a97900", paddingBottom: "10px", fontSize: "14px", fontWeight: "bold" }}> Müvekkil Notu: <br /> Merhabalar, Randevu günü bir toplantım olacak. Henüz saati belli değil. Duruma göre bu randevuyu iptal etmem gerekebilir. </p>
            </div>
            <p style={{ color: "#a97900", textAlign: "center", fontWeight: "bold", marginLeft: "5px", marginTop: "28px", backgroundColor: "transparent", border: "none" }} >
                Randevuyu İptal Et
            </p>
        </div>
    )
}

export default LawyerDatesDetail