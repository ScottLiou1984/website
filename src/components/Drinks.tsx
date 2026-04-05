export default function Drinks() {
  return (
    <section id="drinks" className="py-16 md:py-24 bg-gray-50">
      <div className="container-max">
        <h2 className="section-title">DRINKS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Drink Menu 1 */}
          <div className="flex justify-center">
            <img
              src="/images/drink_menu1.jpg"
              alt="Drink Menu 1"
              className="w-full max-w-md rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>

          {/* Drink Menu 2 */}
          <div className="flex justify-center">
            <img
              src="/images/drink_menu2.jpg"
              alt="Drink Menu 2"
              className="w-full max-w-md rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
