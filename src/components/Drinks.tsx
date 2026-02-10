export default function Drinks() {
  const drinks = [
    {
      id: 1,
      name: 'Japanese Beer',
      description: 'Selection of premium Japanese beers',
      price: '$6.99',
    },
    {
      id: 2,
      name: 'Sake',
      description: 'Traditional Japanese rice wine',
      price: '$7.99',
    },
    {
      id: 3,
      name: 'Yuzu Lemonade',
      description: 'Refreshing house-made yuzu citrus drink',
      price: '$4.99',
    },
    {
      id: 4,
      name: 'Matcha Latte',
      description: 'Creamy green tea latte with organic matcha',
      price: '$5.99',
    },
  ]

  return (
    <section id="drinks" className="py-16 md:py-24 bg-gray-50">
      <div className="container-max">
        <h2 className="section-title">DRINKS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {drinks.map((drink) => (
            <div
              key={drink.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary">{drink.name}</h3>
                <span className="text-secondary font-semibold">{drink.price}</span>
              </div>
              <p className="text-gray-600">{drink.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
