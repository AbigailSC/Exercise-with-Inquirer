import { v4 } from 'uuid';

import { getWithFs, saveWithFs } from './fsMethods';
import { newBillPrompt, filterByCategoryPrompt } from './userPrompts';

import { BillType } from '@interfaces';
import { categories } from '@data';

export const getAllBills = async (): Promise<BillType[]> => {
  const currentBills = await getWithFs('bills');
  console.log(currentBills);
  return currentBills;
};

export const getBillsByCategory = async (): Promise<BillType[]> => {
  const allBills = await getAllBills();
  const category = await filterByCategoryPrompt(categories);
  const billsByCategory = allBills.filter((bill) => bill.category === category);
  return billsByCategory;
};

export const createBill = async (): Promise<BillType> => {
  const newBill = await newBillPrompt();
  const currentBills = await getWithFs('bills');
  newBill.id = v4();
  newBill.date = new Date().toISOString();
  currentBills.push(newBill);
  await saveWithFs('bills', currentBills);
  return newBill;
};
