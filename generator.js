import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const data = JSON.parse(
  readFileSync(join(__dirname, 'quotes.json'), 'utf-8')
);

function randomOf(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getWisdom() {
    const intro = Array.isArray(data.intros) && data.intros.length > 0 ? randomOf(data.intros)  : 'No intro available'; 
    const quote = Array.isArray(data.quotes) && data.quotes.length > 0 ? randomOf(data.quotes) : 'No quote available'; 
    const prompt = Array.isArray(data.prompts) && data.prompts.length > 0 ? randomOf(data.prompts) : 'No prompt available'; 
  
    return {
      intro,
      quote,
      prompt,
      asString: `${intro}\n“${quote}”\n${prompt}`
    };
  }
