'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Menu() {
  const [leftImages, setLeftImages] = useState<string[]>([])
  const [rightImages, setRightImages] = useState<string[]>([])

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

    // Shuffle and select random images
    const shuffled = [...menuBottomImages].sort(() => Math.random() - 0.5)
    
    // Randomly distribute images to left and right
    const left = shuffled.slice(0, 3)
    const right = shuffled.slice(3, 6)
    
    setLeftImages(left)
    setRightImages(right)
  }, [])

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header Section with Background Image */}
        <section 
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/menu_background.png)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content */}
          <div className="container-max text-center relative z-10">
            <h1 className="section-title text-white">OUR MENU</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="section-subtitle text-white font-semibold">Crafted with the finest ingredients</p>
          </div>
        </section>

        {/* Menu Content with Side Images */}
        <div className="py-16">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side Images */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {leftImages.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={img} 
                      alt={`Menu side image ${idx + 1}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Center Menu Image */}
              <div className="lg:col-span-8 flex justify-center">
                <div className="w-full">
                  <img 
                    src="/images/menu.jpg" 
                    alt="AFURI Restaurant Menu"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Right Side Images */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                {rightImages.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={img} 
                      alt={`Menu side image ${idx + 4}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-max">
            {/* CTA */}
            <div className="bg-primary text-white p-8 rounded-lg text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
              <p className="mb-6">Visit one of our locations or place your order online.</p>
              <a href="/locations" className="btn-secondary">
                VISIT US
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
