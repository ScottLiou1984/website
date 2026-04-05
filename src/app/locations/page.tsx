'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Locations() {
  const locations = [
    {
      id: 1,
      name: 'Downtown Branch',
      address: 'G10/27 Lonsdale St, Braddon ACT 2612',
      phone: '0406 048 412',
      hours: `Monday ~ Sunday
Dinner 5:30 PM - 9:00 PM

Thursday ~ Sunday
Lunch 12:00 PM - 2:00 PM`,
      description: 'Our flagship location in the heart of Braddon.',
      neighborhood: 'Braddon',
      parking: 'Street parking & public lots nearby',
    },
  ]

  return (
    <>
      <Navigation />
      <main className="pt-20 pb-20 min-h-screen">
        {/* Header Section with Background Image */}
        <section 
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/location_backgroumd.png)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content */}
          <div className="container-max text-center relative z-10">
            <h1 className="section-title text-white">OUR LOCATION</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="section-subtitle text-white font-semibold">Where great food and hospitality meet</p>
          </div>
        </section>

        {/* Content Section */}
        <div className="bg-gradient-to-b from-amber-50 to-orange-50">

          <div className="flex justify-center">
            {locations.map((location) => (
              <div key={location.id} className="w-full max-w-4xl">
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  {/* Header Banner */}
                  <div className="bg-gradient-to-r from-primary to-gray-800 py-8 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-pattern"></div>
                    <h2 className="text-3xl font-bold text-white relative z-10 text-center px-6">
                      {location.name}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="p-12">
                    {/* Description */}
                    <p className="text-center text-gray-600 text-lg mb-12 leading-relaxed italic">
                      {location.description}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      {/* Address Card */}
                      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-secondary transition-colors">
                        <h3 className="text-primary font-bold text-lg mb-3">ADDRESS</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {location.address}
                        </p>
                        <p className="text-xs text-gray-500">
                          {location.neighborhood}
                        </p>
                      </div>

                      {/* Phone Card */}
                      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-secondary transition-colors">
                        <h3 className="text-primary font-bold text-lg mb-3">PHONE</h3>
                        <p className="text-gray-700 text-lg font-semibold tracking-wide">
                          {location.phone}
                        </p>
                        <p className="text-xs text-gray-500 mt-3">
                          Available for reservations & inquiries
                        </p>
                      </div>

                      {/* Hours Card */}
                      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-secondary transition-colors">
                        <h3 className="text-primary font-bold text-lg mb-3">OPENING HOURS</h3>
                        <div className="text-gray-700 text-sm whitespace-pre-wrap">
                          {location.hours}
                        </div>
                      </div>

                      {/* Parking Card */}
                      <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-secondary transition-colors">
                        <h3 className="text-primary font-bold text-lg mb-3">PARKING</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {location.parking}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Welcome Message */}
                <div className="mt-12 text-center">
                  <p className="text-gray-600 text-lg">
                    We look forward to serving you. Walk-ins welcome!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
