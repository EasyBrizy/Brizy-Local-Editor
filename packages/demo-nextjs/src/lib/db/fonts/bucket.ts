import { GridFSBucket } from "mongodb";
import dbConnect from "../mongoose/connect";

let bucket: GridFSBucket | null = null;

export async function getFontsBucket() {
  if (bucket) return bucket;

  const conn = await dbConnect();
  const db = conn.connection.db;

  bucket = new GridFSBucket(db, { bucketName: "fonts" });

  return bucket;
}
