import 'dotenv/config';
import app from './src/app.js'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('\x1b[35mDASHBOARD API NODE - EXPRESS - MONGODB')
  console.log(`\x1b[35mServer is running on port ${PORT}`);
  console.log(`\x1b[35mAcess the server at \x1b[34mhttp://localhost:${PORT}`);
  console.log('\x1b[35mPress CTRL+C to stop the server');
});