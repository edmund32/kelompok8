// Simulated sensor data
const sensorData = {
  temperature: 25,
  humidity: 60,
  waterLevel: 70,
  soilMoisture: 40,
  lightLevel: 800 // Values in lux
};

// Update sensor data on the page
function updateSensorData() {
  document.getElementById('temperature').innerText = sensorData.temperature + '°C';
  document.getElementById('humidity').innerText = sensorData.humidity + '%';
  document.getElementById('waterLevel').innerText = sensorData.waterLevel + '%';
  document.getElementById('soilMoisture').innerText = sensorData.soilMoisture + '%';
  document.getElementById('lightLevel').innerText = sensorData.lightLevel + ' lux';
}

// Event listener for water plants button (simulate automatic watering)
document.getElementById('waterPlants').addEventListener('click', () => {
  // Simulate watering plants
  console.log('Watering plants...');
});



function confirmBack() {
  var confirmation = confirm("Apakah Anda yakin ingin memutuskan koneksi perangkat?");
  if (confirmation) {
      window.location.href = "pairing.html"; // Mengarahkan kembali ke halaman pairing.html jika dikonfirmasi
  }
}

// Initial setup
updateSensorData();
