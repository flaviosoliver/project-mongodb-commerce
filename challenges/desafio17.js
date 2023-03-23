db.getCollection("produtos")
  .createIndex(
    { descricao: "text" },
    { default_language: "portuguese" },
  );

db.getCollection("produtos")
  .countDocuments({
    $text: {
      $search: "frango hamburguer",
    },
  });
