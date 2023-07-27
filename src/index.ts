import inquirer from 'inquirer';
import {
  createBill,
  getAllBills,
  getBillsByCategory
} from './utils/menuOptions';

const main = async (): Promise<void> => {
  let run = true;

  console.clear();
  console.log('=========================');
  console.log('Welcome to bills CLI App');
  console.log('=========================\n');

  while (run) {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'menu',
        message: 'Please select an option:',
        choices: [
          { name: 'Create a new bill', value: 'create' },
          { name: 'Show all bills', value: 'show' },
          { name: 'See bills per day', value: 'showOne' },
          { name: 'Filter bills by category', value: 'filter' },
          { name: 'Exit', value: 'exit' }
        ]
      }
    ]);

    switch (answers.menu) {
      case 'create':
        await createBill();
        break;
      case 'show':
        await getAllBills();
        break;
      case 'showOne':
        console.log('See bills per day');
        break;
      case 'filter':
        await getBillsByCategory();
        break;
      case 'exit':
        run = false;
        break;
      default:
        console.log('Invalid option');
        run = false;
        break;
    }
  }
};

void main();
