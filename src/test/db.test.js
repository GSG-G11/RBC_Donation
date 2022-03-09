/* eslint-disable no-undef */
const connection = require('../db/config/db');
const dbBuilder = require('../db/build/testBuilder');
const {
  getAllDonors,
  insertDonor,
  removeDonor,
  getAllBanks,
  getBankDonorsNumber,
} = require('../db/queries');

// run after each test

beforeEach(() => dbBuilder());

test('Test get donors data', () =>
  connection.query(getAllDonors).then(({ rowCount }) => {
    expect(rowCount).toBe(5);
  }));

test('Test Insert New donor into database', () => {
  const donorInput = [
    'ali',
    'Mahfouz',
    'palestine - gaza strip - gaza',
    35,
    'ali_Mahfouz@gmail.com',
    '+O',
    1,
  ];
  return connection.query(insertDonor, donorInput).then(({ rows }) => {
    expect(rows[0].id).toBe(8);
    expect(rows[0].first_name).toBe('ali');
    expect(rows[0].last_name).toBe('Mahfouz');
    expect(rows[0].address).toBe('palestine - gaza strip - gaza');
    expect(rows[0].age).toBe(35);
    expect(rows[0].email).toBe('ali_Mahfouz@gmail.com');
    expect(rows[0].blood_type).toBe('+O');
    expect(rows[0].bank_id).toBe(1);
  });
});

test('Test Delete donor form database', () => {
  const id = [1];
  return connection.query(removeDonor, id).then(({ rows }) => {
    expect(rows[0].id).toBe(1);
    expect(rows[0].first_name).toBe('Ahmed');
    expect(rows[0].last_name).toBe('Mohamed');
    expect(rows[0].address).toBe('Tel el hawa');
    expect(rows[0].age).toBe(23);
    expect(rows[0].email).toBe('ahmed@gmail.com');
    expect(rows[0].blood_type).toBe('+O');
    expect(rows[0].bank_id).toBe(1);
  });
});

test('Test get All Banks Of blood ', () =>
  connection.query(getAllBanks).then(({ rowCount }) => {
    expect(rowCount).toBe(6);
  }));

test('Test get Bank Donors Number', () => {
  const id = [1];
  return connection.query(getBankDonorsNumber, id).then(({ rows }) => {
    expect(rows[0].count).toBe('2');
  });
});

// run after all test runs
afterAll(() => connection.end());
