db.getCollection("produtos")
  .countDocuments(
    { nome: { $regex: /Mc/i } },
  );
