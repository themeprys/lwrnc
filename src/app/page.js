import Image from 'next/image'
import logoRecruitable from '/public/img/logo.webp'
import headlineText from '/public/img/headline.webp'
import heroImg from '/public/img/heroimg.webp'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
 })


export default function Home() {
  return (
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="col-sm p-5">
            <Image
              src={logoRecruitable}
              alt="Picture of the author"
              width={300} 
            />
          </div>
        </div>
        <div className="row">
          <div className="col p-5">
            <div>
                <Image
                src={headlineText}
                alt="Picture of the author"
                width={500}
              />
            </div>
            <p>Swipe, terhubung dan mulai karirmu di Industri Pariwisata!</p>
          </div>
          <div className="col">               
            <Image
                src={heroImg}
                alt="Picture of the author"
                width={600}
            />
          </div>
        </div> 
        <div className="row text-center lwrn_win">
          <div className="col-12">
            <h3>MENANGKAN PROGRAM<br/><span>PELATIHAN EKSKLUSIF</span><br/>BERSAMA LAWRENCE BENSON</h3>
          </div>
          <div className="col-12">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GqxhlYPwAIU?si=DpQll0ttZTLiMBm9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          {/* <div className="col-12">
          Text Lawrence 2
          </div> */}
          {/* <div className="col-12">
          <div className="row">
            <div className="col">Text 1</div>
            <div className="col">Text 2</div>            
          </div>
          <div className="col-12">
          Text Lawrence 3
          </div>
          </div>           */}
          </div>       
      </div>
    </div>
  );
}
