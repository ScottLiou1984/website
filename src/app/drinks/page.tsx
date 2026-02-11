import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Drinks() {
  const drinks = [
    {
      id: 1,
      category: 'Japanese Beer',
      items: [
        { name: 'Asahi', description: 'Crisp and refreshing Japanese lager', price: '$5.99' },
        { name: 'Sapporo', description: 'Smooth and balanced premium beer', price: '$5.99' },
        { name: 'Kirin', description: 'Clean and light Japanese beer', price: '$5.99' },
      ],
    },
    {
      id: 2,
      category: 'Sake',
      items: [
        { name: 'Junmai Sake', description: 'Classic dry sake', price: '$7.99' },
        { name: 'Nigori Sake', description: 'Creamy unfiltered sake', price: '$8.99' },
        { name: 'Daiginjo Sake', description: 'Premium refined sake', price: '$9.99' },
      ],
    },
    {
      id: 3,
      category: 'Non-Alcoholic',
      items: [
        { name: 'Yuzu Lemonade', description: 'Refreshing house-made citrus drink', price: '$4.99' },
        { name: 'Matcha Latte', description: 'Creamy green tea with organic matcha', price: '$5.99' },
        { name: 'Iced Ramune', description: 'Traditional Japanese marble bottle soda', price: '$4.99' },
        { name: 'Ginger Tea', description: 'Warm and soothing Japanese ginger tea', price: '$3.99' },
      ],
    },
    {
      id: 4,
      category: 'Soft Drinks',
      items: [
        { name: 'Japanese Lychee Soda', description: 'Sweet and floral flavored soda', price: '$4.99' },
        { name: 'Mango Juice', description: 'Fresh tropical mango juice', price: '$3.99' },
        { name: 'Green Tea', description: 'Classic refreshing Japanese green tea', price: '$2.99' },
      ],
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
        <div className="container-max py-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {drinks.map((category) => (
              <div key={category.id}>
                <h2 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-secondary">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-primary">{item.name}</h3>
                        <span className="text-secondary font-bold">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Drink Pairings Info */}
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">SAKE & BEER PAIRINGS</h2>
            <p className="text-gray-700 mb-4">
              Our expertly curated selection of Japanese beverages complements our menu perfectly. 
              Ask our staff for personalized pairing recommendations with your meal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Sake Pairings</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Junmai with rich ramen broths</li>
                  <li>• Nigori with lighter, citrus-based dishes</li>
                  <li>• Daiginjo with delicate sushi</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Beer Pairings</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Crisp lagers with spicy dishes</li>
                  <li>• Light beers with fresh appetizers</li>
                  <li>• Seasonal selections available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Enjoy Our Beverages</h2>
            <p className="mb-6">Visit us to discover your new favorite drink.</p>
            <a href="/locations" className="btn-secondary">
              FIND A LOCATION
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
