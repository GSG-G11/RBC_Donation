/* eslint-disable no-undef */
const tableBody = document.querySelector('tbody');

const getBanks = async () => {
  const banksData = await fetch('/banks');
  const banks = await banksData.json();
  banks.forEach((bank) => {
    const { id } = bank;
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const bankName = document.createElement('td');
    bankName.textContent = bank.name;
    tableRow.appendChild(bankName);

    const bankAddress = document.createElement('td');
    bankAddress.textContent = bank.address;
    tableRow.appendChild(bankAddress);

    fetch(`/banks/${id}/donors`)
      .then((response) => response.json())
      .then((donors) => {
        const bankDonorsNumber = document.createElement('td');
        bankDonorsNumber.textContent = Object.values(donors)[0].count;
        tableRow.appendChild(bankDonorsNumber);
      });
  });
};

getBanks();
