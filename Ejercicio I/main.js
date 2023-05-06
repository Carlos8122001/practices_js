let batteries = [
  {
    id: 32,
    name: "RUIDO",
    isActive: true,
    riskCoverageType: null,
    riskCoverageState: false,
    sapCode: null,
  },
  {
    id: 30,
    name: "MANIPULADOR DE ALIMENTOS",
    isActive: true,
    riskCoverageType: null,
    riskCoverageState: false,
    sapCode: null,
  },
  {
    id: 34,
    name: "ALTITUD GEOGRÁFICA > 3.000 MSNM",
    isActive: true,
    riskCoverageType: "Encuesta",
    riskCoverageState: true,
    sapCode: null,
  },
];

// 1 Listar
const getBatteries = () => {
  return console.log(batteries);
};

// 2 Ubicar por id

const getBatteriesId = (id) => {
  let batery = batteries.filter((element) => element.id === id);
  console.log(batery);
};

// 3 agregar un elmento mas al array

const addBatteries = (baterrie) => {
  let newBaterries = [...batteries, baterrie];
  batteries = newBaterries;
  console.log(batteries);
};

// 4 Ordenar el array de menor a mayor

const orderElderlyBatteries = () => {
  let order = batteries.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(order);
};

// 5 Ordernar de mayor a menor

const orderminorBatteries = () => {
  let order = batteries.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    } else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
    }
  });

  console.log(order.reverse());
};

// 6 actualizar el sapCode(44343) a solo el id 30

const updateBaterries = () => {
  let update = batteries.filter((element) => element.id === 30);
  update.forEach((element) => {
    return (element.sapCode = 44343);
  });
  console.log(batteries);
};

// 7 agregarle un item mas a todos los objetos del array, el valor isUpdate: true / false

const addPropertyBatterries = () => {
  batteries.forEach((element) => {
    return (element.isUpdate = true);
  });

  console.log(batteries);
};

// verificar si el array esta vacio

let arry = ["hola", "mundo"];

let arry2 = [];

const validateBaterries = (array) => {
  if (array.length === 0) {
    console.log("el array esta vacio");
  } else {
    console.log("el array no esta vacio");
  }
};

//listar todos los elementos del array ubicar el item name y devolverlo en minusculas

const getName = () => {
  batteries.forEach((name) => {
    console.log(name.name.toLocaleLowerCase());
  });
};

getName();
