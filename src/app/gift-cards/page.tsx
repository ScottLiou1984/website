import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function GiftCards() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header Section with Background Image */}
        <section 
          className="py-16 md:py-24 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: 'url(/images/gift_background.png)',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Content */}
          <div className="container-max text-center relative z-10">
            <h1 className="section-title text-white">GIFT CARDS</h1>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="section-subtitle text-gray-100">The perfect present for Japanese cuisine lovers</p>
          </div>
        </section>

        {/* Content Section */}
        <div className="bg-white py-16">
          <div className="container-max">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Share the Gift of MUGII</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                MUGII gift cards are the perfect present for anyone who appreciates 
                exceptional Japanese cuisine. Give the gift of a memorable dining experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-primary">Any Amount</h3>
                    <p className="text-gray-600">Choose from $25 to $500</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-primary">No Expiration</h3>
                    <p className="text-gray-600">Valid indefinitely at any location</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-primary">Physical or Digital</h3>
                    <p className="text-gray-600">Send immediately via email or order physical card</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-primary">Easy to Use</h3>
                    <p className="text-gray-600">Simply present at any location or use online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Gift Card Image */}
            <div className="flex justify-center items-center">
              <Image 
                src="/images/gift-card.jpg" 
                alt="MUGII Gift Card"
                width={400}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
          {/* CTA */}
          <div className="bg-secondary text-primary p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Give the Gift of MUGII?</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
