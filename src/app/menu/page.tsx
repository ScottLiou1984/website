import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Menu() {
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

        {/* Menu Content */}
        <div className="container-max py-16">
          {/* Menu Image */}
          <div className="flex justify-center mb-12">
            <img 
              src="/images/menu.jpg" 
              alt="AFURI Restaurant Menu"
              className="max-w-4xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Order?</h2>
            <p className="mb-6">Visit one of our locations or place your order online.</p>
            <a href="/locations" className="btn-secondary">
              VISIT US
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
