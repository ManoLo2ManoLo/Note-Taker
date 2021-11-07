const router = require('express').Router();
const notesRoutes = rquire('../apiRoutes/notesRoutes');

router.use(notesRoutes);

module.exports = router;