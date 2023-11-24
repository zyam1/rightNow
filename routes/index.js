const express = require("express");
const controller = require("../controller/index");
const Pocstcontroller = require("../controller/Cpost");
const router = express.Router()

//메인 페이지
router.get("/", controller.index);

//모두모여 페이지
router.get("/mainTogther", controller.mainTogther);

//인간관계 페이지
router.get("/mainRelation", controller.mainRelation);

//신체문제 페이지
router.get("/mainHealth", controller.mainHealth);

//긴급해요 페이지
router.get("/mainEmergency", controller.mainEmergency);

//rightNow페이지
router.get("/rightNow", controller.rightNow);

//포스트업로드
router.post("/uploadPost", Pocstcontroller.UploadPost);

//포스트 Read
router.post("/GetPost",Pocstcontroller.GetPost);

module.exports = router;