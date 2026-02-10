import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Booking() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-max">
          <div className="mb-16">
            <h1 className="section-title">MAKE A RESERVATION</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="section-subtitle">Join us for an unforgettable dining experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
            {/* Left - Welcome Section */}
            <div>
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Experience the art of Japanese ramen at MUGII. Whether you&apos;re celebrating a special occasion or simply enjoying a memorable meal, we&apos;re excited to welcome you.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our dedicated team ensures every guest receives exceptional service in a warm and inviting atmosphere. Book your table today and discover why MUGII is the destination for authentic Japanese cuisine.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-white border-l-4 border-secondary p-8 rounded-lg shadow-sm">
                <h3 className="text-primary font-bold text-lg mb-3">📞 DIRECT BOOKING</h3>
                <p className="text-gray-700 mb-4 text-sm">
                  For immediate reservations or special requests, please contact us directly.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-primary font-bold text-sm mb-1">Downtown Branch</p>
                    <p className="text-lg text-secondary font-bold">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Info Cards */}
            <div className="space-y-6">
              {/* Card 1 - Hours */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">⏰</div>
                  <div className="flex-1">
                    <h3 className="text-primary font-bold text-lg mb-2">BOOKING HOURS</h3>
                    <p className="text-gray-700 text-sm">
                      Monday - Sunday<br/>
                      11:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs border-t pt-3">
                  We recommend booking at least 2-3 days in advance for optimal availability.
                </p>
              </div>

              {/* Card 2 - Party Size */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">👥</div>
                  <div className="flex-1">
                    <h3 className="text-primary font-bold text-lg mb-2">PARTY SIZE</h3>
                    <p className="text-gray-700 text-sm">
                      Accommodates 1-10 guests<br/>
                      Per reservation
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs border-t pt-3">
                  For larger groups (11+ guests), please contact us for special arrangements.
                </p>
              </div>

              {/* Card 3 - Cancellation */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">📋</div>
                  <div className="flex-1">
                    <h3 className="text-primary font-bold text-lg mb-2">CANCELLATION POLICY</h3>
                    <p className="text-gray-700 text-sm">
                      24 hours notice required<br/>
                      For best results
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs border-t pt-3">
                  Cancellations made less than 24 hours may affect our availability for other guests.
                </p>
              </div>

              {/* Walk-ins Banner */}
              <div className="bg-gradient-to-r from-secondary to-yellow-600 text-primary p-8 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">✨ WALK-INS WELCOME</h3>
                <p className="text-sm">
                  No reservation? No problem. Walk-ins are always welcome based on availability. Come as you are!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
