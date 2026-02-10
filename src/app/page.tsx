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
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to MUGII, where tradition meets innovation in every plate. 
              Since our founding, we have been dedicated to bringing the finest 
              Japanese culinary arts to your table.
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

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max max-w-3xl">
            <h2 className="section-title">OUR STORY</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                MUGII was born from a passion for authentic Japanese culinary traditions combined 
                with modern innovation. Our founders believed that exceptional Japanese cuisine 
                should be accessible to everyone, crafted with integrity and creative vision.
              </p>
              
              <p>
                What started as a small vision has blossomed into a culinary destination. 
                Each dish at MUGII tells a story of meticulous ingredient selection, traditional 
                preparation techniques, and an unwavering commitment to excellence.
              </p>
              
              <p>
                From our hand-pulled ramen crafted with broths simmered for hours, to our 
                sushi prepared with the finest sustainably-sourced fish, every element reflects 
                our dedication to quality. We source ingredients directly from trusted suppliers 
                who share our commitment to freshness and sustainability.
              </p>
              
              <p>
                Our team comprises skilled artisans who have studied traditional Japanese cooking 
                methods while embracing contemporary culinary techniques. This fusion creates 
                a unique dining experience that honors tradition while celebrating innovation.
              </p>
              
              <p>
                At MUGII, we believe dining is more than just eating. It&apos;s about connection, 
                community, and the joy of sharing a memorable meal with others. Whether you&apos;re 
                a long-time enthusiast of Japanese cuisine or discovering it for the first time, 
                we invite you to experience the MUGII difference.
              </p>
              
              <p>
                Our mission is simple: to provide an exceptional dining experience that leaves 
                you feeling nourished, inspired, and eager to return. Join us on this culinary journey.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-max">
            <h2 className="section-title">OUR VALUES</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Quality</h3>
                <p className="text-gray-600">
                  We source only the finest ingredients and employ traditional techniques 
                  to ensure every dish meets our exacting standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to sustainable practices, from ethically sourced fish 
                  to environmentally conscious operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Community</h3>
                <p className="text-gray-600">
                  We believe in giving back to our communities through partnerships, 
                  support, and creating meaningful local connections.
                </p>
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
