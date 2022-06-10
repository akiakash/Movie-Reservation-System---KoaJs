const express = require("express");
const router = express.Router();
const Language = require("../model/language.model");
const LanguageDrop = require("../model/languageDrop.model");

router.get("/", async (req, res) => {
  try {
    const language = await Language.find().sort({ language_type: "asc" });
    res.json(language);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/Dropdown", async (req, res) => {
  try {
    const language = await LanguageDrop.find().sort({ language_type: "asc" });
    res.json(language);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const languageExist = await Language.findOne({
    language_type: req.body.language_type,
  });
  if (languageExist)
    return res.status(400).json({ error_Message: "Language already exists" });

  const language = new Language({
    language_type: req.body.language_type,
  });
  try {
    const savedLanguage = await language.save();
    const languageDrop = new LanguageDrop({
      value: savedLanguage._id,
      label: savedLanguage.language_type,
    });
    const savedLanguageDrop = await languageDrop.save();
    res.json(savedLanguage).json(savedLanguageDrop);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:languageId", async (req, res) => {
  try {
    const removeLanguage = await Language.remove({
      _id: req.params.languageId,
    });
    res.json(removeLanguage);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
