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
      <main className="pt-24 pb-12">
        <div className="container-max">
          <h1 className="section-title">OUR MENU</h1>
          <p className="section-subtitle">Crafted with the finest ingredients</p>

          {/* Ramen Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 pb-4 border-b-2 border-secondary">
              RAMEN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ramenItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                    <span className="text-secondary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sides Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 pb-4 border-b-2 border-secondary">
              SIDES & APPETIZERS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sideItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                    <span className="text-secondary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
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
