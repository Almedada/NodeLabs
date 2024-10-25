import jsonfile from 'jsonfile';
import path from 'path'; // Импортируем модуль path

import { IUser } from '@src/models/User';
import { ExampleType } from '@src/models/Example';

// **** Variables **** //

const DB_FILE_NAME = 'database.json';

// **** Types **** //

interface IDb {
  users: IUser[];
  examples: ExampleType[];
}

// **** Functions **** //

/**
 * Fetch the JSON data from the file.
 */
function openDb(): Promise<IDb> {
  // Используем path.join для создания правильного пути к файлу
  const dbPath = path.join(__dirname, DB_FILE_NAME);
  return jsonfile.readFile(dbPath) as Promise<IDb>;
}

/**
 * Update the JSON file.
 */
function saveDb(db: IDb): Promise<void> {
  // Используем тот же путь для записи
  const dbPath = path.join(__dirname, DB_FILE_NAME);
  return jsonfile.writeFile(dbPath, db);
}

// **** Export default **** //

export default {
  openDb,
  saveDb,
} as const;
