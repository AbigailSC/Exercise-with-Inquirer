import inquirer from 'inquirer';
import { BillType } from '@interfaces';
import { categories } from '@data';

export const newBillPrompt = async (): Promise<BillType> => {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the bill?'
    },
    {
      type: 'number',
      name: 'amount',
      message: 'What is the amount of the bill?'
    },
    {
      type: 'list',
      name: 'category',
      message: 'What is the category of the bill?',
      choices: categories
    },
    {
      type: 'input',
      name: 'notes',
      message: 'What are the notes for the bill?'
    }
  ]);
};

export const filterByCategoryPrompt = async (
  categories: string[]
): Promise<string> => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'category',
      message: 'What is the category of the bill?',
      choices: categories
    }
  ]);
  return answers.category;
};
