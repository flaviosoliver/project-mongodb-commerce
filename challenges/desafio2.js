db.getCollection("produtos")
  .updateMany(
    {},
    { $set: { valorUnitario: NumberDecimal("0.00") } },
  );

db.getCollection("produtos")
  .find(
    {},
    { nome: 1, valorUnitario: 1, _id: 0 },
  );
