import React from "react";
import "../css/NasilCalisir.css";

const NasilCalisiyor = () => {
  return (
    <div className="nasilCalisir">
      <h1>AvukatimOl, Nasil Calişiyor</h1>
      <div className="nasilCalisirMiddlePart">
        <div className="nasilCalisirContent">
          <h1>1</h1>
          <div className="NasilContent1">
            <section className="ucgen"></section>
            <h2>
              Avukat <br /> Bulun
            </h2>
            <br />
            <p>
              100.00'den fazla avukat arasından seçim yapın.Diğer insanların
              görüşlerini inceleyin.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className="nasilCalisirContent">
          <h1>2</h1>
          <div className="NasilContent2">
            <section className="ucgen"></section>
            <h2>
              Hemen <br /> Randevu <br /> Alın
            </h2>
            <p>
              Size uygun tarih ve saati seçin , bilgilerinizi girin ve
              onaylayın.Müsait olan avukatlar ile online görüşün.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              class="bi bi-calendar-check-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
            </svg>
          </div>
        </div>
        <div className="nasilCalisirContent">
          <h1>3</h1>
          <div className="nasilContent3">
            <section className="ucgen"></section>
            <h2>
              Randevu <br /> Oluşturmak <br /> Ücretsizdir
            </h2>
            <p>
              AvukatımOl'da randevu oluşturmak tamamen ücretsizdir.(Danışma
              ücretlerini öğrenmek için avukatınıza başvurun)
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              class="bi bi-currency-exchange"
              viewBox="0 0 16 16"
            >
              <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasilCalisiyor;
