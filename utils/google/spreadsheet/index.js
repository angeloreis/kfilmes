import { fromBase64 } from '../../base64';
export const credentials = {
  client_email: process.env.SHEET_CLIENT_EMAIL,
  private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
};
