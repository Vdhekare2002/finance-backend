const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const ctrl = require("../controllers/recordController");

router.post("/", auth, role("admin"), ctrl.createRecord);
router.get("/", auth, role("admin", "analyst", "viewer"), ctrl.getRecords);
router.put("/:id", auth, role("admin"), ctrl.updateRecord);
router.delete("/:id", auth, role("admin"), ctrl.deleteRecord);

module.exports = router;