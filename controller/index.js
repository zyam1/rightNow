//메인페이지
exports.index = (req, res) => {
    res.render("index");
};
//인간관계
exports.mainRelation = (req, res) => {
    res.render("mainRelation");
};

//함께모여
exports.mainTogther = (req, res) => {
    res.render("mainTogther");
};

//신체문제
exports.mainHealth = (req, res) => {
    res.render("mainHealth");
};

//긴급해요
exports.mainEmergency = (req, res) => {
    res.render("mainEmergency");
};

//rightNow
exports.rightNow = (req, res) => {
    res.render("rightNow");
};
