import db from '../../../utils/firebase/auth';

export default async (req, res) => {
  const { data } = JSON.parse(req.body);
  const postDataBase = db.collection('posts').doc();
  await postDataBase.set(data);
};
