import styled from "styled-components";

export const LoginStyle = styled.section`

.container{
    width:100%;
    margin:0 auto;
}
.container-login{
    width:100%;
    min-height:100vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    padding:15px;
    background: transparent;
}
.login{
    width:400px;
    margin-left:50px;
    background:transparent;
}

.login-form{
    width:100%;
}
.titulo-login{
    display:block;
    font-size:2.3rem;
    line-height:1.3;
    text-align:center;
    color:#213550;
}
.w-input{
    width:100%;
    position:relative;
    margin-top:30px;
    margin-bottom:30px;
    border:none;
    border-bottom:2px solid #d9d9d9;
}
.w-input:hover{
    border-bottom:2px solid blue;
}
.input-form{
    font-size:1rem;
    color:#555;
    line-height:1.3;
    display:block;
    width:100%;
    padding: 0 5px;
    border:none;
    outline:0;
}
.login-btn{
    width:100%;
    display:flex;
    justify-content:center
}

.login-form-btn{
    font-size:1rem;
    width:100%;
    height:50px;
    border-radius:20px;
    background:blue;
    color:#fff;
    text-transform:uppercase;
    transition: all 0.5s;
}
.login-form-btn:hover{
    background:#333;
}

.utilidades{
    margin-top: 20px;
    margin-bottom:20px;
}
.text1{
    color:#555;
}
.text2{
    color:blue;
}
img{
    width:300px;
    height:300px;
    margin-left: 50px;
    border-radius:100%;
}
img:hover{
    box-shadow:10px 10px 10px blue;
    transition:.5s;
}

`