//  const multer = require('multer');

// const storage = multer.diskStorage({
//     filename: function (req, file, callback) {
//         callback(null, file.originalname)
//     }
// });

// // const upload = multer({ storage });

// // module.exports = upload;


// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedFields = ['resume'];
//     if (!allowedFields.includes(file.fieldname)) {
//       return cb(new multer.MulterError("Unexpected field"));
//     }
//     cb(null, true);
//   }
// });

//  module.exports = upload;




const multer = require('multer');

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ 
    storage,
    fileFilter: (req, file, cb) => {
        const allowedFields = ['resume', 'brochure', 'logo', 'banner'];
        if (!allowedFields.includes(file.fieldname)) {
            return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE", file.fieldname));
        }
        cb(null, true);
    }
});

module.exports = upload;

