/** root reducer */
import { combineReducers } from "redux";
import { depositActiver } from "./depositActive";
import { saver } from "./savingInfo";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from "redux-persist/lib/storage/session";
import { userInfoSaver } from "./userInfo";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["saver", "userInfoSaver"]
  // blacklist -> 그것만 제외합니다
};

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
  depositActiver,
  saver,
  userInfoSaver
});

export default persistReducer(persistConfig, rootReducer);
