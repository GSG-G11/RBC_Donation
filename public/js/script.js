/* eslint-disable no-undef */
const tableBody = document.querySelector('tbody');
const donorsSection = document.querySelector('.donors');
const bankSelectElement = document.querySelector('#banksId');
const form = document.getElementById('form');

const getBanks = async () => {
  const banksData = await fetch('/banks');
  const banks = await banksData.json();
  banks.forEach((bank) => {
    const { id, name } = bank;

    const optionBank = document.createElement('option');
    optionBank.value = id;
    optionBank.textContent = name;
    bankSelectElement.appendChild(optionBank);

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

// const newRender

const getDonors = async () => {
  const donorsData = fetch('/donors');
  const response = await donorsData;
  const data = await response.json();
  data.forEach(
    ({
      blood_type: bloodType,
      first_name: firstName,
      last_name: lastName,
      bank_name: bankName,
      id,
    }) => {
      const donorCard = document.createElement('div');
      donorsSection.appendChild(donorCard);
      donorCard.classList.add('donor-blood');

      const bloodTypeContainer = document.createElement('div');
      bloodTypeContainer.classList.add('donor-blood-type');
      donorCard.appendChild(bloodTypeContainer);

      const donorBloodType = document.createElement('span');
      donorBloodType.textContent = bloodType;
      bloodTypeContainer.appendChild(donorBloodType);

      const donorName = document.createElement('p');
      donorName.textContent = `${firstName} ${lastName}`;
      donorName.classList.add('donor-name');
      donorCard.appendChild(donorName);

      const bankNameElement = document.createElement('p');
      bankNameElement.textContent = `${bankName}`;
      bankNameElement.classList.add('donor-bank-name');
      donorCard.appendChild(bankNameElement);

      const deleteForm = document.createElement('div');

      donorCard.appendChild(deleteForm);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete';

      const removeDonor = async (donorId) => {
        const options = {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        };

        fetch(`/donor/${donorId}`, options)
          .then((res) => res.json())
          .then(() => {
            donorsSection.innerHTML = '';
            tableBody.innerHTML = '';
            getDonors();
            getBanks();
          })
          .catch(() => {
            window.location.href = '/error/404';
          });
      };

      deleteBtn.addEventListener('click', () => removeDonor(id));
      deleteForm.appendChild(deleteBtn);
    },
  );
};

function validateForm(e) {
  e.preventDefault();
  const email = document.getElementsByName('email')[0].value.trim();
  const bloodType = document.getElementsByName('bloodType')[0].value.trim();
  const bank = document.getElementsByName('bankId')[0].value.trim();
  const age = document.getElementsByName('age')[0].value.trim();
  const firstName = document.getElementsByName('firstName')[0].value.trim();
  const lastName = document.getElementsByName('lastName')[0].value.trim();
  const address = document.getElementsByName('address')[0].value.trim();

  if (
    !email ||
    !bloodType ||
    !bank ||
    !age ||
    !firstName ||
    !lastName ||
    !address
  ) {
    alert('Please fill all fields');
  } else if (!email.includes('@')) {
    alert('Please enter a valid email');
  } else if (age < 18) {
    alert('You must be 18 or older to donate blood');
  } else if (!bloodType || !bank) {
    alert('Please select the blood type and bank');
  } else {
    form.submit();
  }
}

form.addEventListener('submit', validateForm);

window.onload = () => {
  getBanks();
  getDonors();
};
