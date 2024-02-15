import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
          
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
           
     
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Enes Keskin"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <div>
           
           <Footer.LinkGroup col>
             <Footer.Link
               href='#'
               
               rel='noopener noreferrer'
             >
              Hakkında
             </Footer.Link>
             <Footer.Link
               href='#'
              
               rel='noopener noreferrer'
             >
               Uygulamayı İndir
             </Footer.Link>
           </Footer.LinkGroup>
           
         </div>
         <div>
           
           <Footer.LinkGroup col>
             <Footer.Link
               href='#'
               
               rel='noopener noreferrer'
             >
              Hizmet Şartları
             </Footer.Link>
             <Footer.Link
               href='#'
              
               rel='noopener noreferrer'
             >
               Gizlilik Politikası
             </Footer.Link>
           </Footer.LinkGroup>
           
         </div>
         <div>
     
           <Footer.LinkGroup col>
             <Footer.Link
               href='#'
              
               rel='noopener noreferrer'
             >
               Yardım Merkezi
             </Footer.Link>
             <Footer.Link href='#'>Çerez Politikası</Footer.Link>
           </Footer.LinkGroup>
      
         </div>
            <Footer.Icon href='#' icon={BsFacebook}/>
            <Footer.Icon href='#' icon={BsInstagram}/>
            <Footer.Icon href='#' icon={BsTwitter}/>
            <Footer.Icon href='#' icon={BsGithub}/>
            <Footer.Icon href='#' icon={BsDribbble}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}
