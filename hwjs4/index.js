function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Дані завантажено"), 1000);
    });
  }
  
  const data = fetchData();
  console.log(data); // Очікується: "Дані завантажено"