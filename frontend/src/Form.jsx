import { useState } from 'react';

function Form() {
  const [formResult, setFormResult] = useState(
    'Click the button to call backend'
  );
  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
  const [name, setName] = useState('');

  async function submitForm() {
    // alert(`Form submitted! Name: ${name}`);
    console.log('Submitting form with name:', name);
    try {
      const response = await fetch(`${API_BASE_URL}/formSubmit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name })
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Form submission response:', data);
      setFormResult(`${data.data.name} (${data.timestamp})`);
    } catch (error) {
      console.error('Error submitting form:', error);
      //   setResult(`Error: ${error.message}`);
    } finally {
      //   setLoading(false);
    }
  }
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={submitForm}>
        Submit
      </button>
      <pre>{formResult}</pre>
    </form>
  );
}

export default Form;
