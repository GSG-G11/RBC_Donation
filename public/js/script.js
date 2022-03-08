/* eslint-disable no-undef */
const tableBody = document.querySelector('tbody');
const donorsSection = document.querySelector('.donors');
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

const getDonors = async () => {
  const donorsData = fetch('/donors');
  const response = await donorsData;
  const data = await response.json();
  data.forEach((donor) => {
    const donorCard = document.createElement('div');
    donorsSection.appendChild(donorCard);
    donorCard.classList.add('donor-blood');

    const bloodTypeContainer = document.createElement('div');
    bloodTypeContainer.classList.add('donor-blood-type');
    donorCard.appendChild(bloodTypeContainer);

    const donorBloodType = document.createElement('span');
    donorBloodType.textContent = donor.blood_type;
    bloodTypeContainer.appendChild(donorBloodType);

    const donorName = document.createElement('p');
    donorName.textContent = `${donor.first_name} ${donor.last_name}`;
    donorName.classList.add('donor-name');
    donorCard.appendChild(donorName);

    const deleteForm = document.createElement('form');
    deleteForm.setAttribute('action', `/donor/${donor.id}`);
    deleteForm.setAttribute('method', 'POST');

    donorCard.appendChild(deleteForm);

    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', '_method');
    hiddenInput.setAttribute('value', 'DELETE');
    deleteForm.appendChild(hiddenInput);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteForm.appendChild(deleteBtn);
  });
};

getBanks();
getDonors();
