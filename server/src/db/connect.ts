import config from 'config';
import mongoose from 'mongoose';

export default async function connect() {
  const dbUri = config.get('dbUri') as string;

  try {
    await mongoose.connect(dbUri);
    console.log('db connedted');
  } catch (error) {
    console.log('Could not connect db');
    process.exit(1);
  }
}
