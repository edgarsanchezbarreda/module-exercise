import { choice, remove } from './helpers';
import fruits from './foods';

let randomFruit = choice(fruits);

console.log(`I would like a ${randomFruit}`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);

remove(fruits, randomFruit);

console.log(`Im sorry, we only have ${fruits.length} left.`);
