export interface IEmailPayload {
  to: string;
  subject: string;
  body: string;
  filename: string;
  path: string;
  cid: string;
}

export interface IEmailBody {
  to: string;
  subject: string;
  body: string;
  cid: string;
}
