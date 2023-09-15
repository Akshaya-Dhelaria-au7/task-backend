import express from 'express'
import cors from 'cors'
import route from './routes/tasksRoute.js';

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', route)

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});