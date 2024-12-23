document.addEventListener('DOMContentLoaded', function () {
    const output = document.getElementById('output');
    const addDataForm = document.getElementById('addDataForm');
  
    // Function to fetch and display data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        displayData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    // Function to display data on the page
    const displayData = (data) => {
      output.innerHTML = '<h2>Data from API:</h2>';
      data.forEach(item => {
        output.innerHTML += `<p>${item.name}, ${item.age} years old</p>`;
      });
    };
  
    // Event listener for form submission
    addDataForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
  
      try {
        const response = await fetch('http://localhost:3000/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, age }),
        });
  
        const newData = await response.json();
        console.log('New data added:', newData);
  
        // Fetch and display updated data
        fetchData();
      } catch (error) {
        console.error('Error adding new data:', error);
      }
    });
  
    // Initial fetch and display
    fetchData();
  });
  