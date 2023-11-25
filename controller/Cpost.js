const { Post } = require('../model');

//db에 저장
exports.UploadPost =async (req, res)=> {
    //데이터 정의
    try{
        const { x_coordinate,  y_coordinate, image_number, content , size ,rotation} = req.body;

        await Post.create({
            x_coordinate,  y_coordinate, image_number, content , size ,rotation
          });
    } catch(error){
        console.error();
        res.status(500).json({ message: "서버 오류 발생" });
    }
    
}


//보여주기

exports.GetPost = async (req, res) => {
    try {
        // Post 테이블에서 모든 레코드를 조회
        const data = await Post.findAll();

        

        // 조회된 데이터를 클라이언트로 응답
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "서버 오류 발생" });
    }
};





//모두 삭제


exports.truncatePost = async (req, res) => {
    try {
        const password = req.body.password;

        // 안전한 비밀번호 비교를 위해 === 사용
        if (password === "qlalfqjsh732") {
            await Post.destroy({
                truncate: true
            });

            res.status(200).json({ success: true, message: '데이터가 삭제되었습니다.' });
        } else {
            res.status(403).json({ success: false, message: '비밀번호가 올바르지 않습니다.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: '서버 오류' });
    }
};
