/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hPh1mfhD3jf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [countries, setCountries] = useState([
    { name: "China", population: 1439323776, color: "#e74c3c" },
    { name: "India", population: 1380004385, color: "#2980b9" },
    { name: "United States", population: 331002651, color: "#f1c40f" },
    { name: "Indonesia", population: 273523615, color: "#8e44ad" },
    { name: "Pakistan", population: 220892340, color: "#16a085" },
    { name: "Brazil", population: 211049527, color: "#2ecc71" },
    { name: "Nigeria", population: 200963599, color: "#d35400" },
    { name: "Bangladesh", population: 164689383, color: "#7f8c8d" },
    { name: "Russia", population: 145934462, color: "#c0392b" },
    { name: "Mexico", population: 126014024, color: "#9b59b6" },
  ])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const handleBallClick = (country) => {
    setSelectedCountry(country)
  }
  const handleCloseDetails = () => {
    setSelectedCountry(null)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-muted">
      <div className="relative w-full h-full">
        {countries.map((country, index) => (
          <div
            key={index}
            className={`absolute rounded-full transition-all duration-500 cursor-pointer ${
              selectedCountry === country ? "z-10 scale-150" : "scale-[0.5 + (country.population / 1000000000)]"
            }`}
            style={{
              width: `${(country.population / 1000000000) * 100}px`,
              height: `${(country.population / 1000000000) * 100}px`,
              backgroundColor: country.color,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            onClick={() => handleBallClick(country)}
          />
        ))}
      </div>
      {selectedCountry && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-background/80">
          <div className="bg-card p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {selectedCountry.name} - {selectedCountry.population.toLocaleString()}
            </h2>
            <p className="text-muted-foreground mb-6">
              This country has a population of {selectedCountry.population.toLocaleString()}, which is approximately{" "}
              {((selectedCountry.population / 7900000000) * 100).toFixed(2)}% of the world's total population.
            </p>
            <Button variant="outline" onClick={handleCloseDetails}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
