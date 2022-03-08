const tableBody = document.querySelector('tbody');

const getBanks = async () => {
  const banksData = await fetch('/banks');
  const banks = await banksData.json();
  banks.forEach(bank => {
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const bankName = document.createElement('td');
    bankName.textContent = bank.name;
    tableRow.appendChild(bankName);

    const bankAddress = document.createElement('td');
    bankAddress.textContent = bank.address;
    tableRow.appendChild(bankAddress);

    const bankDonorsNumber = document.createElement('td');
    bankDonorsNumber.textContent = bank.donors_number;
    tableRow.appendChild(bankDonorsNumber);
  });
};

getBanks();
