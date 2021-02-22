import { GoogleSpreadsheet } from 'google-spreadsheet';
import { credentials } from '../../utils/google/spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  const data = JSON.parse(req.body);

  console.log('api', data);

  try {
    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[1];

    await sheet.addRow({
      url_post: data.url_post,
      imagem_post: data.imagem_post,
      description_post: data.description_post
    });
  } catch (error) {
    console.log(error.stack);
    res.end('error');
  }
};
