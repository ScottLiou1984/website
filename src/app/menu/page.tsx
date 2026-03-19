'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [bgImage, setBgImage] = useState<string>('')

  useEffect(() => {
    const menuBottomImages = [
      '/images/menu_bottom1.jpg',
      '/images/menu_bottom2.jpg',
      '/images/menu_bottom3.jpg',
      '/images/menu_bottom4.jpg',
      '/images/menu_bottom5.jpg',
      '/images/menu_bottom6.jpg',
      '/images/menu_bottom7.jpg',
    ]

    const randomIdx = Math.floor(Math.random() * menuBottomImages.length)
    setBgImage(menuBottomImages[randomIdx])
  }, [])

  return (
    <>
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
          className="py-16 relative"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-amber-50 opacity-80"></div>
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
    </>
  )
}
