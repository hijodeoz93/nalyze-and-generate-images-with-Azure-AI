function analyzeImage(imageUrl, visualFeatures, language, apiKey) {
       //`https://vision-ia.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=${visualFeatures}&language=${language}`;
    const endpoint = `https://vision-ia.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=${visualFeatures}&model-version=latest&language=${language}&api-version=2023-02-01-preview`;
    const headers = {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': apiKey
    };
    const body = {
        url: imageUrl
    };

    return fetch(endpoint, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        // Aquí puedes hacer lo que necesites con la respuesta de la API
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error(error);
    });
}
export default analyzeImage;
