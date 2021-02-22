import db from '../../utils/firebase/auth';

export default async (req, res) => {
  const posts = [];
  const postsDataBase = await db.collection('posts').get();
  if (postsDataBase.empty) {
    return [];
  }
  postsDataBase.forEach((doc) => {
    posts.push({
      ...doc.data(),
      id: doc.id
    });
  });
  return posts;
};
