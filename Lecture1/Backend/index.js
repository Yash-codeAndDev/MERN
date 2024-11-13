import express from 'express'
import dotenv from 'dotenv';
dotenv.config();

const app = express()




app.get('/', (req, res) => {
  res.send('Server is ready!')
})




app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      content: "Why don’t scientists trust atoms? Because they make up everything!",
      creator: "Alice Johnson"
    },
    {
      id: 2,
      content: "I'm reading a book on anti-gravity. It's impossible to put down!",
      creator: "Bob Smith"
    },
    {
      id: 3,
      content: "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them.",
      creator: "Carol White"
    },
    {
      id: 4,
      content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      creator: "David Lee"
    },
    {
      id: 5,
      content: "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      creator: "Emma Brown"
    }
  ];
  // console.log(jokes)
  res.send(jokes)
})
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})