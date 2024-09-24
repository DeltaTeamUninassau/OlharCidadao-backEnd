export interface EmailProps {
  to: string;
  subject: string;
  body: string;
  filename: string;
  path: string;
  cid: string;
}

export class Email {
  private readonly email: EmailProps;

  constructor(email: EmailProps) {
    this.email = email;
  }

  get to() {
    return this.email.to;
  }

  get subject() {
    return this.email.subject;
  }

  get body() {
    return this.email.body;
  }

  get filename() {
    return this.email.filename;
  }

  get path() {
    return this.email.path;
  }

  get cid() {
    return this.email.cid;
  }
}
