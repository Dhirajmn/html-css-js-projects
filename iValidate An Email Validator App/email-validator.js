submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  console.log("Clicked!")
  let key = 'YOUR_API_KEY_HERE';

  let email = document.getElementById('username').value;

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

  let res = await fetch(url);
  let results = await res.json();

  let html = ``;
  for (key of Object.keys(results)) {
    html += `<div><b>${key}</b>: ${results[key]}</div>`;
  }
  console.log(html);
  resultCont.innerHTML = html;
});
