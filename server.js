import 'dotenv/config';
import app from './src/app.js'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('\x1b[35m', `Server is running on port ${PORT}`);
  console.log('\x1b[35m', `Acess the server at http://localhost:${PORT}`);
  console.log('\x1b[35m', 'Press CTRL+C to stop the server');
});