

const TravelTipsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold font-Montserrat text-center mb-8">Travel Tips & Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example Travel Tips Cards */}
          <div className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold font-Montserrat mb-4">Packing Essentials</h3>
            <p className="text-gray-700 font-Montserrat">Learn what to pack for your Southeast Asia adventure to ensure you are prepared for every situation.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold font-Montserrat mb-4">Local Customs</h3>
            <p className="text-gray-700 font-Montserrat">Discover the cultural norms and etiquette of Southeast Asian countries to respect local traditions.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl  font-Montserrat font-semibold mb-4">Budget Travel Tips</h3>
            <p className="text-gray-700 font-Montserrat">Find out how to travel affordably in Southeast Asia without sacrificing experiences.</p>
          </div>
          <div className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-Montserrat  font-semibold mb-4">Suggested Itineraries</h3>
            <p className="text-gray-700 font-Montserrat">Explore sample itineraries to make the most of your time in Southeast Asia and see all the must-visit spots.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTipsSection;
