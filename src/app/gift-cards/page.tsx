import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function GiftCards() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-12" style={{ backgroundImage: 'url(/images/gift_background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
        <div className="container-max relative z-10">
          <h1 className="section-title text-white">GIFT CARDS</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Share the Gift of MUGII</h2>
              <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                MUGII gift cards are the perfect present for anyone who appreciates 
                exceptional Japanese cuisine. Give the gift of a memorable dining experience.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-white">Choose Your Amount</h3>
                    <div className="flex gap-3 mt-2">
                      <span className="bg-secondary text-primary font-bold px-4 py-2 rounded-lg text-sm">$50</span>
                      <span className="bg-secondary text-primary font-bold px-4 py-2 rounded-lg text-sm">$100</span>
                      <span className="bg-secondary text-primary font-bold px-4 py-2 rounded-lg text-sm">$150</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-white">1 Year Validity</h3>
                    <p className="text-gray-200">Valid for 12 months from date of purchase</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-white">Physical or Digital</h3>
                    <p className="text-gray-200">Send immediately via email or order physical card</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-secondary text-2xl font-bold">✓</div>
                  <div>
                    <h3 className="font-bold text-white">Easy to Use</h3>
                    <p className="text-gray-200">Simply present at any location or use online</p>
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
            <p className="text-primary mb-2 text-sm">Contact us or visit our location to purchase</p>
            <p className="text-2xl font-bold mb-6">0406 048 412</p>
            <a
              href="/locations"
              className="inline-block bg-primary text-white font-bold py-3 px-10 rounded-lg hover:bg-gray-800 transition-colors"
            >
              FIND US
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
