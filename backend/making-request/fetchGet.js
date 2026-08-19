const url = 'https://api.github.com/orgs/nodejs'

async function performGetReq(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`)
    }
    const data = await response.json()
    console.log('GET request succeesful:', data)
  } catch (error) {
    console.error(`Error during GET request: ${error}`)
  }
}

performGetReq(url)
