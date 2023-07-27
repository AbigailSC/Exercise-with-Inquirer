import { BillType } from '@interfaces';
import fs from 'fs';
import path from 'path';

export const getWithFs = async (file: string): Promise<BillType[]> => {
  const filePath = path.join(__dirname, '../data', file + '.json');
  return await new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err != null) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
};

export const saveWithFs = async (
  file: string,
  content: BillType[]
): Promise<void> => {
  return await new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '../data', file + '.json');
    fs.writeFile(filePath, JSON.stringify(content), (err) => {
      if (err != null) {
        reject(err);
      }
      resolve(console.log('Bill created'));
    });
  });
};
