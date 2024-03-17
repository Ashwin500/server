function executeCurl() {
  var curlInput = document.getElementById('curlInput').value;
  var curlOutput = document.getElementById('curlOutput');

  // Clear previous output
  curlOutput.innerHTML = '';

  // Execute the curl command
  fetch('https://apius.reqbin.com/api/v1/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ curlCommand: curlInput })
  })
  .then(response => response.json())
  .then(data => {
    // Display output
    curlOutput.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
  })
  .catch(error => {
    console.error('Error executing curl command:', error);
    curlOutput.innerHTML = '<span style="color: red;">Error executing curl command. Please try again.</span>';
  });
}
