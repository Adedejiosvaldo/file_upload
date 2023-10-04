import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomError";

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
