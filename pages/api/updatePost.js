import db from '../../utils/firebase/auth';

export default async (req, res) => {
  const { id, data } = JSON.parse(req.body);
  const postDatabase = db.collection('posts').doc(id);
  await postDatabase.update(data);
};
