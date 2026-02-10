export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Yuzu Shio Ramen',
      description: 'Light and refreshing citrus-based broth with tender noodles',
      price: '$14.99',
    },
    {
      id: 2,
      name: 'Tonkotsu Ramen',
      description: 'Rich and creamy pork bone broth with chashu pork',
      price: '$15.99',
    },
    {
      id: 3,
      name: 'Miso Ramen',
      description: 'Deep and complex miso-based broth with seasonal vegetables',
      price: '$14.99',
    },
    {
      id: 4,
      name: 'Vegan Ramen',
      description: 'Flavorful vegetable-based broth with tofu and vegetables',
      price: '$13.99',
    },
  ]

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container-max">
        <h2 className="section-title">RAMEN MENU</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="border-b-2 border-gray-200 pb-6 last:border-b-0"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                <span className="text-secondary font-semibold">{item.price}</span>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
