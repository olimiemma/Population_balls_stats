/**
 * v0 by Vercel.
 * @see https://v0.dev/t/KdryTasdmVM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  const countries = [
    { name: "United States", population: 331002651, color: "#FF6B6B" },
    { name: "China", population: 1439323776, color: "#FFC93C" },
    { name: "India", population: 1380004385, color: "#6BCB77" },
    { name: "Indonesia", population: 273523615, color: "#4D96FF" },
    { name: "Pakistan", population: 220892340, color: "#9B59B6" },
    { name: "Brazil", population: 211049527, color: "#F39C12" },
    { name: "Nigeria", population: 200963599, color: "#E74C3C" },
    { name: "Bangladesh", population: 164689383, color: "#2980B9" },
    { name: "Russia", population: 145934462, color: "#8E44AD" },
    { name: "Mexico", population: 126014024, color: "#16A085" },
  ]
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="grid grid-cols-5 gap-4 w-full max-w-6xl">
        {countries.map((country, index) => (
          <div
            key={index}
            className={`w-full aspect-square rounded-full bg-[${country.color}] transition-all duration-500 hover:scale-110 hover:shadow-lg`}
            style={{
              width: `${(country.population / 1000000) * 2}px`,
              height: `${(country.population / 1000000) * 2}px`,
            }}
          >
            <div className="flex items-center justify-center h-full text-card-foreground font-bold text-lg">
              {country.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
