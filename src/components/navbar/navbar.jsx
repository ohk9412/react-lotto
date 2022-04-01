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
            <div className={styles.namebox}>
                <h1 className={styles.name}>
                    인 생 한 방
                </h1>
                <h4 className={styles.subname}>로또번호추출기</h4>
            </div>
<script type="text/javascript">
</script>
    </header>
    );

export default Navbar;