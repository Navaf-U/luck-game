import { Request, Response, NextFunction } from 'express';

const trycatch = (func: (req: Request, res: Response, next: NextFunction) => Promise< Response | void>) => async(req: Request, res: Response, next: NextFunction) => {
    try {
        await func(req,res,next)
    } catch (error) {
        next(error)
    }
}

export default trycatch;