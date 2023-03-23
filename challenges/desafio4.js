db.getCollection("produtos")
  .updateMany(
    { nome: "Big Mac" },
    { $currentDate: { ultimaModificacao: { $type: "date" } } },
  );

db.getCollection("produtos")
  .find(
    { ultimaModificacao: { $exists: true } },
    { nome: 1, _id: 0 },
  );
