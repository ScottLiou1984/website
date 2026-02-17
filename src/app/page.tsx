import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section 
          className="py-20 md:py-28 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/home_background.png)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content */}
          <div className="container-max text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              MUGII
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-6">
              Modern Japanese Dining Experience
            </p>
            <p className="text-lg md:text-xl text-white font-semibold mb-8 max-w-3xl mx-auto leading-relaxed">
              MUGII is a modern Japanese restaurant in Canberra, serving refined ramen, rice dishes, and thoughtfully crafted small plates. Inspired by classic Japanese flavours, our cuisine focuses on balance, texture, and layered depth — presented in a relaxed, spacious contemporary setting.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/menu" className="btn-primary">
                EXPLORE MENU
              </a>
              <a href="/locations" className="btn-secondary">
                FIND US
              </a>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container-max">
            <div className="text-center mb-16">
              <h2 className="section-title">OUR VALUES</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Creativity Card */}
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary">
                {/* Top Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-secondary to-accent"></div>
                
                {/* Number Badge */}
                <div className="pt-8 px-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white mb-6">
                    <img src="/images/Creativity.png" alt="Creativity" className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Creativity</h3>
                  <div className="w-8 h-0.5 bg-secondary mb-6"></div>
                </div>
                
                {/* Content */}
                <div className="px-8 pb-8">
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                    <p>
                      At MUGII, creativity begins with respect for tradition. Our ramen, rice dishes, 
                      and small plates are inspired by classic Japanese flavours, yet reimagined with 
                      modern technique and unexpected detail.
                    </p>
                    <p>
                      We explore balance, texture, and layered depth — from house-made broths to refined 
                      garnishes — creating dishes that feel familiar, yet distinctly new.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sustainable Value Card */}
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary">
                {/* Top Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-secondary to-accent"></div>
                
                {/* Number Badge */}
                <div className="pt-8 px-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white mb-6">
                    <img src="/images/Sustainable Value.png" alt="Sustainable Value" className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Sustainable Value</h3>
                  <div className="w-8 h-0.5 bg-secondary mb-6"></div>
                </div>
                
                {/* Content */}
                <div className="px-8 pb-8">
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                    <p>
                      We believe exceptional dining should remain accessible.
                    </p>
                    <p>
                      MUGII is committed to sustainable pricing — delivering refined Japanese cuisine 
                      without unnecessary extravagance. Quality ingredients, thoughtful execution, and 
                      fair pricing allow our guests to return not just once, but often.
                    </p>
                    <p>
                      Great food should be repeatable, not reserved for rare occasions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flavour First Card */}
              <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-secondary">
                {/* Top Accent Bar */}
                <div className="h-1 bg-gradient-to-r from-secondary to-accent"></div>
                
                {/* Number Badge */}
                <div className="pt-8 px-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-white mb-6">
                    <img src="/images/Flavour First.png" alt="Flavour First" className="w-12 h-12 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Flavour First</h3>
                  <div className="w-8 h-0.5 bg-secondary mb-6"></div>
                </div>
                
                {/* Content */}
                <div className="px-8 pb-8">
                  <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                    <p>
                      Above all, we are driven by taste.
                    </p>
                    <p>
                      Every broth is simmered with intention. Every sauce is balanced with precision. 
                      Every plate is designed to leave a lasting impression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white text-center">
          <div className="container-max">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience MUGII?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Visit one of our locations or make a reservation today.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/locations" className="btn-primary">
                FIND A LOCATION
              </a>
              <a href="/booking" className="btn-secondary">
                MAKE A RESERVATION
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
