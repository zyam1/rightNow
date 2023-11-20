function post(Sequelize, DataTypes) {
    // sequelize 객체의 define이라는 메소드를 이용해서 모델(테이블)을 정의한다.
    return Sequelize.define(
        'post', // 테이블 이름
        {
      // 모델 정의
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      x_coordinate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      y_coordinate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rotation: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
    },
    {
      // 모델 옵션
      tableName: "post",
      frezzeTableName: true,
      timestamps: false, // createdAt과 updatedAt 컬럼을 사용하지 않음
      
    }
  );


  return Post;

};

module.exports = post;
