const { faker } = require("@faker-js/faker");
const fs = require("fs");

const generateListsData = (number) => {
  const lists = [];

  for (let index = 1; index < number; index++) {
    lists.push({
      id: index,
      name: faker.lorem.words(),
      picture: faker.image.image(),
      created_date: faker.date.past(),
    });
  }
  return { lists: lists };
};

const lists_data = generateListsData(200);

let data = JSON.stringify(lists_data);
fs.writeFileSync("data/db.json", data);
