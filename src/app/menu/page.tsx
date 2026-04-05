'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Menu() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        <section 
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/menu_background.png)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          <div className="container-max text-center relative z-10">
            <h1 className="section-title text-white">OUR MENU</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="section-subtitle text-white font-semibold">Crafted with the finest ingredients</p>
          </div>
        </section>

        <div 
          className="py-16 relative bg-fixed-desktop"
          style={{
            backgroundImage: 'url(/images/all_background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container-max relative z-10">
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <img 
                  src="/images/menu.jpg" 
                  alt="MUGII Restaurant Menu"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
