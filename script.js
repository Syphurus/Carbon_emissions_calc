document.getElementById("calculate-btn").addEventListener("click", () => {
  // Get input values
  const carDistance =
    parseFloat(document.getElementById("car-distance").value) || 0;
  const electricityUsage =
    parseFloat(document.getElementById("electricity").value) || 0;
  const flightDistance =
    parseFloat(document.getElementById("flight-distance").value) || 0;

  // Emission factors (kg CO2 per unit)
  const CAR_EMISSION_FACTOR = 0.2; // kg CO2 per km
  const ELECTRICITY_EMISSION_FACTOR = 0.5; // kg CO2 per kWh
  const FLIGHT_EMISSION_FACTOR = 0.15; // kg CO2 per km

  // Calculate emissions
  const carEmissions = carDistance * CAR_EMISSION_FACTOR;
  const electricityEmissions = electricityUsage * ELECTRICITY_EMISSION_FACTOR;
  const flightEmissions = flightDistance * FLIGHT_EMISSION_FACTOR;

  // Total emissions
  const totalEmissions = (
    carEmissions +
    electricityEmissions +
    flightEmissions
  ).toFixed(2);

  // Update the result
  document.getElementById(
    "total-emissions"
  ).innerText = `${totalEmissions} kg CO₂`;
});
