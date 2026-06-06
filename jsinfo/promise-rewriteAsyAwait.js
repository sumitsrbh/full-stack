async function loadJson(url) {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(response.status) // or statusText
  }

  return response.json()
}

loadJson('https://javascript.info/no-such-user.json').catch(console.log) // Error: 404
