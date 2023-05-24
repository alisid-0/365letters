const apiKey = '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';
const endpoint = 'https://api.openai.com/v1/chat/completions';

async function generateLoveLetter() {
  const promptInput = `Write me a love letter from Ali to Jenin.`;
  const letterContainer = document.querySelector('.output');
  letterContainer.textContent = 'Generating love letter...';

  const data = {
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: `Write me a love letter from Ali to Jenin.` },
    ],
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();

    if (!result.choices || !Array.isArray(result.choices) || result.choices.length === 0) {
      throw new Error('Invalid response format');
    }

    const reply = result.choices[0].message.content;
    letterContainer.textContent = reply;
  } catch (error) {
    console.error('Error:', error);
    letterContainer.textContent = 'An error occurred while generating the love letter.';
  }
}

document.addEventListener('DOMContentLoaded', generateLoveLetter);

// const apiKey = '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';
// const endpoint = 'https://api.openai.com/v1/chat/completions';

// async function generateLoveLetter() {
//   const promptInput = `Write me a love letter from Ali to Jenin.`;
//   const letterContainer = document.querySelector('.output');
//   letterContainer.textContent = 'Generating love letter...';

//   const data = {
//     messages: [
//       { role: 'system', content: 'You are a helpful assistant.' },
//       { role: 'user', content: `Write me a love letter from Ali to Jenin.`},
//     ],
//   };

//   try {
//     const response = await axios.post(endpoint, data, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${apiKey}`,
//       },
//     });

//     const reply = response.data.choices[0].message.content;
//     letterContainer.textContent = reply;
//   } catch (error) {
//     console.error('Error:', error);
//     letterContainer.textContent = 'An error occurred while generating the love letter.';
//   }
// }

// document.addEventListener('DOMContentLoaded', generateLoveLetter)
