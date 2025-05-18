import CustomError from "../utils/customError";
import { Request, Response, NextFunction } from 'express';

const manageError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
      return res.status(err.statusCode).json({ message: err.message });
    }
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  };
  
  export default manageError;