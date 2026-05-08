import { useState } from 'react';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export default function App() {
  const [result, setResult] = useState('Click the button to call backend');
  const [loading, setLoading] = useState(false);

  const callBackend = async () => {
    setLoading(true);
    setResult('Calling backend...');

    try {
      const response = await fetch(`${API_BASE_URL}/ping`);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setResult(`${data.message} (${data.timestamp})`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <section className="card">
        <p className="tag">React + FastAPI</p>
        <h1>Basic Flow Demo</h1>
        <p className="desc">Frontend calls backend and shows response.</p>

        <button onClick={callBackend} disabled={loading}>
          {loading ? 'Loading...' : 'Call /ping API'}
        </button>

        <pre>{result}</pre>
      </section>
    </main>
  );
}
