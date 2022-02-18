import React from 'react';
import styles from './navbar.module.css';
// function loginWithKakao() {
//     window.Kakao.Auth.login({
//       success: function(authObj) {
//         alert(JSON.stringify(authObj))
//       },
//       fail: function(err) {
//         alert(JSON.stringify(err))
//       },
//     })
//   }
const Navbar = (props) => (
    <header className={styles.navbar}>
            <h1 className={styles.name}>
                ㅇㅅㅎㅂ
            </h1>
            {/* <a id="custom-login-btn" href="javascript:loginWithKakao()">
            <img className={styles.login}
                src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
                width="100"
                alt="카카오 로그인 버튼"
                />
            </a> */}
<script type="text/javascript">
</script>
    </header>
    );

export default Navbar;