import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Drinks() {
  return (
    <div>
      <Navigation />
      <main className="pt-20">
        {/* Header Section with Background Image */}
        <section 
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/drinking_background.png)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content */}
          <div className="container-max text-center relative z-10">
            <h1 className="section-title text-white">BEVERAGE MENU</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="section-subtitle text-white font-semibold">Perfect pairings for your meal</p>
          </div>
        </section>

        {/* Menu Content */}
        <div 
          className="py-16 relative"
          style={{
            backgroundImage: 'url(/images/all_background.png)',
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container-max relative z-10 py-16">
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* Drink Menu 1 */}
              <div className="flex justify-center">
                <img
                  src="/images/drink_menu1.jpg"
                  alt="Drink Menu 1"
                  className="w-full max-w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                />
              </div>

              {/* Drink Menu 2 */}
              <div className="flex justify-center">
                <img
                  src="/images/drink_menu2.jpg"
                  alt="Drink Menu 2"
                  className="w-full max-w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
