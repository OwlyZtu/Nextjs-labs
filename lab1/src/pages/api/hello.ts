import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const { message } = req.body;

  res.status(200).json({ message: `Hello ${name}`, sentMessage: message });
}
