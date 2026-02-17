import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Menu() {
  const ramenItems = [
    {
      id: 1,
      name: 'Yuzu Shio Ramen',
      description: 'Light and refreshing citrus-based broth with tender noodles, soft-boiled egg, and fresh vegetables',
      price: '$14.99',
    },
    {
      id: 2,
      name: 'Tonkotsu Ramen',
      description: 'Rich and creamy pork bone broth with tender chashu pork, mushrooms, and aromatic oil',
      price: '$15.99',
    },
    {
      id: 3,
      name: 'Miso Ramen',
      description: 'Deep and complex miso-based broth with seasonal vegetables, bean sprouts, and topped with pork belly',
      price: '$14.99',
    },
    {
      id: 4,
      name: 'Vegan Ramen',
      description: 'Flavorful vegetable-based broth with tofu, assorted vegetables, and plant-based protein',
      price: '$13.99',
    },
    {
      id: 5,
      name: 'Spicy Miso Ramen',
      description: 'Bold and fiery miso broth with chili paste, grilled chicken, and fresh jalapeños',
      price: '$15.99',
    },
    {
      id: 6,
      name: 'Seafood Ramen',
      description: 'Delicate seafood broth with shrimp, scallops, squid, and seaweed',
      price: '$16.99',
    },
  ]

  const sideItems = [
    {
      id: 1,
      name: 'Gyoza (6 pieces)',
      description: 'Pan-fried dumplings with pork and vegetable filling',
      price: '$6.99',
    },
    {
      id: 2,
      name: 'Edamame',
      description: 'Steamed soybeans with sea salt',
      price: '$4.99',
    },
    {
      id: 3,
      name: 'Tempura Vegetables',
      description: 'Mixed vegetables in light tempura batter',
      price: '$7.99',
    },
    {
      id: 4,
      name: 'Sushi Assortment (8 pieces)',
      description: 'Chef\'s selection of fresh sushi',
      price: '$14.99',
    },
  ]

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
