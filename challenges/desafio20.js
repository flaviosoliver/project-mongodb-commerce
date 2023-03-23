db.getCollection("produtos")
  .updateMany(
    { nome: "Big Mac" },
    { $unset: { curtidas: 1 } },
  );

db.getCollection("produtos")
  .find(
    { },
    { nome: 1, curtidas: 1, _id: 0 },
  );
