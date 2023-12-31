import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomError.js";

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequest;
