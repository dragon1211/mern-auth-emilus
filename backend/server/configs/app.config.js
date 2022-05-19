require('dotenv').config();

export const APP_CONFIG = {
  secret_private_key: "okaimono-secret-key",
  owner_private_key: "0x9382719032840ea820",
  support_mail: "support@fantation-coin.com",
};

export const FRONT_URL = process.env.FRONT_URL;