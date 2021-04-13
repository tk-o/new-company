import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const response = await fetch(`http://api.localhost/api/hello`);
  const jsonObj = await response.json();

  res.status(200).json({ version: '1.6', ...jsonObj })
}
