import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const filteredCategories = categories.filter((categorie) =>
      categorie.name.includes(req.query.q as string),
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const program = categories.find((p) => p.id === parsedId);

  if (program != null) {
    res.json(program);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
