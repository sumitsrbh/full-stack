const postData = {
  name: 'Laddie',
  breed: 'Rough Collie',
}
const url = 'https://postman-echo.com/post'

async function performPostReq(url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(JSON.stringify(postData)),
      },
      body: JSON.stringify(postData),
    })
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }
    const data = await response.json()
    console.log('Response data: ', data)
  } catch (error) {
    console.error(`Error during post request: ${error}`)
  }
}

performPostReq(url)
