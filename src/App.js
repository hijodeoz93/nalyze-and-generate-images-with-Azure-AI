import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import generateImage from './azure-image-generation';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const kapi = "beee643e371444398558da6050da9804";
  const kapioa = "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";

  const handleAnalyzeClick = async () => {
    const url = document.getElementById('imgUrl').value;
    setImageUrl(url);
    const result = await analyzeImage(url, 'caption', 'en', kapi);
    setAnalysisResult(result);
  };

  const handleGenerateClick = async () => {
    const text = document.getElementById('imgUrl').value;
    const generatedImage = await generateImage(text, kapioa);
    setGeneratedImageUrl(generatedImage.url);
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <input type="text" id='imgUrl' placeholder="Ingresa la URL para analizar o un texto para generar una imagen"  />
      
      <p>
        <button onClick={handleAnalyzeClick}>Analizar</button>
        <button onClick={handleGenerateClick}>Generar</button>
      </p>

      {analysisResult && (
        <div>
          <h2>Resultados del análisis:</h2>
          <p>{JSON.stringify(analysisResult)}</p>
        </div>
      )}

      {generatedImageUrl && (
        <div>
          <h2>Imagen generada:</h2>
          <img src={generatedImageUrl} alt="Imagen generada" />
        </div>
      )}
    </div>
  );
}

export default App;