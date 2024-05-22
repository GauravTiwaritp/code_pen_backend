import { Request, Response } from "express";
import { code } from "../models/Code";
export const saveCode = async (req: Request, res: Response) => {
  const { FullCode } = req.body;
  console.log(FullCode);
  console.log(req.body.Fullcode);
  try {
    const newCode = await code.create({
      fullCode: req.body.Fullcode,
    });
    return res.status(200).send({ message: "code saved", code: newCode });
  } catch (error) {
    return res.status(500).send({ message: "please try again", error });
  }
};
