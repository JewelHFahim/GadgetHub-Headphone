"use client"
import { ThemeContext } from '@/Context/AppContext';
import Image from 'next/image';
import { useContext } from 'react';

const Gallery = () => {

  const { isDarkmode } = useContext(ThemeContext)

  return (
    <>

      <style jsx>{`
        img {
          max-width: 100%;
          height: auto;
          vertical-align: middle;
          display: inline-block;
        }
        
        .grid-wrapper>div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .grid-wrapper>div>div {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 5px;
        }
        
        .grid-wrapper {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          grid-auto-rows: 300px;
          grid-auto-flow: dense;
        }
        
        .grid-wrapper .wide {
          grid-column: span 2;
        }
        
        .grid-wrapper .tall {
          grid-row: span 2;
        }
        
        @media only screen and (max-width: 1024px) {
            .grid-wrapper {
                grid-gap: 5px;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                grid-auto-rows: 200px;
              }
            
              .grid-wrapper .wide {
                grid-column: span 1;
              }
            
              .grid-wrapper .tall {
                grid-row: span 1;
              }
        }

        @media only screen and (max-width: 600px) {
          .grid-wrapper {
            grid-gap: 5px;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            grid-auto-rows: 300px;
          }
        
          .grid-wrapper .wide {
            grid-column: span 1;
          }
        
          .grid-wrapper .tall {
            grid-row: span 1;
          }
        
        }
      `}</style>


      <div className={`px-[20px] md:px-[50px] lg:px-[280px] py-[30px] ${isDarkmode ? "bg-bgPrimary" : "bg-bgOffWhite"} `}>

        <div className="grid-wrapper">

          <div className='tall'>
            <div className=" w-[350px] h-[300px] relative">
              <Image src="/headphoneInAir.png" alt="" fill />
            </div>
          </div>


          <div className=''>
            <div className=" w-[350px] h-[300px] relative">
              <Image src="/gamingH1.png" alt="" fill />
            </div>
          </div>

          <div>
            <div className=" w-[350px] h-[300px] relative">
              <Image src="/Blog5.png" alt="" fill />
            </div>
          </div>

          <div className='wide'>
            <div className=" w-[350px] h-[300px] relative">
              <Image src="/slideImg3.jpg" alt="" fill />
            </div>
          </div>

          <div className='wide'>
            <div className=" w-[350px] h-[300px] relative">
              <Image src="/blogPost.png" alt="" fill />
            </div>
          </div>

          <div>
            <div className=" w-[350px] h-[300px] relative">
              <Image src="/Best1.png" alt="" fill />
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Gallery;
