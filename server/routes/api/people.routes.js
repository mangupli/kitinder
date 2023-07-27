const router = require('express').Router();

const { Person } = require('../../db/models');

router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    if (name) {
      const person = await Person.create({ name });
      res.status(201).json(person);
    } else {
      res.status(401).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json(console.log(error.message));
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const personDel = await Person.destroy({
      where: { id: req.params.id },
    });
    if (personDel) {
      res.status(200).json({ message: 'Ok' });
    } else {
      res
        .status(400)
        .json({ message: 'Сервер временно не работает', status: 400 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

router.get('/', async (req, res) => {
  try {
    const people = await Person.findAll({ order: [['id', 'ASC']] });
    res.json(people);
  } catch (error) {
    res.json({ message: error.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(person);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
