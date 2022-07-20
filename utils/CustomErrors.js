export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 404;
  }
}

export class InvalidRequestError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 400;
  }
}

export class ServerError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.status = 500;
  }
}
