const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY
const {Kakao} = window;

export default function initialize() {
  Kakao.init(KAKAO_KEY);
  Kakao.isInitialized();
  console.log(Kakao.isInitialized());
}