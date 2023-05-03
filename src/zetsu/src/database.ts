import { connect } from 'mongoose';
const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_HOST, MONGO_PORT, MONGO_INITDB_DATABASE } =
  process.env;

const CONNECT_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}`;

const connectDB = async () => {
  try {
    const mongoURI: string = CONNECT_URI;
    await connect(mongoURI, {
      auth: {
        username: MONGO_INITDB_ROOT_USERNAME,
        password: MONGO_INITDB_ROOT_PASSWORD,
      },
      authSource: 'admin',
    });
    console.log('MongoDB Connected...');
  } catch (err: any) {
    console.error('NO', err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
