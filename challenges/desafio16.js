db.getCollection("produtos")
  .countDocuments(
    { ingredientes: { $size: 4 } },
  );
