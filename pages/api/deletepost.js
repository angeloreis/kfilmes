import db from '../../utils/firebase/auth';

export const deletePost = async (req, res) => {
  const { id } = JSON.parse(req.body);
  const postDataBase = db.collection('posts').doc(id);
  await postDataBase.delete();
};
