import React from "react";
import "../css/Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter className="text-center footer">
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h3 className="text">Popüler Aramalar</h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/search?branch=all&query=all&price=all&rating=all&order=newest&page=1"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Bosanma Avukati
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search?branch=all&query=all&price=all&rating=all&order=newest&page=1"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Icra Avukati
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search?branch=all&query=all&price=all&rating=all&order=newest&page=1"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Ceza Avukati
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search?branch=all&query=all&price=all&rating=all&order=newest&page=1"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Vergi Avukati
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search?branch=all&query=all&price=all&rating=all&order=newest&page=1"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Sigorta Avukati
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="3"
              md="6"
              className="mb-4 mb-md-0"
              style={{ textDecoration: "none" }}
            >
              <h3 className="text">Müvekkiller Icin</h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="/search?branch=all&query=all&price=all&rating=all&order=newest&page=1"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Avukatlar
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Sikca Sorulan Sorular
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Veri Guvenligi
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Müvekkil Uyelik Sozlesmesi
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Müvekkil Aydinlatma Metni
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h3 className="text">Avukatlar Icin</h3>

              <ul
                className="list-unstyled mb-0"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    One Cikan Ozellikler
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Fiyatlar
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Veri Guvenligi
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Avukat Uyelik Sozlesmesi
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Avukat Aydinlatma Metni
                  </Link>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h3 className="text">Hakkimizda</h3>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Biz Kimiz?
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Iletisim
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className="text-white opacity-50"
                    style={{ textDecoration: "none" }}
                  >
                    Cerezlere iliskin Aydinlatma Metni
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>

        <section className="mb-10 opacity-50">
          <p>
            <br></br>
            www.avukatimol.com- Avukat bul ve randevu al
          </p>
        </section>

        <section className="mb-10 opacity-50">
          <p>
            Is bu sayfada yer alan yorummlar, ilgili avukatin dogrudan veya
            dolayli emri, talebi ve/veya ricasi olmaksizin, ilgili müvekkil
            tarafindan bagimsiz olarak yazilmaktadir. Bu web sitesinin temel
            amaci hukuk alaninda kamuoyunun daha iyi bilgilendirilmesini
            saglamaktir. avukatimol.com bir basvru hizmeti degildir ve herhangi
            bir Hukuk Hizmeti Saglayicisini tavsiye etmemektedir.
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3 opacity-50"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 JuniusTech Teknoloji A.S. Tüm haklari saklidir.
      </div>
    </MDBFooter>
  );
}
