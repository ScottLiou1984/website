import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Booking() {
  return (
    <div>
      <Navigation />
      <main className="pt-20 pb-12">
        {/* Header Section with Background Image */}
        <section 
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/booking_backround.png)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Content */}
          <div className="container-max text-center relative z-10">
            <h1 className="section-title text-white">MAKE A RESERVATION</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="section-subtitle text-white font-semibold">Join us for an unforgettable dining experience</p>
          </div>
        </section>

        {/* Booking Content */}
        <div 
          className="py-16 relative bg-fixed-desktop"
          style={{
            backgroundImage: 'url(/images/all_background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container-max relative z-10 max-w-4xl">
            {/* Intro Section */}
            <div className="text-center mb-16">
              <p className="text-lg text-white leading-relaxed mb-6 max-w-2xl mx-auto">
                Experience the art of Japanese ramen at MUGII. Whether you&apos;re celebrating a special occasion or simply enjoying a memorable meal, we&apos;re excited to welcome you.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              {/* Card - Party Size */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-primary font-bold text-lg mb-3">PARTY SIZE</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Reservations are available for groups of 4 or more
                    </p>
                    <p className="text-gray-500 text-xs">
                      For smaller groups, walk-ins are always welcome
                    </p>
                  </div>
                </div>
              </div>

              {/* Card - Walk-ins */}
              <div className="bg-gradient-to-r from-secondary to-yellow-600 text-primary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-4xl flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3">WALK-INS WELCOME</h3>
                    <p className="text-sm leading-relaxed">
                      No reservation needed! Walk-ins are always welcome based on availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-secondary max-w-2xl mx-auto w-full">
              <h3 className="text-primary font-bold text-xl mb-4">DIRECT BOOKING</h3>
              <p className="text-gray-700 mb-6">
                For immediate reservations or special requests, please contact us directly:
              </p>
              <div className="text-center">
                <p className="text-gray-600 mb-2">Downtown Branch</p>
                <p className="text-3xl font-bold text-secondary">0406 048 412</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
