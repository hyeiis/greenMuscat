const { DataTypes } = require('sequelize')

const Room = (sequelize) => {
  return sequelize.define(
    'ROOM',
    {
      rNo: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      rTitle: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      totalPoint: {
        type: DataTypes.BIGINT(20),
        defaultValue: 0,
      },
      muscatTitle: {
        type: DataTypes.STRING(255),
      },
      muscatLength: {
        type: DataTypes.INTEGER(10),
      },
      notice: {
        type: DataTypes.STRING(255),
      },
    },
    {
      charset: 'utf8', // 한국어 설정
      collate: 'utf8_general_ci', // 한국어 설정
      timestamps: true, // createAt & updateAt 활성화
      freezeTableName: true, // 테이블명 복수화 중지
    }
  )
}
Room.associate = (models) => {
  Room.belongsTo(models.Member, {
    foreignKey: 'member_email',
    sourceKey: 'email',
  })
}
module.exports = Room
