function generateImage(text, apiKey) {
    const endpoint = 'https://api.openai.com/v1/images/generations';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const body = {
        prompt: text
    };

    return fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        // Aquí puedes hacer lo que necesites con la respuesta de la API
        return data;
    });
}

export default generateImage;