import { NextApiRequest, NextApiResponse } from 'next';

export default (req:NextApiRequest, res:NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({ name: 'John Doe' })
}
