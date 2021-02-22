import { GoogleSpreadsheet } from 'google-spreadsheet';
import { credentials } from '../../utils/google/spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];

    const rows = await sheet.getRows();
    const posts = rows.map((each) => ({
      url_post: each.url_post,
      imagem_post: each.imagem_post,
      description_post: each.description_post
    }));

    res.json(posts);
  } catch (error) {
    res.json({
      message: `error: ${error}`
    });
  }
};
