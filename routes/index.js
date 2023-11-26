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

//모든글 삭제페이지 렌더
router.get("/deleteAll", controller.DeleteAll);

//긴급해요 페이지
router.get("/mainEmergency", controller.mainEmergency);

//rightNow 비정렬페이지
router.get("/rightNow", controller.rightNow);

//rightNow 정렬페이지
router.get("/rightNowSort", controller.rightNowSort);

//포스트업로드
router.post("/uploadPost", Pocstcontroller.UploadPost);

//포스트 Read
router.post("/GetPost",Pocstcontroller.GetPost);

//포스트 truncate
router.post("/truncatePost",Pocstcontroller.truncatePost);





module.exports = router;