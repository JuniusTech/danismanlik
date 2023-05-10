import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>    

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text'>Popüler Aramalar</h4>

              <ul className='list-unstyled mb-0' >
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }} >
                    Bosanma Avukati
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Icra Avukati
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Ceza Avukati
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Vergi Avukati
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Sigorta Avukati
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{ textDecoration: 'none' }}>
              <h4 className='text'>Müvekkiller Icin</h4>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Avukatlar
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Sikca Sorulan Sorular
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Veri Guvenligi
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Müvekkil Uyelik Sozlesmesi
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Müvekkil Aydinlatma Metni
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text'>Avukatlar Icin</h4>

              <ul className='list-unstyled mb-0' style={{ textDecoration: 'none' }}>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    One Cikan Ozellikler
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Fiyatlar
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Veri Guvenligi
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Avukat Uyelik Sozlesmesi
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Avukat Aydinlatma Metni
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h4 className='text'>Hakkimizda</h4>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Biz Kimiz?
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Iletisim
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white' style={{ textDecoration: 'none' }}>
                    Cerezlere iliskin Aydinlatma Metni
                  </a>
                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>

        <section className='mb-10'>
          <p><br></br>
            www.avukatimol.com- Avukat bul ve randevu al
          </p>
        </section>

        <section className='mb-10'>
          <p>
            Is bu sayfada yer alan yorummlar, ilgili avukatin dogrudan veya dolayli emri, talebi ve/veya ricasi olmaksizin, ilgili müvekkil tarafindan bagimsiz olarak yazilmaktadir. Bu web sitesinin temel amaci hukuk alaninda kamuoyunun daha iyi bilgilendirilmesini saglamaktir. avukatimol.com bir basvru hizmeti degildir ve herhangi bir Hukuk Hizmeti Saglayicisini tvsiye etmemektedir.
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 JuniusTech Teknoloji A.S. Tüm haklari saklidir.
        
      </div>
    </MDBFooter>
  );
}