export default function Hero() {
  return (
    <div className="bg-white text-black py-20 flex items-center">
      <div className="lg:w-1/2 text-left">
        <h1 className="text-5xl font-bold text-red-700">
          Search through countless of properties and rentals to match your needs
        </h1>
        <p className="mt-4 text-lg">
          Search, post rentals, and sell properties with ease
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-end items-center">
        <input
          type="text"
          placeholder="Search properties"
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Search rentals"
          className="border border-gray-300 px-4 py-2 mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>
    </div>
  );
}
