const multer = require("multer"); // Подключаем библиотеку Multer для обработки загрузки файлов
const path = require("path");

const upload = multer({
  storage: multer.memoryStorage(),

  // Устанавливаем ограничение на размер загружаемых файлов (10 МБ)
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    // Фильтр для определения разрешенных типов файлов
    if (file.mimetype.includes("image")) {
      // Если файл имеет MIME-тип, начинающийся с 'image', считаем его допустимым
      cb(null, true);
    } else {
      // В противном случае файл не допускается
      cb(null, false);
    }
  },
});
module.exports = upload;
