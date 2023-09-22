const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
      {
        number: "5160 4196 4843 3388",
        creditBalance: 1000,
        ensign: "American Express",
      },
    ],
  };
  
  // Função para realizar saque
  function makeWithdrawal(user, amount, accountType) {
    if (typeof amount !== "number" || amount <= 0 || amount < 5 || amount >= 500) {
      return "This value is not allowed";
    }
  
    if (accountType === 1) {
      if (amount > user.savingsBalance) {
        return "Balance unavailable";
      }
      user.savingsBalance -= amount;
      return "Withdrawal carried out.";
    } else if (accountType === 2) {
      if (amount > user.cardsInformation[0].creditBalance) {
        return "Balance unavailable";
      }
      user.cardsInformation[0].creditBalance -= amount;
      return "Withdrawal carried out.";
    } else {
      return "Invalid account type";
    }
  }
  
  // Função para obter o saldo
  function getBalance(user, accountType) {
    if (accountType === 1) {
      return user.savingsBalance;
    } else if (accountType === 2) {
      return user.cardsInformation[0].creditBalance;
    } else {
      return "Invalid account type";
    }
  }
  
  // Função para fazer depósito
  function makeDeposit(user, amount) {
    if (typeof amount !== "number" || amount <= 0 || amount < 5 || amount >= 500) {
      return "This value is not allowed";
    }
  
    user.savingsBalance += amount;
    return "Deposit made successfully";
  }
  
  // Exemplo de uso das funções
  const operationType = parseInt(prompt("Digite 1 para saque, 2 para saldo, ou 3 para depósito"));
  
  if (operationType === 1) {
    const accountType = parseInt(prompt("Digite 1 para poupança ou 2 para crédito"));
    const withdrawnAmount = parseFloat(prompt("Digite o valor a ser sacado"));
    const result = makeWithdrawal(user, withdrawnAmount, accountType);
    alert(result);
  } else if (operationType === 2) {
    const accountType = parseInt(prompt("Digite 1 para poupança ou 2 para crédito"));
    const balance = getBalance(user, accountType);
    alert(`Saldo disponível: R$ ${balance}`);
  } else if (operationType === 3) {
    const depositAmount = parseFloat(prompt("Digite o valor a ser depositado"));
    const result = makeDeposit(user, depositAmount);
    alert(result);
  } else {
    alert("Operação inválida");
  }
  