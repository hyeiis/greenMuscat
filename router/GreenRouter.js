const express = require('express')
const router = express.Router()
const controller = require('../controller/GreenController')

// 메인 페이지
router.get('/', controller.main)
// 회원가입 (SignUp)
router.get('/signUp', controller.signUp)
router.post('/signUp', controller.postSignup)
// 로그인 (SignIn)
rotuer.get('/signIn', controller.signin)
router.post('/signIn', controller.postSignin)
// 업로드 페이지 (Post)
router.get('/board', controller.board)
router.post('/board', controller.postBoard)
// 마이 페이지 (Profile)
router.get('/profile:id', controller.profile)
// 회원 정보 수정
router.patch('/profile/edit', controller.edit)
// 방 선택 페이지 (Select)
router.get('/select', controller.select)
// 방 메인 페이지 (Room)
router.get('/room:id', controller.room)
// 회원 탈퇴
router.delete('/destroy', controller.destroy)
// 관리자 페이지
router.get('/admin:id', controller.admin)
router.post('/admin:id', controller.postAdmin)

module.exports = router
