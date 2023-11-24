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
exports.DeletePost =async (req, res)=> {
    //데이터 정의
    try{

    } catch(error){
        console.error();
    }
    
}