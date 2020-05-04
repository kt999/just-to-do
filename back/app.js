const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
require('dotenv').config();


//포트설정
let PORT = process.env.PORT;
if(!PORT){PORT=8080;};

//CORS
const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};
app.use(cors(corsOptions)); // config 추가

//기타모듈
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const logger = require('morgan');
const helmet = require('helmet');
const hpp = require('hpp');
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
if(process.env.NODE_ENV === 'production'){
    // sessionOption.proxy = true; <- 프록시 서버를 사용할경우
    // sessionOption.cookie.secure = true; <- https를 사용할경우
    app.use(logger('combined'));
    //밑에 두개는 보안관련
    app.use(helmet());
    app.use(hpp());
}
else{
    app.use(logger('dev'));
}



/////////////

app.post('/login',(req,res)=>{

    const {email, password} = req.body;

    // const token = req.headers['x-access-token'] || req.query.token;
    // console.log(token);

    if(email == "fox9975"){
        res.json({
            result: "thisisjwttoken",
            isSuccess: true,
            code: 200,
            message: "로그인 성공!."
        })
    }
    else{
        res.json({
            isSuccess: false,
            code: 307,
            message: "login false."
        })
    }
});

///////////////////
http.listen(PORT,()=>{
    console.log(PORT+'번 포트에서 Connected!');
})