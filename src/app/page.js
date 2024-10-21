import Image from 'next/image'
import logoRecruitable from '/public/img/logo.webp'
import headlineText from '/public/img/headline.webp'
import heroImg from '/public/img/canggu.webp'
import iconOne from '/public/img/icon_1.webp'
import iconTwo from '/public/img/icon_2.webp'
import appThumb from '/public/img/app.webp'
import appFitur from '/public/img/fitur.webp'
import iconYoutube from '/public/img/yt.webp'
import iconInstagram from '/public/img/ig.webp'
import iconTiktok from '/public/img/tiktok.webp'
import iconWeb from '/public/img/web.webp'

import { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
 })

 export const metadata = {
  title: 'RecruitABLE',
  openGraph: {
    title: 'Recruitable',
  },
}
 

export default function Home() {
  return (
    <>
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm p-5">
            <Image
              src={logoRecruitable}
              alt="Recruitable"
              width={300}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}                             
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <div>
                <Image
                src={headlineText}
                alt="Recruitable"
                width={500}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}              
  
              />
            </div>
            <p>Swipe, terhubung dan mulai karirmu di Industri Pariwisata!</p>
            <a href="https://play.google.com/store/apps/details?id=com.recruit_able.app.twa&pcampaignid=web_share" className='btn btn-lg btn-recruit'>Daftar Sekarang</a>
            <p className='lwrn_ios'>*iOS version Coming Soon</p>
          </div>
          <div className="col-12 col-md-6 pt-5">               
            <Image
                src={heroImg}
                alt="Recruitable"
                width={600}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
            />
          </div>
        </div> 
        <div className="row text-center lwrn_win">
          <div className="col-12">
            <h3 className="pb-2">RASAKAN MUDAHNYA<br/><span>CARI KERJA</span></h3>
            <p className="pb-5">Simak Laurence Benson memandu kamu step by step membuat profil di RecruitAble hanya dengan beberapa langkah!</p>
            {/* <h3>MENANGKAN PROGRAM<br/><span>PELATIHAN EKSKLUSIF</span><br/>BERSAMA LAURENCE BENSON</h3> */}
          </div>
          </div>       
      </div>
      <div className='container-fluid p-0 pb-5'>
      < iframe width="100%" height="350" src="https://www.youtube.com/embed/GqxhlYPwAIU?si=DpQll0ttZTLiMBm9"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      {/* <div className='container'>
        <div className="col-12 text-center lwrn_win2">
        Download aplikasi Recruit<strong>ABLE</strong> dan dapatkan kesempatan menjadi salah satu dari <span>5 orang beruntung</span> yang terpilih mengikuti 
        </div>
        <div className="col-12 text-center lwrn_benefit">
        <Image
                src={iconOne}
                alt="Recruitable"
                width={200}
                sizes="100vw"
                style={{
                  width: '30%',
                  height: 'auto',
                }}              
  
            />
          <h4 className='pt-4'>Pelatihan eksklusif dengan Laurence Benson</h4>      
        </div>
        <div className="col-12 text-center lwrn_benefit">
        <Image
                src={iconTwo}
                alt="Recruitable"
                width={200}
                sizes="100vw"
                style={{
                  width: '30%',
                  height: 'auto',
                }}              
  
            />
          <h4 className='pt-4'>Tiket pesawat gratis ke Bali</h4>      
        </div>
        <div className="col-12 text-center lwrn_win2 px-5 pt-0">
                Ini adalah kesempatan emas yang akan membawamu ke tempat-tempat terbaik di industri pariwisata di Bali!
        </div>
      </div> */}
    </div>
    <div id='lwrn_info'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center pt-5'>
          <Image
                src={appThumb}
                alt="Recruitable"
                width={600}
                sizes="100vw"
                style={{
                  width: '60%',
                  height: 'auto',
                }}
            />
          </div>
          <div className='col-12 text-center'>
                <h3>REKRUTMEN KHUSUS INDUSTRI PARIWISATA</h3>
                <div className='lwrn_hr'>&nbsp;</div>
                <p>Rekrutmen di industri pariwisata menjadi lebih mudah dengan menghubungkan talenta dan pemberi kerja secara efektif, memastikan kesesuaian yang tepat dalam industri yang dinamis ini</p>

          </div>
        </div>
      </div>
    </div>
    <div id='lwrn_fitur'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center pt-5'>
          <Image
                src={appFitur}
                alt="Recruitable"
                width={600}
                sizes="100vw"
                style={{
                  width: '60%',
                  height: 'auto',
                }}
            />
          </div>
          <div className='col-12 text-center'>
                <h3>FITUR UTAMA</h3>
                <div className='lwrn_hr'>&nbsp;</div>
                <h4>Swipe untuk matching</h4>
                <p>Sistem matching yang cepat dan intuitif yang menghubungkan pemberi kerja dengan kandidat yang sesuai secara instan</p>
                <h4>Ngobrol langsung di aplikasi</h4>
                <p>Ngobrol langsung dengan pencari kerja dan pemberi kerja secara instan</p>
                <h4>Wawancara Video</h4>
                <p>Wawancara video tatap muka yang bisa dijadwalkan dari mana saja di seluruh Indonesia</p>                
          </div>
        </div>
      </div>
    </div> 
    <div id='lwrn_closing' className='text-center'>
      <h3>MULAI KARIRMU HARI INI!</h3>
      <a href="https://play.google.com/store/apps/details?id=com.recruit_able.app.twa&pcampaignid=web_share" className='btn btn-lg btn-recruit'>Daftar Sekarang</a>
      <p className='lwrn_ios'>*iOS version Coming Soon</p>
      </div>
      <div id="lwrn_footer" className='text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <a href="https://www.instagram.com/recruit.able" target="_blank">
                  <Image
                    src={iconInstagram}
                    alt="Recruitable"
                    width={100}
                    sizes="100vw"
                    style={{
                      width: '10%',
                      height: 'auto',
                    }}
                  />                  
                  </a>
                  <a href="https://www.tiktok.com/@recruit_able" target="_blank">
                  <Image
                    src={iconTiktok}
                    alt="Recruitable"
                    width={100}
                    sizes="100vw"
                    style={{
                      width: '10%',
                      height: 'auto',
                    }}
                  />                  
                  </a>
                  <a href="https://www.youtube.com/@RecruitABLEapp" target="_blank">
                  <Image
                    src={iconYoutube}
                    alt="Recruitable"
                    width={100}
                    sizes="100vw"
                    style={{
                      width: '10%',
                      height: 'auto',
                    }}
                  />                  
                  </a>
                  <a href="https://www.recruit-able.com" target="_blank">
                  <Image
                    src={iconWeb}
                    alt="Recruitable"
                    width={100}
                    sizes="100vw"
                    style={{
                      width: '10%',
                      height: 'auto',
                    }}
                  />                  
                  </a>                                                      
            </div>
            <div className='lwrn_copy'>Copyright &copy; RecruitABLE 2024</div>
          </div>
        </div>
      </div>
    </>
  );
}